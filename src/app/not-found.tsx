"use client";

import Link from "next/link";
import SimpleWrapper from "../components/common/SimpleWrapper";

export default function NotFoundPage() {
    return (
        <SimpleWrapper>
            <div className="mx-auto py-24 px-6 pt-80">
                <div className="text-center text-offwhite font-semibold">
                    <h1 className="text-5xl lg:text-5xl mb-6">
                        Page Not Found
                    </h1>

                    <p className="text-4xl font-medium">
                        The page you seek does not exist here.
                        <Link
                            href={"/"}
                            className="text-primary block mt-2 text-[32px]"
                        >
                            Go to home page
                        </Link>
                    </p>
                </div>
                <br />
                <br />
                <br />
            </div>
        </SimpleWrapper>
    );
}
