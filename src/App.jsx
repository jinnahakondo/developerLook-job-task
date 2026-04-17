import React from 'react'
import Navbar from './components/Navbar'
import OurImpactSection from './components/OurImpacts'

export default function App() {
  return (
    <div className='w-full min-h-screen bg-[#faf4ec] px-6 container mx-auto'>
      <Navbar />
      <OurImpactSection />
    </div>
  )
}
