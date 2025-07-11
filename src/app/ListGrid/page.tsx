"use client";

import React, { useState, useCallback } from "react";
import { Grid, List, MapPin } from "lucide-react";
import { FiHeart } from "react-icons/fi";
import { PiBellRingingLight } from "react-icons/pi";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { PiClock } from "react-icons/pi";
import { BsFuelPump } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { HiChevronRight } from "react-icons/hi";
import Image from "next/image";


interface Car {
  id: number;
  image: string;
  verified?: boolean;
  isUsed?: boolean;
  name: string;
  year: number;
  price: string;
  location: string;
  mileage: string;
  fuel: string;
  transmission: string;
  date?: string;
}

const cars: Car[] = [
  {
    id: 1,
    image: "/images/volvo.jpg",
    name: "Tesla Model 3",
    year: 2022,
    price: "$32,000",
    verified: true,
    isUsed: true,
    location: "Los Angeles",
    mileage: "78K mi",
    fuel: "Electric",
    transmission: "Automatic",
    date: "Today",
  },
  {
    id: 2,
    image: "/images/turbo.jpg",
    name: "Porsche 911 Turbo S",
    year: 2021,
    price: "$15,500",
    verified: true,
    isUsed: true,
    location: "San Diego",
    mileage: "34K mi",
    fuel: "Gasoline",
    transmission: "Automatic",
    date: "Yesterday",
  },
  {
    id: 3,
    image: "/images/fordt.jpg",
    name: "Ford Truck Lifted",
    year: 2020,
    price: "$25,000",
    verified: true,
    isUsed: true,
    location: "Phoenix",
    mileage: "92K mi",
    fuel: "Diesel",
    transmission: "Automatic",
    date: "3 days ago",
  },
  {
    id: 4,
    image: "/images/Mercedesb.jpg",
    name: "Mercedes-Benz A205",
    year: 2019,
    price: "$12,000",
    verified: true,
    isUsed: true,
    location: "New York",
    mileage: "45K mi",
    fuel: "Gasoline",
    transmission: "Automatic",
    date: "4 days ago",
  },
  {
    id: 5,

    image: "/images/land.jpg",
    name: "Mercedes-Benz Coupe",
    year: 2021,
    price: "$65,000",
    verified: true,
    isUsed: true,
    location: "Denver",
    mileage: "28K mi",
    fuel: "Diesel",
    transmission: "Automatic",
    date: "5 days ago",
  },
  {
    id: 6,
    image: "/images/masereti.jpg",
    name: "Maserati Granturismo",
    year: 2022,
    price: "$120,000",
    verified: true,
    isUsed: true,
    location: "Miami",
    mileage: "15K mi",
    fuel: "Gasoline",
    transmission: "Automatic",
    date: "6 days ago",
  },
  {
    id: 7,
    image: "/images/cabrio.jpg",
    name: "Smart Fortwo Cabrio",
    year: 2023,
    price: "$35,000",
    verified: true,
    isUsed: true,
    location: "Seattle",
    mileage: "40K mi",
    fuel: "Gasoline",
    transmission: "Automatic",
    date: "1 week ago",
  },
  {
    id: 8,
    image: "/images/land.jpg",
    name: "Land Rover Defender",
    year: 2022,
    price: "$40,000",
    verified: true,
    isUsed: true,
    location: "Dallas",
    mileage: "55K mi",
    fuel: "Diesel",
    transmission: "Automatic",
    date: "1 week ago",
  },
  {
    id: 9,
    image: "/images/Audi.jpg",
    name: "Audi R8 Spyder",
    year: 2021,
    price: "$90,000",
    verified: true,
    isUsed: true,
    location: "Chicago",
    mileage: "25K mi",
    fuel: "Gasoline",
    transmission: "Automatic",
    date: "2 weeks ago",
  },
  {
    id: 10,
    image: "/images/Sierra.jpg",
    name: "GMC Sierra 1500",
    year: 2022,
    price: "$120,000",
    verified: true,
    isUsed: true,
    location: "Miami",
    mileage: "15K mi",
    fuel: "Gasoline",
    transmission: "Automatic",
    date: "3 weeks ago",
  },
  {
    id: 11,
    image: "/images/Toyota.jpg",
    name: "Toyota Yaris GR Sport",
    year: 2022,
    price: "$120,000",
    verified: true,
    isUsed: true,
    location: "Miami",
    mileage: "15K mi",
    fuel: "Gasoline",
    transmission: "Automatic",
    date: "3 weeks ago",
  },
  {
    id: 12,
    image: "/images/Carrera.jpg",
    name: "Porsche 911 Carrera",
    year: 2022,
    price: "$120,000",
    verified: true,
    isUsed: true,
    location: "Miami",
    mileage: "15K mi",
    fuel: "Gasoline",
    transmission: "Automatic",
    date: "3 weeks ago",
  },
];


const CarCard = React.memo(
  ({ car, isListView }: { car: Car; isListView: boolean }) => {
    console.log(`Rendering CarCard for ${car.name}, isListView: ${isListView}`);
    return (
      <div className="bg-gray-100 rounded-md border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 ">
        {isListView ? (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 w-full h-40 md:h-48 relative">
              <Image
                src={car.image}
                alt={car.name}
                height={200}
                width={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {car.verified && (
                  <span className="w-[72px] px-2 py-1 text-[11px] font-medium text-white bg-green-600 rounded-md text-center">
                    Verified ✓
                  </span>
                )}
                {car.isUsed && (
                  <span className="w-[42px] px-2 py-1 text-[11px] font-medium text-white bg-red-500 rounded-md text-center">
                    Used
                  </span>
                )}
              </div>
            </div>
            <div className="md:w-1/2 w-full px-4 py-2 text-sm">
              <div className="flex justify-between items-center text-gray-400 text-[11px] mb-1">
                <span>{car.date}</span>
                <div className="flex gap-2">
                  <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center">
                    <FiHeart className="text-sm" />
                  </button>
                  <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center">
                    <PiBellRingingLight className="text-sm" />
                  </button>
                  <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center">
                    <HiArrowsRightLeft className="text-sm" />
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1">
                {car.name}{" "}
                <span className="text-gray-400 text-[11px]">({car.year})</span>
              </h3>
              <div className="text-base font-bold text-gray-900 mb-1">
                {car.price}
              </div>
              <p className="text-[11px] text-gray-600 mb-2">
                This is a well-maintained {car.name} with excellent performance
                and modern features.
              </p>
              <hr className="border-t border-gray-200 my-2" />
              <div className="flex gap-3 text-[11px] text-gray-600 items-center">
                <div className="flex items-center gap-1">
                  <CiLocationOn className="text-sm" />
                  <span>{car.location}</span>
                </div>
                <span>|</span>
                <div className="flex items-center gap-1">
                  <PiClock className="text-sm" />
                  <span>{car.mileage}</span>
                </div>
                <span>|</span>
                <div className="flex items-center gap-1">
                  <BsFuelPump className="text-sm" />
                  <span>{car.fuel}</span>
                </div>
                <span>|</span>
                <div className="flex items-center gap-1">
                  <TbManualGearbox className="text-sm" />
                  <span>{car.transmission}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="relative w-full h-44">
              <Image
                src={car.image}
                alt={car.name}
                height={200}
                width={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {car.verified && (
                  <span className="w-[72px] px-2 py-1 text-xs font-medium text-white bg-green-600 rounded-md text-center">
                    Verified ✓
                  </span>
                )}
                {car.isUsed && (
                  <span className="w-[42px] px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-md text-center">
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
                    <FiHeart />
                  </button>
                  <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center">
                    <PiBellRingingLight />
                  </button>
                  <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center">
                    <HiArrowsRightLeft />
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1">
                {car.name}{" "}
                <span className="text-gray-400 text-sm">({car.year})</span>
              </h3>
              <div className="text-base font-bold text-gray-900 mb-3">
                {car.price}
              </div>
              <hr className="border-t border-gray-200 my-2" />
              <div className="text-xs text-gray-600">
                <div className="grid grid-cols-2 gap-2 pb-2">
                  <div className="flex items-center gap-1">
                    <CiLocationOn className="text-base" />
                    <span>{car.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <PiClock className="text-base" />
                    <span>{car.mileage}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="flex items-center gap-1">
                    <BsFuelPump className="text-base" />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TbManualGearbox className="text-base" />
                    <span>{car.transmission}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
);

CarCard.displayName = "CarCard";

const ListGrid = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  console.log("Current viewMode:", viewMode);
  const handleGridClick = useCallback(() => {
    setViewMode("grid");
  }, []);

  const handleListClick = useCallback(() => {
    setViewMode("list");
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12 sm:px-6 md:px-8">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 pt-18">
          <div className="py-3">
            <div className="text-xs text-gray-500 p-4 flex items-center gap-1">
              <span className="text-blue-600">Home</span>
              <HiChevronRight className="w-4 h-4 text-gray-400" />
              <span>Used cars</span>
            </div>
            <div className="flex justify-between items-center flex-wrap gap-2">
              {/* CHANGE: Removed pl-4 to rely on parent padding for consistent spacing on all screen sizes. */}
              <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
                <span>Showing 142 results</span>
                <span className="bg-gray-100 px-4 py-1 rounded-2xl">Sedan</span>
                <span className="bg-gray-100 px-4 py-1 rounded-2xl">SUV</span>
                <span className="bg-gray-100 px-4 py-1 rounded-2xl">Coupe</span>
                <span className="bg-gray-100 px-4 py-1 rounded-2xl">
                  Under 2023
                </span>
                <span className="bg-gray-100 px-4 py-1 rounded-2xl">
                  $10,000 - $120,000
                </span>
              </div>
              <div className="text-xs text-gray-500">clear all</div>
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex gap-2 items-center ml-4tx">
              <button className="px-3 py-1 text-xs bg-gray-100 rounded">
                New cars
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 rounded">
                Used cars
              </button>

            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-xs">
                <span>Compare (1)</span>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={handleGridClick}
                  className={`p-1 rounded ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  } z-10 pointer-events-auto cursor-pointer`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={handleListClick}
                  className={`p-1 rounded ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  } z-10 pointer-events-auto cursor-pointer`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {/* Sidebar */}
          <div className="w-full sm:w-60 bg-white rounded-lg p-5 h-fit mt-4">
            {/* Location and radius */}
            <div className="mb-6">
              <h3 className="font-medium text-sm mb-3">Location and radius</h3>
              <div className="relative">
                <MapPin
                  size={16}
                  className="absolute left-3 top-2.5 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Any location"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded text-xs"
                />
              </div>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Any radius"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-xs"
                />
              </div>
            </div>
            {/* Body type */}
            <div className="mb-6">
              <h3 className="font-medium text-sm mb-3">Body type</h3>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Sedan</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" checked readOnly />
                  <span>SUV</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Wagon</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Convertible</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" checked readOnly />
                  <span>Coupe</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Pickup</span>
                </label>
              </div>
            </div>
            {/* Year */}
            <div className="mb-6">
              <h3 className="font-medium text-sm mb-3">Year</h3>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="From"
                  className="w-20 p-2 border border-gray-300 rounded text-xs"
                  defaultValue="2019"
                />
                <span className="text-xs text-gray-500 self-center">-</span>
                <input
                  type="number"
                  placeholder="To"
                  className="w-20 p-2 border border-gray-300 rounded text-xs"
                  defaultValue="2023"
                />
              </div>
            </div>
            {/* Make and model */}
            <div className="mb-6">
              <h3 className="font-medium text-sm mb-3">Make and model</h3>
              <select className="w-full p-2 border border-gray-300 rounded text-xs mb-2">
                <option>Any make</option>
              </select>
              <select className="w-full p-2 border border-gray-300 rounded text-xs">
                <option>Any model</option>
              </select>
            </div>
            {/* Price */}
            <div className="mb-6">
              <h3 className="font-medium text-sm mb-3">Price</h3>
              <div className="flex gap-2 mb-3">
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-1">$</span>
                  <input
                    type="number"
                    placeholder="10000"
                    className="w-20 p-2 border border-gray-300 rounded text-xs"
                    defaultValue="10000"
                  />
                </div>
                <span className="text-xs text-gray-500 self-center">-</span>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-1">$</span>
                  <input
                    type="number"
                    placeholder="120000"
                    className="w-20 p-2 border border-gray-300 rounded text-xs"
                    defaultValue="120000"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-blue-600 rounded"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="absolute top-0 left-0 w-4 h-4 bg-blue-600 rounded-full -mt-1 cursor-pointer"></div>
                <div className="absolute top-0 right-10 w-4 h-4 bg-blue-600 rounded-full -mt-1 cursor-pointer"></div>
              </div>
              <div className="text-xs text-gray-500 mt-2">Advanced search</div>
            </div>
            {/* Drivetrain */}
            <div className="mb-6">
              <h3 className="font-medium text-sm mb-3">Drivetrain</h3>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>AWD/4WD</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>FWD</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>RWD</span>
                </label>
              </div>
            </div>
            {/* Fuel type */}
            <div className="mb-6">
              <h3 className="font-medium text-sm mb-3">Fuel type</h3>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Gasoline</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Diesel</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Electric</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Hybrid</span>
                </label>
              </div>
            </div>
            {/* Transmission */}
            <div className="mb-6">
              <h3 className="font-medium text-sm mb-3">Transmission</h3>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" checked readOnly />
                  <span>Automatic</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Manual</span>
                </label>
              </div>
            </div>
            {/* Mileage */}
            <div className="mb-6">
              <h3 className="font-medium text-sm mb-3">Mileage</h3>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="From"
                  className="w-20 p-2 border border-gray-300 rounded text-xs"
                  defaultValue="10K"
                />
                <span className="text-xs text-gray-500 self-center">-</span>
                <input
                  type="number"
                  placeholder="To"
                  className="w-20 p-2 border border-gray-300 rounded text-xs"
                  defaultValue="100K"
                />
              </div>
            </div>
            {/* Color */}
            <div className="mb-6">
              <h3 className="font-medium text-sm mb-3">Color</h3>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>White</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Black</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Silver</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Red</span>
                </label>
              </div>
            </div>
            {/* Sellers */}
            <div className="mb-6">
              <h3 className="font-medium text-sm mb-3">Sellers</h3>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" checked readOnly />
                  <span>Private Sellers Only</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Dealers Only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Car Listings */}
          <div className="flex-1">
            {/* CHANGE: Changed -mt-11 to sm:-mt-11 to apply it only when the sidebar is on the side. */}
            <div className="sm:-mt-11"> 
              <h2 className="text-xl text-gray-900 mb-6">Popular</h2>
            </div>
            <div className="pb-10">
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {cars.map((car) => (
                    <CarCard key={car.id} car={car} isListView={false} />
                  ))}
                </div>
              ) : (
                <div className="max-w-4xl mx-auto space-y-4">
                  {cars.slice(0, 8).map((car) => (
                    <CarCard key={car.id} car={car} isListView={true} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListGrid;