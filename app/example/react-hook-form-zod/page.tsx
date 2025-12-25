/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginForm } from "./schema";

// Import needed from assets under app
import image2 from "@/app/assets/image2.png";
// to ensure that image is bundled and available at build

import Image from "next/image";
// auto optimized image component, nextjs recommended
// use this instead of <img> tag

export default function Page() {
  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<LoginForm>(
    {
      resolver: zodResolver(loginSchema),
      values: {email: "xyz", password: "abc"} // initial (optional)
    }
  )

  const onSubmit = async (data: LoginForm) => {
    alert(data.email);
  }
  return (
    <div>
      {/* height, width optional for asset import */}
      <Image src={image2} alt="Image 2" />
      {/* height, width required for public */}
      <Image src= "/images/image1.jpg" height={200} width={200} alt="Image 1"/>

      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-2 max-w-xl border">
        <div className="mt-2">
          <label>Username</label>
          <input className="border" {...register("email")}  />
          {
            errors.email && // conditional rendering
            <span className="text-red-500">
              {errors.email.message}
            </span>
          }
        </div>
        <button type="submit" className="p-2 bg-green-500"> Submit</button>
      </form>
    </div>
  );
}