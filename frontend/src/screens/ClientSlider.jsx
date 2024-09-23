import React, { useState } from "react";

// Array of client logos
const clients = [
  { name: "Exide", logo: "link_to_exide_logo" },
  { name: "First Choice", logo: "link_to_first_choice_logo" },
  { name: "General Mills", logo: "link_to_general_mills_logo" },
  { name: "Toyota", logo: "link_to_toyota_logo" },
  { name: "CNH Industrial", logo: "link_to_cnh_logo" },
  { name: "Abbott", logo: "link_to_abbott_logo" },
];

const ClientSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handling the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handling the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h2 className="text-orange-400 text-lg font-semibold mb-1">
        OUR GLOBAL CLIENTS
      </h2>
      <h3 className="text-xl font-bold mb-6">We Work With The Best</h3>

      <div className="relative w-full flex items-center justify-center">
        {/* Previous Button */}
        <button
          className="absolute left-0 bg-gray-100 p-2 rounded-full hover:bg-orange-400 transition-colors"
          onClick={prevSlide}
        >
          &lt;
        </button>

        {/* Logos */}
        <div className="w-3/4 flex justify-center items-center overflow-hidden">
          <div className="flex gap-4 transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {clients.map((client, index) => (
              <div
                key={client.name}
                className={`flex-shrink-0 w-48 transition-opacity ${
                  index === currentIndex ? "opacity-100" : "opacity-50"
                }`}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="mx-auto h-16"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          className="absolute right-0 bg-gray-100 p-2 rounded-full hover:bg-orange-400 transition-colors"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ClientSlider;