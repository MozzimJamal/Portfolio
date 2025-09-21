'use client';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import './wordAnimation.css'; // Custom CSS with keyframes only

const WordAnimation = () => {
  useEffect(() => {
    const spans = document.querySelectorAll('.word span');

    spans.forEach((span, idx) => {
      // On hover (mouseenter)
      span.addEventListener('mouseenter', (e) => {
        e.target.classList.add('active');
      });

      // Remove .active after animation ends
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });
    });
  }, []);










  

  return (
    <div  className="  flex items-center ">
    <div className="word text-black flex font-bold lg:text-9xl">
  <span className="inline-block cursor-pointer">M</span>
  <span className="inline-block cursor-pointer">J</span>
  <span className="inline-block cursor-pointer">_</span>
  <span className="inline-block cursor-pointer">C</span>
  <span className="inline-block cursor-pointer">O</span>
  <span className="inline-block cursor-pointer">D</span>
  <span className="inline-block cursor-pointer">E</span>
  <span className="inline-block cursor-pointer">R</span>
</div>

    </div>
  );
};

export default WordAnimation;
