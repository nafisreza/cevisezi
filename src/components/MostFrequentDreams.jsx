import React from 'react'
import { DreamCard } from './DreamCard'

export const MostFrequentDreams = () => {
  
  const posts =[
    {
      title: "Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea ad! Nulla iusto pariatur, tempore alias assumenda totam expedita culpa a molestiae atque velit fuga blanditiis et saepe ducimus laboriosam.",
      src: "https://cevisezi.ro/cevisezi-default-image.webp",
      href: "#"
    }, 
    {
      title: "Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea ad! Nulla iusto pariatur, tempore alias assumenda totam expedita culpa a molestiae atque velit fuga blanditiis et saepe ducimus laboriosam.",
      src: "https://cevisezi.ro/cevisezi-default-image.webp",
      href: "#"
    },
    {
      title: "Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea ad! Nulla iusto pariatur, tempore alias assumenda totam expedita culpa a molestiae atque velit fuga blanditiis et saepe ducimus laboriosam.",
      src: "https://cevisezi.ro/cevisezi-default-image.webp",
      href: "#"
    },
    {
      title: "Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea ad! Nulla iusto pariatur, tempore alias assumenda totam expedita culpa a molestiae atque velit fuga blanditiis et saepe ducimus laboriosam.",
      src: "https://cevisezi.ro/cevisezi-default-image.webp",
      href: "#"
    },
    {
      title: "Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea ad! Nulla iusto pariatur, tempore alias assumenda totam expedita culpa a molestiae atque velit fuga blanditiis et saepe ducimus laboriosam.",
      src: "https://cevisezi.ro/cevisezi-default-image.webp",
      href: "#"
    },
    {
      title: "Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea ad! Nulla iusto pariatur, tempore alias assumenda totam expedita culpa a molestiae atque velit fuga blanditiis et saepe ducimus laboriosam.",
      src: "https://cevisezi.ro/cevisezi-default-image.webp",
      href: "#"
    },
    
  ]
  
  return (
    <div className='py-7 '>
        <h1 className='text-5xl font-semibold py-3 mb-7'>Most frequent dreams</h1>

        <div>
          {
            posts.map((post, index)=>(
              <DreamCard key={post.title+index} title={post.title} text={post.text} src={post.src} href={post.href}  />
            ))
          }
        </div>

        

    </div>
  )
}
