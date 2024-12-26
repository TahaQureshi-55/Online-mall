"use client"
import Carousel from '@/components/Carousel'


import Navbar from '@/components/Navbar'
import Offer from '@/components/Offer'

import Products from '@/components/Products'
// import About from '@/components/About'


  import AOS from "aos"
import "aos/dist/aos.css";

import React, { useEffect } from 'react'
import Banner from '@/components/Banner'
import Testimonals from '@/components/Testimonals'
import Footer from '@/components/Footer'


 function Page() {
  useEffect(() => {
    AOS.init ({
      duration :1000,
      once: true,
    });
  }, []);

  return (
    <main className="bg-gradient-to-r from-gray-700 to bg-gray-400 min-h-screen">
 
    <Navbar/>
    <Carousel/>
    <Offer/>
    <Products/>
    <Banner/>
    {/* <About/> */}
    <Testimonals/>
    <Footer/>
    


   </main>
  )
}

export default Page