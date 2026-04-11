"use server";

import { cookies } from "next/headers";

export async function handleLogin(
  userId: string,
  accessToken: string,
  refreshToken: string,
) {
  const cookieStore = await cookies();
  cookieStore.set("session_userId", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // ONE WEEK
    path: "/",
  });
  cookieStore.set("session_access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60, // ONE hour
    path: "/",
  });
  cookieStore.set("session_refresh_token", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // ONE week
    path: "/",
  });
}

export async function resetAuthCookies() {
  const cookieStore = await cookies();
  cookieStore.set("session_userId", "");
  cookieStore.set("session_access_token", "");
  cookieStore.set("session_refresh_token", "");
}

// GET DATA
export async function getUserId() {
  const userId = (await cookies()).get("session_userId")?.value;
  return userId ? userId : null;
}

export async function getAccessToken(){
  let accessToken = (await cookies()).get('session_access_token')?.value;

  return accessToken
}