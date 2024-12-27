import React from 'react'
import SkillItem from './SkillItem'
import SoftSkill from './SoftSkill'
const Skills = () => {
 const skills ={
    "skills": [
      {
        level:"80%",
        skill: "figma"
      },
      {
        level : "40%",
        skill : "java"
      },
      {
        level : "40%",
        skill : "java"
      }
    ],
    "total": 0
  }
  return (
    <div className='w-full  flex flex-col justify-normal items-start gap-10 bg-white  rounded-2xl shadow-2xl px-10 py-6'>
        <h2 className='text-3xl w-full pb-6 font-light text-gray-900 border-b border-[#888888]'>Skills</h2>
        <div className='flex flex-col w-full border-b  border-[#888888] py-6 gap-10'>
            {skills.skills.map((item,index)=>(
                <SkillItem skills={item} key={index}/>))}
        </div>
          <div className='w-full items-center  justify-start'>
            <h2 className='text-3xl w-full py-6 font-bold text-gray-900'>Skills</h2>
            <div className='flex flex-row justify-evenly items-center flex-wrap w-full gap-4'>
              
            {skills.skills.map((item,index)=>(
               <SoftSkill skills={item} key={index} /> ))}
            <button className='rounded-full px-4 py-1  text-white bg-green-700'>
              +
            </button>
            </div>
        </div>
    </div>
  )
}

export default Skills