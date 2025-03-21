import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Data from "../Shared/Data.jsx";
import axios from "axios"; // Import axios
import { useDropzone } from "react-dropzone"; // Import react-dropzone

function AddCarModal({ onClose }) {
  const [carData, setCarData] = useState({
    name: "",
    fuel: "",
    year: "",
    gear: "",
    type: "",
    price: "",
    location: "",
    image: "",
  });

  const [imageUploading, setImageUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Cloudinary upload function
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
      setCarData((prevState) => ({
        ...prevState,
        image: response.data.secure_url, // Store Cloudinary URL in carData
      }));
      setImageUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setImageUploading(false);
    }
  };

  const onDrop = (acceptedFiles) => {
    console.log("Files dropped:", acceptedFiles); // Debugging line
    if (acceptedFiles && acceptedFiles[0]) {
      uploadImageToCloudinary(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Allow only images
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/cars/add", carData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data); // Log success message
      onClose(); // Close modal after successful submission
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 p-4">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-[15px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl shadow-lg transition-all max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Add New Car</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-xl sm:text-2xl">
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Car Name */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Car Name</label>
            <input
              type="text"
              name="name"
              value={carData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Fuel Type</label>
            <Select value={carData.fuel} onValueChange={(value) => setCarData({ ...carData, fuel: value })}>
              <SelectTrigger className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <SelectValue placeholder="Select Fuel Type" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50 shadow-lg rounded-md">
                <SelectItem value="Gasoline">Gasoline</SelectItem>
                <SelectItem value="Diesel">Diesel</SelectItem>
                <SelectItem value="Electric">Electric</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Year */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Year</label>
            <input
              type="text"
              name="year"
              value={carData.year}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gear Type */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Gear Type</label>
            <Select value={carData.gear} onValueChange={(value) => setCarData({ ...carData, gear: value })}>
              <SelectTrigger className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <SelectValue placeholder="Select Gear Type" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50 shadow-lg rounded-md">
                <SelectItem value="Automatic">Automatic</SelectItem>
                <SelectItem value="Manual">Manual</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Car Type */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Car Type</label>
            <Select value={carData.type} onValueChange={(value) => setCarData({ ...carData, type: value })}>
              <SelectTrigger className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <SelectValue placeholder="Select Car Type" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50 shadow-lg rounded-md">
                {Data.CarType.map((Type) => (
                  <SelectItem key={Type.id} value={Type.name}>
                    {Type.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={carData.price}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Car Location */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Car Location</label>
            <Select value={carData.location} onValueChange={(value) => setCarData({ ...carData, location: value })}>
              <SelectTrigger className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <SelectValue placeholder="Select Car Location" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50 shadow-lg rounded-md">
                {Data.Locations.map((Location) => (
                  <SelectItem key={Location.id} value={Location.name}>
                    {Location.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Image Upload (Drag and Drop) */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Car Image</label>
            <div {...getRootProps()} className="border border-gray-300 p-4 rounded-md text-center cursor-pointer">
              <input {...getInputProps()} />
              <p>Click to select an image</p>
              {imageUploading && <p>Uploading...</p>}
              {carData.image && <img src={carData.image} alt="Car" className="mt-2 w-full h-32 object-contain" />}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-l rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCarModal;