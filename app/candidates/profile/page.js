"use server"
import {React}from 'react'
import Profile from './component/profile/profile'
import Personal from './component/personal/personal'
import Degree from './component/Degree/Degree'
import Contact from './component/contact/Contact'
import Experience from './component/Experience/Experience'
import Skills from './component/skills/Skills'
import Portfolio from './component/portfolio/Portfolio'
import { cookies } from "next/headers";
const page = async () => {
  const token = await cookies().get('access_token');
  console.log(token);
  const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/default`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.value}`,
      "Cookie": `${token.name}=${token.value}`
     },
  });
  console.log(token)
  const res2 = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.value}`,
      "Cookie": `${token.name}=${token.value}`
     },
  });
  try{
    const data2=await res2.json()
    console.log(data2.data);
  }catch(err){
    console.log(err);
  }

return (
    <div className='w-full flex flex-col justify-center items-center' >
        <div className="w-full flex flex-col justify-center items-center p-4 gap-10">
              <Profile />
          <div className='w-full max-md:flex-col flex flex-row justify-center items-start gap-10'>
            <div className='flex flex-col w-[70%] max-md:w-full justify-normal items-start gap-10 '>
                      <Personal/>     
                      <Degree/>
                      <Experience/>
            </div>
            <div className='flex flex-col w-[40%] max-md:w-full justify-normal items-start gap-16 '>
                <Contact/>
                <Skills/>
            </div>
          </div>
        </div>
        <div className="w-full rounded-2xl bg-white shadow-2xl just ">
              <Portfolio/>
        </div>
    </div>
  )
}

export default page