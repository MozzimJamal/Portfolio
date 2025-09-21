"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Title from "./Titles";
import { MdBrightness1 } from "react-icons/md";

const Experience = () => {
  const card1 = useRef(null);
  const card2 = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1, smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.fromTo(
      card1.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card1.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      card2.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card2.current,
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
    <div
      id="expi"
      className="flex flex-col relative gap-8 w-full min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-10 sm:py-16 lg:py-20"
    >
      {/* Title */}
      <Title  text1={"My"} text2={"Experience"} />

      <div className="flex flex-col  lg:mt-0  mt-20  h-screen md:flex-row md:flex-wrap items-center justify-center gap-10">
        {/* Left Side Div */}
        <div
          ref={card1}
          className="flex shadow-lg flex-col p-5 rounded-md w-full sm:w-[80%] md:w-[45%] lg:w-[35%] h-auto md:h-[400px]"
        >
          <div>
            <h1 className="text-lg text-center">FRONT-END</h1>
            <h1 className="text-2xl text-center">DEVELOPMENT</h1>
          </div>

          <div className="p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row gap-10">
            <div>
              <h2 className="flex items-center py-2 gap-4 text-lg">
                <MdBrightness1 /> HTML5
              </h2>
              <h2 className="flex items-center py-2 gap-4 text-lg">
                <MdBrightness1 /> JAVASCRIPT
              </h2>
              <h2 className="flex items-center py-2 gap-4 text-lg">
                <MdBrightness1 /> TAILWIND CSS
              </h2>
              <h2 className="flex items-center py-2 gap-4 text-lg">
                <MdBrightness1 /> NEXT.JS
              </h2>
            </div>
            <div>
              <h2 className="flex items-center py-2 gap-4 text-lg">
                <MdBrightness1 /> CSS
              </h2>
              <h2 className="flex items-center py-2 gap-4 text-lg">
                <MdBrightness1 /> BOOTSTRAP
              </h2>
              <h2 className="flex items-center py-2 gap-4 text-lg">
                <MdBrightness1 /> REACT.JS
              </h2>
            </div>
          </div>
        </div>

        {/* Right Side Div */}
        <div
          ref={card2}
          className="flex shadow-lg flex-col p-5 rounded-md w-full sm:w-[80%] md:w-[45%] lg:w-[35%] h-auto md:h-[400px]"
        >
          <div>
            <h1 className="text-lg text-center">BACK-END</h1>
            <h1 className="text-2xl text-center">DEVELOPMENT</h1>
          </div>

          <div className="p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row gap-10">
            <div>
              <h2 className="flex items-center py-2 gap-4 text-lg">
                <MdBrightness1 /> EXPRESS.js
              </h2>
              <h2 className="flex items-center py-2 gap-4 text-lg">
                <MdBrightness1 /> MongoDB
              </h2>
            </div>
            <div>
              <h2 className="flex items-center py-2 gap-4 text-lg">
                <MdBrightness1 /> NODE.JS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
