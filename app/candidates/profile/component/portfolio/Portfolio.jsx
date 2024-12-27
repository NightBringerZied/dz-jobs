import React from 'react'
import ProjectItem from './ProjectItem'
const Portfolio = () => {
    const data = {
    projects: [
      {
        "candidate_id": "string",
        "category": "Esports",
        "description": "lorem sadasf eqrwer  ",
        "project_id": "string",
        "project_link": "http//google.com",
        "project_name": "Lol win prediction"
      },
      {
        "candidate_id": "string",
        "category": "Esports",
        "description": "lorem sadasf eqrwer  ",
        "project_id": "string",
        "project_link": "http//google.com",
        "project_name": "Lol win prediction"
      },
      {
        "candidate_id": "string",
        "category": "Esports",
        "description": "lorem sadasf eqrwer  ",
        "project_id": "string",
        "project_link": "http//google.com",
        "project_name": "Lol win prediction"
      }
    ],
    total: 0
  }
  return (
    <div className='w-full rounded-2xl shadow-2xl flex flex-col justify-normal gap-10  items-start p-6 bg-white '>
            <h1 className='text-4xl font-light '>Portfolio</h1>
            <div className='flex flex-row items-center justify-evenly  flex-wrap gap-5'>
                {data.projects.map((project,index) => {
                    return (
                        <ProjectItem data={project} key={index} />
                    )
                })}
            </div>
    </div>
  )
}

export default Portfolio