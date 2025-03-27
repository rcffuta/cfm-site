import { Features2 } from "@/src/components/Features";


export default function LiveRegistrationStat() {
    return (
        <div className="bg-simple-bg relative live-registration-stats">
            <div className="simpleone"></div>
            <div className="simpletwo"></div>
            <div className="simplethree"></div>
            <div className="simplefour"></div>
            <div className="simplefive"></div>
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
                <Features2 />
            </div>
            <div className="simplesix"></div>
            <div className="simpleseven"></div>
            <div className="simpleeight"></div>
            <div className="simplenine"></div>
            <div className="simpleten"></div>
        </div>
    );
}
