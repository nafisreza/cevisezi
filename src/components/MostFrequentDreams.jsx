import React, { useEffect } from 'react'
import { DreamCard } from './DreamCard'
import service from '../appwrite/config';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const MostFrequentDreams = () => {
  const [posts, setPosts] = useState([]);

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  


  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])
  
  return (
    <div className='py-7 '>
        <h1 className='text-5xl font-semibold uppercase py-3 mb-7'>Cele mai frecvente visuri</h1>

        {
          posts && (<div>
            {shuffleArray(posts).slice(0, 6).map((post) => (
              <Link
                to={`/interpretare-vise/${post?.slug}`}
                key={post?.$id}
                // className="flex flex-col w-full h-[284px] border rounded shadow-lg hover:scale-105 transition-transform duration-1000"
              >
              <DreamCard post={post}  />
              </Link>
            ))}

        </div>)
        }

        

    </div>
  )
}
