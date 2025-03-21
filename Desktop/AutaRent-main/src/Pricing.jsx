import React from 'react';
import PricingCards from './components/PricingCards';
import SummarySection from './components/SummarySection';
import StepperComp from './components/StepperComp';
import Header from './components/Header';
import Footer from './components/Footer';
import { useInsurance } from './components/InsuranceContext';

const Pricing = () => {
  const { selectedInsurance, setSelectedInsurance } = useInsurance();

  return (
    <>
      <Header />



      <div className="max-w-[103rem] mx-auto px-14 my-32 gap-4">
        {/* Ana içerik */}
        <div className="grid grid-cols-12 gap-3">
          {/* PricingCards (sol) */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <PricingCards 
              selectedInsurance={selectedInsurance} 
              setSelectedInsurance={setSelectedInsurance} 
            />
          </div>
          {/* SummarySection (sağ) */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <SummarySection 
              selectedInsurance={selectedInsurance} 
              nextRoute="/extras" 
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;