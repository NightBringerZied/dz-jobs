"use server"

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function signinAction(data) {
    
  const credentials = {
    email: data.email,
    password: data.password
  }

  const res = await fetch(`https://dz-jobs-api-production.up.railway.app/v1/auth/login`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const setCookieHeader = res.headers.get("set-cookie");
  if (res.ok && setCookieHeader) {
    const cookiesArray = setCookieHeader.split(", ").map((cookie) => cookie.split(";")[0]);
    const cookiesStore = await cookies();

    cookiesArray.forEach((cookiePair) => {
      const [key, value] = cookiePair.split('=');
      const cookieOptions= {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'none',
      };
      console.log('key', key)
      if (key === 'accessToken') {
        cookieOptions.maxAge = 60 * 15; 
      } else if (key === 'refreshToken') {
        cookieOptions.maxAge = 60 * 60 * 24 * 30; 
      }

      cookiesStore.set(key, value, cookieOptions);
      redirect('/candidates/profile');  
    });
  }

  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Failed to parse the response.');
    
  }
}

export async function signupAction(prev, formData) {

  const credentials = {
    email: formData.get('mail'),
    password: formData.get('password'),
    full_name: formData.get('name')
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/auth/register-with-email-and-password`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log("Response Headers:", res.headers);
  // console.log('res.status', res.status)

  if (res.status === 201) {
    redirect('/auth/verify-email?email=' + credentials.email);
  }
  try {
    const data = await res.json();
    // console.log("Response Body:", data);
    return data;
  } catch (error) {
    throw new Error('Failed to parse the response.'); 
  }
}