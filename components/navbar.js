"use client"
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"


const navbar = () => {

  

  // const { data: session } = useSession();
  // yae nai horha error aarha use session mae 

  // if (session) {
  //   return 
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>  
  //     </>
  //   
  // }

  return (
    <nav className="bg-gray-900 shadow-lg shadow-white text-white flex justify-between px4 h-16 items-center">
      <div className="logo font-bold px-2 text-lg flex justify-center items-center ">
        <img src="tea.gif" alt="" width={44} />
        <span>GetMeaChai!</span>
      </div>
      {/* <ul className='flex justify-between gap-4 px-4 font-bold'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>    
        <li>Sign up</li>
        <li>Login</li>
            
       </ul> */}

      <div>
        <Link href={"/login"}>
        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Login
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
