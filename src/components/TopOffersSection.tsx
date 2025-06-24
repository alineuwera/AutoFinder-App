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
      verified: true,
    },
    {
      id: 2,
      image: "/images/volvo-xc90.jpg",
      title: "Volvo XC90 Sport 4WD (2024)",
      price: "$92,400",
      date: "23/02/2024",
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
    <div className={`bg-white text-gray-900 p-6 rounded-lg max-w-7xl mx-auto ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Top offers</h1>
        <a href="#" className="text-black hover:underline text-sm">
          View all <span className="text-blue-600">›</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2f lg:grid-cols-3 gap-6">
        {topOffers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden relative"
          >
            <div className="relative ">
              <Image
                src={offer.image}
                alt={offer.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-2 flex space-x-2">
                {offer.verified && (
                  <span className="flex items-center text-xs px-2 py-1 bg-green-500 text-white rounded-full">
                    Verified
                    <Image src="/images/shield.png" alt="verified" width={12} height={12} className="mr-1" />
                  </span>
                )}
                {offer.condition === "Used" && (
                  <span className="text-xs px-2 py-1 bg-orange-500 text-white rounded">Used</span>
                )}
                {offer.condition === "New" && (
                  <span className="text-xs px-2 py-1 bg-red-500 text-white rounded">New</span>
                )}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>{offer.date}</span>
                <div className="flex space-x-2">
                  <Image src="/images/heart.png" alt="like" width={35} height={35} className="rounded-full bg-white p-1" />
                  <Image src="/images/bell.png" alt="notify" width={35} height={35} className="rounded-full bg-white p-1" />
                  <Image src="/images/sync.png" alt="refresh" width={35} height={35} className="rounded-full bg-white p-1" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{offer.title}</h3>
              <p className="text-xl font-bold text-gray-900 mt-2 mb-5">{offer.price}</p>
              <div className="border-b border-gray-300 my-2"></div>
              <div className="flex items-center flex-wrap gap-2 mt-2 text-sm text-gray-600">
                <div className="flex items-center gap-1 py-4">
                  <Image src="/images/map-pin.png" alt="location" width={16} height={16} />
                  <span>{offer.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/images/tachometer.png" alt="mileage" width={16} height={16} />
                  <span>{offer.mileage}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/images/gas-pump.png" alt="fuel" width={16} height={16} />
                  <span>{offer.fuel}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/images/gearbox.png" alt="transmission" width={16} height={16} />
                  <span>{offer.transmission}</span>
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