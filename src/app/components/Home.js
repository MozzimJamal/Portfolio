'use client';

import React from 'react'
import Main from './Main'
import About from './About'
import MyWork from './MyWork'
import MiniNavbar from './MiniNavbar'
import Experience from './Experience'
import Contact from './Contact';

const Home = () => {
  return (
 <div className="px-2 sm:px-4 md:px-8  w-full min-h-screen  overflow-hidden">

  <Main />
  <About />
  <Experience/>
  <MyWork/>
  <MiniNavbar/>
  <Contact/>
</div>

  )
}

export default Home
