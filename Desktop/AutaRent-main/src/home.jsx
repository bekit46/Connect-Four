import React from 'react';
import Hero from './components/Hero';
import Advertise from './components/Advertise';
import Footer from './components/Footer';
import Section from './components/Section';
import Header from './components/Header';

function Home() {
  return (
    <div>
      {/* header */}
      <Header />

      {/* hero */}
      <Hero />

      {/* Advertise carousel */}
      <Advertise />

      {/* section */}
      <Section />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
