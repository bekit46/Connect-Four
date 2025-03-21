import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoSearchOutline } from "react-icons/io5";
import { FaUser, FaPhone, FaCreditCard, FaTools, FaQuestionCircle, FaCar, FaShieldAlt, FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../HeroHelpCenter.css';

const HeroHelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const categories = [
    { id: 'account', title: 'Account', description: 'Manage your account details.', icon: <FaUser /> },
    { id: 'contact', title: 'Contact', description: 'Reach our support team.', icon: <FaPhone /> },
    { id: 'payment', title: 'Payment', description: 'Payment methods and billing.', icon: <FaCreditCard /> },
    { id: 'tech-support', title: 'Technical Support', description: 'Fix technical issues.', icon: <FaTools /> },
    { id: 'faq', title: 'FAQ', description: 'Common car rental questions.', icon: <FaQuestionCircle /> },
    { id: 'vehicles', title: 'Vehicles', description: 'Explore car options.', icon: <FaCar /> },
    { id: 'insurance', title: 'Insurance', description: 'Coverage and protection plans.', icon: <FaShieldAlt /> },
    { id: 'locations', title: 'Locations', description: 'Pickup and drop-off points.', icon: <FaMapMarkerAlt /> },
    { id: 'campaigns', title: 'Campaigns', description: 'Learn about our offers.', icon: <FaTag /> },
  ];

  const categoryContent = {
    account: {
      title: 'Account Information',
      content: (
        <div className="text-gray-700">
          <p className="mb-4">Take control of your account with ease and personalize your rental experience:</p>
          <ul className="list-disc pl-5">
            <li><strong>Profile Management:</strong> Update your name, email, or phone number in just a few clicks.</li>
            <li><strong>Secure Passwords:</strong> Reset or strengthen your password whenever you need.</li>
            <li><strong>Payment Flexibility:</strong> Add, edit, or remove credit/debit cards seamlessly.</li>
            <li><strong>Booking Insights:</strong> Review your rental history and track upcoming reservations.</li>
            <li><strong>Member Perks:</strong> Unlock exclusive discounts, save preferences, and enjoy a tailored experience.</li>
            <li><strong>Enhanced Security:</strong> Boost protection with two-factor authentication—peace of mind, guaranteed.</li>
          </ul>
        </div>
      ),
    },
    contact: {
      title: 'Contact Support',
      content: (
        <div className="text-gray-700">
          <p>We’re just a call, click, or email away—ready to assist you anytime:</p>
          <ul className="list-disc pl-5">
            <li><strong>Contact Page:</strong> <Link to="/contactUs" className="text-blue-500 hover:underline">Visit us</Link> for instant help.</li>
            <li><strong>Email Support:</strong> Reach us at <span className="text-blue-500 cursor-pointer" onClick={() => { navigator.clipboard.writeText('support@autarent.com'); alert('Copied!'); }}>support@autarent.com</span>—we’ll reply promptly.</li>
            <li><strong>Phone Support:</strong> Call +90 539 813 9646—our friendly team is available 24/7.</li>
          </ul>
        </div>
      ),
    },
    payment: {
      title: 'Payment Methods and Billing',
      content: (
        <div className="text-gray-700">
          <p className="mb-4">Enjoy hassle-free payments with options designed for your convenience:</p>
          <ul className="list-disc pl-5">
            <li><strong>Payment Options:</strong> Pay with Visa, MasterCard, American Express, PayPal, Apple Pay, Google Pay, bank transfers (select regions), or cash at our branches.</li>
            <li><strong>Clear Billing:</strong> Receive detailed invoices via email after payment—choose USD, EUR, or TRY.</li>
            <li><strong>Transaction Security:</strong> Rest easy with SSL encryption and 3D Secure authentication.</li>
          </ul>
        </div>
      ),
    },
    'tech-support': {
      title: 'Technical Support',
      content: (
        <div className="text-gray-700">
          <p className="mb-4">Got a tech glitch? Our expert team is here to get you back on track:</p>
          <ul className="list-disc pl-5">
            <li><strong>Email Help:</strong> Contact <span className="text-blue-500 cursor-pointer" onClick={() => { navigator.clipboard.writeText('techsupport@autarent.com'); alert('Copied!'); }}>techsupport@autarent.com</span>—fast responses guaranteed.</li>
            <li><strong>Phone Help:</strong> Call +90 539 813 9646 anytime—24/7 support at your fingertips.</li>
            <li><strong>Live Chat:</strong> Chat with us on our website for instant solutions.</li>
            <li><strong>Common Fixes:</strong> Login issues, app troubleshooting, payment hiccups—sorted in no time.</li>
          </ul>
        </div>
      ),
    },
    faq: {
      title: 'Frequently Asked Questions',
      content: (
        <div className="text-gray-700">
          <p className="mb-4">Find quick, clear answers to the questions we hear most:</p>
          <ul className="list-disc pl-5">
            <li><strong>Rental Requirements:</strong> A valid driver’s license, a credit card, and be 18 or older.</li>
            <li><strong>Insurance Coverage:</strong> Basic coverage is standard—optional upgrades available.</li>
            <li><strong>Late Returns:</strong> Additional fees may apply—check our policy for details.</li>
            <li><strong>More Answers:</strong> Dive deeper on our <Link to="/faqs" className="text-blue-500 hover:underline">FAQ Page</Link>.</li>
          </ul>
        </div>
      ),
    },
    vehicles: {
      title: 'Vehicle Options',
      content: (
        <div className="text-gray-700">
          <p className="mb-4">Discover the perfect ride for every journey:</p>
          <ul className="list-disc pl-5">
            <li><strong>Fleet Variety:</strong> Choose from sedans, SUVs, coupes, hatchbacks, convertibles, vans, or pickups.</li>
            <li><strong>Top Features:</strong> Enjoy GPS, Bluetooth, AC, and optional add-ons like child seats or roof racks.</li>
            <li><strong>Book Now:</strong> Browse and reserve on <Link to="/all-cars" className="text-blue-500 hover:underline">our fleet page</Link>.</li>
          </ul>
        </div>
      ),
    },
    insurance: {
      title: 'Insurance & Coverage',
      content: (
        <div className="text-gray-700">
          <p className="mb-4">Drive with confidence knowing you’re covered:</p>
          <ul className="list-disc pl-5">
            <li><strong>Standard Plan:</strong> Includes collision protection, theft coverage, and third-party liability.</li>
            <li><strong>Extra Coverage:</strong> Add zero-deductible plans, personal effects protection, or roadside assistance.</li>
            <li><strong>Easy Add-Ons:</strong> Customize your plan online during booking or at pickup.</li>
          </ul>
        </div>
      ),
    },
    locations: {
      title: 'Pickup & Drop-off Locations',
      content: (
        <div className="text-gray-700">
          <p className="mb-4">Rent and return with ease at our convenient locations:</p>
          <ul className="list-disc pl-5">
            <li><strong>Levent:</strong> Büyükdere Cd. No:1, Istanbul—central and accessible.</li>
            <li><strong>Kadıköy:</strong> Bağdat Cd. No:25, Istanbul—a vibrant hub.</li>
            <li><strong>Eskişehir:</strong> İsmet İnönü Cd. No:7—perfect for explorers.</li>
            <li><strong>Kahramanmaraş:</strong> Trabzon Cd. No:10—ready for your journey.</li>
            <li><strong>One-Way Rentals:</strong> Flexibility is our promise—travel your way.</li>
          </ul>
        </div>
      ),
    },
    campaigns: {
      title: 'Campaigns & Offers',
      content: (
        <div className="text-gray-700">
          <p className="mb-4">Save big with our exclusive deals and promotions:</p>
          <ul className="list-disc pl-5">
            <li><strong>Offer Rules:</strong> One promo code per rental, non-combinable, valid for a limited time.</li>
            <li><strong>Redeem Savings:</strong> Apply your code at checkout and enjoy the discount.</li>
            <li><strong>Current Deals:</strong> Explore offers on our <Link to="/campaign" className="text-blue-500 hover:underline">Campaign Page</Link>.</li>
          </ul>
        </div>
      ),
    },
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const filtered = categories.filter((cat) =>
        cat.title.toLowerCase().includes(value.toLowerCase())
      ).map((cat) => cat.title);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = () => {
    const matchedCategory = categories.find((cat) =>
      cat.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (matchedCategory) {
      document.getElementById(`category-${matchedCategory.id}`).scrollIntoView({ behavior: 'smooth' });
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (title) => {
    const matchedCategory = categories.find((cat) => cat.title === title);
    if (matchedCategory) {
      document.getElementById(`category-${matchedCategory.id}`).scrollIntoView({ behavior: 'smooth' });
      setSearchTerm(title);
      setSuggestions([]);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#1c2127] to-[#2a3444] text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/help_center.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c2127]/90 to-[#1c2127]/80"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg mb-6">
            <div className="bg-[#1c2127] px-6 py-2 rounded-md">
              <span className="text-sm font-medium uppercase tracking-widest text-blue-400">
                We're Here to Help
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest leading-tight mb-4">
            Help Center
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            AUTA Rent - Quick Answers to Your Questions
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="bg-white text-gray-800 py-16 px-6 rounded-t-3xl -mt-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Search Bar */}
          <motion.div variants={fadeIn} className="mb-12 flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full p-4 rounded-l-full border-2 border-gray-200 focus:outline-none focus:border-blue-500 text-gray-800"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button
                className="absolute right-0 top-0 h-full px-6 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 transition-colors"
                onClick={handleSearchSubmit}
              >
                <IoSearchOutline size={24} />
              </button>
              {suggestions.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white rounded-b-xl shadow-lg mt-2 z-10">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="p-3 hover:bg-gray-100 cursor-pointer text-gray-800"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Categories Navigation */}
          <motion.div
            variants={fadeIn}
            className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {categories.map((category, index) => (
              <a
                key={category.id}
                href={`#category-${category.id}`}
                className="bg-gray-50 hover:bg-blue-50 rounded-xl p-6 text-center transition-colors duration-300 shadow-sm border border-gray-100 hover:border-blue-200"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2a3444]">{category.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{category.description}</p>
              </a>
            ))}
          </motion.div>

          {/* Category Sections */}
          <div className="space-y-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                id={`category-${category.id}`}
                variants={fadeIn}
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold mb-6 text-[#2a3444] border-b border-gray-200 pb-2">
                  {categoryContent[category.id].title}
                </h2>
                <HelpItem
                  title={category.title}
                  content={categoryContent[category.id].content}
                  index={index + 1}
                />
              </motion.div>
            ))}
          </div>

          {/* Last Updated */}
          <motion.div variants={fadeIn} className="mt-12 text-center text-gray-500 text-sm">
            <p>Last Updated: March 07, 2025</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Help Item Component with Accordion
const HelpItem = ({ title, content, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-300"
      >
        <div className="flex items-start">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white font-medium mr-3 text-sm">
            {index}
          </div>
          <h3 className="text-lg font-semibold text-[#2a3444]">{title}</h3>
        </div>
        <span>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-4 pt-2 bg-gray-50">
          <div className="pl-11">{content}</div>
        </div>
      )}
    </div>
  );
};

export default HeroHelpCenter;