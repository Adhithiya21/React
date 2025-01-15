import React from "react";
import './tailwind.config.js'
const RotatingCloud = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="relative w-32 h-32">
        {/* Cloud */}
        <div className="absolute inset-0 animate-spin-slow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            className="w-full h-full text-blue-300"
          >
            <path
              d="M32 12c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16c0-8.236-6.276-14.974-14.264-15.862C33.614 12.047 32.813 12 32 12z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RotatingCloud;
