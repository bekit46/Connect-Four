import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CarList from './components/CarList'

function AllCars() {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-blue-100">
        <Header/>
        <CarList/>
        <Footer/>
      </div>
  )
}

export default AllCars