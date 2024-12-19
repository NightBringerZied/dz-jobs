"use client"
import React from 'react'
import { useState } from "react";
import Link from 'next/link';
const ContactUs = () => {
  const [value, setValue] = useState({
    Name: "",
    Phone: 0,
    Description: "",
  });
  const handleOnClick = (e) => {
    e.preventDefault();
  };
  const handleOnChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className='w-full flex items-center justify-center py-20' id='contactus'>
          <div className='flex flex-col items-start justify-center w-[80%] max-md:w-[90%] gap-10 p-8 rounded-[30px] shadow-[0_0_30px_rgba(0,0,0,0.25)] relative'>
                  <h1 className= 'text-6xl font-semibold  text-[#4CAF4F]'>Get in touch</h1>
                  <h2 className='text-3xl text-black'>We are here for you! How can we help?</h2>
                  <div className='flex flex-row justify-center items-start w-full p-4 gap-4 py-4'>
                          <form className='w-[50%] max-md:w-[80%] flex flex-col justify-center max-md:justify-start items-start gap-4 '>
                                  <div className="w-full flex flex-col my-4">
                                    <label className=" text-[#0C0C0C] mb-2" htmlFor="name">
                                      Name
                                    </label>
                                    <input
                                      onChange={handleOnChange}
                                      type="text"
                                      minLength={3}
                                      maxLength={100}
                                      required
                                     
                                      className=" px-3 py-2 w-full bg-gray-50 border-2 border-opacity-[25%] border-[#4CAF4F]  rounded-[10px] "
                                      autoComplete="off"
                                      id="name"
                                    />
                                  </div>
                                  <div className="w-full  flex flex-col my-4">
                                    <label className="text-[#0C0C0C] mb-2" htmlFor="numero">
                                      Email
                                    </label>
                                    <input
                                      onChange={handleOnChange}
                                      type="email"
                                      minLength={3}
                                      maxLength={150}
                                      required
                                      name="numero"
                                      className=" px-3 py-2 bg-gray-50 border-2 border-opacity-[25%] border-[#4CAF4F]  rounded-[10px] "
                                      autoComplete="off"
                                      id="numero"
                                    />
                                  </div>
                                  <div className="w-full flex flex-col my-4 ">
                                  <label className=" text-[#0C0C0C] mb-2" htmlFor="message">
                                    Message
                                  </label>
                                  <textarea
                                    onChange={handleOnChange}
                                    rows={2}
                                    required
                                    minLength={10}
                                    maxLength={300}
                                    name="message"
                                    className="w-full p-3 bg-gray-50 border-2 border-opacity-[25%] border-[#4CAF4F] rounded-[10px] "
                                  />
                                </div>
                                <div className='py-2 flex w-full justify-center items-center'>
                                          <button type='submit' className='w-[90%] bg-[#4CAF4F] text-white text-4xl font-bold py-6 rounded-xl '>
                                                  Submit
                                          </button>
                                </div>
                              </form>
                
                    <div className='w-[50%] flex h-full  flex-col justify-around items-center gap-8 py-6 max-md:hidden'>
                        <img src="/contact.png" alt="contact" className='my-3'  />
                        <div className='flex flex-col w-[60%] justify-start items-center gap-8 '>
                              <div className='flex flex-row justify-start items-center gap-4 w-full'>
                                    <img src="/location.png" alt="location"  />
                                    <h2>545 Mavis Island, IL 99191</h2>
                              </div>
                              <div className='flex flex-row w-full justify-start items-center gap-4 '>
                                    <img src="/number.png" alt="location" />
                                    <h2>054232312</h2>
                              </div>
                              <div className='flex flex-row justify-start items-start gap-4 w-full'>
                                    <img src="/email.png" alt="location" />
                                    <h2>NightBringerZied@gmail.com</h2>
                              </div>
                        </div>  
                  </div>

              
                </div>
                <div className='absolute overflow-hidden right-0  flex flex-col justify-around items-center bg-[#E5CEE9] h-[200px] w-[50px] rounded-l-[20px]'> 
                      <Link href={"/"} >
                            <img src="/facebook.png" alt="" />
                      </Link>
                      <Link href={"/"} >
                            <img src="/instagram.png" alt="" />
                      </Link>
                      <Link href={"/"} >
                            <img src="/linkedin.png" alt="" />
                      </Link>
                      <Link href={"/"} >
                            <img src="/x.png" alt="" />
                      </Link>
                </div>
        </div>
    </div>
  )
}

export default ContactUs