import React, { useState, useCallback } from "react";
import { Separator } from "@/components/ui/separator";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { useCar } from "@/components/CarContext";
import { useRental } from "@/components/RentalContext";
import { useNavigate } from "react-router-dom";

function CarCard({ car, showPopup, errorMessage, setShowPopup }) {
  const { setSelectedCar } = useCar();
  const { rentalData } = useRental();
  const navigate = useNavigate();

  const handleRentNow = () => {
    const { pickUpLocation, dropOffLocation, pickUpDate, dropOffDate, pickUpTime, dropOffTime } = rentalData;

    // Check if all required fields are filled
    const isValid =
      pickUpLocation && dropOffLocation && pickUpDate && dropOffDate && pickUpTime && dropOffTime;

    if (!isValid) {
      setShowPopup(true);
      return;
    }

    if (dropOffDate < pickUpDate) {
      setShowPopup(true);
      return;
    }

    // If validation passes, proceed with rental
    setSelectedCar(car);
    navigate("/pricing");
  };

  // Close modal callback to ensure immediate state update
  const handleCloseModal = useCallback(() => {
    setShowPopup(false); // Set modal visibility to false
  }, [setShowPopup]);

  return (
    <div className="bg-white shadow-lg rounded-xl p-3 sm:p-4 flex flex-col items-center hover:scale-105 transition-transform my-3 sm:my-4 h-full">
      {/* Image with Responsive Size */}
      <img
        className="mb-2 sm:mb-4 w-full h-[70px] sm:h-[90px] object-cover rounded-md"
        src={car?.image}
        alt={car?.name}
      />

      {/* Car Name - Fixed Height for Alignment */}

        <h2 className="font-bold text-black text-base sm:text-lg mb-2 h-auto sm:h-10 flex items-center justify-center text-center">
          {car?.name}
        </h2>
        <Separator />
      <div className="p-2 sm:p-4 w-full flex-grow">
        {/* Icons and Car Details */}
        <div className="grid grid-cols-3 mt-3 sm:mt-5 text-gray-700 text-center gap-2 sm:gap-5 text-sm sm:text-base">
          <div className="flex flex-col items-center">
            <BsFillFuelPumpFill className="text-sm sm:text-base" />
            <h2 className="text-xs sm:text-sm">{car.fuel}</h2>
          </div>

          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-sm sm:text-base" />
            <h2 className="text-xs sm:text-sm">{car.gear}</h2>
          </div>

          <div className="flex flex-col items-center">
            <IoCarSport className="text-sm sm:text-base" />
            <h2 className="text-xs sm:text-sm">{car.type}</h2>
          </div>
        </div>

        {/* Price and Rent Now Button - Inline Layout */}
        <div className="flex justify-between items-center mt-4 sm:mt-6">
          <div className="flex items-center gap-1">
            <IoIosPricetags className="text-[#0b385f] text-xs sm:text-sm" />
            <h2 className="flex items-center text-sm sm:text-base text-black font-semibold">
              ${car.price}<span className="text-sm text-gray-500 font-medium ml-1">/day</span>
            </h2>
          </div>

          <button
            onClick={handleRentNow}
            className="bg-royalblue text-white px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-l rounded-r hover:bg-blue-700 transition"
          >
            Rent Now
          </button>
        </div>
      </div>

      {/* Error Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
          <div className="bg-white rounded-xl p-6 w-96 text-center shadow-md">
            <h3 className="text-lg font-semibold mb-4">Error</h3>
            <p>{errorMessage}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-l rounded-r hover:bg-blue-800 transition-all"
              onClick={handleCloseModal}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarCard;