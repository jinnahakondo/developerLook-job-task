import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import BtnPrimary from "./buttons/BtnPrimary";

export default function OurImpactSection() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                {/* Heading */}
                <h2 className="text-3xl lg:text-7xl leading-none tracking-normal lg:col-start-2 lg:col-end-12 font-bold">
                    Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
                </h2>

                {/* Image & video */}
                <div className="lg:col-start-1 lg:col-end-4 self-center justify-self-center">
                    {/* image */}
                    <div className="hidden lg:block w-full h-full">
                        <img
                            src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
                            alt=""
                            className="h-full w-full rounded-2xl object-cover"
                        />
                    </div>
                    {/* video  */}
                    <div className="w-full h-full lg:hidden">
                        <video
                            src="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4"
                            className="h-94 w-70 rounded-2xl object-cover rotate-3"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="lg:col-start-5 lg:col-end-10 self-end">
                    <div className="flex flex-col gap-6">

                        <p className="font-bold text-base lg:text-3xl leading-snug">
                            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
                            Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
                            Nooit meer content zonder resultaat.
                        </p>

                        <BtnPrimary>Leer ons kennen</BtnPrimary>

                    </div>
                </div>

                {/* Arrow */}
                <div className="hidden lg:block relative lg:col-start-11 lg:col-end-12">
                    <button className="h-12 w-12 grid place-items-center rounded-lg border absolute bottom-0 right-0">
                        <span className="text-[#FA5424]">
                            <FaArrowDown />
                        </span>
                    </button>
                </div>

            </div>
        </section>
    );
}