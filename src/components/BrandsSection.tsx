import Image from "next/image";

const BrandsSection = () => {
  const brands = [
    { name: "Mercedes-Benz", image: "/images/mercedes-benz.png" },
    { name: "Opel", image: "/images/opel.png" },
    { name: "Volkswagen", image: "/images/volkswagen.png" },
    { name: "Toyota", image: "/images/toyota.png" },
    { name: "Citroën", image: "/images/citroen.png" },
    { name: "Land Rover", image: "/images/land-rover.png" },
    { name: "Honda", image: "/images/honda.png" },
    { name: "Lexus", image: "/images/lexus.png" },
  ];

  return (
    <div className="p-6 rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="flex flex-wrap justify-center gap-18">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center justify-center w-18 h-18">
            <Image
              src={brand.image}
              alt={`${brand.name} logo`}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;