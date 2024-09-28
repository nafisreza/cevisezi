import React, { useState, useEffect } from 'react';

export const Featured = ({ url, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (url) {
      const img = new Image();
      img.src = url;

      img.onload = () => {
        setImageSrc(url);
        setIsLoading(false);
      };

      img.onerror = () => {
        console.error("Failed to load image");
        setIsLoading(false);
      };
    }
  }, [url]);

  return (
    <>
      <div className={`h-screen flex justify-center items-center bg-no-repeat bg-cover bg-center ${isLoading ? 'bg-gray-200' : ''}`} style={{ backgroundImage: !isLoading ? `url(${imageSrc})` : 'none' }}>
        {isLoading ? (
          <div className="text-white text-4xl">Loading...</div>
        ) : (
          <h1 className="text-white font-bold text-7xl md:text-8xl text-center container mx-auto px-6 lg:px-24">{title}</h1>

            // <h1 className="text-white font-bold text-7xl md:text-8xl text-center container mx-auto px-6 lg:px-24 text-stroke-1 text-stroke-black">{title}</h1>
          
        )}
      </div>
    </>
  );
};
