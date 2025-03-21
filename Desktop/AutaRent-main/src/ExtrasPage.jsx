import React from 'react';
import Header from './components/Header';
import Extras from './components/Extras'; 
import Footer from './components/Footer';
import StepperComp from './components/StepperComp';
import Stepper from 'react-stepper-horizontal';

function ExtrasPage() {
  return (
    <>
      <div className="py-16 flex justify-center items-center w-full">
      <Header />

      </div>

      <Extras />
      <Footer />
    </>
  );
}

export default ExtrasPage;