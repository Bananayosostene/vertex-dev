"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import {prisma} from "@/lib/prisma"; // Ensure this path is correct

const SESSION_DURATION = 7 * 24 * 60 * 60; // 7 days

export async function getAdminSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session_token")?.value;

  if (!sessionToken) {
    return null;
  }

  try {
    // In this setup, the sessionToken is the Admin's ID
    const admin = await prisma.admin.findUnique({
      where: { id: sessionToken },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    return admin;
  } catch (error) {
    console.error("Error getting admin session:", error);
    return null;
  }
}

export async function requireAdminAuth() {
  const admin = await getAdminSession();
  if (!admin || admin.role !== "admin") {
    // Check for admin role
    redirect("/login");
  }
  return admin;
}

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { success: false, message: "Email and password are required." };
  }

  try {
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return { success: false, message: "Invalid credentials." };
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return { success: false, message: "Invalid credentials." };
    }

    const cookieStore = await cookies();
    cookieStore.set("session_token", admin.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: SESSION_DURATION,
      path: "/",
    });

    redirect("/dashboard");
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: "An unexpected error occurred during login.",
    };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session_token");
  redirect("/"); 
}
