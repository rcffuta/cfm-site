"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Auth from '../Auth';
import Work, { Activities } from '../Work';
import Companies from "../Companies";


const Banner = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="bg-image relative" id="home-section">
            <div className="arrowOne"></div>
            {/* <div className="radial-banner hidden lg:block"></div> */}
            {/* <ModalVideo channel='youtube' isOpen={isOpen} videoId="1YyAzVmP9xQ" onClose={() => setOpen(false)} /> */}

            <div className="mx-auto container pt-16 lg:pt-40 sm:pb-24 px-0">
                {/* <div className="height-work"> */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center my-16">
                    {/* <div className="arrowTwo"></div> */}

                    <div className="col-span-7">
                        <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                            Combined <br /> Family Meeting
                        </h1>
                        <div className="text-white md:text-lg font-normal mb-10 md:text-start text-center max-w-2xl">
                            <p className="py-4">
                                The Combined Family Meeting is an event where
                                all members of all levels come together as one
                                big family to interact, connect, have fun, and
                                fellowship with one another.
                            </p>
                            <p className="py-7">
                                It’s a meeting that further strengthens the bond
                                and connection between the levels.
                            </p>
                            <p>
                                Fondly called CFM, it is a highly anticipated
                                event in RCF-FUTA, known for its incredible
                                atmosphere of love.
                            </p>
                        </div>

                        {/* <Companies /> */}
                    </div>

                    <div className="col-span-5 lg:-m-48">
                        <div className="arrowThree"></div>
                        <div className="arrowFour"></div>
                        <div className="arrowFive"></div>
                        {/* <Image
                                src="/images/Banner/banner.png"
                                alt="nothing"
                                width={1013}
                                height={760}
                            /> */}
                        {/* <Auth /> */}
                        <Activities />
                        <div className="arrowSix"></div>
                        <div className="arrowSeven"></div>
                        <div className="arrowEight"></div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Banner;
