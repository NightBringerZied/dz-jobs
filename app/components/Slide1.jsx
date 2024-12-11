import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import slide from '../../public/slide1.png'
const Slide1 = () => {
  return (
    <div className='flex flex-row justify-around w-[90%] h-full  bg-[#f6f7fb]'>
            <div className='flex flex-col w-full max-md:w-full h-full  justify-center items-center'>
                    <div className='flex flex-col justify-between items-start'>
                            <h2 className='max-lg:text-6xl xl:text-7xl max-sm:text-4xl'>
                                The ultimate platform for <span className='text-[#4CAF4F]'>IT</span> <br />
                                <span className='text-[#4CAF4F]'>careers</span> and <span className='text-[#4CAF4F]'>recruitment</span><br />
                                <span className='text-gray-500 text-xl '> Your IT career starts here: discover, connect, grow</span>
                            </h2>
                            <button className="py-5 px-10  rounded-md mt-5  bg-[#4CAF4F] text-white text-lg">
                                <Link href="/SignUp">Registre</Link>
                            </button>
                        </div>
            </div>
            <div className='flex flex-col w-[50%] h-[90%] justify-center items-center max-md:hidden'>
                <Image src={slide} alt='gg' className=' h-[80%] w-[220px] xl:h-[80%] '></Image>
            </div>
    </div>
  )
}

export default Slide1