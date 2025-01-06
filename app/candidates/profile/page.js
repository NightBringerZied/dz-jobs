"use server";
import React from 'react';
import Profile from './component/profile/profile';
import Personal from './component/personal/personal';
import Degree from './component/Degree/Degree';
import Contact from './component/contact/Contact';
import Experience from './component/Experience/Experience';
import Skills from './component/skills/Skills';
import Portfolio from './component/portfolio/Portfolio';
import { cookies } from "next/headers";

const fetchCandidateData = async (endpoint, token) => {
  const response = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.value}`,
      "Cookie": `${token.name}=${token.value}`,
    },
  });
  const result = await response.json();
  console.log(result.data);
  return result.data;
};

const page = async () => {
  const token = await cookies().get('access_token');

  // Fetch candidate data
  const [candidate, personal, education, certifications,experience] = await Promise.all([
    fetchCandidateData('', token),
    fetchCandidateData('personal-info', token),
    fetchCandidateData('education', token),
    fetchCandidateData('certifications', token),
    fetchCandidateData('experience', token),
  ]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center p-4 gap-10">
        <Profile candidate={candidate} personal={personal} />
        
        <div className="w-full max-md:flex-col flex flex-row justify-center items-start gap-10">
          <div className="flex flex-col w-full max-md:w-full justify-start items-start gap-10">
            <Personal personal={personal} />
            <Degree education={education} certifications={certifications} />
            <Experience experience={experience} /> 
            <Skills/>
          </div>
        </div>
       {/*  <Portfolio /> */}

      </div>

       
    </div>
  );
};

export default page;