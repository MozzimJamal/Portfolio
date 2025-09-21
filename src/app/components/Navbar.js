"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Navbar = () => {
  const navbarRef = useRef(null);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: -600,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollRef.current && currentScroll > 50) {
        // Scroll down - hide navbar
        gsap.to(navbarRef.current, {
          y: -100,
          duration: 0.4,
          ease: "power2.inOut",
        });
      } else {
        // Scroll up - show navbar
        gsap.to(navbarRef.current, {
          y: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }

      lastScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navbarRef}
      className="fixed top-0 left-0 w-full  z-50 bg-white/30 backdrop-blur-md shadow-md transition-transform duration-300"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link  onClick={(e) => {
    e.preventDefault();
    document.getElementById("/").scrollIntoView({ behavior: "smooth" });
  }} className="hover:text-black transition-all duration-300" href="/">Home</Link>
          <Link  onClick={(e) => {
    e.preventDefault();
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }}   className="hover:text-black transition-all duration-300" href="#about">About</Link>
          <Link  onClick={(e) => {
    e.preventDefault();
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });
  }} className="hover:text-black transition-all duration-300" href="#work">My Work</Link>
           <Link  onClick={(e) => {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }} className="hover:text-black transition-all duration-300" href="#contact">Contact</Link>
        </div>

        {/* Mobile menu (optional - add toggle later) */}
        <div className="md:hidden">
          {/* Mobile menu icon or button here if needed */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
