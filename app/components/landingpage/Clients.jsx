"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import client from "../../../public/Vector.png";
import icon from "../../../public/Icon.png";

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
    <div className="w-full flex flex-col justify-center gap-8 items-center pb-4" id="feature">
      <h1 className="text-[#4D4D4D] text-6xl max-md:text-4xl ">Our Clients</h1>
      <h5 className="text-[#717171] text-4xl max-md:text-xl">Trusted by leading IT companies in Algeria</h5>
      <section className="embla_client py-10 ">
        <div className="embla__viewport_client " ref={emblaRef}>
          <div className="embla__container_client">{slides}</div>
        </div>
      </section>
      <h1 className="text-[#4D4D4D] text-6xl max-md:text-4xl text-center pt-10 ">Manage your entire community <br/> in a single system</h1>
      <h5 className="text-[#717171] text-4xl max-md:text-xl pt-2">Who is Nextcent suitable for?</h5>
      <div className="flex flex-row max-md:flex-col max-md:w-[90%]  max-md:gap-12 h-full justify-center items-center gap-4 ">
            <div className="flex flex-col h-full  justify-normal items-center gap-8 p-4 shadow-[0px_1.39px_3px_rgba(171,190,209,0.2)]  rounded-md">
                  <Image src={icon} alt="icon "></Image>
                  <h1 className="text-[#4D4D4D] font-bold text-4xl max-md:text-xxl text-center ">Optimize Hiring Processes</h1>
                  <h5 className= "w-[60%] max-md:w-full text-center  text-[#717171] text-2xl max-md:text-lg">Streamline your hiring with automatic matching and real-time tracking</h5>
            </div>
            <div className="flex flex-col h-full  justify-normal p-4 items-center gap-8 shadow-[0px_1.39px_3px_rgba(171,190,209,0.2)]  rounded-md">
                  <Image src={icon} alt="icon "></Image>
                  <h1 className="text-[#4D4D4D] font-bold text-4xl max-md:text-xxl text-center ">Optimize Hiring Processes</h1>
                  <h5 className="w-[60%] max-md:w-full text-center text-[#717171] text-2xl max-md:text-lg">Streamline your hiring with automatic matching and real-time tracking</h5>
            </div>
            <div className="flex flex-col h-full  justify-normal p-4 items-center gap-8 shadow-[0px_1.39px_3px_rgba(171,190,209,0.2)]  rounded-md">
                  <Image src={icon} alt="icon "></Image>
                  <h1 className="text-[#4D4D4D] font-bold text-4xl max-md:text-xxl text-center ">Optimize Hiring Processes</h1>
                  <h5 className="w-[60%] max-md:w-full text-center text-[#717171] text-2xl max-md:text-lg">Streamline your hiring with automatic matching and real-time tracking</h5>
            </div>
      </div>
    </div>
  );
};

export default Clients;
