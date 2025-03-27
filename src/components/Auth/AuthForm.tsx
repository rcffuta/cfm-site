"use client";

import { useState } from "react";
type FormError = { email: string; username: string };
type InputFieldProps = {
    type?: string;
    placeholder: string;
    error?: string;
    onChange:(val:string)=>void;
    disabled?: boolean
}

function InputField(props: InputFieldProps) {
    const {type="text", placeholder, error, disabled} = props;

    return (
        <div className="mb-[30px]">
            <input
                placeholder={placeholder}
                className="w-full rounded-md border border-white border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
                type={type}
                disabled={disabled}
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
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState<string | null>(null);
    const [error, setError] = useState<FormError>({} as FormError);



    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        if (username === null) {
            const user = await validateEmail(email);

            setUsername(()=>"");
            setError((p)=>{
                return {
                    ...p,
                    email: "Not Done yet"
                }
            })

            return;
        }

        await wait(5);
        setError((p) => {
            return {
                ...p,
                username: "Not Done yet",
            };
        });


    }



    return (
        <form onSubmit={handleSubmit}>
            <InputField
                placeholder="Enter your indexed email address"
                // error=""
                type="email"
                onChange={(val) => setEmail(val)}
                disabled={username !== null}
                error={error.email}
            />

            {username === null ? null : (
                <InputField
                    placeholder="Set a username"
                    // type="text"
                    onChange={(val) => setUsername(val)}
                    error={error.username}
                />
            )}

            <div className="mb-9">
                <button
                    type="submit"
                    className="bg-primary w-full py-3 rounded-lg text-lg text-white font-medium border border-primary hover:text-primary hover:bg-transparent"
                >
                    Sign In
                </button>
            </div>
        </form>
    );
}