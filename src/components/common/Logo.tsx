import clsx from "clsx";


export default function Logo(props:{block?:boolean, center?: boolean}) {
    return (
        <h1 className={clsx("text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start", {
            "inline-block": props.block,
            "inline" : !props.block,
            "mx-auto": props.center
        })}>
            Combined {props.block && <br />}{" "}<span className="text-gradient">Family Meeting</span>
        </h1>
    );
}
