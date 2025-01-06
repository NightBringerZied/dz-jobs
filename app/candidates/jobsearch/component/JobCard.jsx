import React from 'react'

const JobCard = ({job_id,
    title,
    description,
    location,
    salary_range,
    required_skills,
    recruiter_id,
    created_at,
    updated_at,
    status,
    job_type}) => {
  return (
    <div className='w-[45%] flex flex-col items-start px-6 py-6 justify-center gap-4  bg-[#C8E6C9] rounded-lg '>
                <div className='flex flex-row w-full gap-4 justify-between'>
                    <h1 className='text-2xl text-[#18191C] font-semibold '>{title}</h1>
                    <button>
                        <img src="/bookmark.png" alt="logo"  className='w-[25px] h-[25px]'/>
                    </button>
                </div>
                <div className='flex flex-row justify-between items-center gap-4 w-full'>
                        <h1 className='text-xl px-2 rounded-md font-semibold bg-[#E7F6EA] text-[#1B5E1F]'>{job_type}</h1>
                        <p className='text-[#767F8C] text-lg '>Salary : {salary_range}</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-4 w-full'>
                    <img src="/Company.png" alt="logoog" className='w-[40px] h-[40px] '/>
                    <div className='flex flex-col justify-center text-lg items-start gap-2'>
                            <h1 className='font-bold text-lg'>Google</h1>
                            <div className='flex flex-row gap-2 '>
                                <img src="/locationsearch.png" alt="loc"/>
                                <p className='text-[#767F8C]'>{location}</p>
                            </div>
                    </div>
                </div>
                <div className='text-sm  text-[#767F8C] w-full'>
                        <p>{description}</p>
                </div>
                <div className='flex flex-row justify-between w-full items-center'>
                            <button className='w-[40%] text-xl rounded-lg border py-2 border-red-500 '>
                                    View Details
                            </button>        
                            <button className='w-[40%] text-xl rounded-lg bg-[#1B5E1F] text-[#fff] py-2 '>
                                    Apply Now
                            </button>        
                                  
                 </div>
    </div>
  )
}

export default JobCard