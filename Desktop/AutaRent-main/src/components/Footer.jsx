import React from 'react';
import CarLogo from "/logo.png";
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 pt-6 pb-2">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-2 pt-2 border-t border-gray-300"></div>
        {/* Top Section with Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 text-center">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={CarLogo} 
              className="w-24 h-auto mb-3 transition-transform duration-300 hover:scale-105" 
              alt="Car Logo" 
            />
            <p className="text-gray-600 max-w-xs text-sm text-center md:text-left">
              Auta Rent premium car rental service for a new era in car rental.
            </p>
            <div className="mt-2 space-y-1.5">
              <div className="flex items-center text-gray-600 text-sm justify-center md:justify-start">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                <span>Levent/İstanbul</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                <span>+90 (539) 813 9646</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                <span>contact@autarent.com</span>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-base font-semibold text-gray-800 mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div>
                <h4 className="font-bold text-sm text-gray-700 mb-2">Company</h4>
                <ul className="space-y-1.5">
                  <li>
                    <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs" href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs" href="/all-cars">Vehicle Flee</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-700 mb-2">Support</h4>
                <ul className="space-y-1.5">
                  <li>
                    <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs" href="/helpCenter">Help Center</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs" href="/contactUs">Contact Us</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs" href="/faqs">FAQ</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-700 mb-2">Legal</h4>
                <ul className="space-y-1.5">
                  <li>
                    <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs" href="/privacy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt4 flex justify-center space-x-5">
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <Facebook className="w-5 h-5 transition-transform duration-300 hover:scale-125" />
            <span className="sr-only">Facebook</span>
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <Instagram className="w-5 h-5 transition-transform duration-300 hover:scale-125" />
            <span className="sr-only">Instagram</span>
          </a>
          <a 
            href="https://www.x.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 hover:scale-125">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
            </svg>
            <span className="sr-only">X (Twitter)</span>
          </a>
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <Youtube className="w-5 h-5 transition-transform duration-300 hover:scale-125" />
            <span className="sr-only">YouTube</span>
          </a>
        </div>

        {/* Bottom Section with Divider */}
        <div className="mt-6 pt-6 border-t border-gray-300">
          <p className="text-center text-gray-500 text-xs">
            © {currentYear} Auta Rent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
