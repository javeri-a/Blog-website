

import React from 'react';

export default function Subscribe() {
  return (
    <div className="bg-[#7C4EE4] text-center py-16 px-4 sm:px-8 lg:px-20">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Get our stories delivered From <br /> us to your inbox weekly.
        </h1>
        <div className="mt-6">
          <div className="flex justify-center space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-6 py-3 rounded text-black w-full sm:w-[300px] lg:w-[400px] placeholder:text-gray-500"
            />
            <button className="text-white px-6 py-3 rounded-lg border bg-[#7C4EE4] hover:bg-[#6a34c9] transition">
              Get Started
            </button>
          </div>
        </div>
        <p className="mt-6 text-[#FFF599] text-sm sm:text-base">
          Get a response tomorrow if you submit by 9pm today. If we receive it after
          9pm, you will get a response the following day.
        </p>
      </div>
    </div>
  );
}
