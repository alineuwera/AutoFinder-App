import Image from "next/image";

const TopOffersSection = ({ className }: { className?: string }) => {
  const topOffers = [
    {
      id: 1,
      image: "/images/maserati-granturismo.jpg",
      title: "Maserati Granturismo (2020)",
      price: "$73,000",
      date: "28/08/2024",
      location: "Los Angeles",
      mileage: "68K mi",
      fuel: "Gasoline",
      transmission: "Automatic",
      condition: "Used",
    },
    {
      id: 2,
      image: "/images/volvo-xc90.jpg",
      title: "Volvo XC90 Sport 4WD (2024)",
      price: "$92,400",
      date: "29/02/2024",
      location: "Chicago",
      mileage: "0 mi",
      fuel: "Hybrid",
      transmission: "Automatic",
      condition: "New",
    },
    {
      id: 3,
      image: "/images/mercedes-benz-coupe.jpg",
      title: "Mercedes Benz Coupe (2021)",
      price: "$115,400",
      date: "15/07/2024",
      location: "New York",
      mileage: "15K mi",
      fuel: "Diesel",
      transmission: "Manual",
      condition: "Used",
    },
  ];

  return (
    <div className={`bg-white text-gray-900 p-6 rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Top offers</h1>
        <a href="#" className="text-black hover:underline text-sm">
          View all <span>›</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topOffers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Image
              src={offer.image}
              alt={offer.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <p className="text-sm text-gray-500">{offer.date}</p>
              <h3 className="text-lg font-medium text-gray-900">{offer.title}</h3>
              <p className="text-xl font-bold text-gray-900 mt-2">{offer.price}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <span>{offer.location}</span>
                <span>⦁</span>
                <span>{offer.mileage}</span>
                <span>⦁</span>
                <span>{offer.fuel}</span>
                <span>⦁</span>
                <span>{offer.transmission}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    offer.condition === "Used" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"
                  }`}
                >
                  {offer.condition}
                </span>
                <div className="flex gap-1">
                  <span className="text-gray-400">❤️</span>
                  <span className="text-gray-400">⋮</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopOffersSection;