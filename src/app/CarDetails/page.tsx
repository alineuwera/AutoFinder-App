"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ShieldCheck, Star, Mail } from "lucide-react";
import { FiHeart } from "react-icons/fi";
import { PiBellRingingLight, PiClock } from "react-icons/pi";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { BsFuelPump } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";

interface Car {
  id: number;
  image: string;
  verified?: boolean;
  isNew?: boolean;
  isUsed?: boolean;
  name: string;
  year: number;
  price: string;
  location: string;
  mileage: string;
  fuel: string;
  transmission: string;
  date: string;
  
}

const cars: Car[] = [
  {
    id: 1,
    image: "/images/ford.jpg",
    verified: true,
    isNew: true,
    name: "Ford Truck Lifted",
    year: 2024,
    price: "$79,000",
    location: "Boston",
    mileage: "0 mi",
    fuel: "Diesel",
    transmission: "Automatic",
    date: "30/09/2024",
  },
  {
    id: 2,
    image: "/images/benz.jpg",
    name: "Mercedes-Benz Coupe",
    year: 2021,
    price: "$115,400",
    location: "New York",
    mileage: "15K mi",
    fuel: "Gasoline",
    transmission: "Manual",
    date: "15/07/2024",
    isUsed: true,
  },
  {
    id: 3,
    image: "/images/turbo.jpg",
    isUsed: true,
    verified: true,
    name: "Porsche 911 Turbo S",
    year: 2017,
    price: "$85,000",
    location: "Chicago",
    mileage: "32K mi",
    fuel: "Gasoline",
    transmission: "Manual",
    date: "16/08/2023",
  },
  {
    id: 4,
    image: "/images/tes.jpg",
    isNew: true,
    name: "Tesla Model 3",
    year: 2024,
    price: "$36,200",
    location: "Los Angeles",
    mileage: "0 mi",
    fuel: "Electric",
    transmission: "Automatic",
    date: "19/10/2023",
  },
];

export default function CarDetails() {
  const [showPhone, setShowPhone] = useState(false);

  type SectionKey = "exterior" | "interior" | "safety" | "technology";
  const [expandedSections, setExpandedSections] = useState<Record<SectionKey, boolean>>({
  exterior: true,
  interior: true,
  safety: false,
  technology: false,
});


 const toggleSection = (section: SectionKey) => {
  setExpandedSections((prev) => ({
    ...prev,
    [section]: !prev[section],
  }));
};


  return (
    <div className="p-6 mt-20 max-w-7xl mx-auto space-y-12">
      {/* Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: Car Title, Image, Thumbnails */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">
            Mercedes-Benz A205 Cabriolet{" "}
            <span className="text-gray-500 font-medium text-xl">(2021)</span>
          </h1>

          <Image
            src="/images/car.jpg"
            alt="car image"
            width={900}
            height={600}
            className="w-full h-auto rounded-lg"
          />

          <div className="flex gap-3 overflow-x-auto">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src="/images/car.jpg"
                alt="thumb"
                width={152}
                height={100}
                className="rounded-md border opacity-45 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Seller Info Card */}
        <div className="space-y-4 p-5 rounded-xl mt-10">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold bg-orange-400 text-white px-2 py-0.5 rounded">
              Used
            </span>
            <span className="flex items-center text-white bg-green-700 px-2 py-0.5 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 mr-1" /> Verified
            </span>
          </div>

          <h2 className="text-3xl font-bold">$41,900</h2>

          <div className="text-gray-600 text-sm space-x-3 flex items-center">
            <CiLocationOn className="text-base text-gray-500 min-w-[16px]" />
            <span>Chicago</span>
            <PiClock className="text-base text-gray-500 min-w-[16px]" />
            <span>60Kmi</span>
            <BsFuelPump className="text-base text-gray-500 min-w-[16px]" />
            <span>Gasoline</span>
            <TbManualGearbox className="text-base text-gray-500 min-w-[16px]" />
            <span>Automatic</span>
          </div>
          <div className="bg-gray-100 p-5 rounded-lg p-5 flex flex-col space-y-4">
            <div className="flex items-center space-x-4 p-3  rounded-lg ">
              <Image
                src="/images/seller.jpg"
                alt="Seller"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold">Darrell Steward</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" /> 4.9 (5
                  reviews)
                </p>
              </div>
              <span className="ml-auto text-xs text-black bg-white rounded px-2 py-0.5">
                Private seller
              </span>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowPhone(!showPhone)}
                className="flex-1 border border-gray-400 rounded px-3 py-2 text-sm font-medium hover:bg-gray-50"
              >
                {showPhone ? "(316) 123-4567" : "(316) *** **** – reveal"}
              </button>
              <button className="flex-1 bg-red-600 text-white rounded text-sm font-medium flex items-center justify-center">
                <Mail className="w-4 h-4 mr-1" /> Send email
              </button>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-8 space-y-2">
            <p className="text-sm font-medium">
              Email me price drops and new listings for these search results:
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 border border-gray-300 rounded-l px-3 py-2 text-sm outline-none"
              />
              <button className="bg-gray-100 rounded-lg ml-3 text-gray-700 text-sm px-4 py-2 font-semibold hover:bg-gray-200">
                Subscribe
              </button>
            </div>
            <label className="flex items-center space-x-2 text-sm text-gray-500">
              <input type="checkbox" />
              <span>I agree to receive alerts on this vehicle and helpful shopping information.</span>
            </label>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold mb-2">Specifications</h2>
          <p className="text-sm font-semibold">
            Manufacturing Year: <span className="text-gray-600">2021</span>
          </p>
          <p className="text-sm font-semibold">
            Mileage: <span className="text-gray-600">60K miles</span>
          </p>
          <p className="text-sm font-semibold">
            Body type: <span className="text-gray-600">Convertible</span>
          </p>
          <p className="text-sm font-semibold">
            Drive type:{" "}
            <span className="text-gray-600">2 wheel drive - rear</span>
          </p>
          <p className="text-sm font-semibold">
            Engine: <span className="text-gray-600">6-Cylinder Turbo</span>
          </p>
          <p className="text-sm font-semibold">
            Transmission:{" "}
            <span className="text-gray-600">7-Speed Shiftable Automatic</span>
          </p>
        </div>
        <div className="space-y-2 pt-10 md:pt-0 mt-6">
          <p className="text-sm font-semibold">
            Fuel type: <span className="text-gray-600">Gasoline</span>
          </p>
          <p className="text-sm font-semibold">
            City MPG: <span className="text-gray-600">20</span>
          </p>
          <p className="text-sm font-semibold">
            Highway MPG: <span className="text-gray-600">29</span>
          </p>
          <p className="text-sm font-semibold">
            Exterior color: <span className="text-gray-600">Aspen White</span>
          </p>
          <p className="text-sm font-semibold">
            Interior color: <span className="text-gray-600">Charcoal</span>
          </p>
          <p className="text-sm font-semibold">
            VIN: <span className="text-gray-600">2HJDK3JFJ6</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        <div className="bg-[#ECF2F2] p-4 h-35 w-50 rounded-lg">
          <Image src="/images/verified.png" alt="icon" width={48} height={48} />
          <p className="pt-2 text-sm font-semibold">
            Checked and Certified by Finder
          </p>
        </div>
        <div className="bg-[#ECF2F2] p-4 h-35 w-50 rounded-lg">
          <Image src="/images/single.png" alt="icon" width={48} height={48} />
          <p className="pt-2 text-sm font-semibold">Single Owner</p>
        </div>
        <div className="bg-[#ECF2F2] p-4 h-35 w-50 rounded-lg">
          <Image src="/images/well.png" alt="icon" width={48} height={48} />
          <p className="pt-2 text-sm font-semibold">Well-Equipped</p>
        </div>
        <div className="bg-[#ECF2F2] p-4 h-35 w-50 rounded-lg text-">
          <Image src="/images/accident.png" alt="icon" width={48} height={48} />
          <p className="pt-2 text-sm font-semibold">
            No Accident / Damage Reported
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>

        {["exterior", "interior", "safety", "technology"].map((section) => (
          <div key={section} className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(section as SectionKey)}
            >
              <h3 className="text-lg font-semibold capitalize">{section}</h3>
              <span className="text-gray-500 text-lg">
                {expandedSections[section as keyof typeof expandedSections]
                  ? "-"
                  : "+"}
              </span>
            </div>
            {expandedSections[section as keyof typeof expandedSections] && (
              <ul className="ml-4 mt-2 text-gray-600 list-disc text-sm border-b border-gray-300">
                {section === "exterior" && (
                  <>
                    <li>Multi-Zone A/C</li>
                    <li>Adjustable Steering Wheel</li>
                    <li>Auto-Dimming Rearview Mirror</li>
                    <li>Driver Illuminated Vanity Mirror</li>
                  </>
                )}
                {section === "interior" && (
                  <>
                    <li>Heated Front Seats</li>
                    <li>Leather Steering Wheel</li>
                    <li>Power Door Locks</li>
                  </>
                )}
                {section === "safety" && <li>Add safety features...</li>}
                {section === "technology" && <li>Add tech features...</li>}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Seller Description */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Seller's Description</h2>
        <p className="text-gray-600 max-w-2xl">
          This stunning convertible blends luxury with performance featuring a
          sleek design, advanced technology, and a powerful engine.
        </p>
      </div>
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            You may be interested in
          </h2>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 text-sm flex items-center font-semibold"
          >
            View all{" "}
            <span className="ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-md border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative w-full h-44">
                <Image
                  src={car.image}
                  alt={car.name}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {car.verified && (
                    <span className="w-[72px] px-2 py-1 text-xs font-medium text-white bg-[#3D7A81] rounded-md text-center">
                      Verified ✓
                    </span>
                  )}
                  {car.isNew && (
                    <span className="w-[42px] px-2 py-1 text-xs font-medium text-white bg-[#D85151] rounded-md text-center">
                      New
                    </span>
                  )}
                  {car.isUsed && (
                    <span className="w-[42px] px-2 py-1 text-xs font-medium text-white bg-[#FC9231] rounded-md text-center">
                      Used
                    </span>
                  )}
                </div>
              </div>

              <div className="px-3 py-3 text-sm">
                <div className="flex justify-between items-center text-gray-400 text-xs mb-1">
                  <span>{car.date}</span>
                  <div className="flex gap-2">
                    <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center">
                      <FiHeart className="text-gray-600 text-sm" />
                    </button>
                    <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center">
                      <PiBellRingingLight className="text-gray-600 text-sm" />
                    </button>
                    <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center">
                      <HiArrowsRightLeft className="text-gray-600 text-sm" />
                    </button>
                  </div>
                </div>

                <h3 className="font-bold  text-gray-900 text-base mb-1">
                  {car.name}{" "}
                  <span className="text-gray-400 font-normal text-sm">
                    ({car.year})
                  </span>
                </h3>

                <div className="text-base font-bold text-gray-900 mb-3">
                  {car.price}
                </div>

                <hr className="border-t border-gray-200 my-2" />

                <div className="text-xs text-gray-600">
                  <div className="grid grid-cols-2 gap-2 pb-2">
                    <div className="flex items-center gap-1">
                      <CiLocationOn className="text-base text-gray-500 min-w-[16px]" />
                      <span className="truncate">{car.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <PiClock className="text-base text-gray-500 min-w-[16px]" />
                      <span>{car.mileage}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="flex items-center gap-1">
                      <BsFuelPump className="text-base text-gray-500 min-w-[16px]" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TbManualGearbox className="text-base text-gray-500 min-w-[16px]" />
                      <span>{car.transmission}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
