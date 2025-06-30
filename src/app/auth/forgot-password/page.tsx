"use client";

import React from "react";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#267180] p-6">
      <div className="bg-[#307685] p-8 rounded-lg shadow-md w-full max-w-md text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <p className="text-sm mb-6">
          Please reset your password.
        </p>
        <a
          href="/auth/login"
          className="text-sm text-gray-200 hover:text-white underline"
        >
          Back to Login
        </a>
      </div>
    </div>
  );
}
