"use client";

import { Sun, User, Menu, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavigationBar: React.FC = () => {
    const handleLogout = () => {
    // localStorage.removeItem("isAuthenticated"); // Clear authentication state
    window.location.href = "/auth/login"; // Redirect to login page
  };
  return (
    
    <nav className="flex items-center justify-between px-8 py-4 shadow bg-white fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Search className="text-white bg-red-500 font-bold" />
        <h2 className="text-xl font-bold">Finder</h2>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <div className="group relative cursor-pointer flex items-center gap-1">
          New cars
          <ChevronDown className="w-5 h-5 pt-1" />
        </div>

        <div className="group relative cursor-pointer flex items-center gap-1">
          Used cars
          <ChevronDown className="w-5 h-5 pt-1" />
        </div>

        <Link href="#" className="hover:text-red-600">Online appraisal</Link>

        <div className="group relative cursor-pointer flex items-center gap-1">
          Dealers
          <ChevronDown className="w-5 h-5 pt-1" />
          {/* <div className="absolute hidden group-hover:block bg-white shadow rounded p-2 mt-2 w-40 z-50">
            <p className="hover:text-red-600 cursor-pointer">Aline</p>
            <p className="hover:text-red-600 cursor-pointer">Uwera</p>
          </div> */}
        </div>

        <Link href="#" className="hover:text-red-600">Contact</Link>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-4">
        <Sun className="cursor-pointer text-gray-600" />
        <User className="cursor-pointer text-gray-600" />
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          + Sell Car
        </button>
        <button
              onClick={handleLogout}
              className="ml-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
        <Menu className="md:hidden cursor-pointer text-gray-600" />
      </div>
    </nav>
  );
};

export default NavigationBar;
