import React from 'react'
import NavBar from './components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
const App = () => {
  return (

    <div className='app'>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
