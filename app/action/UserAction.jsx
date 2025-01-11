"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { parseCookies, setCookie, destroyCookie } from "nookies";

export async function signinAction(data) {
  const credentials = {
    email: data.email,
    password: data.password,
  };

  const res = await fetch(
    `https://dz-jobs-api-production.up.railway.app/v1/auth/login`,
    {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const setCookieHeader = res.headers.get("set-cookie");
  if (res.ok && setCookieHeader) {
    const cookiesArray = setCookieHeader
      .split(", ")
      .map((cookie) => cookie.split(";")[0]);
    const cookiesStore = await cookies();

    cookiesArray.forEach((cookiePair) => {
      const [key, value] = cookiePair.split("=");
      const cookieOptions = {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "none",
      };
      console.log("key", key);
      if (key === "accessToken") {
        cookieOptions.maxAge = 60 * 60 * 60 * 15;
      } else if (key === "refreshToken") {
        cookieOptions.maxAge = 60 * 60 * 24 * 30;
      }
      cookiesStore.set(key, value, cookieOptions);
      /* if(!data.first){
        redirect("/candidates/profile");
      }
      else{redirect("/setup")} */
    });
  }
  try {
    const resdata = await res.json();
    console.log(resdata);
    if (resdata?.data) {
      return resdata?.data;
    }
    throw new Error(resdata?.message || "there is an error");
  } catch (error) {
    console.log(error?.message);
    return error?.message;
  }
}
export async function signupAction(data) {
  const res = await fetch(
    `https://dz-jobs-api-production.up.railway.app/v1/auth/register`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let responseData;
  try {
    responseData = await res.json();
  } catch (error) {
    throw new Error("Failed to parse the response.");
  }

  if (res.ok) {
    redirect("/auth/signin?firsttime=true");
  } else {
    console.log("error");
  }
  return responseData;
}
export async function sendOtpAction(data) {
  const res = await fetch(
    `https://dz-jobs-api-production.up.railway.app/v1/auth/send-reset-otp`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let responseData;
  try {
    responseData = await res.json();
  } catch (error) {
    throw new Error("Failed to parse the response.");
  }
  if (res.ok) {
    redirect("/auth/resetpassword/verifyotp?email=" + data.email);
  } else {
    console.log("error");
  }
  return responseData;
}
export async function verifyOtpAction(data) {
  const res = await fetch(
    `https://dz-jobs-api-production.up.railway.app/v1/auth/verify-otp`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const setCookieHeader = res.headers.get("set-cookie");
  if (res.ok && setCookieHeader) {
    const cookiesArray = setCookieHeader
      .split(", ")
      .map((cookie) => cookie.split(";")[0]);
    const cookiesStore = await cookies();

    cookiesArray.forEach((cookiePair) => {
      const [key, value] = cookiePair.split("=");
      const cookieOptions = {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "none",
      };
      console.log("key", key);
      if (key === "resetToken") {
        cookieOptions.maxAge = 60 * 15;
      }
      cookiesStore.set(key, value, cookieOptions);
    });
  }
  let responseData;
  try {
    responseData = await res.json();
  } catch (error) {
    throw new Error("Failed to parse the response.");
  }
  if (res.ok) {
    redirect("/auth/resetpassword/verifyotp/reset?email=" + data.email);
  } else {
    console.log("error");
  }
  return responseData;
}
export async function resetPasswordAction(data) {
  const token = await cookies().get("reset_token");
  const res = await fetch(
    `https://dz-jobs-api-production.up.railway.app/v1/auth/reset-password`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
        Cookie: `${token.name}=${token.value}`,
      },
    }
  );

  let responseData;
  try {
    responseData = await res.json();
  } catch (error) {
    throw new Error("Failed to parse the response.");
  }
  if (res.ok) {
    redirect("/auth/signin");
  } else {
    console.log("error");
  }
  return responseData;
}
