"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { authsocket as socket } from "../utils/socket";
import toast from "react-hot-toast";

// Define user type
interface User {
    id: string;
    email: string;
    username: string;
    AID: string;
}

// Define context type
interface AuthContextType {
    user: User | null;
    loading: boolean;
    checkedMail: boolean;
    signIn: (username: string, email:string) => Promise<void>;
    checkMail: (email:string) => void;
    logout: () => void;
}


const USER_STORE_ID = "cfxxmxxuser";

// Create AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);


const toastConfig = { id: "loadindId" };
const toastAuthConfig = { id: "authloadindId" };


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [checkedMail, setCheckedmail] = useState(false);

    useEffect(() => {
        socket.connect();

        

        toast.loading("Checking you...", toastConfig);

        // Load user from localStorage on mount
        const storedUser = localStorage.getItem(USER_STORE_ID);
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
        toast.dismiss(toastConfig.id);

        return () => {
            toast.dismiss(toastConfig.id);
            socket.disconnect();
        };
    }, []);

    useEffect(()=>{
        // Handle authentication success
        socket.on("register:success", (data: User) => {
            toast.success("Signed In!", toastAuthConfig);
            localStorage.setItem(USER_STORE_ID, JSON.stringify(data));
            setUser(data);
            setLoading(false);
        });
    }, []);

    useEffect(()=>{
        // Handle authentication error
        socket.on("register:error", (error) => {
            toast.error("Error Occurred!", toastAuthConfig);
            console.error("Register error:", error);
            setLoading(false);
        });
    }, []);

    useEffect(()=>{
        // Handle authentication error
        socket.on("register:check:error", (msg) => {
            
            toast.error("You're not recognized!" + " " + msg, toastAuthConfig);
            setCheckedmail(false)
            setLoading(false);
        });
    }, []);

    useEffect(()=>{
        // Handle authentication error
        socket.on("register:check:verify", (msg) => {
            
            toast.success("You're recognized!" + " " + (msg.firstname || ""), toastAuthConfig);
            setCheckedmail(true);
            setLoading(false);
        });
    }, []);

    // Function to register user
    const signIn = async (username: string, email: string) => {
        toast.loading("Signin in...", toastAuthConfig);
        setLoading(true);
        socket.emit("register", { username, email });
    };

    const checkMail = (mail:string) => {
        toast.loading("Checking you...", toastAuthConfig);
        setLoading(true);
        socket.emit("register:check", mail);
    }

    // Function to logout
    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, signIn, checkedMail, checkMail, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
