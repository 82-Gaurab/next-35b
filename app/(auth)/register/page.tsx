/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { handleRegister } from "@/lib/action/auth-action";

export const registerSchema = z
  .object({
    firstName: z.string().min(1, { message: "First Name pugena" }),
    lastName: z.string().min(1, { message: "Last Name pugena" }),
    email: z.email({ message: "Email milena" }),
    username: z.string().min(3, { message: "Username pugena" }),
    password: z.string().min(6, { message: "Password pugena" }),
    confirmPassword: z.string().min(6, { message: "Confirm Password pugena" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });

export type RegisterForm = z.infer<typeof registerSchema>;

export default function Page() {
  const router = useRouter();
  const [pending, setTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const [error, setError] = useState("");
  const onSubmit = async (data: RegisterForm) => {
    // call action here
    setError("");
    console.log(data);
    try {
      const res = await handleRegister(data);
      console.log("Page ko try");
      console.log(res);
      if (!res.success) {
        throw new Error(res.message || "Registration failed");
      }
      // handle redirect (optional)
      setTransition(() => {
        router.push("/login");
      });
    } catch (err: Error | any) {
      console.log("Page ko error bitra aayo");

      setError(err.message || "Registration failed");
    }
  };

  return (
    <div>
      {error && <div className="text-red-500">{error}</div>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-2 max-w-xl border"
      >
        <div className="mt-2">
          <label>Email</label>
          <input {...register("email")} className="border" />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="mt-2">
          <label>Username</label>
          <input {...register("username")} className="border" />
          {errors.username && (
            <span className="text-red-500">{errors.username.message}</span>
          )}
        </div>

        <div className="mt-2">
          <label>First Name</label>
          <input {...register("firstName")} className="border" />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </div>

        <div className="mt-2">
          <label>Last Name</label>
          <input {...register("lastName")} className="border" />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </div>

        <div className="mt-2">
          <label>Password</label>
          <input type="password" {...register("password")} className="border" />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <div className="mt-2">
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className="border"
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <button type="submit" className="p-2 bg-green-500 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}
