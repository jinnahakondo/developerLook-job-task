import { useState } from "react";
import logo from "../assets/logo.svg"
import GetResultBtn from "./buttons/GetResultBtn";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div >
            <nav className=" md:px-10 h-30 flex items-center justify-between relative z-50">

                {/* Logo */}
                <a href="/">
                    <img src={logo} alt="" className="h-19 w-36" />
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-2 bg-white backdrop-blur-sm border border-black/10 rounded-2xl p-2">
                    {["Expertises", "Work", "About", "Contact"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="px-3 py-2 text-lg font-semibold text-black hover:bg-black/5 rounded-xl transition-colors duration-150"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <GetResultBtn />
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden flex items-center justify-center w-10 h-10  hover:bg-[#f0b5e0] rounded-lg transition-colors duration-150 ${isOpen ? "bg-white text-black" : "bg-[#fcb8fa]"}`}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <line x1="2" y1="2" x2="16" y2="16" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="16" y1="2" x2="2" y2="16" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <line x1="2" y1="5" x2="16" y2="5" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="2" y1="9" x2="16" y2="9" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="2" y1="13" x2="16" y2="13" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Menu Drawer */}
            <div
                className={`md:hidden rounded-2xl absolute top-0 left-0 m-3 right-0 z-40 bg-[#fcb8fa] overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "h-[calc(100vh-24px)] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 pt-4 pb-6 flex flex-col items-center justify-center gap-2 h-full">
                    {["Expertises", "Work", "About", "Contact"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="px-5 py-3 rounded-lg bg-white font-semibold text-lg transition-colors duration-150 border-b border-black/5 last:border-0"
                        >
                            {item}
                        </a>
                    ))}

                    <div className="absolute bottom-5">
                        <GetResultBtn isOpen={isOpen} />
                    </div>
                </div>
            </div>
        </div>
    );
}