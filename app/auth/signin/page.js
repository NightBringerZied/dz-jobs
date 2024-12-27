"use client"
import React, { useState, useRef } from "react";
import Link from "next/link";
import { signinAction } from "@/app/action/UserAction";
const Page = () => {
  const [hasText, setHasText] = useState(false);
  const [pass, setpass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);



  
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const handleInputChange = (e) => setHasText(e.target.value !== "");
  const handlepassChange = (e) => setpass(e.target.value !== "");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data={email,password}
    try{
      await signinAction(data);
    }
    finally{
      setIsLoading(false);
    }
  };
  

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    }
  };

  return (
    <div className="bg-[#A5D6A7] w-full h-screen overflow-hidden flex flex-row justify-between items-center">
      <div className="w-[40%] h-[90%] flex flex-col justify-between items-start relative max-md:hidden">
        <div className="flex flex-col justify-around items-center w-[40%] gap-10">
          <img src="/logoauth.png" alt="logo" />
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
        </div>
        <img
          src="/signin.png"
          alt="signin"
          className="absolute overflow-hidden right-[-15%] bottom-[-10%]"
        />
      </div>
      <div className="w-[60%] max-md:w-full h-screen flex flex-col justify-center items-center gap-10 md:rounded-l-[50px] bg-white">
        <div className="flex flex-col justify-evenly items-start w-[60%] h-[40%] gap-20">
          <h1 className="text-6xl text-black font-bold">Sign In</h1>
          <div className="flex flex-col justify-evenly items-start w-full gap-5">
            <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col justify-around items-start gap-20">
              <div className="relative w-full">
                <input
                  type="text"
                  name="email"
                  placeholder=" "
                  onChange={handleInputChange}
                  className="peer w-full border-b-2 border-[#E5E5E5] py-2 pl-10 pr-3 focus:outline-none focus:ring-0 "
                />
                <div
                  className={`absolute left-3 flex items-center space-x-2 transition-all duration-300 
                    ${hasText ? "top-0 -translate-y-full text-sm text-black" : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"} 
                    peer-focus:top-[-10%] peer-focus:-translate-y-full peer-focus:text-lg peer-focus:text-black`}
                >
                  <img src="/mail.png" alt="icon" />
                  <h2 className="text-xl text-[#9D9D9D]">Email Address</h2>
                </div>
              </div>
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
            </form>
          </div>
        </div>
        <div className="w-[60%] flex flex-col h-[40%] justify-around items-center">
          <h1 className="text-3xl text-[#9D9D9D]">-OR-</h1>
          <div className="flex flex-row w-full jutify-center items-center gap-5">
            <Link
              href={"/"}
              className="w-[90%] border rounded-lg border-[#E5E5E5] p-4 flex flex-row justify-evenly items-center"
            >
              <img src="/google.png" alt="icon" />
              <h5 className="text-lg">Sign In With Google</h5>
            </Link>
          </div>
          <button
            onClick={handleButtonClick}
            className="w-full rounded-xl bg-[#E53835] text-white text-2xl p-4"
          >
            <h2>{isLoading ? "Signing In..." : "Sign In"}</h2>
          </button>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row justify-center items-center">
              <h5 className="text-xl text-gray-500">No Account?</h5>
              <hr />
              <Link href={"/auth/signup"} className="text-xl text-[#66BB69]">
                Create one
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
