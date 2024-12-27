import React from 'react'
import ExperienceItem from './ExperienceItem'
const Experience = () => {
    const data = {
        "experiences": [
          {
            "candidate_id": "string",
            "company": "string",
            "description": "string",
            "end_date": "string",
            "experience_id": "string",
            "job_title": "string",
            "start_date": "string"
          },
          {
            "candidate_id": "string",
            "company": "string",
            "description": "string",
            "end_date": "string",
            "experience_id": "string",
            "job_title": "string",
            "start_date": "string"
          }
        ],
        "total": 0
      }
  return (
    <div className='w-full flex flex-col justify-normal items-start gap-10 px-10 py-4 bg-white rounded-2xl'>
        <h1 className='text-4xl font-light '>Work Experience</h1>
        { data.experiences.map((item,index)=>{
                return(
                    <ExperienceItem key={index}  job_title={item.job_title} company={item.company} description={item.description}  end_date={item.end_date} start_date={item.start_date} />
                )
            })}  
        <div className="w-full items-center justify-end">
            <button className="bg-[#4CAF50] text-white p-4 rounded-xl font-light ">
                <p className="text-2xl">Add new experience</p>
            </button>  
        </div>
    </div>
  )
}

export default Experience