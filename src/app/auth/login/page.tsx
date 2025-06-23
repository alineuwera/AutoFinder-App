"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login (replace with API call)
    if (email === "test@example.com" && password === "password123") {
      localStorage.setItem("isAuthenticated", "true");
      window.location.href = "/dashboard/user"; // Redirect to user dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-teal-600 p-6 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold text-white">Sign In</h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            Welcome back! Please sign in to your account.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 p-2 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 p-2 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign In
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