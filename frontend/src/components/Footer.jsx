import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="ml-6">
          <h3 className="text-lg font-bold mb-3">Skill Talent & Staffing Solutions®</h3>
          <p className="text-gray-400 mb-5">
            We are a leading manpower solutions provider  of
            industry experience providing recruitment, staffing, talent
            management services, and flexible workforce solutions to businesses
            of all sizes.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <NavLink to="https://www.facebook.com/" className="text-gray-400 hover:text-white">
              <FacebookIcon/>
            </NavLink>
            <NavLink to="https://x.com/" className="text-gray-400 hover:text-white">
              <TwitterIcon/>
            </NavLink>
            <NavLink to="https://linkedin.in/" className="text-gray-400 hover:text-white">
              <LinkedInIcon/>
            </NavLink>
            <NavLink to="https://www.youtube.com/" className="text-gray-400 hover:text-white">
              <YouTubeIcon/>
            </NavLink>
            <NavLink to="https://www.instagram.com/stss_pvt.ltd/" className="text-gray-400 hover:text-white">
              <InstagramIcon/>
            </NavLink>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-x-2">
          <h3 className="text-lg font-bold mb-3">Services</h3>
          <ul className="text-gray-400 space-y-2 ">
            <li><NavLink to="/contact">Apprentice Solution (NAPS & NATS)</NavLink></li>
            <li><NavLink to="/contact">Recruitment Process Outsourcing</NavLink></li>
            <li><NavLink to="/contact">General Staffing</NavLink></li>
            <li><NavLink to="/contact">Contract Staffing</NavLink></li>
            <li><NavLink to="/contact">Training & Learning</NavLink></li>
            <li><NavLink to="/contact">IT Staffing</NavLink></li>
            <li><NavLink to="/contact">Search & Recruitment</NavLink></li>
            <li><NavLink to="/contact">Payroll</NavLink></li>
            <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
          </ul>
        </div>

        {/* Overview Section */}
        <div  className="space-x-2">
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
          <li><NavLink to="https://www.apprenticeshipindia.gov.in/">NAPS</NavLink></li>
          <li><NavLink to="https://app.powerbi.com/view?r=eyJrIjoiM2U0ZTFjYTktNGJkNS00OWY0LWEwMGYtMjRhMTI2YmQzMWNiIiwidCI6IjcyNGI4ZWQxLTgxODMtNGNiOS1iNWIwLTFlZDY3YWZlYWNmMSIsImMiOjEwfQ%3D%3D">DBT</NavLink></li>
            {/* <li><NavLink to="/associate-zone">Associate Zone</NavLink></li> */}
            <li><NavLink to="/https://nats.education.gov.in/institutions.php">NATS</NavLink></li>

            {/* <li><NavLink to="/hrms-application-privacy-policy">HRMS Application Privacy Policy</NavLink></li> */}
          </ul>
        </div>


        {/* Contact Us Section */}
        <div  className="space-x-2">
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              {/* <span className="material-icons">phone</span> +91-7065-060-428 */}
              <span className="material-icons">phone</span> +91-7049-736-538 , +91-9039-317-854
            </li>
            <li>
              <span className="material-icons">email</span> pithampurstss@skilltalent.co.in
            </li>
            <li>
              <span className="material-icons">location_on</span> Kanadia Rd, near Hanuman mandir, Saket Nagar, Indore, Madhya Pradesh 452016
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10">
        © Copyright Spectrum Talent Management Limited
      </div>
    </footer>
  );
};

export default Footer;
