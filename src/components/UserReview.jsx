import React from 'react'
import { ReviewCard } from './ReviewCard'

export const UserReview = () => {
  return (
    <div className='py-7'>
    <h1 className='text-5xl font-semibold py-3'>User review</h1>

    <div className='flex  justify-between flex-wrap'>

      <ReviewCard name="John" title="Good title" date="12.07.24" review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi laborum harum necessitatibus, magni corrupti earum culpa ."/>

      <ReviewCard name="John" title="Good title" date="12.07.24" review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi laborum harum necessitatibus, magni corrupti earum culpa ."/>

      <ReviewCard name="John" title="Good title" date="12.07.24" review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi laborum harum necessitatibus, magni corrupti earum culpa ."/>

      <ReviewCard name="John" title="Good title" date="12.07.24" review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi laborum harum necessitatibus, magni corrupti earum culpa ."/>

      <ReviewCard name="John" title="Good title" date="12.07.24" review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi laborum harum necessitatibus, magni corrupti earum culpa ."/>

      <ReviewCard name="John" title="Good title" date="12.07.24" review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi laborum harum necessitatibus, magni corrupti earum culpa ."/>
      
    </div>
    </div>
  )
}
