import React from 'react'

export default function Isocertificate() {
  return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-12">
          {/* Left Section */}
          <div className="md:w-1/3 space-y-4 text-center md:text-left">
            <div className="bg-orange-100 text-orange-600 rounded-full inline-block px-3 py-1 text-sm font-semibold">
              ISO CERTIFICATIONS
            </div>
            <p className="text-gray-600">
              Proudly certified by ISO for quality, environmental, Information Security
              Management Systems, and occupational health and safety management systems.
            </p>
          </div>
    
          {/* Right Section */}
          <div className="flex flex-wrap justify-center md:w-2/3 space-x-2 mt-4 md:mt-0">
            {/* Example of Certification Badge */}
            <img
              src="https://via.placeholder.com/80x80" 
              alt="ISO 9001:2015 Certification"
              className="h-20 w-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/80x80" 
              alt="ISO 14001:2015 Certification"
              className="h-20 w-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/80x80" 
              alt="ISO 27001 Certification"
              className="h-20 w-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/80x80" 
              alt="ISO 45001:2018 Certification"
              className="h-20 w-20 object-contain"
            />
            <img
              src="https://via.placeholder.com/80x80" 
              alt="OHSAS 18001:2007 Certification"
              className="h-20 w-20 object-contain"
            />
          </div>
        </div>
      );
    };
    