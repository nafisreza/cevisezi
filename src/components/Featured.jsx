import React from 'react'

export const Featured = ({url, title}) => {
  return (
    <div className={`${url} h-[500px] bg-center flex justify-center items-center bg-no-repeat bg-cover`}>     
        
        <h1 className='text-white font-bold text-8xl'> {title}</h1>
    </div>
  )
}
