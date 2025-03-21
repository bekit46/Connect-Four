import React from 'react';
import { useLocation } from 'react-router-dom';

const StepperComp = () => {
  // Adım isimlerini tanımlayalım
  const steps = ["Insurance", "Extras", "Deta"];
  
  // Mevcut URL'e göre hangi adımda olduğumuzu belirleyelim
  const location = useLocation();
  const getCurrentStep = () => {
    if (location.pathname === '/' || location.pathname.includes('/pricing')) {
      return 1;
    } else if (location.pathname.includes('/extras')) {
      return 2;
    } else if (location.pathname.includes('/details')) {
      return 3;
    }
    return 1; // Varsayılan olarak ilk adım
  };
  
  const currentStep = getCurrentStep();

  return (
    <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
      {steps.map((step, index) => {
        // Adımın durumunu belirleme
        const isActive = index + 1 === currentStep;
        const isCompleted = index + 1 < currentStep;
        
        // Son adım için son çizgiyi gösterme
        const isLastStep = index === steps.length - 1;
        
        return (
          <li 
            key={index} 
            className={`flex w-full relative ${isActive || isCompleted ? 'text-indigo-600' : 'text-gray-900'} ${
              !isLastStep 
                ? `after:content-[''] after:w-full after:h-0.5 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4 ${
                    isCompleted ? 'after:bg-indigo-600' : 'after:bg-gray-200'
                  }`
                : ''
            }`}
          >
            <div className="block whitespace-nowrap z-10">
              <span 
                className={`w-6 h-6 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10 ${
                  isCompleted 
                    ? 'bg-indigo-600 border-2 border-transparent text-white' 
                    : isActive 
                      ? 'bg-indigo-50 border-2 border-indigo-600 text-indigo-600' 
                      : 'bg-gray-50 border-2 border-gray-200'
                }`}
              >
                {index + 1}
              </span> 
              {step}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default StepperComp;