// src/Components/CustomCursor/CustomCursor.jsx
import React, { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rings = document.querySelectorAll('.ring');
      rings.forEach((ring) => {
        ring.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="cursor" className="cursor">
      <div className="ring">
        <div></div>
      </div>
      <div className="ring">
        <div></div>
      </div>
    </div>
  );
};

export default CustomCursor;
