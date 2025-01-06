"use client";

import { CgCloseR } from "react-icons/cg";
import React, { useState } from "react";
import { FaCheck, FaLeaf } from "react-icons/fa";
import { MdDone, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FilterCar from "./FilterCar";
import { CiSearch } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";

const filterCaracteristiques = [
  { job_Type: ["remote", "Full-time", "Part-time","Internship","Contract"] },
  { status: ["closed","open"] },
  { job_Functions : ["Marketing", "Engeering", "Design" , "Sales"] },
  { requied_Skills: ["Design","Php","python"] },
];

const FilterSideBar = () => {
const [filterList, setFilterList] = useState({
        job_Type: [],
        status: [],
        job_Functions: [],
        requied_Skills: []
});
  const handleChange = (event, newValue) => {
    setFilterList({ ...filterList, prix: newValue });
  };

  return (
    <div className=" w-full relative bg-[#F6F6F6] rounded-xl">
      <div
        className={`capitalize transition-all duration-700 w-full  p-6 `}
      >
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            exit={{ scale: 0 }}
            className={`flex flex-col justify-center items-center w-full  md:shadow-sm`}
          >
            {filterCaracteristiques.map((element, index) => {
              let catName = Object.keys(element)[0];
              let carProps = element[catName];

              return (
                <FilterCar
                  key={100 * index}
                  filterList={filterList}
                  setFilterList={setFilterList}
                  catName={catName}
                  catProps={carProps}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FilterSideBar;
