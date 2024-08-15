import React from 'react'
import { HeroSection } from '../HeroSection'
import { About } from '../About'
import { MostFrequentDreams } from '../MostFrequentDreams'
import { UserReview } from '../UserReview'
import { FAQ } from '../FAQ'

export const HomePage = () => {
  
  return (
    <>
          <HeroSection/>
      <div className='container mx-auto px-6 lg:px-24 py-16'>
        <About/>
        <MostFrequentDreams/>
        <UserReview />
        <FAQ />
     </div>
    </>
  )
}
