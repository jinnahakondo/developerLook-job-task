import React from 'react'
import Navbar from './components/Navbar'
import OurImpactSection from './components/OurImpacts'
import FeaturedContentSection from './components/FeaturedContentSection'
import HeroSection from './components/HeroSection'

export default function App() {
  return (
    <div className='w-full min-h-screen bg-[#faf4ec] px-6 container mx-auto space-y-20 pb-20'>
      <Navbar />
      <HeroSection />
      <OurImpactSection />
      <FeaturedContentSection />
    </div>
  )
}
