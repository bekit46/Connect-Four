// ExtrasContext.js
import React, { createContext, useContext, useState } from 'react';

const ExtrasContext = createContext();

export const ExtrasProvider = ({ children }) => {
  const [extrasTotal, setExtrasTotal] = useState(0);
  
  // Optionally, you could also store the actual selections if needed in other components
  // const [selectedExtrasDetails, setSelectedExtrasDetails] = useState({});

  return (
    <ExtrasContext.Provider value={{ 
      extrasTotal, 
      setExtrasTotal,
      // selectedExtrasDetails,
      // setSelectedExtrasDetails
    }}>
      {children}
    </ExtrasContext.Provider>
  );
};

export const useExtras = () => {
  return useContext(ExtrasContext);
};