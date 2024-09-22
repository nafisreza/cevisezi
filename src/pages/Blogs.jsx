import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import service from '../appwrite/config'
import { useEffect } from 'react'
import PostForm from '../components/PostForm'
import { DreamCard } from '../components/DreamCard'
import { Link } from 'react-router-dom'
import { Featured } from '../components/Featured'


export default function Blogs() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })

  }, [])


  if (posts.length == 0) {
    return (
      <div>
        <h1>No dreams for you!</h1>
      </div>
    )
  }


  return (
    <>
      <Featured title="TOATE INTERPRETARILE" url='bg-[url("./blogs.png")]' />

      <section className="container mx-auto px-6 lg:px-24 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((post, index) => (
            <Link
              to={`/post/${post?.$id}`}
              key={post?.$id}
              className={`flex flex-col w-full h-[284px] border rounded shadow-lg hover:scale-105  transition-transform duration-1000  ${index === 0 ? 'md:col-span-2 md:row-span-2 md:h-[600px]' : ''
                }`}
            >
              
              
                <img
                  src={post?.imageUrl}
                  alt={post?.title}
                  className={`w-full h-full rounded-t overflow-hidden object-cover  ${index === 0 ? 'h-full' : 'h-32'}`}
                />
              

              <div className='flex flex-col text-center justify-around h-[70px] '>
                <h1 className={`font-bold text-[16px] ${index === 0 ? 'text-[24px]' : ''}`}>
                  {post?.title}
                </h1>
              </div>
              
            </Link>
          ))}
        </div>
      </section>
    </>

  )
}
