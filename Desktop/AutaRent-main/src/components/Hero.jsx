import React, { useState, useEffect } from "react";
import Search from "./Search";
import DatePicker from "./DatePicker";
import HourPicker from "./HourPicker";
import { Search as SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRental } from "@/components/RentalContext";

function Hero() {
  const { rentalData, resetRentalData } = useRental();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    resetRentalData();
  }, []);

  // Debugging rentalData
  useEffect(() => {
    console.log("Rental Data Updated:", rentalData);

    const { pickUpLocation, dropOffLocation, pickUpDate, dropOffDate, pickUpTime, dropOffTime } = rentalData;

    // Check if all required fields are filled
    const isValid =
      pickUpLocation && dropOffLocation && pickUpDate && dropOffDate && pickUpTime && dropOffTime;

    setIsReady(isValid);
  }, [rentalData]);

  const handleSearchClick = () => {
    const { pickUpLocation, dropOffLocation, pickUpDate, dropOffDate, pickUpTime, dropOffTime } = rentalData;

    if (!isReady) {
      setErrorMessage("Please fill in all required fields before searching.");
      setShowPopup(true);
      return;
    }

    if (dropOffDate < pickUpDate) {
      setErrorMessage("Drop-off date cannot be before the pick-up date.");
      setShowPopup(true);
      return;
    }

    // Navigate if valid
    navigate("/all-cars");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-xl sm:text-2xl font-light mb-3 text-gray-200 tracking-wide drop-shadow-xl">
            EXPERIENCE LUXURY ON WHEELS
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-xl">
            Rent Your Dream Car 
          </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-xl"><span className="text-blue-500 drop-shadow-xl">Today</span></h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 drop-shadow-xl">
            Choose from our premium selection of luxury and sports cars.
          </p>
        </div>

        {/* Search Container */}
        <div className="w-full max-w-6xl mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Pick-up Information */}
            <div className="md:col-span-1 p-2 bg-white/5 rounded-xl">
              <h3 className="text-white text-left text-sm font-medium mb-3 px-2">Pick-up Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Search
                  placeholder="Pick-up Location"
                  type="pickUp"
                  defaultValue={rentalData.pickUpLocation} // Pass defaultValue
                />
                <div className="grid grid-cols-2 gap-4">
                  <DatePicker
                    placeholder="Date"
                    type="pickUp"
                    defaultValue={rentalData.pickUpDate} // Pass defaultValue
                  />
                  <HourPicker
                    placeholder="Time"
                    type="pickUp"
                    defaultValue={rentalData.pickUpTime} // Pass defaultValue
                  />
                </div>
              </div>
            </div>

            {/* Drop-off Information */}
            <div className="md:col-span-1 p-2 bg-white/5 rounded-xl">
              <h3 className="text-white text-left text-sm font-medium mb-3 px-2">Drop-off Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Search
                  placeholder="Drop-off Location"
                  type="dropOff"
                  defaultValue={rentalData.dropOffLocation} // Pass defaultValue
                />
                <div className="grid grid-cols-2 gap-4">
                  <DatePicker
                    placeholder="Drop Date"
                    type="dropOff"
                    defaultValue={rentalData.dropOffDate} // Pass defaultValue
                  />
                  <HourPicker
                    placeholder="Drop-off Time"
                    type="dropOff"
                    defaultValue={rentalData.dropOffTime} // Pass defaultValue
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center mt-2">
            <Button
              className={cn(
                "h-14 px-8 rounded-lg bg-royalblue hover:bg-blue-600 text-white",
                "rounded-l rounded-r flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30",
                "transition-all duration-300 text-base font-medium"
              )}
              onClick={handleSearchClick}
            >
              <SearchIcon className="h-5 w-5" />
              <span>Search Available Cars</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Error Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black rounded-l rounded-r p-6 w-96 text-center shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Error</h3>
            <p>{errorMessage}</p>
            <button
              className="mt-4 px-12 py-2 bg-blue-600 text-white rounded-l rounded-r hover:bg-blue-700 transition-all"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;