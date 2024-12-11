import React from 'react'
import Image from 'next/image'
import client from "../../public/Vector.png"
const Clients = () => {
  return (
    <div className='w-full flex flex-col justify-around gap-8 items-center mt-10'>
        <h1 className='text-[#4D4D4D] text-6xl'>Our Clients</h1>
        <h5 className='text-[#717171]'>Trusted by leading IT companies in Algeria</h5>
        <div className='w-full flex flex-row justify-around items-center  py-4'>
            <Image src={client} alt='hhhh' className='w-[35px] h-[35px]' ></Image>
            <Image src={client} alt='hhhh' className='w-[35px] h-[35px]' ></Image>
            <Image src={client} alt='hhhh' className='w-[35px] h-[35px]' ></Image>
            <Image src={client} alt='hhhh' className='w-[35px] h-[35px] max-md:hidden' ></Image>
            <Image src={client} alt='hhhh' className='w-[35px] h-[35px] max-md:hidden' ></Image>
            <Image src={client} alt='hhhh' className='w-[35px] h-[35px] max-md:hidden' ></Image>
            <Image src={client} alt='hhhh' className='w-[35px] h-[35px]' ></Image>
 
        </div>
    </div>
  )
}

export default Clients