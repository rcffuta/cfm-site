import Image from "next/image";


interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const featuresdata: featuresdata[] = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Secure storage',
        subheading: 'We lake data security and privacy very seriously',
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'Free to use',
        subheading: 'Top notch crypto portfolio traking at no cost',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Real-time price data',
        subheading: 'Updating 24/7 using price data form the biggest exchanges',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Real-time price data',
        subheading: 'Updating 24/7 using price data form the biggest exchanges',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Real-time price data',
        subheading: 'Updating 24/7 using price data form the biggest exchanges',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Real-time price data',
        subheading: 'Updating 24/7 using price data form the biggest exchanges',
    },
]


export default function Features() {
    return (
        <div
            className="mx-auto max-w-7xl my-0 px-6 relative"
            id="features-section"
        >
            {/* <div className="radial-bg hidden lg:block"></div> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {featuresdata.map((items, i) => (
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
                            xxx
                        </h5>
                        <p className="text-offwhite text-3xl font-normal">
                            Peculiar Generation
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
