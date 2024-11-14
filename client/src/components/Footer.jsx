import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import googlePlayStore from '../assets/googleplaysotre.png'
import appStore from '../assets/appsotre.png'
import bikewala from '../assets/bikewale.png'
import cartrade from '../assets/cartrade.png'
import carwala from '../assets/carwale.png'
import mobility from '../assets/mobility.png'
import olx from '../assets/olx.png'
import cardtradetech from '../assets/cartrade_tech.png'

const Footer = () => {
  return (
    <>
      {/* First section */}
      <div className="bg-slate-100 text-gray-600 py-6">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Rights section */}
          <h1 className="text-xs mb-4">All rights reserved © 2006-2024 OLX</h1>

          {/* Footer links section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {/* Popular Locations */}
            <div>
              <h3 className="font-semibold text-sm mb-2">Popular Locations</h3>
              <ul className="text-xs">
                <li>Kolkata</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Pune</li>
              </ul>
            </div>

            {/* Trending Locations */}
            <div>
              <h3 className="font-semibold text-sm mb-2">Trending Locations</h3>
              <ul className="text-xs">
                <li>Bhubaneshwar</li>
                <li>Hyderabad</li>
                <li>Chandigarh</li>
                <li>Nashik</li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="font-semibold text-sm mb-2">About Us</h3>
              <ul className="text-xs">
                <li>Tech@OLX</li>
                <li>OLX</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="font-semibold text-sm mb-2">Help</h3>
              <ul className="text-xs">
                <li>Sitemap</li>
                <li>Legal & Privacy information</li>
                <li>Vulnerability Disclosure Program</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-semibold text-sm mb-2">Follow Us</h3>
              <ul className="text-xs flex gap-1">
                <FaFacebookF />
                <FaTwitter />
                <FaSquareInstagram />
                <FaCirclePlay />
              </ul>
              <ul className="text-xs flex gap-2">
                <img src={googlePlayStore} className='w-14 ' />
                <img src={appStore} className='w-14' />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-950 p-4">
  {/* Image Container */}
  <div className="flex flex-wrap justify-between mb-2 max-w-full overflow-hidden">
    <img src={cardtradetech} alt="Image 1" className="w-14 h-14 md:w-14 md:h-14 lg:w-36 lg:h-36" />
    <img src={olx} alt="Image 2" className="w-14 h-14 md:w-14 md:h-14 lg:w-36 lg:h-36" />
    <img src={carwala} alt="Image 3" className="w-14 h-14 md:w-14 md:h-14 lg:w-36 lg:h-36" />
    <img src={bikewala} alt="Image 4" className="w-14 h-14 md:w-14 md:h-14 lg:w-36 lg:h-36" />
    <img src={cartrade} alt="Image 5" className="w-14 h-14 md:w-14 md:h-14 lg:w-36 lg:h-36" />
    <img src={mobility} alt="Image 6" className="w-14 h-14 md:w-14 md:h-14 lg:w-36 lg:h-36" />
  </div>
  {/* Footer Container */}
  <div className="flex justify-between text-white text-xs">
    <p className="text-start">Help-Sitemap</p>
    <p>All rights reserved © 2006-2024 OLX</p>
  </div>
</div>

    </>
  );
};

export default Footer;
