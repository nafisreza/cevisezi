import React from 'react'
import PostForm from '../components/PostForm'
import { NavBar } from '../components/NavBar'
import { Featured } from '../components/Featured'

export default function AddPost() {
  return (
    <div>
      <NavBar/>
      <h1 className=' font-bold text-center pt-16 text-7xl md:text-8xl'>CREATE POSTS</h1>
      <section className="container mx-auto px-6 lg:px-24 py-16 bg-white">
      <PostForm/>
      </section>
    </div>
  )
}
