
 
"use client"
import Image from 'next/image';
import React from 'react';

export default function Recent() {
  return (
    <div className="px-4 sm:px-8 lg:px-20 py-6 text-black">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Our Recent Posts</h1>
        <button className="bg-[#7C4EE4] rounded text-white px-4 py-2 text-sm sm:text-base">
          <a href="/blogpage">View All</a>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">

        <div className="flex-shrink-0">
          <Image
            src="/2nd.png"
            alt="Recent Post Image"
            height={750}
            width={600}
            className="h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>


        <div className="space-y-4 lg:pl-8">
          <h1 className="text-lg font-medium text-gray-700">
            Development <span className="text-gray-500 pl-3">19 March 2024</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif pt-3">
            How to make a Game look more <br />attractive with New VR & AI <br />Technology
          </h2>
          <p className="pt-4 text-gray-500 text-base sm:text-lg">
            Google has been investing in AI for many years and bringing its benefits
            to individuals, businesses, and communities. Whether it’s publishing state-of-the-art research,
            building helpful products, or developing tools and resources that enable others, we are committed to
            making AI accessible to everyone.
          </p>
          <button className="bg-[#7C4EE4] rounded text-white px-6 py-3 text-sm sm:text-base mt-6">
            <a href="/blogpage">View All</a>
          </button>
        </div>
      </div>
    </div>
  );
}
