import React from 'react'

export const Footer = () => {
  return (
    <div className=' bg-[#321b5c] text-white'>

      <div className='flex justify-between container mx-auto gap-3 py-9'>
        <div className='max-w-sm'>
          <h3 className='text-xl font-bold py-3'>About us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus distinctio quam atque. Praesentium ea aut aliquam corrupti possimus quaerat temporibus saepe accusamus atque earum eos a, quo reiciendis accusantium deserunt?</p>
        </div>

        <div className='max-w-1/3'>
        <h3 className='text-xl font-bold py-3'>Links</h3>
        </div>

        <div className='max-w-1/3'>
        <h3 className='text-xl font-bold py-3'>Information</h3>
          <p>Email: contact@cevisezi.ro</p>
        </div>
      </div>

      <p className='text-center pb-6'>©2024 cevisezi.ro - Dictionar online de vise. Toate drepturile rezervate.</p>
    </div>
  )
}
