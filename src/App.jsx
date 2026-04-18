import React from 'react'
import Navbar from './components/Navbar'
import OurImpactSection from './components/OurImpacts'
import FeaturedContentSection from './components/FeaturedContentSection'

export default function App() {
  return (
    <div className='w-full min-h-screen bg-[#faf4ec] px-6 container mx-auto space-y-20 py-20'>
      <Navbar />
      <OurImpactSection />
      <FeaturedContentSection />
    </div>
  )
}
