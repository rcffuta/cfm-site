"use client"
import { useAuth } from '@/src/context/AuthContext';
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: "/images/Work/icon-one.svg",
        heading: '🎮 Inter-Level Game Session: "The Oracle’s Call"',
        subheading:
            "An in-person game session where the Oracle has the power to summon any player from all levels into the game! Be ready—The Oracle can call you at any time! 🔥",
        hiddenpara: "",
    },
    {
        imgSrc: "/images/Work/icon-two.svg",
        heading: "🔥 Accort: The Quiz Showdown",
        subheading:
            "A fast-paced, high-energy quiz game where students from 100, 200, 300, 400, and 500 levels compete in a Kahoot-style battle! Be ready, or risk losing points for your level!",
        hiddenpara:
            "standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...",
    },
    {
        imgSrc: "/images/Work/icon-three.svg",
        heading: "🍽️ Inter-Level Cooking Competition Overview",
        subheading:
            "The Inter-Level Cooking Competition is a fun, engaging, and competitive session between 100, 200, 300, 400, and 500 level.",
        hiddenpara: "",
    },
    {
        imgSrc: "/images/Work/icon-three.svg",
        heading: '🎭 Inter-Level Variety Session: "The Oracle’s Arena"',
        subheading:
            "An exciting variety session where The Oracle controls the game, summoning students from all levels to participate in different challenges! 🚀",
        hiddenpara: "",
    },
];

export default function Activities() {
    const { user } = useAuth();

    if (!user) return null;
    return (
        <div className="container mx-auto act-wrapper">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                {workdata.map((items, i) => {
                    const isOdd = workdata.length % 2 !== 0;
                    const isLast = workdata.length - 1 === i;


                    return (
                        <ActivityItem isLast={isOdd && isLast} subtitle={items.subheading} title={items.heading} key={i}/>
                    )
                })}
            </div>
        </div>
    );
};


function ActivityItem(props:{isLast?:boolean; title:string; subtitle:string}) {
    return (
        <div
            className={`card-bb p-8 mx-auto ${
                props.isLast
                    ? "last:col-span-2 last:justify-self-center"
                    : ""
            }`.trim()}
            data-last={props.isLast}
        >
            {/* <div className="work-img-bg rounded-full flex justify-center absolute p-6">
                                    <Image
                                        src={items.imgSrc}
                                        alt={items.imgSrc}
                                        width={44}
                                        height={44}
                                    />
                                </div> */}
            <div>
                <Image
                    src={"/images/Work/bg-arrow.svg"}
                    alt="arrow-bg"
                    width={85}
                    height={35}
                />
            </div>
            <h3 className="text-2xl text-offwhite font-semibold text-center mt-8">
                {props.title}
            </h3>
            <p className="text-base font-normal text-bluish text-center mt-2">
                {props.subtitle}
            </p>
            {/* <span className="text-base font-normal m-0 text-bluish text-center hides">
                {items.hiddenpara}
            </span> */}
        </div>
    );
}