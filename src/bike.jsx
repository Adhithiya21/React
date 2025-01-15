import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import lg from './logo.png'; // Logo image
import img1 from './fb3.jpg'; // First image
import img2 from './fb3.jpg'; // Second image
import img3 from './fb4.jpg'; // Third image (reused)

const BikeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5 z-10">
        {/* Left navigation */}
        <div className="flex space-x-6">
          <a href="#home" className="text-white text-lg hover:underline">Home</a>
          <a href="#about" className="text-white text-lg hover:underline">About</a>
        </div>

        {/* Center logo */}
        <div className="flex justify-center">
          <img src={lg} alt="Logo" className="h-12" />
        </div>

        {/* Right navigation */}
        <div className="flex space-x-6">
          <a href="#cars" className="text-white text-lg hover:underline">Cars</a>
          <a href="#motorcycles" className="text-white text-lg hover:underline">Motorcycle</a>
        </div>
      </nav>

      {/* Slider */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Slider {...settings} className="w-full h-full">
          <div className="w-full h-screen">
            <img src={img1} alt="Image 1" className="w-full h-full object-cover opacity-90" />
          </div>
          <div className="w-full h-screen">
            <img src={img2} alt="Image 2" className="w-full h-full object-cover opacity-90" />
          </div>
          <div className="w-full h-screen">
            <img src={img3} alt="Image 3" className="w-full h-full object-cover opacity-90" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BikeSlider;
