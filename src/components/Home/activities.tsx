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
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Create Account',
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Find your Credit',
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Exchange Currency',
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Exchange Currency',
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },

]

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
                        <div
                            className={`card-bb p-8 mx-auto ${
                                isOdd && isLast
                                    ? "last:col-span-2 last:justify-self-center"
                                    : ""
                            }`.trim()}
                            key={i}
                            data-last={i === workdata.length - 1}
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
                                {items.heading}
                            </h3>
                            <p className="text-base font-normal text-bluish text-center mt-2">
                                {items.subheading}
                            </p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">
                                {items.hiddenpara}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
