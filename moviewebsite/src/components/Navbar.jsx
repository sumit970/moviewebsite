import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-start gap-2 bg-orange-200 text-xl font-serif'>
         <Link 
          className=' hover:text-white'
         to={'/'}>
              Home
         </Link>

         <Link
         className=' hover:text-white'
          to={'/about'}>
              About 
         </Link>

         <Link 
         className=' hover:text-white'
         to={'/services'}>
              Services
         </Link>

         <Link
         className=' hover:text-white' 
          to={'/contact'}>
              Contact
         </Link>
    </div>
  )
}

export default Navbar
