"use client";

import React, { useState } from "react";

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate password reset
    console.log("New password set to:", newPassword);
    setResetSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#267180] opacity-85 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-[#307685] p-6 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold text-white">Reset Password</h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            Enter your new password below.
          </p>
        </div>

        {resetSuccess ? (
          <div className="text-green-300 text-center font-medium">
            ✅ Your password has been reset successfully.
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-white">
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 p-2 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 p-2 focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Reset Password
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
