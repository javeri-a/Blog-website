

'use client'; 

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-white text-black text-center p-5">
   
      <h1 className="text-xl sm:text-2xl font-extrabold p-3">
        Blogs<span className="text-[#7C4EE4]">.</span>
      </h1>


      <div>
        <ul className="flex flex-wrap justify-center space-x-5 pt-2 pb-2">
          <li className="hover:text-[#7C4EE4]">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#7C4EE4]">
            <Link href="/blogpage">Blogs</Link>
          </li>
        
          <li className="hover:text-[#7C4EE4]">
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </div>

     
      <hr className="my-4 border-gray-300" />

      
      <h4 className="text-sm sm:text-base">
        Copyright Ideapeel Inc © 2023. All Rights Reserved
      </h4>
    </div>
  );
}
