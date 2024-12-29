"use client";
import React, { useState, useRef } from "react";
import  {profileAction, skipAction} from "../action/SetupAction";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSkiping, setIsSkiping] = useState(false);
  const [skip, setSkip] = useState(false);
  const formRef = useRef(null);

  // Handle file change and validation
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes =
      e.target.name === "image"
        ? ["image/jpeg", "image/png", "image/gif"]
        : ["application/pdf"];
    if (!validTypes.includes(file.type)) {
      alert(`Invalid file type for ${e.target.name}: ${file.type}`);
      return;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const profile_picture = e.target.image.files[0];
    const resume = e.target.pdf.files[0];
    // Make sure both files are provided before submitting
    if (!profile_picture || !resume) {
      alert("Please upload both image and resume files.");
      setIsLoading(false);
      return;
    }
    const data = { profile_picture,resume,skip};
    try {
      console.log("Submitting data...");
      const response = await profileAction(data); 
      console.log(response);
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setIsLoading(false);
    }
  };
const handleskip= async ()=>{
      setSkip(true);
      setIsSkiping(true);
    try {
      const response = await skipAction(); 
      console.log(response);
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setIsSkiping(false);
    }
  }

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
          <h1 className="text-6xl text-black font-bold">Setup Your Account</h1>
          <div className="flex flex-col justify-evenly items-start w-full gap-5">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col justify-around items-start gap-20"
            >
              {/* Image Upload Field */}
              <div className="relative w-full">
                <h2 className="text-xl text-[#9D9D9D]">Upload Image</h2>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  placeholder=" "
                  onChange={handleFileChange} // Function to handle file input
                  className="peer w-full border-b-2 border-[#E5E5E5] py-2 pl-10 pr-3 focus:outline-none focus:ring-0"
                />
              </div>

              {/* PDF Upload Field */}
              <div className="relative w-full">
                <h2 className="text-xl text-[#9D9D9D]">Upload PDF</h2>
                <input
                  type="file"
                  name="pdf"
                  accept="application/pdf"
                  placeholder=" "
                  onChange={handleFileChange} // Function to handle file input
                  className="peer w-full border-b-2 border-[#E5E5E5] py-2 pl-10 pr-3 focus:outline-none focus:ring-0"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#E53835] text-white text-2xl p-4"
                disabled={isLoading}
              >
                <h2>{isLoading ? "Submitting..." : "Next"}</h2>
              </button> 
            </form>
            <button
                type="submit"
                className="w-full rounded-xl bg-[#888888]  text-[#E53835] text-2xl p-4"
                disabled={isLoading}
                onClick={()=>{handleskip()}}
              >
                <h2>{isSkiping ? "Skiping..." : "skip"}</h2>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
