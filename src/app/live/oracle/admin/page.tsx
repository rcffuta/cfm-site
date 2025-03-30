"use client";

import SimpleWrapper from "@/src/components/common/SimpleWrapper";
import { socket } from "@/src/utils/socket";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const toastconfig = {id: "oracleAdminToast"};
export default function Oracle() {

    const [pause, setPause] = useState(false);

    const [level, setLevel] = useState("");
    const [gender, setGender] = useState("");
    
    const handleRoll = () => {
        if (pause) return;

        const filter = {
            level: level.toLowerCase(),
            gender: gender.toLowerCase(),
        }
        
        socket.emit("select", filter);
    }

    const handleReset = () => {
        
        socket.emit("reset");
    }


    useEffect(() => {
        socket.connect();

        if (socket.connected) {
            toast.success("Connected!");
        }

        return () => {
            socket.disconnect();
        };
    }, []);


    useEffect(() => {
        socket.on("preparing", (msg: string) => {
            setPause(true);
            toast.loading("Oracle is preparing", toastconfig);
        });

        return () => {
            socket.off("preparing");
        };
    }, []);

    useEffect(() => {
        socket.on("reset", (msg: string) => {
            toast.success("Oracle is ready", toastconfig);
            setPause(false);
        });

        return () => {
            socket.off("reset");
        };
    }, []);

    useEffect(() => {
        socket.on("selection:error", (msg: string) => {
            toast.error(msg, toastconfig);
            setPause(true);
        });

        return () => {
            socket.off("selection:error");
        };
    }, []);

    useEffect(()=>{
        (()=>{
            console.debug("State:", pause);
        })()
    },[ pause]);

    return (
        <SimpleWrapper>
            <div className="pt-20 text-center text-offwhite font-bold">
                <h1 className="text-6xl lg:text-9xl uppercase text-gradient lg:leading-none">
                    Oracle
                </h1>
                <p className="block text-xl lg:text-3xl">
                    Never forget. Never Bias
                </p>
            </div>
            <div className="py-10"></div>

            <div className="space-y-4 w-fit mx-auto mb-5">
                <div className="flex flex-wrap gap-4">
                    {["100", "200", "300", "400", "500", "All"].map((option) => (
                        <label
                            key={option}
                            className={`relative flex items-center cursor-pointer px-4 py-2 rounded-lg border  text-white ${
                                level === option
                                    ? "bg-gradient-to-r from-[#BD24DF] to-[#2D6ADE]"
                                    : "bg-gray-200 text-gray-700"
                            } transition-all duration-300`}
                        >
                            <input
                                type="radio"
                                name="gradient-radio"
                                value={option}
                                checked={level === option}
                                onChange={() => setLevel(option)}
                                className="sr-only"
                            />
                            <div
                                className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                                    level === option
                                        ? "border-white bg-white"
                                        : "border-gray-500"
                                }`}
                            >
                                {level === option && (
                                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#BD24DF] to-[#2D6ADE] rounded-full"></div>
                                )}
                            </div>
                            <span className="ml-3">{option}</span>
                        </label>
                    ))}
                </div>
            </div>

            <br/>

            <div className="space-y-4 max-w-[50%] w-fit mb-5">
                {/* <label className="block text-white font-medium">
                    Select an Option:
                </label> */}
                <div className="flex space-x-4">
                    {["Male", "Female", "Both"].map((option) => (
                        <label
                            key={option}
                            className={`relative flex items-center cursor-pointer px-4 py-2 rounded-lg border  text-white ${
                                gender === option
                                    ? "bg-gradient-to-r from-[#BD24DF] to-[#2D6ADE]"
                                    : "bg-gray-200 text-gray-700"
                            } transition-all duration-300`}
                        >
                            <input
                                type="radio"
                                name="gradient-radio"
                                value={option}
                                checked={gender === option}
                                onChange={() => setGender(option)}
                                className="sr-only"
                            />
                            <div
                                className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                                    gender === option
                                        ? "border-white bg-white"
                                        : "border-gray-500"
                                }`}
                            >
                                {gender === option && (
                                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#BD24DF] to-[#2D6ADE] rounded-full"></div>
                                )}
                            </div>
                            <span className="ml-3">{option}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="text-center">
                <button
                    onClick={handleRoll}
                    className="navbutton btn-md px-6 py-3 text-lg font-bold text-white rounded-2xl shadow-lg transition-all hover:scale-110"
                    disabled={pause}
                >
                    Roll It
                </button>
                <br />
                <br />
                <button
                    onClick={handleReset}
                    className="navbutton px-6 py-3 btn-md text-lg font-bold text-white rounded-2xl shadow-lg transition-all hover:scale-110"
                    // disabled={pause}
                >
                    Reset
                </button>
            </div>
        </SimpleWrapper>
    );
}
