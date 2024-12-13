"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import client from "../../public/Vector.png";

const Clients = ({ options }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  const slides = Array(7).fill(0).map((_, index) => (
    <div key={index} className="embla__slide_client max-md:flex 0 0 20%;">
      <div className="embla__slide__number_client">
        <Image src={client} alt={`Client ${index + 1}`} className="w-[25px] h-[25px]" />
      </div>
    </div>
  ));

  return (
    <div className="w-full flex flex-col justify-around gap-10 items-center">
      <h1 className="text-[#4D4D4D] text-6xl max-md:text-4xl ">Our Clients</h1>
      <h5 className="text-[#717171] text-4xl max-md:text-xl">Trusted by leading IT companies in Algeria</h5>
      <section className="embla_client py-5 ">
        <div className="embla__viewport_client " ref={emblaRef}>
          <div className="embla__container_client">{slides}</div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
