"use client"
import {React,useState }from 'react'
import DegreeItem from './DegreeItem';
import Certification from './Certification';
const Degree = () => {
    const data=[{ 
        id:"1",
        degree: "Bacheloare en Informatique",
        description: "lorem ipsum dolor sit amet ",
        education_id: "string",
        end_date: "Jan 2024",
        institution: "King Saudi university",
        start_date: "Jan 2021"},     
         { 
        id:"2",
        degree: "Bacheloare en Informatique",
        description: "lorem ipsum dolor sit amet ",
        education_id: "string",
        end_date: "Jan 2024",
        institution: "King Saudi university",
        start_date: "Jan 2021"}
    ]


    const [education, setEducation] = useState(true);
  return (
        <div className='w-full flex flex-col justify-normal items-start gap-10 px-10 py-6 bg-white rounded-2xl'>
            <h1 className='text-3xl font-light '>Education</h1>
            <div className='flex flex-row w-[40%] justify-center gap-4 items-start text-lg'>
                <button className={`font-light p-4  ${education ? 'border-b border-black' : 'text-[#888888]'} `} onClick={() => setEducation(true)}>
                            <p className="text-2xl">Degree</p>  
                </button>
                <button className={`font-light p-4  ${!education ? 'border-b border-black' : 'text-[#888888]'} `} onClick={() => setEducation(false)}>
                            <p className="text-2xl">Certification & Cv</p>  
                </button>
            </div>
            {education && (
            data.map((item)=>{
                    return(
                        <DegreeItem key={item.id}  degree={item.degree} description={item.description}  end_date={item.end_date} institution={item.institution} start_date={item.start_date} />
                    )
                })
            )}
            {!education && (
                <div className="flex flex-row w-full  justify-start gap-4 items-center ">
                  <Certification />
                </div>
            )}
            <div className="w-full items-center justify-end">
                <button className="bg-[#4CAF50] text-white p-4 rounded-xl font-light ">
                    <p className="text-2xl">Add new {education ? 'Degree' : 'Certification'} </p>
                </button>  
            </div>
        </div>     
  )
}

export default Degree