import React from 'react'

const SoftSkill = (props) => {
  return (
    <div className='rounded-3xl text-white text-center font-light bg-[#888888] px-6 py-2 '>
        {props.skills.skill}
    </div>
  )
}

export default SoftSkill