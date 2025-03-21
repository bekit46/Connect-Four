// Hero.jsx
import React from "react";
import Search from "./Search";
import DatePicker from "./DatePicker";
import HourPicker from "./HourPicker";
import { Search as SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CarBg from "/all_cars.jpg";

function Hero2() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Background iMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src={CarBg}
          alt="Car Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-xl sm:text-2xl font-light mb-3 text-gray-200 tracking-wide">
            EXPERIENCE LUXURY ON WHEELS
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Rent Your Dream Car <span className="text-blue-500">Today</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Choose from our premium selection of luxury and sports cars. Book in minutes and hit the road in style.
          </p>
        </div>

        {/* Search Container */}
        <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Pick-up Information */}
            <div className="md:col-span-1 p-2 bg-white/5 rounded-xl">
              <h3 className="text-white text-left text-sm font-medium mb-3 px-2">Pick-up Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Search placeholder="Pick-up Location" />
                <div className="grid grid-cols-2 gap-4">
                  <DatePicker placeholder="Date" />
                  <HourPicker placeholder="Time" />
                </div>
              </div>
            </div>
            
            {/* Drop-off Information */}
            <div className="md:col-span-1 p-2 bg-white/5 rounded-xl">
              <h3 className="text-white text-left text-sm font-medium mb-3 px-2">Drop-off Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Search placeholder="Drop-off Location" />
                <div className="grid grid-cols-2 gap-4">
                  <DatePicker placeholder="Date" />
                  <HourPicker placeholder="Time" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Search Button */}
          <div className="flex justify-center mt-2">
            <Link to="/all-cars">
              <Button 
                className={cn(
                  "h-14 px-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white",
                  "rounded-l rounded-r flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30",
                  "transition-all duration-300 text-base font-medium"
                )}
              >
                <SearchIcon className="h-5 w-5" />
                
                <span>Search Available Cars</span>

              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;