import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import service from '../appwrite/config';

export const DreamCard = ({ featuredImg, title, text, className = "", $id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (featuredImg) {
      const img = new Image();
      img.src = featuredImg;

      img.onload = () => {
        setImageSrc(featuredImg);
        setIsLoading(false);
      };

      img.onerror = () => {
        console.error("Failed to load image");
        setIsLoading(false);
      };
    }
  }, [featuredImg]);

  return (
    <Link to={`/post/${$id}`}>
      <div className={`group flex flex-col md:flex-row border rounded shadow-lg md:h-[250px] my-3 hover:scale-105 transition-transform duration-1000 ${className}`}>
        {isLoading ? (
          <div className="w-full h-[250px] bg-gray-200 flex justify-center items-center">
            <div className="text-gray-500">Loading image...</div>
          </div>
        ) : (
          <img className="shadow-lg" src={imageSrc} alt={title} />
        )}
        <div className="p-5 overflow-hidden">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p>{text}</p>
          <p className="text-right mt-3 text-purple-900 group-hover:text-purple-500 font-semibold transition ease-in-out duration-1000">Read more...</p>
        </div>
      </div>
    </Link>
  );
};
