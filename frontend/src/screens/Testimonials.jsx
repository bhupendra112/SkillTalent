import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amit Dasgupta",
      designation: "IL&FS",
      feedback:
        "Spectrum is a highly reliable partner who successfully fills critical positions in record time. They have a thorough understanding of the power sector talent landscape and are a great recruitment partner. Wishing STM continued success.",
      image: "https://via.placeholder.com/50", // Replace with the actual image URL
    },
    {
      name: "Savita Iyer",
      designation: "Hansa Research",
      feedback:
        "Spectrum has provided us with excellent service since 2016. When there is an urgent requirement, I look to Spectrum, knowing they will deliver. They have not let me down. It’s a pleasure working with them. Thank you.",
      image: "https://via.placeholder.com/50", // Replace with the actual image URL
    },
    {
      name: "Arpita Roy Tewari",
      designation: "Merlin Entertainment",
      feedback:
        "STM's experienced professionals understand our recruitment needs and process flow, delivering quality results with a balanced professional and friendly approach. They have played a major role in our recruitment process.",
      image: "https://via.placeholder.com/50", // Replace with the actual image URL
    },
  ];

  return (
    <div className="bg-white p-6 md:p-12">
      <div className="text-center">
        <div className="bg-orange-100 text-orange-600 rounded-full inline-block px-3 py-1 text-sm font-semibold">
          TESTIMONIALS
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Our Latest Client's Feedback
        </h2>
      </div>

      <div className="grid gap-6 mt-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg border border-gray-200"
          >
            <div className="text-orange-500 text-2xl mb-4">
              <i className="fas fa-quote-left"></i>
            </div>
            <p className="text-gray-600 mb-6">{testimonial.feedback}</p>
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-gray-800 font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center mt-6 space-x-2">
        <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
