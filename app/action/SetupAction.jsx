"use server";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function profileAction(formData) {
    const token = await cookies().get("access_token");
    console.log(formData);
    console.log(token);
    const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/`, {
    method: "PUT",
    body: formData,
    headers: {
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



