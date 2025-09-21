"use client"; // ✅ add this at the very top


import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import dynamic from "next/dynamic";
import useSmoothScroll from './Hooks/useSmoothScroll'

const page = () => {

     useSmoothScroll();


  return (
   <>
  <div className="py-5 px-4 sm:px-10 md:px-16 lg:px-32 xl:px-60 2xl:px-96">
    <Navbar />
  </div>


  <Home />

</>

  )
}

export default page
