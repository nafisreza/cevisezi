import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/config'
import { Query } from 'appwrite'
import { useLocation } from 'react-router-dom'


const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get("query")
    if(searchQuery){
        handleSearch(searchQuery)
    }
  }, [location.search])
  

  const handleSearch = async (searchQuery)=>{
    const results = await service.getPosts([Query.contains("title", searchQuery)])
    setSearchResults(results?.documents)
    console.log(results)
  }




  return (
    <>  
    <section className="container mx-auto px-6 lg:px-24 py-16 bg-white">
    <p>{searchResults.length} Results found</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {searchResults.map((post, index) => (
            <Link
              to={`/interpretare-vise/${post?.slug}`}
              key={post?.$id}
              className={`flex flex-col w-full h-[284px] border rounded shadow-lg hover:scale-105 transition-transform duration-1000 ${index === 0 ? 'md:col-span-2 md:row-span-2 md:h-[600px]' : ''}`}
            >
              <img
                src={post?.imageUrl}
                alt={post?.title}
                className={`w-full h-full rounded-t overflow-hidden object-cover ${index === 0 ? 'h-full' : 'h-32'}`}
              />
              <div className='flex flex-col text-center justify-around h-[70px]'>
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

export default SearchResults