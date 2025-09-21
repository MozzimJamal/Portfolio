"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { RiHome9Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdContacts } from "react-icons/md";
import { PiUserGearFill } from "react-icons/pi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);



const MiniNavbar = () => {
 const navRef = useRef(null);

  useEffect(() => {
    // Pehle hidden
    gsap.set(navRef.current, { y: 100, opacity: 0 });

    // Jab scroll kare to animate
    ScrollTrigger.create({
      trigger: document.body,
      start: "top+=150 top", // 150px scroll ke baad
      onEnter: () => {
        gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, { y: 100, opacity: 0, duration: 0.5, ease: "power2.in" });
      },
    });
  }, []);




  return (
    <div       ref={navRef}
 className="fixed bottom-7 lg:bottom-15 left-[15%] lg:left-[35%] -translate-x-1/2 w-[70%] lg:w-[30%] p-3 rounded-full flex justify-center z-50 bg-white/30 backdrop-blur-md shadow-md transition-transform duration-300">
     <div className='flex gap-5 lg:gap-10 text-2xl' >
        <Link onClick={(e) => {
    e.preventDefault();
    document.getElementById("/").scrollIntoView({ behavior: "smooth" });
  }}  href={'/'}><RiHome9Fill /></Link>
        <Link onClick={(e) => {
    e.preventDefault();
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }}  href={'#about'}><FaUser /></Link>
        <Link onClick={(e) => {
    e.preventDefault();
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });
  }}  href={'#work'}><GrProjects /></Link>
        <Link onClick={(e) => {
    e.preventDefault();
    document.getElementById("expi").scrollIntoView({ behavior: "smooth" });
  }}  href={'#expi'}><PiUserGearFill /></Link>
        <Link onClick={(e) => {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }}  href={'#contact'}><MdContacts /></Link>
     </div>
</div>

  )
}

export default MiniNavbar
