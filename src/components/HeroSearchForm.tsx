"use client";

import React, { useState } from "react";
import { ChevronRight, Search } from "lucide-react";

const HeroSearchForm: React.FC = () => {
  const [filters, setFilters] = useState({
    make: "",
    location: "",
    model: "",
    yearFrom: "",
    yearTo: "",
    bodyType: "",
    priceFrom: "",
    priceTo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = async () => {
    try {
      const res = await fetch("https://carfinder-894g.onrender.com/api/cars/filter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });

      if (!res.ok) throw new Error("Failed to fetch filtered cars");

      const data = await res.json();
      console.log("Filtered Cars:", data); // You can replace this with state to display results
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#325F68] to-[#3F8089] p-6 rounded w-full mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button className="text-white border px-4 py-2 rounded-full">All</button>
        <button className="text-white border px-4 py-2 rounded-full">New cars</button>
        <button className="text-white border px-4 py-2 rounded-full">Used cars</button>
      </div>

      {/* Form fields */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <select name="make" value={filters.make} onChange={handleChange} className="p-2 rounded-lg border border-gray-300 bg-white text-gray-400 w-full">
          <option value="">Make</option>
          <option value="Toyota">Toyota</option>
          <option value="Ford">Ford</option>
          <option value="BMW">BMW</option>
        </select>

        <select name="location" value={filters.location} onChange={handleChange} className="p-2 rounded-lg border border-gray-300 bg-white text-gray-400 w-full">
          <option value="">Location</option>
          <option value="Kigali">Kigali</option>
          <option value="Huye">Huye</option>
        </select>

        <select name="model" value={filters.model} onChange={handleChange} className="p-2 rounded-lg border border-gray-300 bg-white text-gray-400 w-full">
          <option value="">Model</option>
          <option value="Rav4">Rav4</option>
          <option value="Corolla">Corolla</option>
        </select>

        <div className="flex gap-2">
          <select name="yearFrom" value={filters.yearFrom} onChange={handleChange} className="p-2 rounded-lg border border-gray-300 bg-white text-gray-400 w-full">
            <option value="">Year from</option>
            <option value="2015">2015</option>
            <option value="2018">2018</option>
          </select>
          <select name="yearTo" value={filters.yearTo} onChange={handleChange} className="p-2 rounded-lg border border-gray-300 bg-white text-gray-400 w-full">
            <option value="">Year to</option>
            <option value="2020">2020</option>
            <option value="2024">2024</option>
          </select>
        </div>

        <select name="bodyType" value={filters.bodyType} onChange={handleChange} className="p-2 rounded-lg border border-gray-300 bg-white text-gray-400 w-full">
          <option value="">Body type</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Truck">Truck</option>
        </select>

        <div className="flex gap-2">
          <input
            type="number"
            name="priceFrom"
            value={filters.priceFrom}
            onChange={handleChange}
            placeholder="$ Price from"
            className="p-2 rounded-lg border border-gray-300 bg-white text-gray-600 w-full"
          />
          <input
            type="number"
            name="priceTo"
            value={filters.priceTo}
            onChange={handleChange}
            placeholder="$ Price to"
            className="p-2 rounded-lg border border-gray-300 bg-white text-gray-600 w-full"
          />
        </div>
      </div>

      {/* Search button */}
      <div className="flex gap-4 items-center">
        <button
          onClick={handleSearch}
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          <Search className="w-5 h-5" />
          Search
        </button>
        <button className="text-white flex items-center gap-1">
          Advanced search <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default HeroSearchForm;
