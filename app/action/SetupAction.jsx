"use server";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function profileAction(formData) {
    const token = await cookies().get("access_token");
    console.log(formData);
    console.log(token);
    const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/`, {
    method: "POST",
    body: formData,
    headers: {
      "Authorization": `Bearer ${token.value}`,
      "Cookie": `${token.name}=${token.value}`
    },
  });
  if(res.ok){
    redirect('/setup/personal');
  }
  let responseData;
  try {
    responseData = await res.json();
  } catch (error) {
    throw new Error("Failed to parse the response.");
  }
  return responseData;
}
export async function skipAction() {
    const token = await cookies().get("access_token");
    const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/default`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.value}`,
      "Cookie": `${token.name}=${token.value}`
    },
  });

  if(res.ok){
    redirect("/candidates/profile");
  }
  let responseData;
  try {
    responseData = await res.json();
  } catch (error) {
    throw new Error("Failed to parse the response.");
  }

  return responseData;
}

export async function candidatePersonalAction(formdata) {
    const token = await cookies().get("access_token");
    const data={
      name: formdata.name,
      email: formdata.email,
      address:formdata.address,
      bio:formdata.bio,
      phone:formdata.phone,
      gender:formdata.gender,
      date_of_birth: formdata.date_of_birth
    }
    console.log(data);
    const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/personal-info`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.value}`,
      "Cookie": `${token.name}=${token.value}`
    },
  });
  const  responseData = await res.json(); 
  if(res.ok){
    redirect("/candidates/profile");
  }
  return responseData;
}

