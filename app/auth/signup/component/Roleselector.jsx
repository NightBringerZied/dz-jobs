"use client"
import React, { useState } from 'react';
import Link from 'next/link';
const Roleselector = () => {
  const [selectedRole, setSelectedRole] = useState(null); // Track the selected role

  const handleRoleClick = (role) => {
    setSelectedRole(role); // Update the state with the selected role
  };

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center relative bg-[#A5D6A7] overflow-hidden'>
      <div className='w-[40%] h-[80%] bg-white flex flex-col rounded-3xl justify-center z-10 gap-20 items-center'>
        <div className='w-full flex flex-col justify-center items-center gap-4'>
          <h1 className='text-6xl font-bold'>Create an Account</h1>
          <h2 className='text-2xl text-center text-gray-500'>
            Choose the type of account you want to create.
          </h2>
        </div>
        <div className='w-full flex flex-col justify-evenly items-center gap-8'>
          <button
            onClick={() => handleRoleClick('candidate')}
            className={`w-[80%] bg-[#EDEDED] border ${
              selectedRole === 'candidate' ? 'border-[#E53835]' : 'border-[#EDEDED]'
            } text-[#4E4E4E] font-semibold p-6 rounded-2xl flex justify-center items-center`}
          >
            <h2 className='text-4xl'>Candidate</h2>
          </button>
          <button
            onClick={() => handleRoleClick('recruiter')}
            className={`w-[80%] bg-[#EDEDED] border ${
              selectedRole === 'recruiter' ? 'border-[#E53835]' : 'border-[#EDEDED]'
            } text-[#4E4E4E] font-semibold p-6 rounded-2xl flex justify-center items-center`}
          >
            <h2 className='text-4xl'>Recruiter</h2>
          </button>
          <Link
            href={selectedRole ? `/auth/signup/form?role=${selectedRole}` : '#'}
            className={`w-[50%] ${
              selectedRole ? 'bg-[#E53835]' : 'bg-gray-400'
            } rounded-3xl p-8 flex justify-center items-center`}
          >
            <h2 className='text-4xl font-bold text-white'>Create Account</h2>
          </Link>
          <h5>
            Already have an account,{' '}
            <Link href={'/auth/signin'} className='text-[#E53835] font-bold'>
              Sign in?
            </Link>
          </h5>
        </div>
      </div>
      <div className='w-[50%] h-[80%] bg-[#C8E6C9] absolute top-[-25%] left-[-15%] rounded-[80px] rotate-[135deg]'></div>
      <div className='w-[50%] h-[80%] bg-[#C8E6C9] absolute bottom-[-25%] right-[-15%] rounded-[80px] rotate-[135deg]'></div>
    </div>
  );
};

export default Roleselector;
