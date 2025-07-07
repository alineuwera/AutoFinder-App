"use client";

import { useState } from "react";
import {
  Eye,
  User,
  Briefcase,
  Save,
  Upload,
  Camera,
  Car,
  ImagePlus,
  CameraIcon,
} from "lucide-react";
import Image from "next/image";

export default function SellCarPage() {
  const [role, setRole] = useState("private");
  const [condition, setCondition] = useState("new");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mt-15 mb-5">Sell Car</h1>
      {/* Photos / Videos */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-4">Photos / videos</h2>
        <p className="text-sm text-gray-500 mb-4">
          The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main
          picture first.
        </p>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="rounded-md flex items-center justify-center">
            <Image
              src="/Images/suv.jpg"
              alt="Car Image"
              width={200}
              height={200}
            />
          </div>
          <div className="rounded-md flex items-center justify-center">
            <Image
              src="/Images/suv.jpg"
              alt="Car Image"
              width={200}
              height={200}
            />
          </div>
          <div className="rounded-md flex items-center justify-center">
            <Image
              src="/Images/suv.jpg"
              alt="Car Image"
              width={200}
              height={200}
            />
          </div>
          <div className="w-32 h-24 border-2 border-gray-100 rounded-md flex items-center justify-center bg-gray-100">
            <Upload size={15} />
            Upload Photos/Videos
          </div>
        </div>
        <label htmlFor="" className="font-semibold ">
          Link to the video tour
        </label>
        <input
          type="url"
          placeholder="www.youtube.com/..."
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
        />
      </div>

      {/* Basic Information */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-6">Basic information</h2>

        <div className="flex gap-3 mb-4">
          <button
            type="button"
            onClick={() => setCondition("new")}
            className={`px-4 py-2 border rounded-full ${
              condition === "new"
                ? "bg-gray-100 border-black"
                : "border-gray-300"
            }`}
          >
            New car
          </button>
          <button
            type="button"
            onClick={() => setCondition("used")}
            className={`px-4 py-2 border rounded-full ${
              condition === "used"
                ? "bg-gray-100 border-black"
                : "border-gray-300"
            }`}
          >
            Used car
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Car brand *"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Car model *"
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            placeholder="Manufacturing year"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Mileage *"
            className="border p-2 rounded-md"
          />
        </div>

        {/* Body type */}
        <div className="mt-5">
          <h3 className="text-sm font-medium mb-2">Body type</h3>
          <div className="flex gap-3">
            <button className="flex flex-col items-center px-4 py-2 border rounded-md">
              <Car size={20} />
              <span className="text-xs">Sedan</span>
            </button>
            <button className="flex flex-col items-center px-4 py-2 border rounded-md">
              <Car size={20} />
              <span className="text-xs">Convertible</span>
            </button>
            <button className="flex flex-col items-center px-4 py-2 border rounded-md">
              <Car size={20} />
              <span className="text-xs">SUV</span>
            </button>
            <button className="flex flex-col items-center px-4 py-2 border rounded-md">
              <Car size={20} />
              <span className="text-xs">Coupe</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <input
            type="text"
            placeholder="Location"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Radius"
            className="border p-2 rounded-md"
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-md mt-3">
          <div className="mt-5">
            <h2 className="font-bold text-xl mb-3">
              Cars with a verified VIN code sell faster
            </h2>
            <p className="text-gray-600 mb-3">
              We will check the car for free in the registers of the Ministry of
              Internals Affairs, the open data portal and dealer databases.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <input
                type="text"
                placeholder="VIN code"
                className="border p-2 rounded-md bg-white"
              />
              <CameraIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Contacts */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-6">Contacts</h2>

        <div className="flex gap-3 mb-6">
          <button
            type="button"
            onClick={() => setRole("private")}
            className={`flex items-center gap-2 px-4 py-2 border rounded-full ${
              role === "private"
                ? "bg-gray-100 border-black"
                : "border-gray-300"
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1">
                First name *
              </label>
              <input
                type="text"
                required
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Last name *
              </label>
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
              <label className="block text-sm font-medium mb-1">
                Phone number *
              </label>
              <input
                type="tel"
                placeholder="(__) __-____"
                required
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="coop" className="w-4 h-4" />
            <label htmlFor="coop" className="text-sm">
              Ready to cooperate with dealers
            </label>
          </div>
        </form>
      </div>
      {/* Submit Buttons */}
      <div className="w-full max-w-4xl flex justify-between items-center flex-wrap gap-4">
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
          <Save size={18} /> Save and publish
        </button>
      </div>
    </div>
  );
}
