import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone"; // for drag and drop image upload
import axios from "axios"; // Import axios

function CarUpdateModal({ car, onClose, onUpdate }) {
  const [updatedCar, setUpdatedCar] = useState({
    name: "",
    fuel: "",
    type: "",
    gear: "",
    year: "",
    price: "",
    location: "",
    rentDate: "",
    returnDate: "",
    image: "",
  });

  const [imageUploading, setImageUploading] = useState(false); // Move inside the component

  // Initialize useDropzone
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles[0]) {
        uploadImageToCloudinary(acceptedFiles[0]);
      }
    },
    accept: "image/*", // Allow only images
  });

  // Populate form with car data when the car prop changes
  useEffect(() => {
    if (car) {
      setUpdatedCar({
        name: car.name || "",
        fuel: car.fuel || "",
        type: car.type || "",
        gear: car.gear || "",
        year: car.year || "",
        price: car.price || "",
        location: car.location || "",
        rentDate: car.rentDate || "",
        returnDate: car.returnDate || "",
        image: car.image || "",
      });
    }
  }, [car]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedCar);
  };

  // Handle drag and drop for image upload
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "autarent"); // Replace with your Cloudinary upload preset
    formData.append("folder", "car_images"); // Specify the folder in Cloudinary

    try {
      setImageUploading(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dmwkq7vcb/image/upload",
        formData
      );
      setUpdatedCar((prevState) => ({
        ...prevState,
        image: response.data.secure_url, // Store Cloudinary URL in updatedCar
      }));
      setImageUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setImageUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 p-4 z-50">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-[25px] w-full max-w-xs sm:max-w-sm md:max-w-lg shadow-lg transform transition-all max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Update Car</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-xl">
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Car Name */}
          <div className="mb-3 sm:mb-4">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Car Name</label>
            <input
              type="text"
              name="name"
              value={updatedCar.name}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 mt-1 border border-gray-300 rounded-md sm:rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Fuel Type */}
          <div className="mb-3 sm:mb-4">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Fuel Type</label>
            <select
              name="fuel"
              value={updatedCar.fuel}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 mt-1 border border-gray-300 rounded-md sm:rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Gasoline">Gasoline</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          {/* Car Type */}
          <div className="mb-3 sm:mb-4">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Car Type</label>
            <select
              name="type"
              value={updatedCar.type}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 mt-1 border border-gray-300 rounded-md sm:rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Coupe">Coupe</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Cabrio">Cabrio</option>
              <option value="Van">Van</option>
              <option value="Pick-Up">Pick-Up</option>
            </select>
          </div>

          {/* Gear Type */}
          <div className="mb-3 sm:mb-4">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Gear Type</label>
            <select
              name="gear"
              value={updatedCar.gear}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 mt-1 border border-gray-300 rounded-md sm:rounded-[5px] focus:outline-none focus:border-blue-500"
            >
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>

          {/* Year */}
          <div className="mb-3 sm:mb-4">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Year</label>
            <input
              type="number"
              name="year"
              value={updatedCar.year}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 mt-1 border border-gray-300 rounded-md sm:rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-3 sm:mb-4">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={updatedCar.price}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 mt-1 border border-gray-300 rounded-md sm:rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Location */}
          <div className="mb-3 sm:mb-4">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Car Location</label>
            <select
              name="location"
              value={updatedCar.location}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 mt-1 border border-gray-300 rounded-md sm:rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="İstanbul Airport">İstanbul Airport</option>
              <option value="Sabiha Gökçen Airport">Sabiha Gökçen Airport</option>
              <option value="Atatürk Airport">Atatürk Airport</option>
              <option value="Levent/İstanbul">Levent/İstanbul</option>
              <option value="Ortaköy/İstanbul">Ortaköy/İstanbul</option>
              <option value="Avcılar/İstanbul">Avcılar/İstanbul</option>
            </select>
          </div>

          {/* Rent Date */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Rent Date</label>
            <input
              type="date"
              name="rentDate"
              value={updatedCar.rentDate}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 mt-1 border border-gray-300 rounded-md sm:rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Return Date */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Return Date</label>
            <input
              type="date"
              name="returnDate"
              value={updatedCar.returnDate}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 mt-1 border border-gray-300 rounded-md sm:rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Drag-and-drop image upload */}
          <div className="mb-2">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Car Image</label>
            <div {...getRootProps()} className="border border-gray-300 p-4 rounded-md text-center cursor-pointer">
              <input {...getInputProps()} />
              <p>Click to select an image</p>
              {imageUploading && <p>Uploading...</p>}
              {updatedCar.image && <img src={updatedCar.image} alt="Car" className="mt-2 w-full h-32 object-contain" />}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white w-full sm:w-[200px] p-2 sm:p-3 rounded-md sm:rounded-[5px] hover:bg-gray-600 transition duration-200 mb-2 sm:mb-0"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white w-full sm:w-[200px] p-2 sm:p-3 rounded-md sm:rounded-[5px] hover:bg-green-600 transition duration-200"
            >
              Update Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CarUpdateModal;