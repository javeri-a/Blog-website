

"use client";

import { LocateFixedIcon, MailIcon, PhoneCall } from "lucide-react";

export default function GetInTouch() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-20">
   
      <section className="text-center py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Get in Touch</h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          We are always available to assist you. Feel free to contact us through any of the methods below.
        </p>
      </section>

 
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 mb-12">
     
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="bg-purple-100 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
            <LocateFixedIcon />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mt-4">Office</h3>
          <p className="text-gray-600 mt-2">Karachi, Pakistan</p>
        </div>

       
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="bg-purple-100 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
            <MailIcon />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mt-4">Email</h3>
          <p className="text-gray-600 mt-2">javiconnectdev@gmail.com</p>
        </div>

   
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="bg-purple-100 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
            <PhoneCall />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mt-4">Phone</h3>
          <p className="text-gray-600 mt-2">+44 123 456 789</p>
        </div>
      </section>

    
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424100.5474811085!2d67.03469239999999!3d24.8607343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f97ee16c769%3A0x6cd6ad53c8ccdd93!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          className="w-full"
        ></iframe>
      </section>

     
      <section className="py-12 px-6 md:px-16">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg p-3 focus:outline-none focus:ring focus:ring-purple-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg p-3 focus:outline-none focus:ring focus:ring-purple-300"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border rounded-lg p-3 focus:outline-none focus:ring focus:ring-purple-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border rounded-lg p-3 focus:outline-none focus:ring focus:ring-purple-300"
            />
            <textarea
              placeholder="Message"
              className="border rounded-lg p-3 focus:outline-none focus:ring focus:ring-purple-300 col-span-1 sm:col-span-2"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="col-span-1 sm:col-span-2 bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
