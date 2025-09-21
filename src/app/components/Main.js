"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import WordAnimation from "./WordAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const textRef = useRef(null);
  const countRefs = useRef([]);
  const text2Ref = useRef(null);
    const imgRef = useRef(null);
  

  useEffect(() => {
    if (textRef.current) {
      const elements = textRef.current.querySelectorAll("h1, p, img, button, counter");
      gsap.from(elements, {
        y: -100,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        stagger: 0.2,
        ease: "power3.out",
      });
    }

    if (countRefs.current.length > 0) {
      gsap.from(countRefs.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    }
  }, []);

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
      { x: 200, opacity: 0 },
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
        gsap.fromTo(
      imgRef.current,
      { y: 50, scale: 0.9, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%",
          end: "bottom 40%",
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
    <div
      id="/"
      ref={textRef}
      className="flex relative flex-col gap-8 w-full min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-10 sm:py-16 lg:py-20"
    >

    

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between w-full gap-10 items-center">
        {/* Left Text */}
        <div className="flex flex-col gap-4  lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">
            <TypeAnimation
              sequence={[" I`m,", 1000, "I` m,", 1000]}
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[140px]  italic tracking-tight leading-tight">
              <WordAnimation />
            </h1>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start text-black">
            <h1 className="border-l text-sm sm:text-base md:text-lg px-2 sm:px-3">UX/UI</h1>
            <h1 className="border-l text-sm sm:text-base md:text-lg px-2 sm:px-3">DESIGNER</h1>
            <h1 className="border-l text-sm sm:text-base md:text-lg px-2 sm:px-3">WEB DEVELOPMENT</h1>
            <h1 className="border-l border-r text-sm sm:text-base md:text-lg px-2 sm:px-3">FULL STACK DEVELOPER</h1>
          </div>
        </div>

        {/* Image */}
        <div ref={imgRef} className="flex justify-center items-center">
          <Image
            src="/Image.png"
            alt="Image"
            width={300}
            height={300}
            className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[350px] xl:w-[400px] object-contain"
          />
        </div>
      </div>

      {/* Paragraph Section */}
      <div
        ref={text2Ref}
        className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-between mt-10"
      >
        <p className="max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">
          <span className="black-hover-target text-black hover:text-white transition-colors duration-300 bg-white hover:bg-black px-1">
            Passionate about technology, I specialize in Web Development and Web Designing. I'm focused on building innovative solutions and continuously expanding my skills. My goal is to grow as a developer and contribute to impactful projects in the tech industry.
          </span>
        </p>

        <button className="border px-5 py-2 rounded-full hover:text-white hover:bg-black transition-colors duration-300">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Main;
