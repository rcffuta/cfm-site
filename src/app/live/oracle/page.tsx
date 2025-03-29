import SimpleWrapper from "@/src/components/common/SimpleWrapper";
import SlotMachine from "@/src/components/SlotMachine";

export default function Oracle() {
    return (
        <SimpleWrapper>
            <div className="pt-32 text-center text-offwhite font-bold">
                <h1 className="text-9xl uppercase">Oracle</h1>
                <br/>
                <p className="pt-10 block text-3xl">Never forget. Never Bias</p>
            </div>
            <div className="py-20"></div>
            <SlotMachine />
        </SimpleWrapper>
    );
}