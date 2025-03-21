import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


function HeroAboutUs() {
  // Animasyon varyantları
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative text-center">
      
      {/* Hero Section - Parallax Effect */}
      <div className="relative h-[80vh] w-full bg-fixed bg-cover bg-center overflow-hidden" 
           style={{ backgroundImage: "url('/bmw_m8_wallpaper.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex flex-col justify-center items-center p-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest leading-tight text-white mb-4">
                AUTA RENT
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mt-4 max-w-2xl mx-auto font-light">
                Your Trusted Car Rental Service Since 1985
            </p>
            <div className="mt-8">
              <Link to="/all-cars">
              <button className="bg-royalblue hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 uppercase tracking-wider">
                Explore Our Fleet
              </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Foundation Story - With Card Design */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl"
          >
            <h2 className="text-4xl font-bold uppercase tracking-widest leading-tight mb-8 text-center">    
              AUTA'S FOUNDATION STORY          
            </h2>
            <p className="text-lg text-gray-100 leading-relaxed">
              Our car rental company was founded in Turkey in 1985 as the dream of four university students. Today, we are one of the most established companies in the sector worldwide, operating with over 2,100 branches in approximately 110 countries. Additionally, we serve our customers globally with more than 4,000 rental offices. 
            </p>
            <p className="text-lg text-gray-100 leading-relaxed mt-4">
              At AUTA, we take pride in being one of the most accessible, innovative, and opportunity-driven players in the car rental industry. Our continuous achievements in car rental and leasing drive us to push the boundaries, setting new industry standards. This experience and success allow us to take firm steps in pioneering the sector by leveraging new technologies.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section - With Icon */}
      <div className="bg-gray-50 text-gray-800 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-royalblue flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl font-bold uppercase tracking-widest leading-tight mb-8 text-center text-royalblue">    
                OUR MISSION
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              At AUTA Rent a Car, we strive to be pioneers of innovation, ensuring high customer satisfaction and fostering industry development through our global car rental services. Our AUTA App provides digital access to over 280,000 vehicles in approximately 110 countries, facilitating seamless adaptation to the modern world through digital solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              These efforts make our services easily accessible in the digital sphere, ensuring our customers enjoy an effortless experience. We continue working with determination to drive industry growth, provide premium services, and secure the car rental sector's rightful place in the digital era.
            </p>
          </motion.div>
        </div>
      </div>

      {/* AUTA Awards - With Trophy Icon */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl font-bold uppercase tracking-widest leading-tight mb-8 text-center">    
                AUTA TURKEY AWARDS
            </h2>
            <div className="p-6 bg-white/5 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">AUTA World Conference 2018 Marrakech</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                The annual AUTA World Conference was held in Marrakech, Morocco, from October 10–14, 2018. Attended by executives and representatives from over 100 countries, AUTA Rent a Car Turkey was honored with the <span className="font-bold text-yellow-300">"Business Development"</span> award at the prestigious event.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partnered Brands Section - With Hover Effects */}
      <div className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold uppercase tracking-widest leading-tight mb-16 text-center">
              BRANDS WE PARTNER WITH
            </h2>

            {/* Brand Logos - Enhanced Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
              {[
                { src: "/Audi_Logo.png", alt: "Audi" },
                { src: "/BMW_Logo.png", alt: "BMW" },
                { src: "/Lamborghini_Logo.png", alt: "Lamborghini" },
                { src: "/Mercedes_Logo.png", alt: "Mercedes" },
                { src: "/Peugeot_logo.png", alt: "Peugeot" },
                { src: "/Renault_logo.png", alt: "Renault" },
                { src: "/Porsche_Logo.png", alt: "Porsche" },
                { src: "/Alfa_Romeo_Logo.png", alt: "Alfa Romeo" }
              ].map((brand, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 h-36 flex items-center justify-center">
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="max-h-20 w-auto filter transition-all duration-300"
                    />
                  </div>
                  <p className="mt-3 text-center font-medium text-gray-600">{brand.alt}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative py-20 px-6 bg-cover bg-center" style={{ backgroundImage: "url('/bmw_m8_wallpaper.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Premium Car Rental?</h2>
            <p className="text-xl mb-8 text-gray-300">Join thousands of satisfied customers around the world.</p>
            <Link to="/all-cars">
              <button className="bg-royalblue hover:bg-white hover:text-royalblue text-white font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
                Book Your Car Now
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutUs;
