"use client";
import { authsocket as socket } from "@/src/utils/socket";
import { Generation } from "@codepraycode/rcffuta-lib";
import Image from "next/image";
import { useEffect, useState } from "react";

interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

type LevelProfile = {
  level: number | string;
  info: Generation,
  total: number
}

type RegisterStat = {
    total: number;
    levels: LevelProfile[];
};

export default function Features() {

    const [stat, setStat] = useState<RegisterStat>({} as RegisterStat);

    useEffect(() => {
        socket.on("stat", (stat: RegisterStat) => {
            // toast.loading("Oracle is preparing", toastconfig);
            console.debug(stat);
            setStat(()=>(stat))
        });

        return () => {
            socket.off("stat");
        };
    }, []);

    useEffect(() => {
        (() => {
            console.debug(stat);
        })();
    }, [stat]);


    const {total=0, levels=[]} = stat;


    return (
        <div
            className="mx-auto max-w-7xl my-0 px-6 relative"
            id="features-section"
        >
            {/* <div className="radial-bg hidden lg:block"></div> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {levels.map((item, i) => {
                    // console.debug(val);
                    return (
                        <div
                            className="bg-blue py-10 pr-12 pl-6 rounded-lg"
                            key={i}
                        >
                            {/* <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                            <Image
                                src={items.imgSrc}
                                alt={items.imgSrc}
                                width={24}
                                height={30}
                            />
                        </div> */}
                            <h5 className="text-offwhite font-medium mb-4 text-8xl text-gradient">
                                {item.total}
                            </h5>
                            <p className="text-offwhite text-3xl font-normal">
                                {item.info.name}
                            </p>
                        </div>
                    );
                })}

                <div className="bg-blue py-10 pr-12 pl-6 rounded-lg">
                    {/* <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                            <Image
                                src={items.imgSrc}
                                alt={items.imgSrc}
                                width={24}
                                height={30}
                            />
                        </div> */}
                    <h5 className="text-offwhite font-medium mb-4 text-8xl text-gradient">
                        {total}
                    </h5>
                    <p className="text-offwhite text-3xl font-normal">
                        Total
                    </p>
                </div>
            </div>
        </div>
    );
};
