import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import service from '../appwrite/config';
import parse from "html-react-parser";

export const DreamCard = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (post?.imageUrl) {
      const img = new Image();
      img.src = post?.imageUrl;

      img.onload = () => {
        setImageSrc(post?.imageUrl);
        setIsLoading(false);
      };

      img.onerror = () => {
        console.error("Failed to load image");
        setIsLoading(false);
      };
    }
  }, [post?.imageUrl]);

  return (
    <Link to={`/post/${post.slug}`}>
      <div className="group flex flex-col md:flex-row border rounded shadow-lg md:h-[250px] my-3 hover:scale-105 transition-transform duration-1000" >
        {isLoading ? (
          <div className="w-full h-[250px] bg-gray-200 flex justify-center items-center">
            <div className="text-gray-500">Se incarca...</div>
          </div>
        ) : (
          <img className="shadow-lg" src={imageSrc} alt={post?.title} />
        )}
        <div className="p-5 overflow-hidden">
          <h1 className="text-2xl font-semibold">{post?.title}</h1>
          {post?.content && (<p className='truncate'>{parse(post?.content.substring(0, 550))}</p>)}
          <p className="text-right mt-3 text-purple-900 group-hover:text-purple-500 font-semibold transition ease-in-out duration-1000">Citeste continuarea...</p>
        </div>
      </div>
    </Link>
  );
};


