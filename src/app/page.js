import LoginBtn from "@/Components/LoginRelative/LoginBtn";
import UserCard from "@/Components/UsersCards/UserCard";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiAuth0, SiMongodb } from "react-icons/si";
import { authOptions } from "./api/auth/[...nextauth]/route";
import AuthBtns from "@/Components/AuthBtns";

const HomePage =async () => {
  //? Backend Api;
  const session =await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center max-w-2xl px-4">
        {/* Session code here */}
        <UserCard></UserCard>

        {/* Tech Stack Icons */}
        <div className="flex justify-center gap-6 text-6xl mb-8">
          <Link href="https://react.dev" target="_blank">
            <FaReact className="hover:scale-110 duration-300 text-info" />
          </Link>

          <Link href="https://nextjs.org" target="_blank">
            <RiNextjsFill className="hover:scale-110 duration-300" />
          </Link>

          <Link href="https://authjs.dev" target="_blank">
            <SiAuth0 className="hover:scale-110 duration-300 text-warning" />
          </Link>

          <Link href="https://mongodb.com" target="_blank">
            <SiMongodb className="hover:scale-110 duration-300 text-success" />
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">
          Implement Next.js Auth
        </h1>

        {/* Description */}
        <p className="text-lg text-base-content/70 mb-8">
          Secure authentication system built with Next.js, NextAuth,
          MongoDB and modern React technologies.
        </p>

        {/* Buttons */}
        <AuthBtns></AuthBtns>
        
          {/* Backend api */}
          <h1 className="text-2xl font-bold my-4">Backend</h1>
          <h2>{JSON.stringify(session)}</h2>
      </div>

    </div>
  );
};

export default HomePage;