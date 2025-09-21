"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Title from "./Titles";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const text2Ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Lenis -> ScrollTrigger sync
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP + ScrollTrigger animations
    gsap.fromTo(
      text2Ref.current,
      { x: 100, opacity: 0 },
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
      id="about"
      className="min-h-screen flex flex-col gap-8 w-full px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 lg:py-20"
    >
      {/* Title Section */}
      <Title text1="About" text2="Page" />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side Image */}
        <div ref={imgRef} className="flex justify-center lg:w-2/5">
          <Image
            src="/Image.png"
            alt="Image"
            width={400}
            height={300}
            className="w-[200px] sm:w-[280px] md:w-[350px] lg:w-[400px] object-contain"
          />
        </div>

        {/* Right Side Text */}
        <div
          ref={text2Ref}
          className="lg:w-3/5 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-2 sm:px-4 text-center lg:text-left"
        >
          <p>
            I specialize in{" "}
            <span className="underline font-bold italic">Node.js</span>,
            utilizing Express for backend APIs and React for frontend UI.
            <span className="underline font-bold italic"> PostgreSQL</span> and
            <span className="underline font-bold italic"> MongoDB</span> are my
            go-to
            <span className="underline font-bold italic"> SQL</span> and
            <span className="underline font-bold italic"> No SQL Database</span>,
            but I'm open to exploring others as well.
          </p>
          <p className="mt-4">
            I’m always keen on learning new
            <span className="underline font-bold italic"> technologies</span> and
            falling in love with the process of mastering them.
          </p>
        </div>
      </div>

      {/* Counter Section */}
      <div className="w-full flex flex-wrap justify-center gap-6 mt-10">
        {[
          { end: 74, label: "HTML" },
          { end: 84, label: "CSS" },
          { end: 79, label: "JAVASCRIPT" },
          { end: 92, label: "REACT.JS" },
          { end: 87, label: "BOOTSTRAP" },
          { end: 64, label: "NODE.JS" },
          { end: 88, label: "TAILWIND CSS" },
          { end: 54, label: "NEXT.JS" },
        ].map(({ end, label }, index) => (
          <CountUp key={index} start={0} end={end} duration={5} delay={0}>
            {({ countUpRef }) => (
              <div className="flex flex-col items-center w-24 sm:w-28">
                <div className="w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-full border border-gray-400">
                  <span
                    className="text-lg sm:text-xl font-bold"
                    ref={countUpRef}
                  />
                </div>
                <h3 className="mt-2 text-center font-bold text-xs sm:text-sm md:text-base">
                  {label}
                </h3>
              </div>
            )}
          </CountUp>
        ))}
      </div>
    </div>
  );
};

export default About;
