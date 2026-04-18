import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function BtnPrimary({ children, icon }) {
    return (
        <button className="flex items-center gap-3 w-fit border border-black rounded-2xl px-5 py-2 hover:-rotate-5 transition-all duration-300">
            <span>{children}</span>
            <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-lg">
                {icon ? icon : <FaArrowRight />}
            </span>
        </button>
    )
}
