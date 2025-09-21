"use client";
import { useState, useEffect, useRef } from "react";

export default function SmoothFollower() {
  const [mounted, setMounted] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });
  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isOnBlackText, setIsOnBlackText] = useState(false);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      // Check if we're over a black text element
      const target = document.elementFromPoint(e.clientX, e.clientY);
if (target && target.classList.contains("black-hover-target")) {
  setIsOnBlackText(true);
} else {
  setIsOnBlackText(false);
}
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, img, input, textarea, select"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    const animate = () => {
      const lerp = (start, end, factor) => start + (end - start) * factor;

      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS
      );

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS
      );

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: {
          x: borderDotPosition.current.x,
          y: borderDotPosition.current.y,
        },
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Inner Dot */}
      <div
        className={`absolute rounded-full ${
          isOnBlackText ? "bg-white" : "bg-black"
        }`}
        style={{
          width: "8px",
          height: "8px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
        }}
      />
      {/* Outer Border or Filled */}
     <div
  className={`absolute rounded-full ${
    isOnBlackText
      ? "bg-black"
      : isHovering
      ? "border border-black"
      : "border border-black"
  }`}
  style={{
    width: isHovering ? "44px" : "28px",
    height: isHovering ? "44px" : "28px",
    transform: "translate(-50%, -50%)",
    left: `${renderPos.border.x}px`,
    top: `${renderPos.border.y}px`,
    transition: "width 0.3s, height 0.3s, background-color 0.3s",
  }}
/>

    </div>
  );
}
