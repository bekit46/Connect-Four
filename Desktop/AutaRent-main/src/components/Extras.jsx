// Extras.jsx
import React, { useState, useEffect } from 'react';
import extrasData from './ExtrasData';
import SummarySection from './SummarySection';
import { useInsurance } from "@/components/InsuranceContext";
import { useExtras } from "@/components/ExtrasContext";

const Extras = () => {
  const { selectedInsurance } = useInsurance();
  // Get both the total and the setter function from context
  const { extrasTotal, setExtrasTotal } = useExtras();

  // State for selected extras
  const [selectedExtras, setSelectedExtras] = useState({
    gps: false,
    babySeat: false,
    childSeat: false,
    tunnelPass: false,
    roadAssistance: false,
    wifi: false,
    fuelService: false
  });

  // Toggle selected extras and update the context
  const toggleExtra = (id) => {
    const newSelectedExtras = {
      ...selectedExtras,
      [id]: !selectedExtras[id]
    };
    
    setSelectedExtras(newSelectedExtras);
    
    // Calculate new total and update context
    const newTotal = calculateExtrasTotal(newSelectedExtras);
    setExtrasTotal(newTotal);
  };

  // Calculate total extras price
  const calculateExtrasTotal = (selections) => {
    return extrasData.reduce((total, extra) => {
      if (selections[extra.id]) {
        return total + extra.price;
      }
      return total;
    }, 0);
  };

  // Initialize context when component mounts
  useEffect(() => {
    const initialTotal = calculateExtrasTotal(selectedExtras);
    setExtrasTotal(initialTotal);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Extras Section (Left Side) */}
        <div className="md:w-9/12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extrasData.map((extra) => (
              <div
                key={extra.id}
                style={{ borderRadius: '10px' }}
                className={`bg-white p-6 rounded-lg transition duration-300 ${
                  selectedExtras[extra.id] ? 'shadow-custom-green' : 'shadow-custom border border-gray-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={extra.image}
                    alt={extra.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-1">{extra.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{extra.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">${extra.price}</span>
                      <button
                        className={`px-4 py-2 rounded-md transition ${
                          selectedExtras[extra.id] ? 'bg-buttonGreen text-white' : 'bg-buttonColor text-white hover:bg-gray-700'
                        }`}
                        onClick={() => toggleExtra(extra.id)}
                        style={{ borderRadius: '6px' }}
                      >
                        {selectedExtras[extra.id] ? 'Selected' : 'Select'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Summary Section (Right Side) */}
        <div className="md:w-3/12 mb-12">
          <SummarySection
            selectedInsurance={selectedInsurance}
            extras={extrasTotal}  // Now passing the value from context
            nextRoute="/details"
          />
        </div>
      </div>
    </div>
  );
};

export default Extras;