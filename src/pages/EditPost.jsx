import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import service from '../appwrite/config'
import { useEffect } from 'react'
import PostForm from '../components/PostForm'


export default function EditPost() {

  const [post, setPost] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if(slug) {
      service.getPost(slug).then((post)=>{
        if(post){
          setPost(post)
        }else{
          navigate("/")
        }
      })
    }
    
  }, [slug, navigate])
  


  return (
    <div>
     {post && <PostForm post={post} />}

    </div>
  )
}
