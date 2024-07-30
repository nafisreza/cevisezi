import React from 'react'
import { Link } from 'react-router-dom'

export const DreamCard = ({src, title, text, href}) => {
  return (
    <div className='border rounded shadow-lg h-[250px] flex my-7'>
      <img className='shadow-lg' src={src} alt="" />
      <div className='p-5 overflow-hidden'>
        <h1 className='text-2xl font-semibold '>{title}</h1>
        <p className=''>{text}</p>
      
        <Link to={href}><p className='text-right mt-3 text-purple-900 hover:text-purple-500 hover:font-semibold transition ease-in-out duration-500' >Read more...</p></Link>
      </div>
    </div>
  )
}
