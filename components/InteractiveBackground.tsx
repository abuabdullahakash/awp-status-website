"use client";

import React, { useEffect, useState } from "react";

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none opacity-40 transition-transform duration-1000 ease-out"
      style={{
        background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6,182,212,0.15), transparent 40%),
                     radial-gradient(600px circle at ${windowSize.width - mousePosition.x}px ${windowSize.height - mousePosition.y}px, rgba(99,102,241,0.15), transparent 40%)`
      }}
    />
  );
}
