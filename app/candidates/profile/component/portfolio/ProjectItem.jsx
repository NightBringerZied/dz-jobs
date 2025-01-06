import React from 'react'
import Link from 'next/link'
const ProjectItem = (props) => {
  return (
    <div className='flex w-[40%] flex-col flex-wrap py-8 gap-2 px-16 justify-evenly items-start rounded-2xl shadow-2xl'>
        <Link href={props.project_link} className='text-3xl font-semibold hover:underline  hover:text-green-600'>{props.project_name}</Link>
        <h2 className='text-2xl font-light text-green-600'>{props.category}</h2>
        <p className='text-sm'>{props.description}</p>
    </div>  
  )
}

export default ProjectItem