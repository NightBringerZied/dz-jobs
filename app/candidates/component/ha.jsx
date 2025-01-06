import { useState } from "react";
import Link from "next/link";

export default function Ha(props) {
  const [selected, setSelected] = useState(false);
  
  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className="w-[80%] flex justify-end items-end ">
      <div className="w-full justify-center items-center bg-white">
        <Link
          href={props.href}
          onClick={handleClick}
          className={`flex items-center justify-between px-4 py-4 w-full ${
            selected 
              ? "text-[#27AE60] border-r-4 rounded-lg border-[#27AE60]"
              : "text-[#969998]"
          }`}
        >
          <div className="flex items-center gap-2 text-2xl font-light">
            <img src={selected ? props.selectedimg  : props.notselectedimg} alt="side" />
          {!props.isopen &&  
           <span className="text-lg font-semibold">{props.title}</span>}
          </div>
        </Link>
      </div>
    </div>
  );
}