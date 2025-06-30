"use client";

import React from "react";
import { ChevronRight, Search } from "lucide-react";

const HeroSearchForm: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#325F68] to-[#3F8089] p-6 rounded w-full  mt-10  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Tabs */}
      <div className="flex gap-2 mb-6 ">
        <button className="text-white border px-4  py-2 rounded-full">All</button>
        <button className="text-white border px-4 py-2 rounded-full">New cars</button>
        <button className="text-white border px-4 py-2 rounded-full">Used cars</button>
      </div>

      {/* Form fields */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <select className="p-2 rounded-lg border border-gray-300 bg-white text-gray-400 w-full ">
          <option>Make</option>
        </select>
        <select className="p-2 rounded-lg border border-gray-300 bg-white text-gray-400 w-full">
          <option>Location</option>
        </select>
        <select className="p-2 rounded-lg border border-gray-300 bg-white text-gray-400 w-full">
          <option>Model</option>
        </select>
        <div className="flex gap-2">
          <select className="p-2 rounded-lg border border-gray-300 bg-white text-gray-400 w-full">
            <option>Year from</option>
          </select>
          <select className="p-2 rounded-lg border border-gray-300 bg-white text-gray-400 w-full">
            <option>Year to</option>
          </select>
        </div>
        <select className="p-2 rounded-lg border border-gray-300 bg-white text-gray-400 w-full">
          <option>Body type</option>
        </select>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="$ Price from"
            className="p-2 rounded-lg border border-gray-300 bg-white text-gray-600 w-full"
          />
          <input
            type="number"
            placeholder="$ Price to"
            className="p-2 rounded-lg border border-gray-300 bg-white text-gray-600 w-full"
          />
        </div>
      </div>

      {/* Search button */}
      <div className="flex gap-4 items-center">
        <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          <Search className="w-5 h-5" />
          Search
        </button>
        <button className="text-white  flex items-center gap-1">
          Advanced search <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
    
  );
};

export default HeroSearchForm;