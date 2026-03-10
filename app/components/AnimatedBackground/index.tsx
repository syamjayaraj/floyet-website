"use client";

import React, { useEffect, useRef, useState } from 'react';

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 0,
        backgroundColor: 'var(--color-background)'
      }}
    >
      {/* Grid Overlay */}
      <div 
        className="bg-grid absolute inset-0" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          opacity: 0.3
        }} 
      />

      {/* Animated Blobs */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '30%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(129, 74, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 20s infinite ease-in-out alternate',
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'float 25s infinite ease-in-out alternate-reverse',
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 15s infinite ease-in-out alternate',
          animationDelay: '-5s'
        }}
      />

      {/* Interactive Spotlight */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(129, 74, 246, 0.08) 0%, transparent 40%)`,
          transition: 'background 0.1s ease-out',
        }}
      />

      {/* Vignette Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, transparent 20%, var(--color-background) 100%)',
          opacity: 0.6
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
