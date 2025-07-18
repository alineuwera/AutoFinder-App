"use client";

import { Sun, User, Menu, ChevronDown, LogOut } from "lucide-react";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AuthContext from "@/context/auth-context"; // Import the existing AuthContext

const NavigationBar: React.FC = () => {
  const router = useRouter();
  const { user, logout } = useContext(AuthContext); // Use the imported context
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const handleSellClick = () => {
    router.push("/auth/login");
  };

  const handleUserClick = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = () => {
    logout(); // Call the logout function from context
    setIsUserDropdownOpen(false);
  };

  const getInitial = () => {
    return user?.name?.charAt(0).toUpperCase() || "U";
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow bg-white fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/images/finder.png" alt="Logo" width={30} height={30} />
        <h2 className="text-xl font-bold text-black">Finder</h2>
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

        <Link href="/contact" className="hover:text-red-600">
          Contact
        </Link>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-4 relative">
        <Sun className="cursor-pointer text-gray-600" />
        <div className="relative" onClick={handleUserClick}>
          {user ? (
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center cursor-pointer">
              {user.profilePic ? (
                <Image
                  src={user.profilePic}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) : (
                getInitial()
              )}
            </div>
          ) : (
            <User className="cursor-pointer text-gray-600" />
          )}
          {isUserDropdownOpen && user && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-2">
              <p className="text-sm text-gray-700">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 hover:text-red-700 mt-2"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}
        </div>
        {!user && (
          <button
            onClick={handleSellClick}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            + Sell Car
          </button>
        )}

        <Menu className="md:hidden cursor-pointer text-gray-600" />
      </div>
    </nav>
  );
};

export default NavigationBar;
