import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#1c2127] to-[#2a3444] text-white">
      {/* Hero Section */}
      <div className="relative py-24 px-6">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/privacy_bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c2127]/90 to-[#1c2127]/80"></div>
        </div>

        {/* Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg mb-6">
            <div className="bg-[#1c2127] px-6 py-2 rounded-md">
              <span className="text-sm font-medium uppercase tracking-widest text-blue-400">
                Your Security is Our Priority
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest leading-tight mb-4">
            PRIVACY POLICY
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            AUTA Rent - Safe and Transparent Services
          </p>
          
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
        </motion.div>
      </div>

      {/* Privacy Policy Content */}
      <div className="bg-white text-gray-800 py-16 px-6 rounded-t-3xl -mt-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Table of Contents */}
          <motion.div 
            variants={fadeIn} 
            className="mb-12 p-6 bg-gray-50 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#2a3444] border-b border-gray-200 pb-2">Table of Contents</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {[
                "Introduction", 
                "Collected Information", 
                "Use of Information", 
                "Security", 
                "Cookies", 
                "Changes", 
                "Contact"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
                    {index + 1}
                  </div>
                  <a href={`#section-${index + 1}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-12">
            <PolicySection 
              id="section-1"
              number="1"
              title="Introduction"
              content="This Privacy Policy explains how we collect, use, and protect the personal information of individuals who use our website ('Users') as AUTA Rent ('We'). The security and data privacy of our customers is one of our top priorities."
            />
            
            <PolicySection 
              id="section-2"
              number="2"
              title="Collected Information"
              content="Personal data such as name, email address, phone number, address, and payment information may be collected during registration or booking processes. This information is used to improve our services and enhance the user experience. We may also store data such as vehicle preferences and rental history to offer personalized offers."
            />
            
            <PolicySection 
              id="section-3"
              number="3"
              title="Use of Information"
              content="The collected data is used for booking processes, customer support, marketing activities, and service development. Your data will not be shared with third parties without your consent; however, it may be disclosed to authorized authorities in case of legal obligations. We may use your information to personalize our services, inform you about promotions, and optimize vehicle delivery processes."
            />
            
            <PolicySection 
              id="section-4"
              number="4"
              title="Security"
              content="Industry-standard security measures are applied to protect user information. However, we cannot guarantee 100% security for data transmitted over the internet. We conduct regular security audits and apply the latest security protocols. We ensure the protection of payment information using SSL encryption and secure payment gateways."
            />
            
            <PolicySection 
              id="section-5"
              number="5"
              title="Cookies"
              content="Our website uses cookies to enhance the user experience and analyze site traffic. You can control your cookie preferences through your browser settings. Our site uses session cookies, persistent cookies, and third-party cookies. These cookies may be used to remember your preferences, analyze how you use the site, and display relevant ads."
            />
            
            <PolicySection 
              id="section-6"
              number="6"
              title="Changes"
              content="This Privacy Policy may be updated from time to time. In case of any changes, the updated policy will be published on our website. Significant changes will be notified to you via email. We recommend checking our privacy policy regularly."
            />
            
            <PolicySection 
              id="section-7"
              number="7"
              title="Contact"
              content="If you have any questions or concerns about our Privacy Policy, please contact us at info@autarent.com. Our data protection officer will respond to your privacy-related inquiries within 48 hours. You can also reach our customer service at +90 539 813 9646."
            />
          </div>

          {/* Contact Form or CTA */}
          <motion.div 
            variants={fadeIn}
            className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#2a3444]">Do You Have Questions?</h3>
            <p className="text-gray-700 mb-6">If you need more information about our privacy policy or how your data is protected, feel free to contact us.</p>
            <Link to="/contactUs">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Contact Us
              </button>
            </Link>
          </motion.div>
          
          {/* Last Updated */}
          <motion.div variants={fadeIn} className="mt-12 text-center text-gray-500 text-sm">
            <p>Last Updated: February 25, 2025</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const PolicySection = ({ id, number, title, content }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <motion.div 
      id={id}
      variants={fadeIn}
      className="policy-section scroll-mt-20"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            {number}
          </div>
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-bold mb-4 text-[#2a3444]">{title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {content}
          </p>
          <div className="w-full h-px bg-gray-200 mt-6"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
