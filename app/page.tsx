"use client"; // component must be client when using context
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const {user} = useAuth();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      HomePage { user ? `Welcome, ${user.email}` : "Not logged in"}
    </div>
  );
}
