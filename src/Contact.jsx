import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import lgm from './lgw-Photoroom.png'; // Import logo if needed
import './contact.css'; // Optional CSS file for Contact page styling

const Contact = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-black h-screen text-white">
      {/* Custom cursor */}
      <div
        className="custom-cursor"
        style={{
          transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
        }}
      ></div>

      {/* Logo */}
      <div className="pt-12 pl-32">
        <img src={lgm} alt="Logo" className="h-[20px] w-[60px] logo-animation" />
      </div>

      {/* Navigation */}
      <nav className="flex gap-60 opacity-50 pt-11 justify-center">
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
        <button className="text-white font-sans font-bold text-sm hover:scale-110 transition-all">
          Contact
        </button>
      </nav>

      {/* Contact Form */}
      <div className="flex flex-col items-center justify-center h-[80%]">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="mt-6 text-xl text-center max-w-3xl">
          We'd love to hear from you! Reach out to us with any questions, feedback, or inquiries.
        </p>
        <form className="mt-8 space-y-4 max-w-md w-full">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-50"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-white rounded-md text-black font-bold hover:bg-white transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
