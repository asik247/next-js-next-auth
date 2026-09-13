"use client"
import Link from 'next/link';
import React from 'react';
import LoginBtn from './LoginRelative/LoginBtn';
import { signOut, useSession } from 'next-auth/react';

const AuthBtns = () => {
    const session = useSession();
    // console.log(session);

    return (
        <div className="flex justify-center gap-4">
            {
                session.status == 'authenticated' ? <button onClick={()=>signOut()} className='btn text-black cursor-pointer bg-amber-300 p-4 rounded-2xl'>LogOut</button> : <>
                    <Link  href="/register" className="btn bg-green-500 p-3 rounded-xl">
                        Register
                    </Link>
                    <LoginBtn></LoginBtn>
                </>
            }

        </div>
    );
};

export default AuthBtns;