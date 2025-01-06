import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FilterCar = ({ setFilterList, filterList, catName, catProps }) => {
  const [open, setOpen] = useState(false);

  const toggle = (list, item) => {
    if (list.includes(item)) {
      return list.filter((e) => e !== item);
    } else {
      return [...list, item];
    }
  };
  console.log(filterList);
  return (
    <div className="w-[90%] relative flex flex-col h-auto justify-center items-start border-t-2 py-10 gap-4 border-[#E5E5E5] ">
      {/* Header to toggle open/close */}
      <div
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="text-black text-2xl font-semibold">{catName}</p>
      </div>

      {/* Dropdown list */}
      <div
        className={`flex flex-col gap-[10px] rounded-b-lg pl-[5px] text-[#858282] transition-all duration-500  z-[300] 
          "opacity-100 max-h-[300px]" 
        `}
      >
        {catProps.map((elem, i) => (
          <div
            className={`flex flex-col justify-center  transition-all duration-500 ${
              "h-[20px]"
            }`}
            key={i + catName}
          >
            <div
              className="flex gap-[8px] cursor-pointer"
              onClick={() => {
                setFilterList({
                  ...filterList,
                  [catName]: toggle(filterList[catName] || [], elem),
                });
              }}
            >
              {filterList[catName]?.includes(elem) ? (
                <div className="w-[15px] h-[15px] rounded-md border-[0.5px] bg-[#1B5E1F] flex items-center justify-center">
                  <MdDone className="text-white" />
                </div>
              ) : (
                <div className="w-[15px] h-[15px] rounded-md border-[0.5px] border-[#858282]"></div>
              )}
              <p className="text-[#303030] text-xl font-light">{elem}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCar;
