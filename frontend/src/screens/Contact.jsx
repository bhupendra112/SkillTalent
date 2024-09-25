import React, { useState, useEffect } from 'react';
import contact_us from '../assets/contact_us.jpg';
import map from '../assets/map.jpg';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from 'axios';

// Fix for Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png"
});

export default function Contact() {
  const [formData, setFormData] = useState({
    query: '',
    name: '',
    designation: '',
    email: '',
    mobileNumber: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [count, setCount] = useState(0);

  const branches = [
    {
      city: "Indore",
      address: "Kanadia Rd, near Hanuman mandir, Saket Nagar, Indore, Madhya Pradesh 452016",
    },
    {
      city: "Pithampur",
      address: "Housing Board Circle, Near Punjab & Sind Bank, Pithampur, Dist. - Dhar (M.P.)",
    },
    // {
    //   city: "Bengaluru",
    //   address: "#1606, 1st floor, 7th cross, 20th Main, 1st sector, HSR Layout, Bangalore 560102.",
    // },
    // {
    //   city: "Chennai",
    //   address: "No.50, B - Block Lakshmi Nivas 2nd Floor Rukmani Lakshmipathi Road Egmore, Chennai - 600008.",
    // },
  ];

  useEffect(() => {
    const targetCount = branches.length;
    if (count < targetCount) {
      const intervalId = setInterval(() => {
        setCount(prevCount => (prevCount < targetCount ? prevCount + 1 : clearInterval(intervalId) || targetCount));
      }, 100);
      return () => clearInterval(intervalId); // Cleanup interval on unmount
    }
  }, [count, branches.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/contact', formData); // Corrected URL
      setSuccessMessage(response.data.message);
      setErrorMessage('');
      setFormData({
        query: '',
        name: '',
        designation: '',
        email: '',
        mobileNumber: '',
        message: ''
      });
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'An error occurred while sending the message.');
      setSuccessMessage('');
    }
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="relative h-[35vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${contact_us})` }}>
        <div className="flex items-center justify-center h-full">
          <div className="absolute bg-gray-800 bg-opacity-60 text-white p-6 flex flex-col items-center justify-center text-center w-full h-full">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <div className='mt-4'>
              <a className='hover:text-orange-500' href="/">Skill Talent Management </a>
              <span className='hover:text-orange-500'> / Company Profile</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-blue-900">Let's Connect and Work Together</h2>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/2 bg-blue-900 text-white p-8 rounded-lg shadow-lg">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <select
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  className="col-span-1 sm:col-span-2 bg-gray-100 text-gray-700 p-3 rounded outline-none"
                >
                  <option value="">--Please choose an option--</option>
                  <option value="Apprentice Solution (NAPS & NATS)">Apprentice Solution (NAPS & NATS)</option>
                  <option value="Recruitment Process Outsourcing">Recruitment Process Outsourcing</option>
                  <option value="General Staffing">General Staffing</option>
                  <option value="Contract Staffing">ontract Staffing</option>
                  <option value="Training & Learning">Training & Learning</option>
                  <option value="IT Staffing">IT Staffing</option>
                  <option value="Search & Recruitment">Search & Recruitment</option>
                  <option value="Payroll">Payroll</option>
                </select>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-gray-100 text-gray-700 p-3 rounded outline-none"
                />
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Designation"
                  className="bg-gray-100 text-gray-700 p-3 rounded outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="bg-gray-100 text-gray-700 p-3 rounded outline-none"
                />
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="bg-gray-100 text-gray-700 p-3 rounded outline-none"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message"
                  className="col-span-1 sm:col-span-2 bg-gray-100 text-gray-700 p-3 rounded outline-none"
                ></textarea>

                <button className="col-span-1 sm:col-span-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg mt-4">
                  Send Message ➞
                </button>
              </form>

              {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
              {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white flex">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg w-full md:w-1/3 text-center">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="text-xl font-bold">Address</h3>
              <p>Kanadia Rd, near Hanuman mandir, Saket Nagar, Indore, Madhya Pradesh 452016</p>
            </div>
            <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg w-full md:w-1/3 text-center">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="text-xl font-bold">Phone</h3>
              <p>+91-7049-736-538 <br /> +91-9039-317-854</p>
            </div>
            <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg w-full md:w-1/3 text-center">
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="text-xl font-bold">Email Address</h3>
              <p> pithampurstss@skilltalent.co.in</p>
            </div>
          </div>

          <div className="w-full h-96">
            <MapContainer
              center={[22.739772, 75.910002]} // Updated coordinates for Indore
              zoom={15}
              scrollWheelZoom={false}
              className="h-full rounded-lg shadow-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[22.739772, 75.910002]}> {/* Updated coordinates */}
                <Popup>
                  Skill Talent & Staffing Solutions<br />
                  Kanadia Rd, near Hanuman Mandir, Saket Nagar, Indore, Madhya Pradesh 452018
                </Popup>
              </Marker>
            </MapContainer>
          </div>

        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-orange-500 font-semibold text-lg">OUR BRANCH OFFICES</h2>
          </div>

          <div className="grid grid-cols-1 justify-items-center items-center md:grid-cols-2 lg:grid-cols-4 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-b-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-orange-500 text-3xl m-1 mr-2 hover:border-b-4 border-orange-500">🏢</div>
                  <h3 className="text-xl font-bold text-blue-900">{branch.city}</h3>
                </div>
                <p className="text-gray-700">{branch.address}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
