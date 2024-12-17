import React from 'react'
import Link from 'next/link'
import client from "../../../public/Vector.png";
import Image from 'next/image';
const Sec = () => {
  return (
    <div className='flex flex-row justify-center max-md:items-center w-full h-full  ml-10 py-20 bg-[#F5F7FA]'>
            <div className='flex flex-col w-[50%] h-[90%] justify-center items-center max-md:hidden'>
                <img src="/image 9.png" alt="gg" className='h-[300px] w-[300px]' />
            </div>
            <div className='flex flex-col w-[60%] max-md:w-full h-full  justify-center items-center'>
                <div className='flex flex-col max-md:w-full max-md:justify-center justify-between max-md:items-center items-start gap-8 '>
                    <p className='text-xl text-[#717171] w-[80%] '>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h6 className=' text-[#4CAF4F]'>Tim Smith</h6>
                    <h6 className=' text-[#717171]'>British Dragon Boat Racing Association</h6>
                    <div className='w-[90%] items-center justify-around  flex flex-row  '>
                             <Image src={client} alt={`Client}`} className="w-[25px] h-[25px]" />
                             <Image src={client} alt={`Client}`} className="w-[25px] h-[25px]" />
                             <Image src={client} alt={`Client}`} className="w-[25px] h-[25px]" />
                             <Image src={client} alt={`Client}`} className="w-[25px] h-[25px]" />
                            <div className='flex flex-row justify-center items-center gap-4 text-[#4CAF4F] text-xl font-bold'>
                                    <Link href={"/"} className='flex flex-row justify-around items-center' >
                                        <p>MEET ALL Customers    </p>
                                        <p className='text-4xl items-center justify-center'>&rarr;</p>
                                    </Link>
                            </div>
                        </div>  
                </div>
            </div>
    </div>
  )
}

export default Sec