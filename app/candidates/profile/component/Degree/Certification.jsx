import React from 'react'


const Certification = () => {
    const  data =[
            {
            "candidate_id": "string",
            "certification_id": "string",
            "certification_name": "Comptia A+",
            "expiration_date": "8 mars 2024",
            "issue_date": "6 mars 2023",
            "issued_by": "Comptia Organisation"
          }
        ]
  return (
    <div className='w-[40%] bg-white shadow-2xl rounded-xl  flex flex-col justify-normal items-start gap-10 p-8'>
        <div className='w-full flex justify-center items-center'>
             <img src='/cert.png' alt='logo' className='w-[80px] h-[80px] object-cover' />
        </div>
        <div className='flex flex-col w-full justify-center items-start gap-4 '>   
            <h1 className='text-3xl font-bold'>{data[0].certification_name}</h1>
            <h2 className='text-black text-xl font-light'>{data[0].issue_date}-{data[0].expiration_date}</h2>
        </div>
        <div className='w-full flex flex-row justify-between items-center'>
            <button className='w-[80%] px-8 py-1 rounded-lg text-lg bg-green-600 text-white '>
                Edit
            </button>
            <button className=' text-white '>
                <img src="/delete.png" alt="delete" />
            </button>
        </div>
    </div>
  )
}

export default Certification