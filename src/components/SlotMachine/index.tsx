"use client";
import { useEffect, useId, useRef, useState } from "react";
import "../../styles/oracle.scss";
// import Button from "./Button";
import {
    generateRandomValue,
    getDigitAtIndex,
    getRandomRaffle,
} from "./utils";
import { socket } from "@/src/utils/socket";
import toast from "react-hot-toast";

interface SlotItemProps {
    delay: number;
    chosen: number | null;
}



const toastconfig = {id:"oracleToast"};

let timerId: NodeJS.Timeout;


const SlotItem = (props: SlotItemProps) => {
    const [randomValue, setRandomValue] = useState<number | null>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        // Set the random value in state

        if (props.chosen === null) {
            setRandomValue(null);
            return;
        }

        if (randomValue !== null) {
            return;
        }

        // console.log(props.delay)

        setTimeout(() => {
            setRandomValue(props.chosen);
            // setStop((p)=>!p)
        }, props.delay * 1000);
    }, [props.chosen, props.delay, randomValue]);

    const stop = randomValue !== null;
    const chosenValue = randomValue;
    const onReset = props.chosen !== null;

    // console.log(`
    //     Delayed: ${props.delay}
    //     Stop: ${stop}
    //     value: ${chosenValue}
    //     given: ${props.chosen}
    // `)

    return (
        <div
            className={"slot-reel" + " " + (onReset ? "rolling" : "")}
            data-stop={stop}
        >
            {onReset ? (
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => {
                    return (
                        <span key={i} data-chosen={item === chosenValue}>
                            {item}
                        </span>
                    );
                })
            ) : (
                <span data-static>?</span>
            )}
        </div>
    );
};

const SlotMachine = () => {
    const [value, setValue] = useState<number | null>(null);

    const timer_0 = generateRandomValue() + generateRandomValue();
    const timer_1 = generateRandomValue() + generateRandomValue();
    const timer_2 = generateRandomValue() + generateRandomValue();
    const timer_3 = generateRandomValue() + generateRandomValue();
    const timer_4 = generateRandomValue() + generateRandomValue();

    const maxTimer = Math.max(timer_0, timer_1, timer_2, timer_3, timer_4);
    const socketRef = useRef<string>(null);

    const [info, setInfo] = useState<any>(null);

    const getWinner = async () => {
        const _all = [] as any[];//await AttendantModel.find({});

        const non_100 = _all.filter((e) => e.level !== "100");
        const raffle_ids = non_100.map((e) => e.raffleId as string);

        // console.log(raffle_ids)
        const _value = getRandomRaffle(raffle_ids);
        return _value;
    };



    useEffect(() => {
        socket.connect();

        if (socket.connected) {
            toast.success("Connected!");
        }


        return () => {
            socket.disconnect();
        };
    }, []);


    useEffect(() => {
        socket.on("selection:details:show", (user: string) => {
            setInfo(()=>user);
        });

        return () => {
            socket.off("selection:details:show");
        };
    }, []);

    useEffect(() => {
        socket.on("preparing", (msg: string) => {
            toast.loading("loading", toastconfig);
            setValue(null)
            setInfo(null);
        });

        return () => {
            socket.off("preparing");
        };
    }, []);

    useEffect(() => {
        socket.on("reset", (msg: string) => {
            console.debug("Reset!");
            setValue(null)
            setInfo(null);
        });

        return () => {
            socket.off("reset");
        };
    }, []);

    useEffect(() => {
        socket.on("selection", (msg: string) => {
            toast.success("Ready!", toastconfig);
            const val = Number(msg);

            if (!Boolean(val)) return console.debug("Invalid!", val);
            setValue(()=>val);

        });

        return () => {
            socket.off("selection");
        };
    }, []);

    useEffect(() => {
        socket.on("selection:error", (msg: string) => {
            toast.error(msg, toastconfig);
        });

        return () => {
            socket.off("selection:error");
        };
    }, []);


    // useEffect(() => {
    //     (()=>{

    //         if (!value) return;

    //         if (timerId) return;

    //         console.debug("waiting", maxTimer)

            
    //         timerId = setTimeout(()=>{
    //             console.debug("Show Person!")
    //         }, (maxTimer * 2) * 1000)
    //     })()
    // }, [maxTimer, value]);



    const resetValue = () => {
        setValue(() => null);
    };

    

    return (
        <>
            <div className="slot-machine">
                <SlotItem
                    chosen={getDigitAtIndex(value, 0)}
                    delay={timer_0}
                    key={useId()}
                />

                <SlotItem
                    chosen={getDigitAtIndex(value, 1)}
                    delay={timer_1}
                    key={useId()}
                />

                <SlotItem
                    chosen={getDigitAtIndex(value, 2)}
                    delay={timer_2}
                    key={useId()}
                />

                <SlotItem
                    chosen={getDigitAtIndex(value, 3)}
                    delay={timer_3}
                    key={useId()}
                />

                <SlotItem
                    chosen={getDigitAtIndex(value, 4)}
                    delay={timer_4}
                    key={useId()}
                />
            </div>


            {
                info && (
                    <MemberDisplay name={info.firstname + " " + info.lastname}/>
                )
            }


        </>
    );
};


const MemberDisplay = (props: {name:string}) => {
    return (
        <div className="mem-dis-modal">
            <div className="bg-blue py-10 rounded-lg mem-item">
                {/* <div className="img-wrapper rounded-full gg h-40 w-40 flex items-center justify-center mb-10">
                    <Image
                        src={"/images/Features/featureOne.svg"}
                        alt={"Family Name"}
                        width={40}
                        height={40}
                    />
                </div> */}
                <br />
                <br />
                <h5 className="text-offwhite text-7xl font-semibold mb-4">
                    {props.name}
                </h5>
                {/* <p className="text-lightblue text-4xl font-normal text-center">
                    400 Level <br/> Bible Study Unit
                </p> */}
            </div>
        </div>
    );
}

export default SlotMachine;
