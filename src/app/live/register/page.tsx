import Logo from "@/src/components/common/Logo";
import SimpleWrapper from "@/src/components/common/SimpleWrapper";
import Features from "@/src/components/Registration/stats";


export default function LiveRegistrationStat() {
    return (
        <SimpleWrapper>
            <div className="mx-auto py-24 px-6">
                <div className="text-center text-offwhite font-semibold mx-auto">
                    <Logo/>

                    <p className="text-4xl font-medium">Level registration Statistics</p>
                </div>
                <br />
                <br />
                <br />
                <Features />
            </div>
        </SimpleWrapper>
    );
}
