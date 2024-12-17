import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-row max-md:flex-col gap-6 justify-center items-center w-full py-20 bg-[#f6f7fb]'>
            <div className='flex flex-col justify-between items-start max-md:items-center w-[50%]'>
                <h2 className=' max-md:text-4xl max-lg:text-6xl max-md:text-center lg:text-7xl max-sm:text-4xl'>
                Helping a local <span className='text-[#4CAF4F]'><br />  business reinvent itself</span> <br/>
                <span className='max-md:text-lg text-gray-500 text-xl '>We reached here with our hard work and dedication</span>
                </h2>
            </div>
            <div className='flex flex-col justify-around items-center h-full max-md:w-full max-md:justify-center  w-[30%] gap-6'>
                <div className='flex flex-row justify-between max-md:justify-around items-start gap-2 w-full h-[50%]'>
                        <div className='flex flex-row justify-between items-center gap-4 h-[50%]'>
                                <img src="/member.png" alt="gg" />
                                <div className='flex flex-col justify-center items-center'>
                                        <p>2,225,255</p>
                                        <p>Members</p>
                                </div>
                        </div>
                        <div className='flex flex-row justify-between items-center  gap-4'>
                                <img src="/clubs.png" alt="gg"  />
                                <div className='flex flex-col justify-center items-center'>
                                        <p>2,225,255</p>
                                        <p>Members</p>
                                </div>
                        </div>
                </div>
                <div className='flex flex-row justify-between max-md:justify-around items-start gap-2 w-full h-[50%]'>
                        <div className='flex flex-row justify-between items-center   gap-4'>
                                <img src="/booking.png" alt="gg" />
                                <div className='flex flex-col justify-center items-center'>
                                        <p>2,225,255</p>
                                        <p>Members</p>
                                </div>
                        </div>
                        <div className='flex flex-row justify-between items-center  gap-4'>
                                <img src="/payment.png" alt="gg" />
                                <div className='flex flex-col justify-center items-center'>
                                        <p>2,225,255</p>
                                        <p>Members</p>
                                </div>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Stats