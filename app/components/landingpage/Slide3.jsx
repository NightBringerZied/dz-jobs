import React from 'react'
import Link from 'next/link'
const Slide3 = () => {
  return (
    <div className='flex flex-row justify-center max-md:items-center w-[90%] h-full  ml-10 py-20'>
            <div className='flex flex-col w-[50%] h-[90%] justify-center items-center max-md:hidden'>
                <img src="/pana.png" alt="gg" className='h-[300px] w-[300px]' />
            </div>
            <div className='flex flex-col w-[60%] max-md:w-full h-full  justify-center items-center'>
                <div className='flex flex-col max-md:w-full max-md:justify-center justify-between max-md:items-center items-start gap-8 '>
                    <h2 className='max-lg:text-5xl max-md:text-center max-md:text-3xl lg:text-5xl text-[#4D4D4D]'>
                        Success Stories: From Application  <br/>to Dream Job with DZ-Jobs
                    </h2>
                    <span className='text-[#717171] text-xl max-md:w-[70%] max-md:text-center w-[70%] '>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</span>
                    <button className="py-5 px-10  rounded-md mt-5  bg-[#4CAF4F] text-white text-lg">
                        <Link href="/SignUp">Learn More</Link>
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Slide3