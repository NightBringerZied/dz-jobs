import React from 'react'
import Link from 'next/link'
const Last = () => {
  return (
    <div className='flex flex-col gap-6 justify-center items-center w-full py-20 bg-[#f6f7fb]'>
            <h2 className='text-center max-md:text-5xl max-lg:text-6xl lg:text-7xl max-md:w-[90%] w-[40%] text-[#263238]'>
                Discover thousands of IT opportunities tailored to your skills
            </h2>
            <button className="py-5 px-10  rounded-md mt-5  bg-[#4CAF4F] text-white text-lg">
                        <Link href="/SignUp">Find Jobs</Link>
            </button>
    </div>
  )
}

export default Last