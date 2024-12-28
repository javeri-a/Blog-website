


import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <div className="w-full bg-[#7C4EE4] flex flex-col lg:flex-row justify-between items-center px-4 py-16">

      <div className="text-white text-center lg:text-left lg:pl-20 space-y-6 max-w-lg">
        <h2 className="text-lg sm:text-xl font-medium">Featured Post</h2>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          How AI will Change the Future
        </h1>
        <p className="text-base sm:text-lg">
          The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction.
        </p>
        <button className="bg-white text-black rounded py-2 px-6 mt-6 hover:bg-gray-200 transition duration-300">
         <a href="/blogpage">Read More</a> 
        </button>
      </div>


      <div className="mt-8 lg:mt-0 lg:ml-12 max-w-[500px]">
        <Image
          src="/main.png"
          alt="AI Image"
          width={500}
          height={460}
          className="object-cover rounded-lg shadow-xl lg:pr-20"
        />
      </div>
    </div>
  );
}
