"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://carfinder-894g.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          credentials: "include",
        }
      );

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Login failed");
console.log();

      const user = result.USER;
      const token = result.message;
      const userRole = user?.Role;

      if (!userRole || !token) throw new Error("Missing user role or token");

      localStorage.setItem("token", token);
      localStorage.setItem("role", userRole);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userId", user?._id);

      toast.success("Login successful");

      setTimeout(() => {
        switch (userRole.toLowerCase()) {
          case "USER":
            router.push("/SellCar");
            break;
          case "ADMIN":
            router.push("/admin/dashboard");
            break;
          default:
            throw new Error("Unknown user role");
        }
      }, 1500);
    } catch (err) {
      let errorMessage = "An unknown error occurred";
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === "string") {
        errorMessage = err;
      }
      toast.error(`Login failed: ${errorMessage}`);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <div className="min-h-screen bg-[#267180] opacity-85 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-[#307685] p-6 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold text-white">Sign In</h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            Welcome back! Please sign in to your account.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              {...register("email")}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 p-2 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              {...register("password")}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 p-2 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
            />
            <div className="mt-2 text-right">
              <a href="/auth/forgot-password" className="text-sm text-gray-200 hover:text-white">
                Forgot password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-200">
          Don’t have an account?{" "}
          <a href="/auth/register" className="font-medium text-white hover:text-gray-200">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
