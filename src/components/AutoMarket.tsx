import React from "react";
import Image from "next/image";

interface CarTire {
  id: number;
  image: string;
  name: string;
}

const carTires: CarTire[] = [
  {
    id: 1,
    image: "/images/tires.png",
    name: "Tires",
  },
  {
    id: 2,
    image: "/images/disk.png",
    name: "Disks",
  },
  {
    id: 3,
    image: "/images/tuning.png",
    name: "Tuning",
  },
  {
    id: 4,
    image: "/images/child seat.png",
    name: "Child seat",
  },
];

export default function AutoMarket() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="bg-gray-50 rounded-sm p-6 sm:p-8 lg:p-12 w-full max-w-[950px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          <div className="flex flex-col gap-4 flex-shrink-0 w-full lg:w-auto text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Auto market
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Choose the best for your car!
            </p>
            <button className="inline-flex items-center gap-2 bg-[#D85151] hover:bg-red-500 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 w-fit mx-auto lg:mx-0 text-sm sm:text-base">
              Go to shop
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
            </button>
          </div>

          {/* tires items */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 lg:gap-6">
            {carTires.map((item) => (
              <div key={item.id} className="flex flex-col items-center group">
                <div className="w-28 h-28 relative flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
