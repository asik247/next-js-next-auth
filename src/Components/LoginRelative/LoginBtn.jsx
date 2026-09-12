'use client'
import React from 'react';
import { signIn } from "next-auth/react"
const LoginBtn = () => {
    return <button onClick={signIn} className='btn btn-secondarhy'>LogIn Now</button>
};

export default LoginBtn;