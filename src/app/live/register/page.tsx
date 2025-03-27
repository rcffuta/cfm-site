import SimpleWrapper from "@/src/components/common/SimpleWrapper";
import Features from "@/src/components/Registration/stats";


export default function LiveRegistrationStat() {
    return (
        <SimpleWrapper>
            <div className="mx-auto py-24 px-6">
                <div className="text-center text-offwhite font-semibold">
                    <h1 className="text-5xl lg:text-5xl mb-6">
                        Combined Family Meeting
                    </h1>

                    <p className="text-4xl font-medium">Participants Stats</p>
                </div>
                <br />
                <br />
                <br />
                <Features />
            </div>
        </SimpleWrapper>
    );
}
