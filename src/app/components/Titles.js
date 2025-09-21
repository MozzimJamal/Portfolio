"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Title = ({text1,text2}) => {
  const text2Ref = useRef(null);

 useEffect(() => {
    const lenis = new Lenis({ duration: 1, smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.fromTo(
      text2Ref.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text2Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    return () => {
      lenis.destroy();
      ScrollTrigger.kill();
    };
  }, []);


  return (
    <div ref={text2Ref} className='inline-flex items-center gap-3'>
      <p className='text-gray-400  text-lg py-2 lg:text-3xl sm:text-sm md-text-base'>{text1} <span className='text-gray-700'>{text2}</span></p>
      <p className='w-8 sm:w-12 sm:h-[2px] h-[1px] bg-gray-700'></p>
    </div>
  )
}

export default Title
