"use client"
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';


export default function Layout({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    const onResize = () => scroll.update();
    window.addEventListener('resize', onResize);
    return () => {
      scroll.destroy(); 
      window.removeEventListener('resize', onResize);// Cleanup when the component unmounts
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
