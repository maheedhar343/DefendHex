// import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'
import Commingsoon from '../img/Website/2-cropped.svg'
import intro from '../img/Website/1-cropped.svg'
import moto from '../img/Website/3-cropped.svg'
import we from '../img/Website/4-cropped.svg'
import end from '../img/Website/5-cropped.svg'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
   <div >
   <img src={intro} alt="" />
   <img src={Commingsoon} alt="" />
   <img src={moto} alt="" />
   <img src={we} alt="" />
   <img src={end} alt="" />


    </div>
    <Footer />
    </>
  )
}

export default Layout
