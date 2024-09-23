import React from 'react';
import home from "../assets/home.jpg"
import About from './About';
import Services from './Services';
import Isocertificate from './Isocertificate';
import Testimonials from './Testimonials';
import ClientSlider from './ClientSlider';

const Home = () => {
  return (
    <>
    <div className="relative h-[35vh] w-full bg-cover bg-center" 
         style={{ backgroundImage: `url(${home})`, height:"40rem"}}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>

      {/* Content */}
      <div className="flex items-center justify-center h-full">
        <div  className="absolute bg-gray-800 bg-opacity-60 text-white p-6 flex flex-col items-center justify-center text-center w-full h-full">
        <h1 className="text-5xl font-bold">
          Manpower Solutions For Businesses
        </h1>
        <p className="mt-4 text-sm leading-relaxed md:text-lg lg:text-base max-w-lg">
        Empowering businesses with customized workforce solutions, we provide skilled professionals to optimize productivity, streamline operations, and drive success. Your trusted partner for sourcing, managing, and enhancing manpower across industries.
        </p>
        <a href='/contact' className="mt-6 px-6 py-3 bg-orange-500 text-white text-lg rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out">
          Contact Us
        </a>
        </div>
      </div>
    </div>
    {/* <div>
      <About/>
    </div>
    <div>
      <Services/>
    </div> */}
    {/* <div>
      <Isocertificate/>
    </div> */}
    {/* <div>
      <Testimonials/>
    </div> */}
    {/* <div>
      <ClientSlider/>
    </div> */}
    </>
  );
};

export default Home;
