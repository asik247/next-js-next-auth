import { connect } from "@/lib/mongodbConnect";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";
export const authOptions = {
    providers: [
        //Todo All Provider here.
        CredentialsProvider({

            name: 'Email & Password',

            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter Your Email" },
                password: { label: "Password", type: "password" },


            },

            async authorize(credentials, req) {

                const { email, password } = credentials;

                const collection = await connect("users");

                const user = await collection.findOne({
                    email: email
                });

                if (!user) {
                    return null;
                }

                const isPasswordOK = await bcrypt.compare(
                    password,
                    user.password
                );

                if (isPasswordOK) {
                    return user;
                }

                return null;
            }
        }),
        //Todo google provider.
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        //Todo Github provider.
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })

    ],



    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log({ user, account, profile });

            const payload = {
                ...user,
                provider: account.provider,
                providerId: account.providerAccountId
            }
            if (!user?.email) {
                return false
            }
            const collection = await connect("users");

            const existingUser = await collection.findOne({
                email: user.email
            })

            if (!existingUser) {
                // return { message: 'already user exist' }
                await collection.insertOne(payload)

            }

            return true
        },

        async session({ session, user, token }) {
            if (token) {
                session.role = token.role,
                    session.createdAt = token.createdAt
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token: user.email,
                    token.role = user.role,
                    token.createdAt = user.createdAt
            }
            return token
        }

    }


}