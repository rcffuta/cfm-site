"use client";

import { useAuth } from "@/src/context/AuthContext";
import { useState } from "react";
type FormError = { email: string; username: string };
type InputFieldProps = {
    type?: string;
    placeholder: string;
    error?: string;
    onChange:(val:string)=>void;
    disabled?: boolean;
    autoFocus?: boolean;
}

function InputField(props: InputFieldProps) {
    const {type="text", placeholder, error, disabled, onChange} = props;

    return (
        <div className="mb-[30px]">
            <input
                placeholder={placeholder}
                className="w-full rounded-md border border-white border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
                type={type}
                disabled={disabled}
                onChange={(e)=>onChange(e.target.value)}
                autoFocus={props.autoFocus}
            />
            {error && <p className="form-error mt-1 font-medium">
                {error}
            </p>}
        </div>
    );
}


function wait(time:number) {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(null)
        }, time * 1000)
    })
}

async function validateEmail(email: string) {
    await wait(5);

    return true; // shold be user object
}

export function SignInForm() {
    const { user, signIn, checkMail, checkedMail, loading } = useAuth();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState<string>("");
    const [error, setError] = useState<FormError>({} as FormError);



    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        if (!checkedMail) {
            console.debug(email)
            checkMail(email);
            return;
        }

        signIn(username, email);


    }



    return (
        <form onSubmit={handleSubmit}>
            <InputField
                placeholder="Enter your indexed email address"
                // error=""
                type="email"
                onChange={(val) => {
                    // if (checkedMail) return
                    setEmail(val)}
                }
                disabled={checkedMail}
                autoFocus={!checkedMail}
                error={error.email}
            />

            {checkedMail && (
                <InputField
                    placeholder="Set a username"
                    // type="text"
                    onChange={(val) => setUsername(val)}
                    error={error.username}
                    autoFocus={checkedMail}
                />
            )}

            <div className="mb-9">
                <button
                    type="submit"
                    className="bg-primary w-full py-3 rounded-lg text-lg text-white font-medium border border-primary hover:text-primary hover:bg-transparent"
                    disabled={loading}
                >
                    {loading ? "Loading..." : (checkedMail ? "Continue" : "Sign In")}
                </button>
            </div>
        </form>
    );
}