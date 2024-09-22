import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import service from '../appwrite/config'
import { useEffect } from 'react'
import PostForm from '../components/PostForm'
import { NavBar } from '../components/NavBar'
import { Featured } from '../components/Featured'

export default function EditPost() {

  const [post, setPost] = useState(null)
  const { slug } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(post)
        } else {
          navigate("/")
        }
      })
    }

  }, [slug, navigate])



  return (
    <div>
      <NavBar />
      <h1 className=' font-bold text-center pt-16 text-7xl md:text-8xl'>EDIT POSTS</h1>
      <section className="container mx-auto px-6 lg:px-24 py-16 bg-white">
        {post && <PostForm post={post} />}
      </section>
    </div>
  )
}
