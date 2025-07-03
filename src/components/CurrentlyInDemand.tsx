import React from "react";
import Image from "next/image";

interface Car {
  id: number;
  image: string;
  name: string;
}

const carData: Car[] = [
  {
    id: 1,
    name: "Electric cars",
    image: "/images/electric cars.jpg",
  },
  {
    id: 2,
    name: "New cars",
    image: "/images/new cars.jpg",
  },
  {
    id: 3,
    name: "City cars",
    image: "/images/city cars.jpg",
  },
  {
    id: 4,
    name: "Off-road cars",
    image: "/images/off-road cars.jpg",
  },
  {
    id: 5,
    name: "Family cars",
    image: "/images/family cars.jpg",
  },
];

const CurrentlyInDemand: React.FC = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[950px] mx-auto">
        <h2 className="text-center text-2xl font-bold mb-8 text-gray-950">
          Currently in Demand
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {carData.map((car) => (
            <div key={car.id} className="text-center">
              <div className="relative w-30 h-30 mx-auto">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="mt-2 text-sm sm:text-base font-bold text-gray-950">
                {car.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyInDemand;