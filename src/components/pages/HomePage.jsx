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
    <div className='container mx-auto'>
        
     
     <About/>
     <MostFrequentDreams/>
     <UserReview />
     <FAQ />
     
     
     </div>
     </>
  )
}
