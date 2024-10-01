import React from 'react'

export const Footer = () => {
  return (
    <div className=' bg-[#321b5c] text-white'>
      <div className='container mx-auto px-6 lg:px-24  flex flex-col md:flex-row md:justify-between gap-12 py-9'>

        <div className='w-full md:max-w-1/3'>
        <h3 className='text-xl font-bold py-3'>Scurtaturi</h3>
        <p className='pb-3'> <a href="/toate-interpretarile">Toate interpretarile</a></p>
        <p className='pb-3'> <a href="/">Home</a></p>
        <p className='pb-3'> <a href="/about">Despre</a></p>
        <p className='pb-3'> <a href="/contact">Contact</a></p>
        <p className='pb-3'> <a href="/">Chat</a></p>
        
        </div>

        <div className='w-full md:max-w-1/3'>
        <h3 className='text-xl font-bold py-3'>Informatii</h3>

          <p className='pb-3'>E-mail: <a href="mailto:contact@cevisezi.ro">contact@cevisezi.ro</a></p>
          
          <p className='pb-3'><a href="https://cevisezi.ro/utilizare-cookie">Politica de cookies</a></p>
          <p className='pb-3'><a href="https://cevisezi.ro/politica-de-confidentialitate">Politica de confidentialiate</a></p>
        </div>

        <div className='w-full md:max-w-1/3 text-justify'>
          <h3 className='text-xl font-bold py-3 '>Despre noi</h3>
          <p>Pentru noi, CeVisezi.ro este o calatorie de descoperire alaturi de fiecare vizitator, explorand lumea bogata și plina de mister a viselor. Ne bucuram de oportunitatea de a oferi claritate, de a aduce confort si de a te ajuta sa te conectezi cu subconstientul tau prin limbajul fascinant al viselor.</p>
        </div>
      </div>
      <hr />
      <p className='text-center px-2 py-3'>©2024 cevisezi.ro - Dictionar online de vise. Toate drepturile rezervate.</p>
    </div>

    
  )
}
