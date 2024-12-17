"use client";

import React, { useCallback } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Slide1 from "./Slide1";

const EmblaCarousel = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    autoplay?.options.stopOnInteraction ? autoplay.reset() : autoplay.stop();
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );
 const arr=[{
    id:1,
    title:"The ultimate platform for IT",
    subtitle:"careers and recruitment",
    link:"Register",
  },{
    id:2,
    title:"Tools to build professional",
    subtitle:"profiles, search for jobs, and track applications.",
    link:"Find a Job",
  },{
    id:3,
    title:"A robust system to manage",
    subtitle:" job postings, review applications, and communicate with potential hires.",
    link:"Post a Job",
  }]

  const slides = arr.map((_, index) => (
    <div key={index} className="embla__slide">
      <div className="embla__slide__number">
        <Slide1 title={arr[index].title} subtitle={arr[index].subtitle} link={arr[index].link} />
      </div>
    </div>
  ));

  return (
    <section className="embla bg-[#f6f7fb] mb-10">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{slides}</div>
      </div>
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${
                index === selectedIndex ? "embla__dot--selected" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;