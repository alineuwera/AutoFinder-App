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
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-2xl font-bold mb-8">
          Currently in Demand
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {carData.map((car) => (
            <div key={car.id} className="text-center">
              <div className="relative w-40 h-40 mx-auto">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="rounded-full object-cover"
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 160px, 160px"
                />
              </div>
              <h3 className="mt-2 text-sm sm:text-base font-bold">
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




// import HeroSearchForm from "@/components/HeroSearchForm";
// import CarTypesSection from "@/components/CarTypesSection";
// import TopOffersSection from "@/components/TopOffersSection";
// import BrandsSection from "@/components/BrandsSection";
// import NavigationBar from "@/components/NavigationBar";

// export default function HomePage() {
//   return (
//     <div className="text-white">
//       <NavigationBar />
//       <div className="bg-[#267180] opacity-85 p-6">
//         <div className="flex items-center justify-between mb-4 mx-auto py-15 mt-20 px-4 sm:px-6 lg:px-8  max-w-7xl">
//           <HeroSearchForm />
//           <h1 className="text-5xl font-bold mb-4 ml-10 mx-auto">
//             Easy way to find the right car
//           </h1>
//         </div>
//       </div>
//       <CarTypesSection />
//       <TopOffersSection />
//       <BrandsSection />
//     </div>
//   );
// }