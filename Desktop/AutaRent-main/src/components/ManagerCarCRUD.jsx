import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios"; // Import axios for API requests
import ManagerCarCard from "./ManagerCarCard.jsx";
import CarFilter from "./CarFilter.jsx";
import ActionButton from "./ActionButton.jsx";
import AddCarModal from "./AddCarModal";
import DeleteCarModal from "./DeleteCarModal";
import UpdateCarModal from "./UpdateCarModal";
import CarInfoModal from "./CarInfoModal";

function ManagerCarCRUD() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for filters
  const [selectedPrice, setSelectedPrice] = useState(500);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [isAutomatic, setIsAutomatic] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [carToDelete, setCarToDelete] = useState(null);
  const [carToUpdate, setCarToUpdate] = useState(null);

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

  // Filter logic
  const filteredCars = cars.filter((car) => {
    return (
      (selectedBrand === "" || car.name.includes(selectedBrand)) &&
      (selectedFuel === "" || car.fuel === selectedFuel) &&
      (selectedType === "" || car.type === selectedType) &&
      (car.price <= selectedPrice) &&
      (isAutomatic ? car.gear === "Automatic" : true)
    );
  });

  // Reset filters
  const handleReset = () => {
    setSelectedPrice(500);
    setSelectedBrand("");
    setSelectedFuel("");
    setSelectedType("");
    setIsAutomatic(false);
  };

  // Modal logic
  const handleModalOpen = (type, car = null) => {
    setShowModal(type);
    if (type === "delete") setCarToDelete(car);
    else if (type === "update" || type === "info") setCarToUpdate(car);
  };

  const handleDeleteCar = async () => {
    if (carToDelete) {
      try {
        await axios.delete(`http://localhost:8080/cars/delete/${carToDelete.id}`);
        setCars(cars.filter((car) => car.id !== carToDelete.id));
      } catch (error) {
        console.error("Error deleting car:", error);
      }
      setShowModal(false);
    }
  };

  const handleUpdateCar = async (updatedCarData) => {
    try {
      const response = await axios.put(`http://localhost:8080/cars/update/${carToUpdate.id}`, updatedCarData);
      setCars(cars.map((car) => (car.id === carToUpdate.id ? response.data : car)));
    } catch (error) {
      console.error("Error updating car:", error);
    }
    setShowModal(false);
  };

  if (isLoading) return <p>Loading cars...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4">
      <h2 className="font-bold text-2xl sm:text-3xl text-center my-4 sm:my-8 pt-16">
        Manager Menu Car Editing Page
      </h2>

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

      {/* Add Car Button */}
      <div className="flex justify-center my-4">
        <ActionButton type="add" onClick={() => handleModalOpen("add")} />
      </div>

      {/* Responsive Grid Layout - Matches CarList */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 mb-8">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <motion.div
              key={index}
              className="card-container h-96" // Fixed height for the container
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              <div className="card-flip-wrapper relative w-full h-full">
                <AnimatePresence mode="wait">
                  {flippedCard === index ? (
                    <motion.div
                      key="back"
                      initial={{ rotateY: 90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-[#0b385f] text-white rounded-xl p-4 shadow-lg h-full"
                    >
                      <ActionButton type="info" onClick={() => handleModalOpen("info", car)} />
                      <ActionButton type="update" onClick={() => handleModalOpen("update", car)} />
                      <ActionButton type="delete" onClick={() => handleModalOpen("delete", car)} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="front"
                      initial={{ rotateY: -90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <ManagerCarCard car={car} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold my-8 sm:my-16">
            Sorry! We don't have any cars matching your filter.
          </p>
        )}
      </div>

      {/* Modals */}
      {showModal === "add" && <AddCarModal onClose={() => setShowModal(false)} />}
      {showModal === "info" && <CarInfoModal car={carToUpdate} onClose={() => setShowModal(false)} />}
      {showModal === "update" && (
        <UpdateCarModal car={carToUpdate} onClose={() => setShowModal(false)} onUpdate={handleUpdateCar} />
      )}
      {showModal === "delete" && (
        <DeleteCarModal
          carId={carToDelete?.id} // Pass the carId of the car to delete
          onClose={() => setShowModal(false)}
          onConfirmDelete={handleDeleteCar} // Pass the deletion callback to update the car list
        />
      )}
    </div>
  );
}

export default ManagerCarCRUD;