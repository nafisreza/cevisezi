import React from 'react'
import { Button } from './Button'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const HeroSection = () => {
  const [searchQuery, setSearchQuery]= useState("")
  const navigate = useNavigate()  

  const handleClick = async ()=>{
    if(searchQuery.trim()){
      navigate(`/search?query=${searchQuery}`)
    }
  }



  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-[url("./hero-image.png")]   bg-cover bg-center text-white' >
      <h1 className='text-7xl md:text-8xl font-semibold '>CEVISEZI.RO</h1>
      <p className='text-2xl pb-12 '>Interpretare online de vise</p>
      <img src="" alt="" />
      <div className='container flex  mx-auto px-6 lg:px-24'>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your dream description " required value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
        <Button variant='search' onClick={handleClick}>
          <FaSearch />
        </Button>
      </div>
    </div>
  )
}
