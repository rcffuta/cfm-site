import Auth from "../Auth";
import { ArrowDesign } from "../common/ArrowDesign";
import Logo from "../common/Logo";
import Activities from "./activities";


export default function Homepage() {

    return (
        <div className="bg-image relative" id="home-section">
            {/* <div className="arrowOne"></div> */}

            <ArrowDesign k={1} />

            <div className="mx-auto container pt-16 lg:pt-40 sm:pb-24 px-0">
                {/* <div className="height-work"> */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center my-16">
                    {/* <div className="arrowTwo"></div> */}

                    <div className="col-span-7">

                        <div className="text-center">

                            <Logo block />
                        </div>
                        <div className="text-white md:text-lg font-normal mb-10 md:text-start text-center max-w-2xl">
                            <p className="py-4">
                                The Combined Family Meeting is an event where
                                all members of all levels come together as one
                                big family to interact, connect, have fun, and
                                fellowship with one another.
                            </p>
                            <p className="py-7">
                                It&apos;s a meeting that further strengthens the
                                bond and connection between the levels.
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
                        {/* <div className="arrowThree"></div> */}
                        <ArrowDesign k={3} />
                        <ArrowDesign k={4} />
                        <ArrowDesign k={5} />
                        {/* <div className="arrowFour"></div>
                        <div className="arrowFive"></div> */}

                        <Auth />
                        <Activities />
                        <ArrowDesign k={6} />
                        <ArrowDesign k={7} />
                        <ArrowDesign k={8} />
                        {/* <div className="arrowSix"></div>
                        <div className="arrowSeven"></div>
                        <div className="arrowEight"></div> */}
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}