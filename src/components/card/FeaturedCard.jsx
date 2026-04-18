import { FaArrowRight } from "react-icons/fa6";

export default function FeaturedCard({ card, index }) {
    return (
        <div
            style={{ borderColor: card.color, bottom: `${(index) * 80}px` }}
            className="relative w-full max-w-sm rounded-[28px] border-4 overflow-hidden bg-black group hover:-rotate-3 transition-all duration-300 ">

            {/* Desktop Image */}
            <img
                src={card.image}
                alt={card.text}
                className="hidden md:block w-full h-[520px] object-cover"
            />

            {/* Mobile Video */}
            <video
                src={card.video}
                autoPlay
                muted
                loop
                playsInline
                className="block md:hidden w-full h-[520px] object-cover"
            />

            {/* Content Box */}
            <div
                className="absolute bottom-6 left-6 right-6 rounded-[22px] p-5 text-white"
                style={{ backgroundColor: card.color }}
            >
                {/* Arrow Button */}
                <button className="absolute top-2 right-2 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-xl">
                    <span className="-rotate-45"> <FaArrowRight /></span>
                </button>

                {/* Text */}
                <h3 className="text-3xl font-bold leading-tight max-w-[260px]">
                    {card.text}
                </h3>

                {/* Button */}
                <button className="mt-5 bg-white/25 px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-md">
                    {card.btn}
                </button>
            </div>
        </div>
    );
}