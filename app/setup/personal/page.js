"use client";
import React, { useState, useRef } from "react";
import { candidatePersonalAction } from "@/app/action/SetupAction";
const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    date_of_birth: "",
    gender: "",
    bio: "",
  });

  const [fieldStates, setFieldStates] = useState({
    name: false,
    phone: false,
    email: false,
    address: false,
    date_of_birth: false,
    gender: false,
    bio: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Update field state
    setFieldStates((prev) => ({ ...prev, [name]: value.trim() !== "" }));
  };

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { bubbles: true, cancelable: true })
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form Data Submitted:", formData);
      const res = await candidatePersonalAction(formData);
      console.log(res);
    } 
    finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#A5D6A7] w-full h-screen overflow-hidden flex flex-row justify-between items-center">
      <div className="w-[30%] h-[90%] flex flex-col justify-between items-start relative max-md:hidden">
        <div className="flex flex-col justify-around items-center w-[40%] gap-10">
          <img src="/logoauth.png" alt="logo" />
          <h2 className="text-3xl font-bold text-white w-[70%]">
            Welcome to Job-DZ! Where we make things easy for you.
          </h2>
        </div>
        <img
          src="/signup.png"
          alt="signin"
          className="absolute overflow-hidden right-[-30%] bottom-[-10%]"
        />
      </div>
      <div className="w-[70%] max-md:w-full h-screen flex flex-col justify-center items-center gap-10 md:rounded-l-[50px] bg-white">
        <div className="flex flex-col justify-evenly py-10 items-start w-[60%] h-[70%] gap-20">
          <h1 className="text-6xl text-black font-bold">Setup Your Personal Info</h1>
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="w-full flex flex-col justify-around items-start gap-20"
          >
            <div className="flex flex-row justify-around items-start w-full gap-10">
              <div className="flex flex-col h-full justify-between items-start w-full gap-20">
                {/** Full Name */}
                <div className="relative w-full">
                  <input
                    name="name"
                    type="text"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`peer w-full border-b-2 py-2 pl-10 pr-3 ${
                      fieldStates.name ? "border-green-500" : "border-gray-300"
                    }`}
                  />
                  <div className="absolute left-3 top-[-10%] text-black text-lg">Full Name</div>
                </div>

                {/** Phone Number */}
                <div className="relative w-full">
                  <input
                    name="phone"
                    type="text"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`peer w-full border-b-2 py-2 pl-10 pr-3 ${
                      fieldStates.phone ? "border-green-500" : "border-gray-300"
                    }`}
                  />
                  <div className="absolute left-3 top-[-10%] text-black text-lg">Phone Number</div>
                </div>

                {/** Email */}
                <div className="relative w-full">
                  <input
                    name="email"
                    type="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`peer w-full border-b-2 py-2 pl-10 pr-3 ${
                      fieldStates.email ? "border-green-500" : "border-gray-300"
                    }`}
                  />
                  <div className="absolute left-3 top-[-10%] text-black text-lg">Email</div>
                </div>

                {/** Address */}
                
              </div>

              <div className="flex flex-col h-full justify-between items-start w-full gap-20">
             
               <div className="relative w-full">
                  <input
                    name="address"
                    type="text"
                    placeholder=" "
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`peer w-full border-b-2 py-2 pl-10 pr-3 ${
                      fieldStates.address ? "border-green-500" : "border-gray-300"
                    }`}
                  />
                  <div className="absolute left-3 top-[-10%] text-black text-lg">Address</div>
                </div>
                {/** Date of Birth */}
                <div className="relative w-full">
                  <input
                    name="date_of_birth"
                    type="date"
                    value={formData.date_of_birth}
                    onChange={handleInputChange}
                    className={`peer w-full border-b-2 py-2 pl-10 pr-3 ${
                      fieldStates.date_of_birth ? "border-green-500" : "border-gray-300"
                    }`}
                  />
                  <div className="absolute left-3 top-[-10%] text-black text-lg">
                    Date of Birth
                  </div>
                </div>

                {/** Gender */}
                <div className="relative w-full">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={`peer w-full border-b-2 py-2 pl-10 pr-3 ${
                      fieldStates.gender ? "border-green-500" : "border-gray-300"
                    }`}
                  >
                    <option value="" disabled>
                      Choose Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div className="absolute left-3 top-[-10%] text-black text-lg">Gender</div>
                </div>

               
              </div>
            </div>
                {/** Bio */}
                <div className="relative w-full">
                  <textarea
                    name="bio"
                    placeholder=" "
                    value={formData.bio}
                    onChange={handleInputChange}
                    className={`peer w-full border-b-2 py-2 pl-10 pr-3 ${
                      fieldStates.bio ? "border-green-500" : "border-gray-300"
                    }`}
                  />
                  <div className="absolute left-3 top-[-10%] text-black text-lg">Bio</div>
                </div>
          </form>
        </div>
        <div className="w-[60%] flex flex-col h-[30%] justify-around items-center">
          <button
            className="w-full rounded-xl bg-[#E53835] text-white text-2xl p-4"
            onClick={handleButtonClick}
          >
            <h2>{isLoading ? "Loading..." : "Create Account"}</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
