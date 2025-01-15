import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import img1 from './DW-5600BB-1 _ G-SHOCK DIGITAL 5600 SERIES _ CASIO INDIA-Photoroom.png'; 
import img2 from './G-Shock-Photoroom.png'; 

import lgm from './lgw-Photoroom.png'; 
import { CiSearch } from "react-icons/ci";  

const Home = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [img1, img2];

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Autoplay functionality
    const autoplayInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(autoplayInterval); // Clear interval on component unmount
    };
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-black h-[820px] relative overflow-hidden">
      {/* Custom cursor */}
      <div
        className="custom-cursor"
        style={{
          transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
        }}
      ></div>

      {/* Logo */}
      <div className="float-left pt-12 pl-32">
        <img src={lgm} alt="Logo" className="h-[20px] w-[60px] logo-animation" />
      </div>

      {/* Navigation */}
      <nav className="flex gap-60 opacity-50 pt-11 justify-center nav-animation">
        <Link to="/path">
          <button className="text-white font-sans font-bold text-sm hover:scale-110 transition-all">
            Home
          </button>
        </Link>
        <Link to="/about">
          <button className="text-white font-sans font-bold text-sm hover:scale-110 transition-all">
            About
          </button>
        </Link>
        <Link to="/contact">
          <button className="text-white font-sans font-bold text-sm hover:scale-110 transition-all">
            Contact
          </button>
        </Link>
        <CiSearch />
      </nav>

      {/* Carousel */}
      <div className="carousel-container flex justify-center float-right mt-16">
        <button
          className="text-white bg-gray-800 p-3 h-10 rounded-full mr-14 mt-96"
          onClick={handlePrevSlide}
        >
          &#8592;
        </button>
        <div className="carousel w-[530px] h-[500px] overflow-hidden relative">
          <div
            className="carousel-images flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover"
              />
            ))}
          </div>
        </div>
        <button
          className="text-white bg-gray-800 p-3 h-10 rounded-full mr-9 mt-96"
          onClick={handleNextSlide}
        >
          &#8594;
        </button>
      </div>

      {/* Main Content */}
      <section className="justify-between">
        <div className="pt-36 pl-44 gap-24 content-animation">
          <h1 className="text-white font-sans font-bold text-9xl nosifer-regular">
            CASIO
          </h1>
          <h2 className="text-white font-sans font-bold text-4xl pt-12 goldman-bold">
            DIGITAL
          </h2>
          <ol>
            <li className="text-white font-sans font-bold text-xl pt-10 goldman-bold">
              DW-5600BB-1
            </li>
          </ol>
        </div>
        <div className="pl-44 pt-6 gap-7 flex">
          <button className="glow-button p-4 w-40 bg-slate-200 rounded-md">
            Buy now
          </button>
          <button className="glow-button p-4 w-40 bg-slate-200 rounded-md">
            View details
          </button>
        </div>
      </section>
      

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 w-full bg-black py-4 flex justify-center gap-10 text-white opacity-80">
        <Link to="/home">
          <button className="text-white font-sans font-bold text-sm hover:scale-110 transition-all">
            Home
          </button>
        </Link>
        <Link to="/shop">
          <button className="text-white font-sans font-bold text-sm hover:scale-110 transition-all">
            Shop
          </button>
        </Link>
        <Link to="/about">
          <button className="text-white font-sans font-bold text-sm hover:scale-110 transition-all">
            About
          </button>
        </Link>
        <Link to="/contact">
          <button className="text-white font-sans font-bold text-sm hover:scale-110 transition-all">
            Contact
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
