import React, { useEffect, useState } from 'react';
import experience from "../assets/experience.jpeg"; // Make sure this path is correct
import certified from "../assets/NSDC-logo.png"

const About = () => {
  const [count, setCount] = useState(0);

  // Function to handle the count animation from 0 to 16
  useEffect(() => {
    const targetCount = 30;
    if (count < targetCount) {
      const intervalId = setInterval(() => {
        setCount(prevCount => {
          if (prevCount < targetCount) {
            return prevCount + 1;
          } else {
            clearInterval(intervalId);
            return targetCount;
          }
        });
      }, 100); // Adjust the time interval as needed
    }
  }, [count]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Flex container */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side: Text Content */}
          <div className="lg:w-3/4">
            {/* About Us Section */}
            <h2 className="text-orange-500 font-semibold text-xl mb-4">ABOUT US</h2>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Manpower Solutions for Local 
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are the premier manpower solutions provider in India, offering staffing,
              recruitment, payroll, onboarding, flexible/temporary/contract staffing, CXO hire,
              RPO solutions, permanent recruitment, general staffing, staff augmentation, 
              apprentice solutions, EOR and PEO services, managed services, and other value-added services. 
              We have established ourselves as a reliable partner for businesses seeking comprehensive 
              workforce solutions. Our commitment to excellence is reflected in our structured processes, 
              cutting-edge technology, and a dedicated team that ensures seamless and efficient recruitment processes.
            </p>

            {/* Location Section */}
            <h4 className="text-xl font-bold text-gray-800 mb-2">INDIA</h4>
            <p className="text-gray-600 leading-relaxed">
              At Skill Talent & Staffing Solutions®, we take pride in our extensive network , 
              allowing us to connect top-tier talent with organizations across industries. Our client-centric 
              approach and personalized services set us apart, as we cater to the unique staffing needs of 
              each client. Whether it’s finding the right candidate, streamlining payroll processes, or managing 
              temporary staffing requirements, we bring a holistic and strategic perspective to workforce management.
            </p>

            {/* Read More Button */}
            {/* <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
              Read More
            </button> */}
          </div>

          {/* Right side: Badge and Certification */}
          <div className="lg:w-1/4 space-y-8">
            {/* Certification Badge */}
            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center">
              <img 
                src={certified}
                alt="Great Place to Work Certified" 
                className="w-32 mb-4"
              />
              <h4 className="font-bold text-gray-800 mb-2">Great Place To Work® Certified from NSDC</h4>
              <p className="text-sm text-gray-600">MAY 2024 - MAY 2025</p>
              <p className="text-gray-600 mt-2">
                Building and sustaining a high-trust, high-performance culture.
              </p>
            </div>

            {/* Experience Section */}
            <div 
              style={{ backgroundImage: `url(${experience})` }} 
              className="relative w-full bg-cover bg-center bg-no-repeat h-96"
            >
              <div className="absolute bg-orange-500 bottom-0 bg-opacity-80 text-white p-6 flex flex-col items-center justify-end text-center">
                <h4 className="text-4xl font-bold mb-2">{count}+</h4>
                <p className="text-lg font-semibold">Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
