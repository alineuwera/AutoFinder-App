"use client";

import React, { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Reset link sent to:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#267180] opacity-85 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-[#307685] p-6 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold text-white">Forgot Password</h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            Enter your email to reset your password.
          </p>
        </div>

        {submitted ? (
          <div className="text-green-300 text-center font-medium">
            ✅ A password reset link has been sent to <strong>{email}</strong>
          </div>
        ) : (
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
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        )}

        <div className="text-center text-sm text-gray-200">
          <a href="/auth/login" className="font-medium text-white hover:text-gray-200">
            ← Back to Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
