"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import AuthContext from "@/context/auth-context"; // ✅ Import context

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const { login } = useContext(AuthContext); // ✅ Use context
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const { register, handleSubmit, reset } = useForm<FormData>();

  // ✅ Redirect if already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedRole = localStorage.getItem("role");
    if (storedUser && storedRole) {
      if (storedRole === "USER") {
        router.push("/SellCar");
      } else if (storedRole === "ADMIN") {
        router.push("/admin/dashboard");
      }
    }
  }, [router]);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setMessage(null);
    try {
      const res = await fetch("https://carfinder-894g.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Login failed");

      const user = result.user;
      const token = result.token;
      const userRole = user?.role;

      if (!userRole || !token) throw new Error("Missing user role or token");

      localStorage.setItem("token", token);
      localStorage.setItem("role", userRole);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userId", user.id);

      login(user); // ✅ Tell context that user is now logged in

      setMessage({ type: "success", text: "Login successful! Redirecting..." });

      setTimeout(() => {
        switch (userRole) {
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
      setMessage({ type: "error", text: ` ${errorMessage}` });
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
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>

        {message && (
          <div
            className={`mt-4 text-center text-sm ${
              message.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message.text}
          </div>
        )}

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
