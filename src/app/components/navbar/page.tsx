
"use client"

import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between p-3 px-6 lg:px-20 bg-white shadow-md">
 
      <div>
        <h1 className="text-xl sm:text-2xl font-extrabold p-3">
          Blogs<span className="text-[#7C4EE4]">.</span>
        </h1>
      </div>


      <div className="lg:hidden">
        <button onClick={toggleSidebar}>
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

  
      <div className="hidden lg:flex space-x-5">
        <Link href="/" className="hover:text-[#7C4EE4]">
          Home
        </Link>
        <Link href="/blogpage" className="hover:text-[#7C4EE4]">
          Blogs
        </Link>
       
        <Link
          href="/contact"
          className="bg-[#7C4EE4] rounded text-white px-3 py-1"
        >
          Contact us
        </Link>
      </div>


      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50 p-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-800 w-6 h-6 mb-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="space-y-4">
              <li className="hover:text-[#7C4EE4]">
                <Link href="/" onClick={toggleSidebar}>
                  Home
                </Link>
              </li>
              <li className="hover:text-[#7C4EE4]">
                <Link href="/blogpage" onClick={toggleSidebar}>
                  Blogs
                </Link>
              </li>
             
              <li className="bg-[#7C4EE4] rounded text-white px-3 py-1">
                <Link href="/contact" onClick={toggleSidebar}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
