import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AdminDashboard from './components/AdminPage'


function Admin() {
    return (
      <div>
          <Header/>
  
          <AdminDashboard/>
          <Footer/>
      </div>
    )
  }
  
  export default Admin;