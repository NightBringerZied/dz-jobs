"use server";

import { backendUrl } from "@/lib/helpers";
import { cookies } from "next/headers";

export async function getCompanyInfos() {
  try {
    const token = await cookies().get("access_token");
    if (token) {
      console.log(token);

      const res = await fetch(`${backendUrl}/recruiters`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
          Cookie: `${token.name}=${token.value}`,
        },
      });
      const data = await res.json();
      console.log(data);
      if (data?.Data) {
        return data;
      }
      throw new Error(data?.message || "there is an error");
    }
  } catch (error) {
    console.log(error?.message);
    return error?.message;
  }
}
