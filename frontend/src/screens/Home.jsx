import React from 'react';
import home from "../assets/home.jpg"
import { NavLink } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Isocertificate from './Isocertificate';
import Testimonials from './Testimonials';
import ClientSlider from './ClientSlider';

const Home = () => {
  return (
    <>
      <div className="relative h-[35vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${home})`, height: "40rem" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>

        {/* Content */}
        <div className="flex items-center justify-center h-full">
          <div className="absolute bg-gray-800 bg-opacity-60 text-white p-6 flex flex-col items-center justify-center text-center w-full h-full">
            <h1 className="text-5xl font-bold">
              Manpower Solutions For Businesses
            </h1>
            <p className="mt-4 text-sm leading-relaxed md:text-lg lg:text-base max-w-lg">
              Empowering businesses with customized workforce solutions, we provide skilled professionals to optimize productivity, streamline operations, and drive success. Your trusted partner for sourcing, managing, and enhancing manpower across industries.
            </p>
            <h1 className='text-5xl font-bold'>apprenticeship solutions</h1>
            <p className="mt-4 text-sm leading-relaxed md:text-lg lg:text-base max-w-lg">
            Apprenticeship Solutions is a platform that links learners with practical, industry-focused apprenticeship programs. We offer access to a range of opportunities across different sectors, allowing individuals to gain real-world experience and develop essential skills under expert mentorship. Perfect for those looking to kickstart or transition their careers, Apprenticeship Solutions simplifies the path to professional growth.
            </p>
            <NavLink to='/contact' className="mt-1 px-6 py-3 bg-orange-500 text-white text-lg rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out">
              Contact Us
            </NavLink>
            {/* <div className='mt-7'>
              <h1 className='text-5xl font-bold'> Apprentice Solutions of Industries</h1>
              <p className='mt-4 ml-36 text-sm leading-relaxed md:text-lg lg:text-base max-w-lg'>
              Apprentice Solutions of Industries provides innovative, tailored solutions to optimize productivity and efficiency across various industries. We focus on delivering cutting-edge, sustainable technologies to help businesses grow and succeed in an ever-evolving marketplace.</p>
            </div> */}
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
