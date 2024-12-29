"use client"
import React, { useState ,useEffect} from 'react';
import Link from 'next/link';
import { resetPasswordAction } from '@/app/action/UserAction';
const Page = () => {
    const [email, setEmail] = useState("");
    const [pass, setpass] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    const handlepassChange = (e) => setpass(e.target.value !== "");

        useEffect(() => {
          const params = new URLSearchParams(window.location.search);
          const email = params.get('email');
          setEmail(email || '');
        }, []);  
     const handleSubmit = async (e) => {
    e.preventDefault();
    const new_password = e.target.password.value;
    const data ={email,new_password}
    console.log(data);
    try{
        console.log("enter")
        const response = await resetPasswordAction(data);
        console.log(response);
    }
    catch{console.log("error")}
  };
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center relative bg-[#A5D6A7] overflow-hidden'>
      <div className='w-[40%] h-[80%] bg-white flex flex-col rounded-3xl justify-center z-10 gap-20 items-center'>
        <div className='w-full flex flex-col justify-center items-center gap-4'>
          <h1 className='text-6xl font-bold'>Reset Password</h1>
          <h2 className='text-2xl text-center text-gray-500'>
            Choose the type of account you want to create.
          </h2>
        </div>
        <div className='w-full flex flex-col justify-evenly items-center gap-8'>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4'>
                <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder=" "
                  onChange={handlepassChange}
                  className="peer w-full border-b-2 border-[#E5E5E5] py-2 pl-10 pr-3 focus:outline-none focus:ring-0 "
                />
                <div
                  className={`absolute left-3 flex items-center space-x-2 transition-all duration-300 
                    ${pass ? "top-0 -translate-y-full text-sm text-black" : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"} 
                    peer-focus:top-[-10%] peer-focus:-translate-y-full peer-focus:text-lg peer-focus:text-black`}
                >
                  <img src="/key.png" alt="icon" />
                  <h2 className="text-xl text-[#9D9D9D]">Password</h2>
                </div>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  <img src={showPassword ? "/hide.png" : "/show.png"} alt="icon" />
                </button>
              </div>
                 <button
                    type='submit'
                    className="w-full rounded-xl bg-[#E53835] text-white text-2xl p-4"
                >
                    <h2>reset Password</h2>
                </button>
            </form>
        </div>
      </div>
      <div className='w-[50%] h-[80%] bg-[#C8E6C9] absolute top-[-25%] left-[-15%] rounded-[80px] rotate-[135deg]'></div>
      <div className='w-[50%] h-[80%] bg-[#C8E6C9] absolute bottom-[-25%] right-[-15%] rounded-[80px] rotate-[135deg]'></div>
    </div>
  );
};

export default Page;
