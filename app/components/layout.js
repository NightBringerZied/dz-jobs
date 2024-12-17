"use client"

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocomotiveScroll = dynamic(() => import('locomotive-scroll'), { ssr: false });

export default function Layout({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const initScroll = async () => {
      const LocomotiveScroll = await import('locomotive-scroll'); 
      if (scrollRef.current) {
        const scroll = new LocomotiveScroll.default({
          el: scrollRef.current,
          smooth: true,
        });

        return () => {
          scroll.destroy(); // Cleanup on unmount
        };
      }
    };

    if (typeof window !== 'undefined') { // Ensure window object exists (client-side)
      initScroll();
    }
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}