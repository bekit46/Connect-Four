import React, { useState } from "react";
import axios from "axios";

function DeleteCarModal({ carId, onClose, onConfirmDelete }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    if (!carId) {
      console.error("Car ID is missing");
      return;
    }
  
    setLoading(true);
    try {
      const response = await axios.delete(`http://localhost:8080/cars/delete/${carId}`);
      console.log(response.data); // Log success message
      onConfirmDelete(); // Call the confirm delete callback to update state
      onClose(); // Close modal after successful deletion
    } catch (error) {
      console.error("Error deleting car:", error.response || error.message);
      setError("Failed to delete car.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 p-4">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-[15px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl shadow-lg transition-all max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Delete Car</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl sm:text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="mb-4">
          <p>Are you sure you want to delete this car?</p>
          {error && <p className="text-red-500">{error}</p>}
        </div>

        <div className="flex justify-between gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-400 text-white p-2 w-full sm:w-1/2 rounded-md hover:bg-gray-500 transition duration-200 mb-2 sm:mb-0"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className={`${
              loading ? "bg-gray-300" : "bg-red-500"
            } text-white p-2 w-full sm:w-1/2 rounded-md hover:bg-red-600 transition duration-200`}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete Car"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteCarModal;
