import React, { createContext, useContext, useState } from 'react';

const InsuranceContext = createContext();

export const InsuranceProvider = ({ children }) => {
  const [selectedInsurance, setSelectedInsurance] = useState('basic'); // varsayılan olarak 'basic'

  return (
    <InsuranceContext.Provider value={{ selectedInsurance, setSelectedInsurance }}>
      {children}
    </InsuranceContext.Provider>
  );
};

export const useInsurance = () => useContext(InsuranceContext);
