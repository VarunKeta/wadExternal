import React from 'react'
import NavigationBar from './NavigationBar'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'

function RootLayout() {
  return (
    <div>
        <NavigationBar/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}

export default RootLayout