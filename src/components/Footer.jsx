import React from 'react'

export const Footer = () => {
  return (
    <div className=' bg-[#321b5c] text-white'>
      <div className='container mx-auto px-6 lg:px-24  flex flex-col md:flex-row md:justify-between gap-12 py-9'>
        <div className='w-full md:max-w-1/3 text-justify'>
          <h3 className='text-xl font-bold py-3 '>About us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus distinctio quam atque. Praesentium ea aut aliquam corrupti possimus quaerat temporibus saepe accusamus atque earum eos a, quo reiciendis accusantium deserunt?</p>
        </div>

        <div className='w-full md:max-w-1/3'>
        <h3 className='text-xl font-bold py-3'>Links</h3>
        <p></p>
        </div>

        <div className='w-full md:max-w-1/3'>
        <h3 className='text-xl font-bold py-3'>Information</h3>
          <p>Email: contact@cevisezi.ro</p>
        </div>
      </div>
      <hr />
      <p className='text-center px-2 py-3'>©2024 cevisezi.ro - Dictionar online de vise. Toate drepturile rezervate.</p>
    </div>
  )
}
