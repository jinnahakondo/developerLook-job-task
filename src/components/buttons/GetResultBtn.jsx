import React from 'react'

export default function GetResultBtn({ isOpen }) {
    return (
        <a
            href="#"
            className={`text-xl flex items-center gap-2 hover:bg-[#f0b5e0] font-semibold py-3 px-5 rounded-xl transition-colors duration-150 ${isOpen ? "bg-black text-white" : "bg-[#fcb8fa]"}`}
        >
            Get Results
            <span className=" font-semibold bg-white p-1 rounded-lg">🔥</span>
        </a>
    )
}
