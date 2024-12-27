"use client"
import React from 'react'
import { useState } from 'react'
const DegreeItem = (props) => {
    const [show, setShow] = useState(false);
    
  return (
    <div className='w-full  flex flex-col justify-normal items-start gap-6 border-b border-[#888888] py-4'>
        <div className='flex flex-row gap-4 justify-start items-center'>
            <img src='/degre.png' alt='insta'/>
            <p className='text-2xl font-light'>{props.degree}</p>
        </div>
        <div className='flex flex-row gap-4 justify-start text-xl items-center text-[#888888]'>
                <p >{props.institution} <span className='text-5xl'>.</span></p>
                <p>Gpa 3.8/4.0 <span className='text-5xl'>.</span></p>
                <p>Saudi Arabia <span className='text-5xl'>.</span></p>
                <p>{props.start_date} - {props.end_date} <span className='text-5xl'>.</span> </p>
        </div>
       {show &&( 
                <p className='text-xl text-[#888888]'>
                    {props.description}
                </p> 
                )
        }
        <div className='flex flex-row items-center w-full justify-between '>
            <button className='text-[#888888] text-xl underline' onClick={()=>setShow(!show)}>
                    {show ? "Show Less" : "Show More"}
            </button>
            <button className='px-8 py-2 bg-green-600 text-xl text-white rounded-xl'>
              Edit
            </button>
        </div>
    </div>
  )
}

export default DegreeItem