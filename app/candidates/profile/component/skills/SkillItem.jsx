import React from 'react'

const SkillItem = (props) => {
  return (
    <div className={`w-[${props.skills.level}] flex  text-[#888888]  font-light flex-row justify-between items-center gap-4 border-t-4 border-[#72d654]`}>     
        <h1>{props.skills.skill}</h1>
        <h2>{props.skills.level}</h2>
    </div>
  )
}

export default SkillItem