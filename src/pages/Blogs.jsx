import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import service from '../appwrite/config'
import { useEffect } from 'react'
import PostForm from '../components/PostForm'
import { DreamCard } from '../components/DreamCard'
import { Link } from 'react-router-dom'


export default function Blogs() {
  const [ posts, setPosts ] = useState([])
  useEffect(() => {
    service.getPosts([]).then((posts)=>{
      if(posts){
        setPosts(posts.documents)
      }
    })  
    
  }, [])


  if(posts.length==0){
    return(
      <div>
        <h1>No dreams for you!</h1>
      </div>
    )
  }
  

  return (
    <div className='container mx-auto py-8'>
      {
        posts.map((post)=>(
          <Link to={`/post/${post?.$id}`} key={post?.$id} className='w-full p-4'>
            <h1 className='font-bold text-[16px]'>{post?.title}</h1>
            <img src={post?.imageUrl} alt={post?.title} className='h-32' />
          </Link>
        ))
      }


    </div>
  )
}
