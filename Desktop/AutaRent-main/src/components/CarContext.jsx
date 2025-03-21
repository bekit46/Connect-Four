import { createContext, useContext, useState } from "react";

const CarContext = createContext();

export function CarProvider({ children }) {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <CarContext.Provider value={{ selectedCar, setSelectedCar }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCar() {
  return useContext(CarContext);
}
