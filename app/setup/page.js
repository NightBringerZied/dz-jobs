"use client";
import React, { useState, useRef } from "react";
import { profileAction, skipAction } from "../action/SetupAction";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);
  const [skip, setSkip] = useState(false);
  const formRef = useRef(null);

  // Handle file change and validation
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const validTypes =
      e.target.name === "image"
        ? ["image/jpeg", "image.png", "image/gif"]
        : ["application/pdf"];
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      alert(`File is too large! Maximum size is 5MB.`);
      e.target.value = ""; // Reset the input field
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    try {
      const form = formRef.current;
      const profile_picture = form.profile_picture.files[0];
      const resume = form.resume.files[0];
      if (!profile_picture || !resume) {
        alert("Please upload both profile picture and resume.");
        setIsLoading(false);
        return;
      }
  
      
      formData.append("profile_picture", profile_picture);
      formData.append("resume", resume);
      console.log(formData);
      const response = await profileAction(formData);
      console.log("Submission successful:", response);
    } catch (error) {
      console.error("Error during submission:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle skipping action
  const handleSkip = async () => {
    setSkip(true);
    setIsSkipping(true);

    try {
      const response = await skipAction();
      console.log("Skip successful:", response);
    } catch (error) {
      console.error("Error during skipping:", error);
    } finally {
      setIsSkipping(false);
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
          <h1 className="text-6xl text-black font-bold">Setup Your Account</h1>
          <div className="flex flex-col justify-evenly items-start w-full gap-5">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col justify-around items-start gap-20"
            >
              {/* Profile Picture Upload */}
              <div className="relative w-full">
                <h2 className="text-xl text-[#9D9D9D]">Upload Profile Picture</h2>
                <input
                  type="file"
                  name="profile_picture"
                  accept="image/*"
                  placeholder=" "
                  onChange={handleFileChange}
                  className="peer w-full border-b-2 border-[#E5E5E5] py-2 pl-10 pr-3 focus:outline-none focus:ring-0"
                />
              </div>

              {/* Resume Upload */}
              <div className="relative w-full">
                <h2 className="text-xl text-[#9D9D9D]">Upload Resume</h2>
                <input
                  type="file"
                  name="resume"
                  accept="application/pdf"
                  placeholder=" "
                  onChange={handleFileChange}
                  className="peer w-full border-b-2 border-[#E5E5E5] py-2 pl-10 pr-3 focus:outline-none focus:ring-0"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#E53835] text-white text-2xl p-4"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Next"}
              </button>
            </form>

            {/* Skip Button */}
            <button
              type="button"
              className="w-full rounded-xl bg-[#888888] text-[#E53835] text-2xl p-4"
              disabled={isSkipping || isLoading}
              onClick={handleSkip}
            >
              {isSkipping ? "Skipping..." : "Skip"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
