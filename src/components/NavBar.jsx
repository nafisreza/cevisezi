import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>  
    <div className='flex justify-around items-center my-5 ' >
    <Link to="/"><img src="./public/assets/cevisezi-logo.png" alt=""  className='h-[60px]' /></Link> 

        
        <ul className='flex gap-5'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Chat</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                
        </ul>
        
        <Button> Get Started  </Button> 
        
    </div>
    
    </>
  )
}


