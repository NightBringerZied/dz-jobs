import React from 'react'

const Profile = () => {
  return (
    <div className="w-full max-md:flex-col flex flex-row min-h-[180px] bg-white rounded-lg justify-between items-center shadow-2xl">
      <div className='flex max-sm:flex-col  flex-row h-full min-h-[180px] items-center justify-center max-md:w-[90%] w-[80%] gap-10'>
        <div className='flex justify-center items-center'>
          <img src='/pdp.png' alt='zied' className='object-cover w-[80%] h-[80%] max-sm:w-full max-sm:h-[60%] shadow-2xl rounded-2xl'/>
        </div>
        <div className='flex flex-col max-md:w-[90%] w-[70%] h-full justify-center items-start gap-12'>
          <h1 className='text-5xl max-md:text-2xl font-light'>Zied Benaliouche</h1>
          <div className='flex flex-col justify-evenly gap-6 pl-2'>
              <h2 className='text-3xl max-md:text-2xl font-light'>Biography </h2>
              <p className='text-lg max-md:text-sm text-[#6b6a6a]'>Lorem ipsum dolor sit amet consectetur. Morbi facilisi egestas pharetra euismod. Aliquet vehicula scelerisque est ornare dolor tellus ligula erat. Augue luctus aliquam blandit arcu aliquam ultricies quis risus non. In ac mauris non massa. Mattis massa tincidunt quis lacinia elementum egestas eget augue.</p>
          </div>
        </div>
      </div>
      <div className='flex w-[10%] max-md:w-full md:min-h-[200px] p-4 max-md:items-center md:items-end max-md:justify-end md:justify-center'>
          <button className='h-full max-md:w-[20%] md:w-full items-end text-lg justify-end px-2 py-4  text-white rounded-xl bg-[#4D4D]'>
              Edit Profile 
          </button>
      </div>
    </div>
  )
}

export default Profile