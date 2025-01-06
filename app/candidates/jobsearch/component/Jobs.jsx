import React from 'react'
import JobCard from './JobCard'
const Jobs = () => {
  const data = {
        total: 8,
        jobs: [
            {
                job_id: 1,
                title: "Software Engineer",
                description: "If you are a proactive and solution-driven individual who thrives in a fast-paced, collaborative environment, we encourage you to apply and join us in delivering exceptional support to Google s users worldwide.",
                location: "Setif,Setif",
                salary_range: "50000 - 100000 DZD",
                required_skills: "Java, Spring Boot, React",
                recruiter_id: "4b9bb46b-cd3b-4a37-8b23-02f59be3cf86",
                created_at: "2024-12-23T02:22:08.729724Z",
                updated_at: "2024-12-23T02:22:08.729724Z",
                status: "closed",
                job_type: "full-time"
            },
            {
                job_id: 2,
                title: "Software Engineer",
                description: "If you are a proactive and solution-driven individual who  thrives in a fast-paced, collaborative environment, we encourage you to apply and join us in delivering exceptional support to Google s users worldwide.",
                location: "Setif,Setif",
                salary_range: "50000 - 100000 DZD",
                required_skills: "Java, Spring Boot, React",
                recruiter_id: "4b9bb46b-cd3b-4a37-8b23-02f59be3cf86",
                created_at: "2024-12-23T02:22:08.729724Z",
                updated_at: "2024-12-23T02:22:08.729724Z",
                status: "closed",
                job_type: "full-time"
            },
            
            {
                job_id: 3,
                title: "Sales Representative",
                description: "If you are a proactive and solution-driven individual who thrives in a fast-paced, collaborative environment, we encourage you to apply and join us in delivering exceptional support to Google s users worldwide.",
                location: "Constantine,Constantine",
                salary_range: "30000 - 60000 DZD",
                required_skills: "Sales, Communication, Negotiation",
                recruiter_id: "78f3d88d-7d71-4b39-b264-be1d4c425f20",
                created_at: "2024-12-23T02:22:08.729724Z",
                updated_at: "2024-12-23T02:22:08.729724Z",
                status: "open",
                job_type: "part-time"
            },
            {
                job_id: 4,
                title: "Sales Representative",
                description: "If you are a proactive and solution-driven individual who thrives in a fast-paced, collaborative environment, we encourage you to apply and join us in delivering exceptional support to Google s users worldwide.",
                location: "Constantine,Constantine",
                salary_range: "30000 - 60000 DZD",
                required_skills: "Sales, Communication, Negotiation",
                recruiter_id: "78f3d88d-7d71-4b39-b264-be1d4c425f20",
                created_at: "2024-12-23T02:22:08.729724Z",
                updated_at: "2024-12-23T02:22:08.729724Z",
                status: "open",
                job_type: "part-time"
            }
        ]
    }
  return (
    <div className='flex flex-row flex-wrap w-full items-start justify-evenly gap-5 '>
        {
            data.jobs.map((item,index)=>{
                return(
                    <JobCard key={index} title={item.title} description={item.description} location={item.location} salary_range={item.salary_range} required_skills={item.required_skills} recruiter_id={item.recruiter_id} created_at={item.created_at} updated_at={item.updated_at} status={item.status} job_type={item.job_type} />
                )
            })
        }
    </div>
  )
}

export default Jobs