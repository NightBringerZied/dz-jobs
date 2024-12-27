import React from 'react'
import Link from 'next/link'
const Contact = () => {
  return (
    <div className='w-full  flex flex-col justify-normal items-start gap-12 bg-white rounded-2xl shadow-2xl px-10 py-6'>
                              <h1 className='text-3xl font-light'>Contact Information</h1>
                              <div className='flex flex-col  max-md:items-center max-md:justify-center w-full justify-between items-start gap-12 text-xl'>
                                <div className='flex flex-col w-[50%]  justify-start items-start gap-9'>
                                      <div className='flex flex-row justify-evenly items-center  gap-4 w-full'>
                                            <img src='/phone.png' className='w-[20px] h-[20px]' alt='phone'/>
                                            <p className='text-xl font-light'>+23132143241</p>
                                            <img src='/copy.png' className='w-[20px] h-[20px]' alt='copy'/>
                                      </div>
                                      <div className='flex flex-row justify-evenly items-center gap-4 w-full'>
                                            <img src='/aroubaz.png' className='w-[20px] h-[20px]' alt='phone'/>
                                            <p className='text-xl font-light'>haroun@gmail.com</p>
                                            <img src='/copy.png'  className='w-[20px] h-[20px]' alt='copy'/>
                                      </div>
                                </div>
                                <div className='flex flex-row justify-around items-center max-md:w-[50%] w-full  gap-10 max-md:flex-col'>
                                    <div className='flex flex-row justify-evenly items-center gap-2 w-full'>
                                            <img src='/linkedin2.png'   className='w-[20px] h-[20px]' alt='phone'/>
                                            <Link href={"#"} className='underline'>LinkedIn</Link>
                                            <img src='/arrow-up-right.png'  className='w-[20px] h-[20px]' alt='copy'/> 
                                    </div>
                                    <div className='flex flex-row justify-evenly items-center gap-2 w-full'>
                                            <img src='/linkedin2.png'  className='w-[20px] h-[20px]' alt='phone'/>
                                            <Link href={"#"} className='underline'>LinkedIn</Link>
                                            <img src='/arrow-up-right.png'  className='w-[20px] h-[20px]' alt='copy'/> 
                                    </div>
                                    <div className='flex flex-row justify-evenly items-center gap-2 w-full'>
                                            <img src='/linkedin2.png'  className='w-[20px] h-[20px]' alt='phone'/>
                                            <Link href={"#"} className='underline'>LinkedIn</Link>
                                            <img src='/arrow-up-right.png'   className='w-[20px] h-[20px]' alt='copy'/> 
                                    </div>       
                                </div>
                                <div className='w-full flex justify-center items-center'>
                                    <button className='px-8 py-2 bg-green-600 text-white rounded-xl'>
                                          Edit
                                    </button></div>
                              </div>
        </div>
  )
}

export default Contact