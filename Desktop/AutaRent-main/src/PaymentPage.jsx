import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CreditCardForm from './components/Payment'


function PaymentPage() {
    return (
      <div>
          <Header/>
  
          <CreditCardForm/>
          <Footer/>
      </div>
    )
  }
  
  export default PaymentPage;