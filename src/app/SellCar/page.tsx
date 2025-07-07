"use client";

import { useState } from "react";
import { Eye, User, Briefcase, Save } from "lucide-react";
import Image from "next/image";

export default function SellCarPage() {
  const [role, setRole] = useState("private");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Sell Your Car</h1>
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6">Contacts</h2>

        {/* Role Selector */}
        <div className="flex gap-3 mb-6">
          <button
            type="button"
            onClick={() => setRole("private")}
            className={`flex items-center gap-2 px-4 py-2 border rounded-full ${
              role === "private" ? "bg-gray-100 border-black" : "border-gray-300"
            }`}
          >
            <User size={18} /> Private seller
          </button>

          <button
            type="button"
            onClick={() => setRole("dealer")}
            className={`flex items-center gap-2 px-4 py-2 border rounded-full ${
              role === "dealer" ? "bg-gray-100 border-black" : "border-gray-300"
            }`}
          >
            <Briefcase size={18} /> Dealer
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1">First name *</label>
              <input
                type="text"
                required
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Last name *</label>
              <input
                type="text"
                required
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                required
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone number *</label>
              <input
                type="tel"
                placeholder="(__) __-____"
                required
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="coop" className="w-4 h-4" />
            <label htmlFor="coop" className="text-sm">
              Ready to cooperate with dealers
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
            <button
              type="button"
              className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50"
            >
              <Eye size={18} /> Detailed preview
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600"
            >
              <Image src="/images/save.png" alt="Save" height={20} width={20} />
               Save and publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
