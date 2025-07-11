import React from "react";
import Image from "next/image";
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

const LatestCar: React.FC = () => {
  return (
    <section className="py-8 px- sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-0">Latest Cars</h2>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 border border-black rounded-full">
              All
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-800 border border-gray-200 rounded-full">
              New Cars
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-800 border border-gray-200 rounded-full">
              Used Cars
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </section>
  );
};

export default LatestCar;
