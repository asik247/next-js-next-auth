'use client'

import { useSession } from "next-auth/react";

const UserCard = () => {
    const session = useSession();
    console.log(session);
    return (
        <div className="my-10">
            <h1 className="text-2xl font-bold my-4">Forntend</h1>
            <h2>{JSON.stringify(session)}</h2>
        </div>
    );
};

export default UserCard;