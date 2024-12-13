import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CustomLink = ({ href, title, className, currentPath }) => {
  return (
    <Link href={href} className={`${className} relative group cursor-pointer `}>
      <span className="text-black hover:text-[#4CAF4F]">{title}</span>
      <span
        className={`absolute left-0 inline-block w-0 h-[3px] -bottom-2 text-black bg-[#4CAF4F] 
          group-hover:w-full transition-all ease duration-300 
          ${currentPath === href ? "w-full" : "w-0"}`}
      ></span>
    </Link>
  );
};

export default CustomLink;
