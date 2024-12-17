import React from 'react'
import Link from 'next/link'
const Slide2 = () => {
  return (
    <div className='flex flex-row justify-center max-md:items-center w-[90%] h-full  ml-10 py-20'>
            <div className='flex flex-col w-[50%] h-[90%] justify-center items-center max-md:hidden'>
                <img src="/rafiki.png" alt="gg" className='h-[350px] w-[300px]' />
            </div>
            <div className='flex flex-col w-[60%] max-md:w-full h-full  justify-center items-center'>
                    <div className='flex flex-col max-md:w-full max-md:justify-center justify-between max-md:items-center items-start gap-8 '>  
                            <h2 className='max-lg:text-5xl max-md:text-center max-md:text-3xl lg:text-5xl text-[#4D4D4D]'>
                            Connecting Talent with <br/> Opportunity  Empowering <br/> Careers, Enriching Businesses
                            </h2>
                            <span className='text-[#717171] text-xl max-md:w-[70%] max-md:text-center w-[70%]  '>DZ Jobs is a tech-driven recruitment platform designed to simplify the hiring process in Algeria. We connect job seekers and employers by providing advanced tools for job searching, recruitment, and professional developmentTo empower the Algerian job market by making recruitment transparent, efficient, and accessible to all</span>
                            <button className="py-5 px-10  rounded-md mt-5  bg-[#4CAF4F] text-white text-lg">
                                <Link href="/SignUp">Learn More</Link>
                            </button>
                    </div>
            </div>
            
    </div>
  )
}
export default Slide2