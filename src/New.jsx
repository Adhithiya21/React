// import React from 'react'
// import img from './im.jpg'
// const New = () => {
//   return (
//     <div>
//         <h2>hello</h2>
//         <img src={img} alt="" />
//     </div>
//   )
// }

// export default New
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Bike = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Fixed typo here
  };

  return (
    <>
      <div>
        <nav className="bg-transparent flex space-x-4 p-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#cars" className="hover:underline">Cars</a>
          <a href="#motorcycle" className="hover:underline">Motorcycle</a>
        </nav>
        <Slider {...settings}>
          <div>
            <h3 className="text-center text-xl">1</h3>
          </div>
          <div>
            <h3 className="text-center text-xl">2</h3>
          </div>
          <div>
            <h3 className="text-center text-xl">3</h3>
          </div>
          <div>
            <h3 className="text-center text-xl">4</h3>
          </div>
          <div>
            <h3 className="text-center text-xl">5</h3>
          </div>
          <div>
            <h3 className="text-center text-xl">6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Bike;