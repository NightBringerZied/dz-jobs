import React from 'react'
import Search from './component/Search'
import Filter from './component/Filter'
import Jobs from './component/Jobs'
const page = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center px-[20px] gap-16 py-10'>
        <div className='w-full bg-white shadow-2xl py-8 px-8 rounded-2xl'>
            <div className='w-full items-center flex flex-col justify-center gap-16'>
                <div className='w-[90%] flex flex-col justify-start items-start'>
                  <h1 className='text-4xl font-bold '>Job Search</h1>
                  <p className='text-xle text-gray-400 mt-4'>Search for your desired job matching your skills</p>
                </div>
                <div className='w-[90%] flex flex-col justify-start items-start'>
                      <Search/>
                </div>
                <div className='w-[90%] flex flex-row justify-start gap-5 items-start'>
                      <div className='w-[30%]  flex flex-col justify-center items-center '>
                        <div className='w-full flex flex-col gap-10 justify-start items-start'>
                            <h1 className='text-4xl font-bold '>Filter</h1>
                            <Filter/>
                        </div>
                      </div>
                      <div className='w-[70%] flex flex-col justify-start items-start '>
                            <h1 className='text-4xl font-bold '>All Jobs</h1>
                            <Jobs />
                      </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default page