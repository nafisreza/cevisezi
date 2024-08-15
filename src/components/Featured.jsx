
import React from 'react'
import { NavBar } from './NavBar'


export const Featured = ({url, title}) => {
  return (
    <>
      <div className={`${url} h-screen bg-center flex justify-center items-center bg-no-repeat bg-cover`}>     
        
        <h1 className='text-white font-bold text-7xl md:text-8xl'> {title}</h1>
        
        
      </div>
      
    </>
  )
}
