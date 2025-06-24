"use client";

import React from "react";
import { ChevronRight, Search } from "lucide-react";
import Image from "next/image";

const HeroSearchForm: React.FC = () => {
  return (
    <section
     className="relative bg-cover bg-no-repeat py-20"
  style={{
    backgroundImage: "url('/images/car-bg.png')",
    backgroundPosition: "bottom right",
  }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0"></div>

      <div className="relative bg-[#307685] opacity-80  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between z-10">
        <div className="p-6 rounded-2xl w-full lg:w-[560px] text-white">
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button className="text-white border border-white px-4 py-2 rounded-full">
              All
            </button>
            <button className="text-white border border-white px-4 py-2 rounded-full">
              New cars
            </button>
            <button className="text-white border border-white px-4 py-2 rounded-full">
              Used cars
            </button>
          </div>

          {/* Form fields */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <select className="p-3 rounded-lg border border-gray-300 bg-white text-gray-500 w-full">
              <option>Make</option>
            </select>
            <select className="p-3 rounded-lg border border-gray-300 bg-white text-gray-500 w-full">
              <option>Location</option>
            </select>
            <select className="p-3 rounded-lg border border-gray-300 bg-white text-gray-500 w-full">
              <option>Model</option>
            </select>
            <div className="flex gap-2">
              <select className="p-3 rounded-lg border border-gray-300 bg-white text-gray-500 w-full">
                <option>Year from</option>
              </select>
              <select className="p-3 rounded-lg border border-gray-300 bg-white text-gray-500 w-full">
                <option>Year to</option>
              </select>
            </div>
            <select className="p-3 rounded-lg border border-gray-300 bg-white text-gray-500 w-full">
              <option>Body type</option>
            </select>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="$ Price from"
                className="p-3 rounded-lg border border-gray-300 bg-white text-gray-600 w-full"
              />
              <input
                type="number"
                placeholder="$ Price to"
                className="p-3 rounded-lg border border-gray-300 bg-white text-gray-600 w-full"
              />
            </div>
          </div>

          {/* Search buttons */}
          <div className="flex gap-4 items-center">
            <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
              <Search className="w-5 h-5" />
              Search
            </button>
            <button className="text-white flex items-center gap-1">
              Advanced search <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-white opacity-80 text-base">
            Finder is a{" "}
            <span className="font-semibold">leading digital marketplace</span>{" "}
            for the automotive industry.
          </p>
        </div>
        <div className="mt-10 lg:mt-0 flex flex-col items-center lg:items-start text-white w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-snug">
            Easy way to <br /> find the right car
          </h1>
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="/images/google.png"
              alt="Google"
              width={24}
              height={24}
            />
            <p>Google</p>
            <p className="text-lg font-medium">4.9</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSearchForm;
