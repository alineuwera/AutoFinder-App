"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("https://carfinder-894g.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          password,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Registration failed");
      }

      toast.success("Account created successfully!");

      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
    } catch (error) {
      console.error("Registration error:", error);
      let errorMessage = "An unknown error occurred";
      if (error instanceof Error) errorMessage = error.message;
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-[#267180] opacity-85 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-[#307685] p-6 rounded-lg shadow-md mt-15">
        <div>
          <h2 className="text-center text-3xl font-bold text-white">Create Account</h2>
          <p className="mt-2 text-center text-sm text-gray-200">Create a new account to get started.</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-white">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 p-2"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-white">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 p-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 p-2"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 p-2"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 p-2"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-white">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 p-2"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-200">
          Already have an account?{" "}
          <a href="/auth/login" className="font-medium text-white hover:text-gray-200">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
