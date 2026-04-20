import React from 'react'
import BtnPrimary from './buttons/BtnPrimary'
import FeaturedCard from './card/FeaturedCard'

const data = [
    {
        color: "#FA5424",
        text: "Van nul naar vol, binnen 3 weken",
        btn: "Bullit",
        image: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69c3d06cc7a0b07e150a671d_Bullit%20branded%20placeholder_2.1.1.avif",
        video: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4"
    },
    {
        color: "#0D8DFF",
        text: "Zacht in smaak, sterk in beeld",
        btn: "Roasta",
        image: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716a54a3bf63bf25c2ae92_roasta-placeholder.avif",
        video: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4"
    },
    {
        color: "#33C791",
        text: "Content die écht smaakt (en raakt)",
        btn: "Loco",
        image: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716b4e8982337b1d3d1bd7_loco-loco-placeholder.avif",
        video: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4"
    },
]

export default function FeaturedContentSection() {

    return (
        <div className=''>

            <div className='max-w-3xl flex flex-col gap-6 lg:mx-30 mb-20'>
                <h2 className='text-5xl lg:text-9xl font-bold'>Content <br /> dat scoort.</h2>

                <p className="text-xl lg:text-3xl">Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.</p>

                <BtnPrimary>Bekijk al ons werk</BtnPrimary>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3  gap-26'>
                {data.map((card, index) => <FeaturedCard key={index} card={card} index={index} />)}
            </div>
        </div>
    )
}
