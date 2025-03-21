import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ManagerCarCRUD from './components/ManagerCarCRUD'

function Manager() {
    return (
      <div>
          <Header/>
  
          <ManagerCarCRUD/>
  
          <Footer/>
      </div>
    )
  }
  
  export default Manager;