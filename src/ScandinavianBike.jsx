import React from 'react';

const ScandinavianBike = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="w-full bg-blue-900 py-4">
        <ul className="flex justify-center space-x-8 text-sm uppercase tracking-wide">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About Us</li>
          <li className="hover:text-blue-400 cursor-pointer">Bikes</li>
          <li className="hover:text-blue-400 cursor-pointer">Blog</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="relative text-center mt-10">
        {/* Background text */}
        <h1 className="text-[8rem] font-bold uppercase leading-none opacity-20">
          Scandinavian
        </h1>
        <h1 className="text-[8rem] font-bold uppercase leading-none absolute top-0 left-1/2 transform -translate-x-1/2 text-white">
          Scandinavian
        </h1>

        {/* Bike Image */}
        <div className="relative z-10 mt-[-4rem]">
          <img
            src="https://via.placeholder.com/800x400" // Replace with your bike image path
            alt="Bike"
            className="mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-full"></div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-8 mt-8">
        <button className="px-6 py-2 bg-transparent border border-white text-white hover:bg-blue-900 transition">
          View Details
        </button>
        <button className="px-6 py-2 bg-blue-900 text-white hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="uppercase tracking-wide text-blue-400">For Enquiry</p>
        <p className="text-2xl font-bold">+51651532151</p>
      </div>
    </div>
  );
};

export default ScandinavianBike;
