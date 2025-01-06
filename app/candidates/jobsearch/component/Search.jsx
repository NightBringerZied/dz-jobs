"use client"
import React, { useState } from 'react';

const Search = () => {
  const [formData, setFormData] = useState({
    jobType: '',
    location: '',
    keywords: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Parameters:', formData);
    // Add your search logic here
  };

  return (
    <div className='w-full bg-[#F6F6F6]  flex flex-row justify-center items-center py-4'>
      <form 
        onSubmit={handleSubmit} 
        className='w-full flex flex-row justify-around items-center gap-4'
      > 
      <div className='flex flex-row justify-evenly items-center gap-4'>
        <img src="/jobtype.png" alt="gg" />
        <input
          type='text'
          name='jobType'
          placeholder='Job Type (e.g. Full-time)'
          value={formData.jobType}
          onChange={handleChange}
          className='w-1/3 p-2  text-[#808080] border-r border-[#808080] bg-[#F6F6F6] bg-transparent focus:outline-none  '
        />
        <img src="/locationsearch.png" alt="search" />
        <input
          type='text'
          name='location'
          placeholder='Location (e.g. New York)'
          value={formData.location}
          onChange={handleChange}
          className='w-1/3 p-2  border-r border-[#808080] bg-[#F6F6F6]   bg-transparent focus:outline-none '
        />
        <img src="/keywords.png" alt="key" />
        <input
          type='text'
          name='keywords'
          placeholder='Keywords (e.g. JavaScript, React)'
          value={formData.keywords}
          onChange={handleChange}
          className='w-1/3 p-2  text-[#808080]  bg-[#F6F6F6]  bg-transparent focus:outline-none '
        />
        </div>
        <button 
          type='submit' 
          className='px-10 py-2 bg-[#1B5E1F] text-white rounded-xl'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
