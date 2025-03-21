import React, { useState, useEffect } from "react";
import Search from "./Search";
import DatePicker from "./DatePicker";
import HourPicker from "./HourPicker";
import { Search as SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRental } from "@/components/RentalContext";

function LocationDateHourBar() {
  const { rentalData, setRentalData } = useRental();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled
    console.log(rentalData);
    const {
      pickUpLocation,
      dropOffLocation,
      pickUpDate,
      dropOffDate,
      pickUpTime,
      dropOffTime,
    } = rentalData;

    // Ensure pick-up and drop-off dates are properly checked
    const isValid =
      pickUpLocation &&
      dropOffLocation &&
      pickUpDate &&
      dropOffDate &&
      pickUpTime &&
      dropOffTime;

    setIsReady(isValid);
  }, [rentalData]);

  const handleSearchClick = () => {
    const {
      pickUpLocation,
      dropOffLocation,
      pickUpDate,
      dropOffDate,
      pickUpTime,
      dropOffTime,
    } = rentalData;

    if (!isReady) {
      setErrorMessage("Please fill in all required fields before searching.");
      setShowPopup(true);
      return;
    }

    // Convert pickUpDate and dropOffDate to Date objects for comparison if they are strings
    const pickUpDateObj = new Date(pickUpDate);
    const dropOffDateObj = new Date(dropOffDate);

    // Check if dropOffDate is before pickUpDate
    if (dropOffDateObj < pickUpDateObj) {
      setErrorMessage("Drop-off date cannot be before the pick-up date.");
      setShowPopup(true);
      return;
    }

    // Navigate if valid
    navigate("/all-cars");
  };

  // Updated approach with more specific update functions
  const updatePickUpLocation = (value) => {
    setRentalData(prev => ({ ...prev, pickUpLocation: value }));
  };
  
  const updateDropOffLocation = (value) => {
    setRentalData(prev => ({ ...prev, dropOffLocation: value }));
  };
  
  const updatePickUpDate = (value) => {
    setRentalData(prev => ({ ...prev, pickUpDate: value }));
  };
  
  const updateDropOffDate = (value) => {
    setRentalData(prev => ({ ...prev, dropOffDate: value }));
  };
  
  const updatePickUpTime = (value) => {
    setRentalData(prev => ({ ...prev, pickUpTime: value }));
  };
  
  const updateDropOffTime = (value) => {
    setRentalData(prev => ({ ...prev, dropOffTime: value }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-5 pb-8 mt-24 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Pick-up Information */}
        <div className="md:col-span-1 p-2 bg-white/5 rounded-xl">
          <h3 className="text-blue-800 text-left text-sm font-medium mb-3 px-2">Pick-up Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Search
              placeholder="Pick-up Location"
              value={rentalData.pickUpLocation || ""}
              name="pickUpLocation" 
              onChange={(e) => updatePickUpLocation(e.target.value)}
            />
            <div className="grid grid-cols-2 gap-4">
              <DatePicker
                placeholder="Date"
                value={rentalData.pickUpDate || ""}
                name="pickUpDate"
                onChange={(e) => updatePickUpDate(e.target.value)}
              />
              <HourPicker
                placeholder="Time"
                value={rentalData.pickUpTime || ""}
                name="pickUpTime"
                onChange={(e) => updatePickUpTime(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Drop-off Information */}
        <div className="md:col-span-1 p-2 bg-white/5 rounded-xl">
          <h3 className="text-blue-800 text-left text-sm font-medium mb-3 px-2">Drop-off Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Search
              placeholder="Drop-off Location"
              value={rentalData.dropOffLocation || ""}
              name="dropOffLocation"
              onChange={(e) => updateDropOffLocation(e.target.value)}
            />
            <div className="grid grid-cols-2 gap-4">
              <DatePicker
                placeholder="Date"
                value={rentalData.dropOffDate || ""}
                name="dropOffDate"
                onChange={(e) => updateDropOffDate(e.target.value)}
              />
              <HourPicker
                placeholder="Time"
                value={rentalData.dropOffTime || ""}
                name="dropOffTime"
                onChange={(e) => updateDropOffTime(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center mt-2">
        <Button
          className={cn(
            "h-14 px-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white",
            "rounded-l rounded-r flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30",
            "transition-all duration-300 text-base font-medium"
          )}
          onClick={handleSearchClick}
        >
          <SearchIcon className="h-5 w-5" />
          <span>Search Available Cars</span>
        </Button>
      </div>

      {/* Error Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black rounded-lg p-6 w-96 text-center shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Error</h3>
            <p>{errorMessage}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
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

export default LocationDateHourBar;