import React from "react";
import { MapPin, Gauge, Fuel } from "lucide-react";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { PiBellRingingLight } from "react-icons/pi";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { TbManualGearbox } from "react-icons/tb";

const TopOffersSection = () => {
  const topOffers = [
    {
      id: 1,
      image: "/images/masereti.jpg",
      title: "Maserati Granturismo",
      year: "(2020)",
      price: "$73,000",
      date: "28/08/2024",
      location: "Los Angeles",
      mileage: "69K mi",
      fuel: "Gasoline",
      transmission: "Automatic",
      condition: "Used",
      verified: true,
    },
    {
      id: 2,
      image: "/images/volvo.jpg",
      title: "Volvo XC90 Sport 4WD",
      year: "(2024)",
      price: "$92,400",
      date: "23/02/2024",
      location: "Chicago",
      mileage: "0 mi",
      fuel: "Hybrid",
      transmission: "Automatic",
      condition: "New",
      verified: false,
    },
    {
      id: 3,
      image: "/images/benze.jpg",
      title: "Mercedes Benz Coupe",
      year: "(2021)",
      price: "$115,400",
      date: "15/07/2024",
      location: "New York",
      mileage: "15K mi",
      fuel: "Diesel",
      transmission: "Manual",
      condition: "Used",
      verified: false,
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Top offers
          </h1>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 text-sm flex items-center"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
            <div className="relative">
              <Image
                src={topOffers[0].image}
                alt={topOffers[0].title}
                width={300}
                height={200}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
              />
              <div className="absolute top-3 left-3 flex flex-col space-y-2">
                {topOffers[0].verified && (
                  <span className="w-[72px] px-2 py-1 text-xs font-medium text-white bg-[#3D7A81] rounded-md text-center">
                    Verified ✓
                  </span>
                )}
                <span className="w-[45px] px-2 py-1 text-xs font-medium text-white bg-[#FC9231] rounded-md text-center">
                  {topOffers[0].condition}
                </span>
              </div>
            </div>
            <div className="p-3 sm:p-4">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>{topOffers[0].date}</span>
                <div className="flex space-x-1 sm:space-x-2">
                  <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-200 flex items-center justify-center">
                    <FiHeart className="text-gray-600 text-xs sm:text-sm" />
                  </button>
                  <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-200 flex items-center justify-center">
                    <PiBellRingingLight className="text-gray-600 text-xs sm:text-sm" />
                  </button>
                  <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-200 flex items-center justify-center">
                    <HiArrowsRightLeft className="text-gray-600 text-xs sm:text-sm" />
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                {topOffers[0].title}{" "}
                <span className="text-gray-400 font-normal text-xs sm:text-sm">
                  {topOffers[0].year}
                </span>
              </h3>
              <p className="text-sm sm:text-base font-bold text-gray-900 mb-3">
                {topOffers[0].price}
              </p>

              <hr className="border-gray-200 mb-4" />

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{topOffers[0].location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Gauge className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{topOffers[0].mileage}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Fuel className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{topOffers[0].fuel}</span>
                </div>
                <div className="flex items-center gap-1">
                  <TbManualGearbox className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{topOffers[0].transmission}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 h-full">
            {topOffers.slice(1).map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row flex-1 min-h-0"
              >
                <div className="relative w-full sm:w-48 lg:w-64 flex-shrink-0">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    width={300}
                    height={200}
                    className="w-full h-40 sm:h-full object-cover sm:min-h-[140px]"
                  />
                  <div className="absolute top-2 left-2">
                    <span
                      className={`text-xs px-3 py-1 text-white rounded ${
                        offer.condition === "New"
                          ? "bg-[#D85151]"
                          : "bg-[#FC9231]"
                      }`}
                    >
                      {offer.condition}
                    </span>
                  </div>
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span>{offer.date}</span>
                      <div className="flex space-x-1">
                        <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-200 flex items-center justify-center">
                          <FiHeart className="text-gray-600 text-xs sm:text-sm" />
                        </button>
                        <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-200 flex items-center justify-center">
                          <PiBellRingingLight className="text-gray-600 text-xs sm:text-sm" />
                        </button>
                        <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-200 flex items-center justify-center">
                          <HiArrowsRightLeft className="text-gray-600 text-xs sm:text-sm" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                      {offer.title}{" "}
                      <span className="text-gray-400 font-normal text-xs sm:text-sm">
                        {offer.year}
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-gray-900 mb-3">
                      {offer.price}
                    </p>
                  </div>

                  <hr className="border-gray-200 mb-2" />

                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between gap-1 sm:gap-2 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{offer.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Gauge className="w-3 h-3" />
                      <span>{offer.mileage}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Fuel className="w-3 h-3" />
                      <span>{offer.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TbManualGearbox className="w-3 h-3" />
                      <span>{offer.transmission}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopOffersSection;
