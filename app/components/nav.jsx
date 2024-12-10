"use client";
import React, { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import CustomLink from "./CustomLink.jsx";
import Image from "next/image.js";
import LOGO from "../../public/logo.png"
import { EmblaCarousel } from "./EmblaCarousel.jsx";
const targets = [
  { target: "/marketplace", title: "Nos modèle" },
  { target: "/event", title: "Nos évènements" },
  { target: "/services", title: "Services" },
  { target: "/FAQ", title: "FAQ" },
  { target: "/about", title: "About Us" },
];
const Nav = () => {
  let [isOpen, setIsOpen] = useState(false);
  let currentPath = usePathname();
  return (
        <div
                  className={`w-screen box-border min-w-0 md:h-[85px] absolute top-0 z-[10] 
                    ${currentPath === "/" ? "absolute top-0 z-[10]" : "bg-white text-black"}  
                    ${isOpen ? "max-md:flex-col max-md:justify-around max-md:w-full max-md:h-[100%] max-md:items-center" : "max-md:h-[60px]"} 
                    flex flex-row justify-between items-center pl-[2vw] pr-[2vw]`}
                >
                  {/* Logo and Menu Icon Section */}
                  <div className="flex flex-row justify-between items-center w-full md:w-[8vw]">
                    <Link
                      href="/"
                      className="flex flex-row items-center max-md:absolute ml-2 max-md:top-2 max-md:left-1/2 max-md:-translate-x-1/2"
                    >
                      <Image src={LOGO} alt="logo" className="w-[70] h-[52.2]" />
                    </Link>
                    <div
                      className="flex items-center justify-center cursor-pointer md:hidden max-md:absolute max-md:top-2 max-md:left-[10%] max-md:-translate-x-1/2"
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      <FiMenu className="pt-2 h-12 w-14 text-[#4CAF4F]" />
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <ul
                    className={`md:w-[50vw] flex items-center justify-between max-md:flex-col gap-1 flex-row 
                      ${isOpen ? "max-md:w-full max-md:gap-8 max-md:p-2 max-md:mt-20" : "max-md:hidden"}`}
                  >
                    <CustomLink href="/" title="Home" currentPath={currentPath} />
                    <CustomLink href="/Service" title="Service" currentPath={currentPath} />
                    <CustomLink href="/Feature" title="Feature" currentPath={currentPath} />
                    <CustomLink href="/Product" title="Product" currentPath={currentPath} />
                    <CustomLink href="/Testimonial" title="Testimonial" currentPath={currentPath} />
                    <CustomLink href="/FAQ" title="FAQ" currentPath={currentPath} />
                  </ul>

                  {/* Buttons Section */}
                  <div
                    className={`flex justify-center items-center gap-5 
                      ${!isOpen ? "max-md:hidden" : "max-md:w-full max-md:p-4 max-md:justify-around"}`}
                  >
                    <button className="py-3 px-5 bg-white text-[#4CAF4F] rounded-lg hover:bg-[#4CAF4F] hover:text-white">
                      <Link href="/Login">Login</Link>
                    </button>
                    <button className="py-3 px-5 bg-white text-[#4CAF4F] rounded-lg hover:bg-[#4CAF4F] hover:text-white">
                      <Link href="/SignUp">Sign Up</Link>
                    </button>
                  </div>
                </div>
  );
};
export default Nav;