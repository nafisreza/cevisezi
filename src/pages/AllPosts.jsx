import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import service from '../appwrite/config'
import { useEffect } from 'react'
import PostForm from '../components/PostForm'
import { DreamCard } from '../components/DreamCard'


export default function AllPosts() {
  const [ posts, setPosts ] = useState([])
  useEffect(() => {
    service.getPosts([]).then((posts)=>{
      if(posts){
        setPosts(posts.documents)
      }
    })  
    
  }, [])
  

  return (
    <div>
      {
        posts.map((post)=>(
          <div key={post.$id}>
            <DreamCard {...post}/>
          </div>
        ))
      }


    </div>
  )
}
