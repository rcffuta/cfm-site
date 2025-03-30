import SimpleWrapper from "@/src/components/common/SimpleWrapper";
import SlotMachine from "@/src/components/SlotMachine";

export default function Oracle() {
    
    return (
        <SimpleWrapper>
            <div className="pt-20 text-center text-offwhite font-bold">
                <h1 className="text-6xl lg:text-9xl uppercase text-gradient lg:leading-none">
                    Oracle
                </h1>
                <p className="block text-xl lg:text-3xl">
                    Never forget. Never Bias
                </p>
            </div>
            <div className="py-20"></div>
            <SlotMachine />
        </SimpleWrapper>
    );
}