"use client";
import { useAuth } from "@/src/context/AuthContext";

const AttendeePill = () => {
    const {user} = useAuth();

    console.log(user);

    if (!user) return null;

    return (
        <div
            className="fixed top-2 left-2 flex items-center space-x-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 text-white text-sm font-medium shadow-md z-50 atd-pill"
        >
            <span>{user.username}:</span>
            <b className="text-xl text-gradient">{user.AID}</b>
            {/* <span className="bg-white text-blue-600 px-2 py-0.5 rounded-full text-xs font-bold">
                {user.AID}
            </span> */}
        </div>
    );
};

export default AttendeePill;
