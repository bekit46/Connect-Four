import { createContext, useContext, useState } from "react";

const RentalContext = createContext();

export function RentalProvider({ children }) {
  const [rentalData, setRentalData] = useState({
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    campaignCode: "", 
    discountAmount: 0 
  });

  const resetRentalData = () => {
    setRentalData({
      pickUpLocation: "",
      dropOffLocation: "",
      pickUpDate: "",
      dropOffDate: "",
      pickUpTime: "",
      dropOffTime: "",
      campaignCode: "", 
      discountAmount: 0 
    });
  };

  return (
    <RentalContext.Provider value={{ rentalData, setRentalData, resetRentalData }}>
      {children}
    </RentalContext.Provider>
  );
}

export function useRental() {
  return useContext(RentalContext);
}