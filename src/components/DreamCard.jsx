import React from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/config'

export const DreamCard = ({featuredImg, title, text, $id}) => {
  return (
    <Link to={`/posts/${$id}`}>
    <div className='group flex flex-col md:flex-row border rounded shadow-lg md:h-[250px] my-7 hover:scale-105  transition-transform duration-1000'>
      <img className='shadow-lg' src={service.getFilePreview(featuredImg)} alt={title} />
      <div className='p-5 overflow-hidden'>
        <h1 className='text-2xl font-semibold '>{title}</h1>
        <p className=''>{text}</p>
      
        <p className='text-right mt-3 text-purple-900 group-hover:text-purple-500 font-semibold transition ease-in-out duration-1000' >Read more...</p>
      </div>
    </div>
    </Link>
  )
}
