"use server";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export async function EditPictureAction(formData) {
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
  let responseData;
  try {
    responseData = await res.json();
  } 
  catch (error) {
    throw new Error("Failed to parse the response.");
  }
  return responseData;
}
export async function EditBioAction(data) {
    const token = await cookies().get("access_token");
    const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/personal-info`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
     "Content-Type": "application/json",
      "Authorization": `Bearer ${token.value}`,
      "Cookie": `${token.name}=${token.value}`
    },
     });
     let responseData;
     try {
     responseData = await res.json();
    } 
     catch (error) {
      throw new Error("Failed to parse the response.");
    }
    return responseData;
}
export async function EditPersonalAction(data) {
  const token = await cookies().get("access_token");
  const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/personal-info`, {
  method: "PATCH",
  body: JSON.stringify(data),
  headers: {
   "Content-Type": "application/json",
    "Authorization": `Bearer ${token.value}`,
    "Cookie": `${token.name}=${token.value}`
  },
   });
   let responseData;
   try {
   responseData = await res.json();
  } 
   catch (error) {
    throw new Error("Failed to parse the response.");
  }
  return responseData;
}
export async function NewDegreeAction(data) {
  const token = await cookies().get("access_token");
  const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/education`, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
   "Content-Type": "application/json",
    "Authorization": `Bearer ${token.value}`,
    "Cookie": `${token.name}=${token.value}`
  },
   });
   let responseData;
   try {
   responseData = await res.json();
    } 
   catch (error) {
    throw new Error("Failed to parse the response.");
    }
  return responseData;
}
export async function NewCertAction(data) {
  const token = await cookies().get("access_token");
  const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/certifications`, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
   "Content-Type": "application/json",
    "Authorization": `Bearer ${token.value}`,
    "Cookie": `${token.name}=${token.value}`
  },
   });
   let responseData;
   try {
   responseData = await res.json();
    } 
   catch (error) {
    throw new Error("Failed to parse the response.");
    }
  return responseData;
}
export async function DeleteEducationAction(data) {
  const token = await cookies().get("access_token");
  const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/education/${data}`, {
  method: "DELETE",
  body: JSON.stringify(data),
  headers: {
   "Content-Type": "application/json",
    "Authorization": `Bearer ${token.value}`,
    "Cookie": `${token.name}=${token.value}`
  },
   });
   let responseData;
   try {
   responseData = await res.json();
   console.log(responseData);
    } 
   catch (error) {
    throw new Error("Failed to parse the response.");
    }
  return responseData;
}
export async function DeleteCertificationAction(data) {
  const token = await cookies().get("access_token");
  const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/certifications/${data}`, {
  method: "DELETE",
  body: JSON.stringify(data),
  headers: {
   "Content-Type": "application/json",
    "Authorization": `Bearer ${token.value}`,
    "Cookie": `${token.name}=${token.value}`
  },
   });
   let responseData;
   try {
   responseData = await res.json();
   console.log(responseData);
    } 
   catch (error) {
    throw new Error("Failed to parse the response.");
    }
  return responseData;
}
export async function NewExperienceAction(data) {
  const token = await cookies().get("access_token");
  const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/experience`, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
   "Content-Type": "application/json",
    "Authorization": `Bearer ${token.value}`,
    "Cookie": `${token.name}=${token.value}`
  },
   });
   let responseData;
   try {
   responseData = await res.json();
    } 
   catch (error) {
    throw new Error("Failed to parse the response.");
    }
  return responseData;
}
export async function DeleteExperienceAction(data) {
  const token = await cookies().get("access_token");
  const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/candidates/experience/${data}`, {
  method: "DELETE",
  body: JSON.stringify(data),
  headers: {
   "Content-Type": "application/json",
    "Authorization": `Bearer ${token.value}`,
    "Cookie": `${token.name}=${token.value}`
  },
   });
   let responseData;
   try {
   responseData = await res.json();
   console.log(responseData);
    } 
   catch (error) {
    throw new Error("Failed to parse the response.");
    }
  return responseData;
}