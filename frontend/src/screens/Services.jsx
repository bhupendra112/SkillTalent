import React from 'react';
import { FaUserFriends, FaHandshake, FaPeopleArrows, FaGraduationCap } from 'react-icons/fa';
import {NavLink} from "react-router-dom"

const Services = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">Global Portfolio of Services</h2>
        <p className="mt-4 text-gray-600">
          From efficient recruitment and seamless payroll solutions to flexible staffing and robust workforce management, we cater to all your HR needs.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 group transition duration-300">
            <div className="text-center">
              {/* Icon Container */}
              <div className="mb-4 flex items-center justify-center bg-blue-500 rounded-full w-12 h-12 mx-auto group-hover:bg-orange-500 transition duration-300">
                <div className="text-white text-xl">
                  <FaUserFriends />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">Apprentice Solution (NAPS & NATS)</h3>
              <p className="text-gray-600 mb-4">
              Provides solutions for hiring apprentices under National Apprenticeship Promotion Scheme (NAPS) and National Apprenticeship Training Scheme (NATS), helping businesses gain skilled workers through structured, on-the-job training.
              </p>
              <NavLink to="/contact" className="mt-6 px-6 py-3 bg-white rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-300">Contact Us &rarr;</NavLink>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 group transition duration-300">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center bg-blue-500 rounded-full w-12 h-12 mx-auto group-hover:bg-orange-500 transition duration-300">
                <div className="text-white text-xl">
                  <FaHandshake />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">General Staffing</h3>
              <p className="text-gray-600 mb-4">
              Offers workforce solutions to meet short-term, long-term, or project-based staffing needs across various sectors, ensuring you have the right personnel when you need them.
              </p>
              <NavLink to="/contact" className="mt-6 px-6 py-3 bg-white rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-300">Contact Us &rarr;</NavLink>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 group transition duration-300">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center bg-blue-500 rounded-full w-12 h-12 mx-auto group-hover:bg-orange-500 transition duration-300">
                <div className="text-white text-xl">
                  <FaPeopleArrows />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contract Staffing</h3>
              <p className="text-gray-600 mb-4">
              Provides flexible staffing solutions where employees are hired on a contract basis, allowing businesses to scale their workforce up or down based on project demands.
              </p>
              <NavLink to="/contact" className="mt-6 px-6 py-3 bg-white rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-300">Contact Us &rarr;</NavLink>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 group transition duration-300">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center bg-blue-500 rounded-full w-12 h-12 mx-auto group-hover:bg-orange-500 transition duration-300">
                <div className="text-white text-xl">
                  <FaGraduationCap />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Training & Learning</h3>
              <p className="text-gray-600 mb-4">
              Delivers professional training programs and development workshops to enhance employee skills and performance, ensuring that your workforce remains competitive and effective.
              </p>
              <NavLink to="/contact" className="mt-6 px-6 py-3 bg-white rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-300">Contact Us &rarr;</NavLink>
            </div>
          </div>

          {/* card-- 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 group transition duration-300">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center bg-blue-500 rounded-full w-12 h-12 mx-auto group-hover:bg-orange-500 transition duration-300">
                <div className="text-white text-xl">
                  <FaPeopleArrows />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">IT Staffing</h3>
              <p className="text-gray-600 mb-4">
              Specializes in providing highly skilled IT professionals on a temporary, contract, or permanent basis to meet the technical needs of your business in fields such as software development, IT support, and more.
              </p>
              <NavLink to="/contact" className="mt-6 px-6 py-3 bg-white rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-300">Contact Us &rarr;</NavLink>
            </div>
          </div>

          {/* card-- 6 */}
          <div className="bg-white rounded-lg shadow-md p-6 group transition duration-300">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center bg-blue-500 rounded-full w-12 h-12 mx-auto group-hover:bg-orange-500 transition duration-300">
                <div className="text-white text-xl">
                  <FaPeopleArrows />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Recruitment Process Outsourcing</h3>
              <p className="text-gray-600 mb-4">
              Manages the entire recruitment process on behalf of your business. From candidate sourcing to onboarding, this service aims to streamline recruitment and reduce time-to-hire.
              </p>
              <NavLink to="/contact" className="mt-6 px-6 py-3 bg-white rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-300">Contact Us &rarr;</NavLink>
            </div>
          </div>

          {/* card-- 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 group transition duration-300">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center bg-blue-500 rounded-full w-12 h-12 mx-auto group-hover:bg-orange-500 transition duration-300">
                <div className="text-white text-xl">
                  <FaPeopleArrows />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Search & Recruitment</h3>
              <p className="text-gray-600 mb-4">
              A focused service for sourcing, identifying, and recruiting top talent across various industries, providing businesses with highly qualified professionals for specific roles.
              </p>
              <NavLink to="/contact" className="mt-6 px-6 py-3 bg-white rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-300">Contact Us &rarr;</NavLink>
            </div>
          </div>

          {/* card-- 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 group transition duration-300">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center bg-blue-500 rounded-full w-12 h-12 mx-auto group-hover:bg-orange-500 transition duration-300">
                <div className="text-white text-xl">
                  <FaPeopleArrows />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Payroll</h3>
              <p className="text-gray-600 mb-4">
              Manages payroll services for businesses, ensuring accurate and timely employee compensation, compliance with local regulations, and seamless handling of employee benefits.
              </p>
              <NavLink to="/contact" className="mt-6 px-6 py-3 bg-white rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-300">Contact Us &rarr;</NavLink>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
