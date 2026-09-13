'use server'

import { connect } from "@/lib/mongodbConnect";
const bcrypt = require('bcrypt');
export const postUser = async (payload) => {

    const usersCollection = await connect("users");

    const existingUser = await usersCollection.findOne({
        email: payload.email,
    });

    if (existingUser) {
        return {
            success: false,
            message: "User already exists",
        };
    }
    const hasPassword = await bcrypt.hash(payload.password, 10)
    
    const newUser = {
        ...payload,
        role: "user",
        password: hasPassword,
        createdAt: new Date().toISOString(),
    };



    const result = await usersCollection.insertOne(newUser);



    if (result.acknowledged) {
        return {
            success: true,
            message: `User successfully posted ${result.insertedId.toString()}`,
        };
    }
};