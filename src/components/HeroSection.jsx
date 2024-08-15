import React from 'react'
import { Button } from './Button'
import { FaSearch } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-[url("./public/assets/hero-image.png")]   bg-cover bg-center text-white' >  
    <h1 className='text-7xl md:text-8xl font-semibold '>CEVISEZI.RO</h1>
    <p className='text-2xl pb-12 '>Interpretare online de vise</p>
    <img src="" alt="" />
    <div className='container flex  mx-auto px-6 lg:px-24'>
        <input type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Enter your dream description " required />
        <Button variant='search' >
            <FaSearch />
        </Button>
    </div>
    </div> 
  )
}
