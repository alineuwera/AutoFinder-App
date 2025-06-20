import Image from 'next/image';

const CarTypesSection = () => {
  const carTypes = [
    { name: 'Sedan', offers: 1765, image: '/images/sedan.jpg' },
    { name: 'Coupe', offers: 923, image: '/images/coupe.jpg' },
    { name: 'Convertible', offers: 120, image: '/images/convertible.jpg' },
    { name: 'SUV', offers: 2107, image: '/images/suv.jpg' },
    { name: 'Family MPV', offers: 582, image: '/images/mpv.jpg' },
    { name: 'Pickup', offers: 341, image: '/images/pickup.jpg' },
  ];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Popular car body types</h1>
          <a href="#" className="text-black hover:underline text-sm">
            View all <span>&rsaquo;</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {carTypes.map((car) => (
            <div
              key={car.name}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <Image
                src={car.image}
                alt={`${car.name} car`}
                width={150}
                height={80}
                className="mx-auto"
              />
              <h3 className="mt-2 text-gray-900 font-medium">{car.name}</h3>
              <p className="text-gray-500 text-sm">{car.offers} offers</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarTypesSection;