import React from 'react'

export const ReviewCard = ({name, date, title, review}) => {
  return (
    
    <div
  className="flex flex-col gap-2 border max-w-md w-full bg-white  p-5 rounded-md mt-8 shadow-lg hover:scale-105  transition-transform duration-1000">

  <div className="flex flex-row justify-between  w-full">
    <div className="flex flex-row justify-between w-full">
      <div className="bg-gray-200  rounded-md w-20 px-2">
        <p>{name}</p>
      </div>
      <div
        className="bg-gray-200 rounded-md w-20 pl-4"
      >
        <p>{date}</p>
      </div>
    </div>
  </div>
  <div className="flex flex-row justify-between w-full">
    <div
      className="bg-gray-200 rounded-md px-2"
    >
      <p>{title}</p>
    </div>

    <div className="text-xs">
      <div className="flex flex-row">
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="h-4 w-4 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="h-4 w-4 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="h-4 w-4 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="h-4 w-4 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>

        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="h-4 w-4 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
      </div>
    </div>
  </div>

  <div
    className="bg-gray-200  rounded-md w-full h-20 px-2"
  >
    <p>{review}</p>
  </div>
      </div>
  )
}
