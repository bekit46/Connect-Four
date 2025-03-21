import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Details from './components/Details'; 
import Footer from './components/Footer';
import StepperComp from './components/StepperComp';

function ExtrasPage() {
  return (
    <>
      <Header />
    <div className="py-24 mt-7">

      <Details />
        </div>
      <Footer />
    </>
  );
}

export default ExtrasPage;
