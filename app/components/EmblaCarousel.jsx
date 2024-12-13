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

  const slides = Array(3).fill(0).map((_, index) => (
    <div key={index} className="embla__slide">
      <div className="embla__slide__number">
        <Slide1 />
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