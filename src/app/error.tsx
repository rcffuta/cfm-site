/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";

export default function ErrorPage(props:{error: VoidFunction, reset: VoidFunction}) {


    useEffect(()=>{
        console.error(props.error);
    },[])
    
    return (
        <div className="bg-simple-bg relative live-registration-stats">
            <div className="simpleone"></div>
            <div className="simpletwo"></div>
            <div className="simplethree"></div>
            <div className="simplefour"></div>
            <div className="simplefive"></div>
            <div className="mx-auto py-24 px-6 pt-80">
                <div className="text-center text-offwhite font-semibold">
                    <h1 className="text-5xl lg:text-5xl mb-6">
                        An Error Occurred
                    </h1>

                    <p className="text-4xl font-medium">
                        We&apos;re on it
                    </p>
                </div>
                <br />
                <br />
                <br />
            </div>
            <div className="simplesix"></div>
            <div className="simpleseven"></div>
            <div className="simpleeight"></div>
            <div className="simplenine"></div>
            <div className="simpleten"></div>
        </div>
    );
}
