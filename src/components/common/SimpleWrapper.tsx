import { PropsWithChildren } from "react";
import { ArrowDesign } from "./ArrowDesign";

export default function SimpleWrapper(props: PropsWithChildren) {
    return (
        <section className="bg-simple-bg relative live-registration-stats">

            <ArrowDesign k={1} simple />
            <ArrowDesign k={2} simple />
            <ArrowDesign k={3} simple />
            <ArrowDesign k={4} simple />
            <ArrowDesign k={5} simple />

            {props.children}
            <ArrowDesign k={6} simple />
            <ArrowDesign k={7} simple />
            <ArrowDesign k={8} simple />
            <ArrowDesign k={9} simple />
            <ArrowDesign k={10} simple />
            
        </section>
    );
}