import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import lgm from './lgw-Photoroom.png'; // Import logo if needed
import './about.css'; // Optional CSS file for About page

const About = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="bg-black h-screen text-white">
      {/* Logo */}
      <div className="pt-12 pl-32">
        <img src={lgm} alt="Logo" className="h-[20px] w-[60px] logo-animation" />
      </div>

      {/* Navigation */}
      <nav className="flex gap-60 opacity-50 pt-11 justify-center">
        <Link to="/path">
          <button className="text-white font-sans font-bold text-sm hover:scale-110 transition-all">Home</button>
        </Link>
        <button className="text-white font-sans font-bold text-sm hover:scale-110 transition-all">About</button>
        <Link to="/contact">
          <button className="text-white font-sans font-bold text-sm hover:scale-110 transition-all">Contact</button>
        </Link>
      </nav>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-[80%] animate-fade-in">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="mt-6 text-xl text-center max-w-3xl">
          Welcome to Wap.in , where we blend innovation and style. Our digital watches are designed to withstand the test of time while keeping you ahead in technology and fashion.
        </p>
        <p className="mt-4 text-xl text-center max-w-3xl">
          Explore our legacy and discover why Wap.in stands for durability, precision, and timeless elegance.
        </p>
      </div>

      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x - 10}px`, // Adjust to center the cursor
          top: `${cursorPosition.y - 10}px`,
        }}
      ></div>
    </div>
  );
};

export default About;
