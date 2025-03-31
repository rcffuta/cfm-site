"use client";
import Image from "next/image";
import Link from "next/link";
import { SignInForm } from "./AuthForm";
import { useAuth } from "@/src/context/AuthContext";

export default function Auth() {
    const { user } = useAuth();

    if (user) return null;
    return (
        <div className="relative mx-auto w-full max-w-md rounded-lg px-8 pt-14 pb-8 text-center bg-simple-bg backdrop-blur-md">
            <div className="mb-10 text-center mx-auto max-w-[200px]">
                <div className="inline-block ">
                    <Link href="/">
                        <Image
                            alt="logo"
                            loading="lazy"
                            width="160"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{
                                color: "transparent",
                                width: "auto",
                                height: "auto",
                            }}
                            src="/images/Logo/logo.png"
                        />
                    </Link>
                </div>
                <p className="text-primary text-lg mt-5">
                    Sign in to participate
                </p>
            </div>

            <SignInForm />

            {/* <a
                className="mb-2 inline-block text-base text-dark hover:text-primary text-white dark:hover:text-primary"
                href="/forgot-password"
            >
                Forgot Password?
            </a> */}
            {/* <p className="text-body-secondary text-white text-base">
                Not registered?{" "}
                <Link
                    className="text-primary hover:underline"
                    href="https://ict.rcffuta.com/register"
                    target="_blank"
                >
                    Register
                </Link>
            </p> */}
        </div>
    );
}
