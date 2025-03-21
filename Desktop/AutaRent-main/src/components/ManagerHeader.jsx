import React, { useState, useEffect } from "react";
import { UserButton, useUser, useClerk } from "@clerk/clerk-react";
import { Link, useLocation } from "react-router-dom";
import CarLogo from "/logo.png";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { MdManageAccounts } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdCarRental } from "react-icons/md";

function ManagerHeader() {
  const { user, isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Header */}
        <div className="hidden xl:flex items-center justify-between px-4 py-2 relative">
          {/* Left: Navigation Links */}
          <div className="flex items-center space-x-4 z-10">
            <Link
              to="/manager"
              className={`flex items-center gap-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50 ${
                isActive("/manager")
                  ? "text-royalblue font-semibold"
                  : "text-gray-700 hover:text-royalblue"
              }`}
            >
              <MdManageAccounts className="text-xl" />
              <span>Manager Menu</span>
            </Link>
            <Link
              to="/all-cars"
              className={`text-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50 ${
                isActive("/all-cars")
                  ? "text-royalblue font-semibold"
                  : "text-gray-700 hover:text-royalblue"
              }`}
            >
              Our Cars
            </Link>
            <Link
              to="/helpCenter"
              className={`text-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50 ${
                isActive("/helpCenter")
                  ? "text-royalblue font-semibold"
                  : "text-gray-700 hover:text-royalblue"
              }`}
            >
              Help Center
            </Link>
            <Link
              to="/about-us"
              className={`text-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50 ${
                isActive("/about-us")
                  ? "text-royalblue font-semibold"
                  : "text-gray-700 hover:text-royalblue"
              }`}
            >
              About Us
            </Link>
          </div>

          {/* Center: Logo - Absolutely positioned to center of screen */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto transform transition-transform duration-300 hover:scale-105"
                src={CarLogo}
                alt="Car Logo"
              />
            </Link>
          </div>

          {/* Right: Login/User Button */}
          <div className="flex items-center justify-end z-10 gap-4">
            <Link
              to="/my-cars"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50 ${
                isActive("/my-cars")
                  ? "text-royalblue font-semibold"
                  : "text-gray-700 hover:text-royalblue"
              }`}
            >
              My Cars
            </Link>
            {!isSignedIn ? (
              <button
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-royalblue hover:bg-blue-700 transition-all duration-300 hover:shadow-md"
                onClick={openSignIn}
              >
                Login | Register
              </button>
            ) : (
              <UserButton 
                afterSignOutUrl="/" 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
              />
            )}
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex xl:hidden items-center justify-between">
          {/* Left: Mobile Menu Button */}
          <div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-royalblue hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Center: Logo */}
          <div>
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto transform transition-transform duration-300 hover:scale-105"
                src={CarLogo}
                alt="Car Logo"
              />
            </Link>
          </div>
          
          {/* Right: User Button (if signed in) */}
          <div>{isSignedIn && <UserButton afterSignOutUrl="/" />}</div>          
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/manager"
              className={`flex items-center gap-x-2 px-3 py-2 rounded-md text-base font-medium ${
                isActive("/manager")
                  ? "text-royalblue bg-blue-50"
                  : "text-gray-700 hover:text-royalblue hover:bg-blue-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <MdManageAccounts className="text-2xl" />
              <span>Manager Menu</span>
            </Link>
            <Link
              to="/all-cars"
              className={`flex items-center gap-x-2 px-3 py-2 rounded-md text-base font-medium ${
                isActive("/all-cars")
                  ? "text-royalblue bg-blue-50"
                  : "text-gray-700 hover:text-royalblue hover:bg-blue-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <IoCarSport className="text-2xl"/>
              <span>Our Cars</span>
            </Link>
            <Link
              to="/my-cars"
              className={`flex items-center gap-x-2 px-3 py-2 rounded-md text-base font-medium ${
                isActive("/my-cars")
                  ? "text-royalblue bg-blue-50"
                  : "text-gray-700 hover:text-royalblue hover:bg-blue-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <MdCarRental className="text-3xl"/>
              <span>My Cars</span>
            </Link>
            <Link
              to="/helpCenter"
              className={`flex items-center gap-x-2 px-3 py-2 rounded-md text-base font-medium ${
                isActive("/helpCenter")
                  ? "text-royalblue bg-blue-50"
                  : "text-gray-700 hover:text-royalblue hover:bg-blue-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <RiCustomerService2Fill className="text-2xl"/>
              <span>Help Center</span>
            </Link>
            <Link
              to="/about-us"
              className={`flex items-center gap-x-2 px-3 py-2 rounded-md text-base font-medium ${
                isActive("/about-us")
                  ? "text-royalblue bg-blue-50"
                  : "text-gray-700 hover:text-royalblue hover:bg-blue-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <IoMdInformationCircle className="text-2xl"/>
              About Us
            </Link>
            {!isSignedIn && (
              <button
                className="mt-2 w-full flex justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-royalblue hover:bg-blue-700"
                onClick={() => {
                  openSignIn();
                  setMobileMenuOpen(false);
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default ManagerHeader;
