import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import FAQPage from './components/FAQs';

function FAQs() {
  return (
    <div>
      {/* header */}
      <Header />

      {/* FAQ's */}
      <FAQPage/>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default FAQs;