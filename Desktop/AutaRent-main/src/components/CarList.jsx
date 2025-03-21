import React, { useState, useEffect } from "react";
import CarCard from "./CarCard.jsx";
import CarFilter from "./CarFilter.jsx";
import Search from "./Search";
import DatePicker from "./DatePicker";
import HourPicker from "./HourPicker";
import { Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRental } from "@/components/RentalContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios"; // Import axios for API requests

function CarList() {
  const [selectedPrice, setSelectedPrice] = useState(500);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [isAutomatic, setIsAutomatic] = useState(false);

  const { rentalData, resetRentalData } = useRental();
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("Please fill in all required fields before searching.");
  const [showPopup, setShowPopup] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // New state to store fetched car data
  const [cars, setCars] = useState([]);

  // Fetch car data from the backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:8080/cars/getAllCars");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setError("Failed to fetch car data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Filtering Logic
  const filteredCars = cars.filter((car) => {
    return (
      (selectedBrand === "" || car.name.includes(selectedBrand)) &&
      (selectedFuel === "" || car.fuel === selectedFuel) &&
      (selectedType === "" || car.type === selectedType) &&
      (car.price <= selectedPrice) &&
      (isAutomatic ? car.gear === "Automatic" : true)
    );
  });

  // Reset function for filters
  const handleReset = () => {
    setSelectedPrice(500);
    setSelectedBrand("");
    setSelectedFuel("");
    setSelectedType("");
    setIsAutomatic(false);
  };

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

    // Refresh the current page to apply the search
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-16">
      {/* Search Container */}
      <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md border border-blue-200 shadow-lg p-5 mb-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Pick-up Information */}
          <div className="md:col-span-1 p-2 bg-blue-50/70 rounded-xl">
            <h3 className="text-blue-800 text-left text-sm font-medium mb-3 px-2">Pick-up Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Search
                placeholder="Pick-up Location"
                type="pickUp"
                defaultValue={rentalData.pickUpLocation} // Pre-fill with rentalData
              />
              <div className="grid grid-cols-2 gap-4">
                <DatePicker
                  placeholder="Date"
                  type="pickUp"
                  defaultValue={rentalData.pickUpDate} // Pre-fill with rentalData
                />
                <HourPicker
                  placeholder="Time"
                  type="pickUp"
                  defaultValue={rentalData.pickUpTime} // Pre-fill with rentalData
                />
              </div>
            </div>
          </div>

          {/* Drop-off Information */}
          <div className="md:col-span-1 p-2 bg-blue-50/70 rounded-xl">
            <h3 className="text-blue-800 text-left text-sm font-medium mb-3 px-2">Drop-off Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Search
                placeholder="Drop-off Location"
                type="dropOff"
                defaultValue={rentalData.dropOffLocation} // Pre-fill with rentalData
              />
              <div className="grid grid-cols-2 gap-4">
                <DatePicker
                  placeholder="Date"
                  type="dropOff"
                  defaultValue={rentalData.dropOffDate} // Pre-fill with rentalData
                />
                <HourPicker
                  placeholder="Time"
                  type="dropOff"
                  defaultValue={rentalData.dropOffTime} // Pre-fill with rentalData
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
            <span>Update Search</span>
          </Button>
        </div>
      </div>

      <CarFilter
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedFuel={selectedFuel}
        setSelectedFuel={setSelectedFuel}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        isAutomatic={isAutomatic}
        setIsAutomatic={setIsAutomatic}
        handleReset={handleReset}
      />

      <h2 className="font-bold text-xl sm:text-3xl text-center sm:mt-7 mt-4">Available Cars</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 py-2">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <CarCard
              car={car}
              key={index}
              showPopup={showPopup}
              errorMessage={errorMessage}
              setShowPopup={setShowPopup}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold my-8 sm:my-16">
            Sorry! We don't have any cars matching your filter.
          </p>
        )}
      </div>

      {/* Error Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
          <div className="bg-white rounded-xl p-6 w-96 text-center shadow-md">
            <h3 className="text-lg font-semibold mb-4">Error</h3>
            <p>{errorMessage}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-l rounded-r hover:bg-blue-800 transition-all"
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

export default CarList;
