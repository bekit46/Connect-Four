import React from "react";

function CarInfoModal({ car, onClose }) {
  if (!car) return null; // Ensure car data is available

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 p-4 z-50">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-[25px] w-full max-w-xs sm:max-w-sm md:max-w-lg shadow-lg transform transition-all max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Car Information</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            &times; {/* Close button */}
          </button>
        </div>

        <div className="mb-4 sm:mb-6 text-center">
          {/* Car Image */}
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-32 sm:h-40 object-cover rounded-lg mb-3 sm:mb-4"
          />
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-xs sm:text-sm font-medium text-gray-700">Car Name</label>
          <p className="text-sm sm:text-base text-gray-800">{car.name}</p>
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-xs sm:text-sm font-medium text-gray-700">Fuel Type</label>
          <p className="text-sm sm:text-base text-gray-800">{car.fuel}</p>
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-xs sm:text-sm font-medium text-gray-700">Year</label>
          <p className="text-sm sm:text-base text-gray-800">{car.year}</p>
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-xs sm:text-sm font-medium text-gray-700">Gear Type</label>
          <p className="text-sm sm:text-base text-gray-800">{car.gear}</p>
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-xs sm:text-sm font-medium text-gray-700">Car Type</label>
          <p className="text-sm sm:text-base text-gray-800">{car.type}</p>
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-xs sm:text-sm font-medium text-gray-700">Price</label>
          <p className="text-sm sm:text-base text-gray-800">${car.price}</p>
        </div>

        <div className="mb-4 sm:mb-6">
          <label className="block text-xs sm:text-sm font-medium text-gray-700">Car Location</label>
          <p className="text-sm sm:text-base text-gray-800 break-words">{car.location}</p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white p-2 sm:p-3 w-full sm:w-[200px] rounded-md sm:rounded-[5px] hover:bg-gray-500 transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarInfoModal;