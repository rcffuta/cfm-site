"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { authsocket as socket } from "../utils/socket";
import toast from "react-hot-toast";
import { MemberModel } from "../lib/nobox-live/structures/members";
import { MemberObject } from "@codepraycode/rcffuta-lib";
import { AttendeeModel } from "../lib/nobox/structure/attendee";

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

const generateId = (): string => {
    return Math.floor(10000 + Math.random() * 90000).toString();
};

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


        if (socket.connected) {

            toast.loading("Checking you...", toastConfig);
            const storedUser = localStorage.getItem(USER_STORE_ID);
            // Load user from localStorage on mount
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
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
        // socket.emit("register", { username, email });

        const user = await AttendeeModel.findOne({ email })

        
        
        
        // Generate unique AID
        let id: string = "";
        let isUnique = false;

        try {

            while (!isUnique) {
                id = generateId();
                const usr = await AttendeeModel.findOne({ AID: id });
                if (!usr) isUnique = true;
            }
    
            // Register new user
            let user_d = { email, username, AID: id };
            let usd
            if (user) {
                console.log(
                    `[ORACLE] User already exists, signing in: ${email}`
                );
                usd = user;
            } else {
                usd = await AttendeeModel.insertOne(user_d);
            }
    
            
            localStorage.setItem(USER_STORE_ID, JSON.stringify(usd));
            setUser(usd);
            toast.success("Signed In!", toastAuthConfig);
    
        } catch(error: any) {
            toast.error("Error Occurred!", toastAuthConfig);
            console.error("Register error:", error);
        }
        finally {
            setLoading(false)        

        }

    };

    const checkMail = (mail:string) => {

        // toast.error("We're closed!", {id:"closedToast"});


        toast.loading("Checking you...", toastAuthConfig);
        setLoading(true);
        // socket.emit("register:check", mail);

        MemberModel.findOne({ email: mail })
        .then((mem: MemberObject)=>{
            if (!mem) {
                console.error("Error With checking mail", "No Member" );
                toast.error("You're not recognized!", toastAuthConfig);
                return
            }
            toast.success(
                "You're recognized!" + " " + (mem.firstname || ""),
                toastAuthConfig
            );
            setCheckedmail(true);
        }).catch((err: Error)=>{
            console.error("Error With checking mail", err);
            toast.error("Error with signing in");
        }).finally(()=>{
            setLoading(false);
        })
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
