import React from 'react'

const navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-between px4 h-16 items-center'>
        <div className="logo font-bold pl-2">GetMeaChai</div>
       <ul className='flex justify-between gap-4 px-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>    
        <li>Sign up</li>
        <li>Login</li>
            
       </ul>
    </nav>
  )
}

export default navbar 
