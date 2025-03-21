import React from 'react';
import { insuranceOptions } from './InsuranceData';

const PricingCards = ({ selectedInsurance, setSelectedInsurance }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {insuranceOptions.map((option) => (
        <div 
          key={option.id}
          className={`min-w-[250px] max-w-[363px] w-full p-7 flex flex-col relative box-border ${
            selectedInsurance === option.id
              ? 'shadow-custom-green'
              : 'shadow-custom border-0'
          }${
            option.id === 'standard'
              ? ' bg-royalblue text-gray-200'
              : ' bg-white'
          }`}
          style={{borderRadius: '10px'}}
        >
          {/* Title and Badge */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-start relative">
            {/* Title */}
            <h2 className="text-custom font-medium mt-5">{option.name}</h2>

            {/* Popular Badge */}
            {option.popular && (
              <span 
                className="bg-gray-200 text-royalblue font-extrabold px-3 py-1 text-xs shadow-[0px_0px_10px_4px_rgba(255,255,255,0.8)] mt-1 sm:mt-0 sm:absolute sm:top-6 sm:right-2"
                style={{ borderRadius: '4px' }}
              >
                Popular
              </span>
            )}
          </div>

          <div className="mt-3 flex items-end">
            <span className="text-5xl font-medium">${option.price}</span>
          </div>

          {/* Description with different text colors */}
          <p className={`mt-3 text-sm  ${
            option.id === 'standard'
              ? 'text-gray-300'
              : option.id === 'basic'
                ? 'text-gray-700'
                : 'text-gray-700'
          }`}>
            {option.description}
          </p>
                  
          
          <button
            onClick={() => setSelectedInsurance(option.id)}
            style={{borderRadius: '8px'}}
            className={`mt-8 w-full py-3.5 rounded-custom text-sm transition ${
              selectedInsurance === option.id 
                ? 'bg-buttonGreen text-white hover:bg-green-600' 
                : 'bg-buttonColor text-white hover:bg-gray-700'
            }`}
          >
            Choose Insurance
          </button>
          
          <div className="mt-4 ">
            <div 
              style={{ borderTopWidth: '1.3px' }}
              className={`-mx-7 border-t my-2 ${
              option.popular ? 'border-white' : 'border-gray-900'
              }`}
            ></div>
            <h3 className={`font-medium mb-1 mt-3 text-md ${
              option.id === 'standard'
                ? 'text-gray-100'   
                : option.id === 'basic'
                  ? 'text-black' 
                  : 'text-black' 
            }`}>
              Features
            </h3>

            <p className={`text-xs mb-3 ${
              option.id === 'standard'
                ? 'text-gray-300'
                : option.id === 'basic'
                  ? 'text-gray-700'
                  : 'text-gray-700'
            }`}>
              Everything in {option.name}
            </p>

            <ul className="space-y-2 mb-3">
              {option.features.map((feature, index) => (
                <li key={index} className="flex items-center text-xs">
                  <svg 
                    className={`w-4 h-4 mr-2 ${
                      option.id === 'standard'
                          ? 'text-green-300'
                          : 'text-green-500'
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;