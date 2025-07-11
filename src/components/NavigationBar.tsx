"use client";

import { Sun, User, Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NavigationBar: React.FC = () => {
  const router = useRouter();
  const handleSellClick = () => {
    router.push("/auth/login");
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow bg-white fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/images/finder.png" alt="Logo" width={30} height={30}/>
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
      <div className="flex items-center gap-4">
        <Sun className="cursor-pointer text-gray-600" />
        <User className="cursor-pointer text-gray-600" />
       
        <button onClick={handleSellClick}
         className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          + Sell Car
        </button>

        <Menu className="md:hidden cursor-pointer text-gray-600" />
      </div>
    </nav>
  );
};

export default NavigationBar;
