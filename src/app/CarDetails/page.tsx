import Image from "next/image";

export default function CarDetails() {
  return (
    <div className="flex flex-col lg:flex-col items-start  min-h-screen p-6 gap-6 w-full mt-20">
      <div>
        <h1 className="text-xl font-medium">
          Mercedes-Benz A205 Cabriolet{" "}
          <span className="text-gray-500">(2021)</span>
        </h1>
        <Image
          src="/images/car.jpg"
          alt="car image"
          height={500}
          width={583}
          className="rounded-md"
        />
        <div className="mt-2 flex gap-2">
          <Image
            src="/images/car.jpg"
            alt="image"
            height={100}
            width={110}
            className="rounded-md"
          />
          <Image
            src="/images/car.jpg"
            alt="image"
            height={100}
            width={110}
            className="rounded-md"
          />
          <Image
            src="/images/car.jpg"
            alt="image"
            height={100}
            width={110}
            className="rounded-md"
          />
          <Image
            src="/images/car.jpg"
            alt="image"
            height={100}
            width={110}
            className="rounded-md"
          />
          <Image
            src="/images/car.jpg"
            alt="image"
            height={100}
            width={110}
            className="rounded-md"
          />
        </div>
        <div className="mt-4 flex gap-2 justify-between">
          <div className=" gap-2 flex flex-col">
            <h1 className="text-2xl font-medium mb-4">Specifications</h1>
            <p className="font-semibold text-sm">
              Manufacturing Year: <span className="text-gray-600">2021</span>
            </p>
            <p className="font-semibold text-sm">
              Mileage: <span className="text-gray-600">60k miles</span>
            </p>
            <p className="font-semibold text-sm">
              Body type: <span className="text-gray-600">Convertible</span>{" "}
            </p>
            <p className="font-semibold text-sm">
              Drive type:{" "}
              <span className="text-gray-600">2 wheel drive- rear</span>
            </p>
            <p className="font-semibold text-sm">
              Engine <span className="text-gray-600">6-Cylinder Turbo</span>
            </p>
            <p className="font-semibold text-sm">
              Transmission{" "}
              <span className="text-gray-600">7-Speed Shiftable Automatic</span>
            </p>
          </div>
          <div className=" gap-2 flex flex-col mt-13">
            <p className="font-semibold text-sm">
              Fuel Type: <span className="text-gray-600">Gasoline</span>
            </p>
            <p className="font-semibold text-sm">City MPG <span className="text-gray-600">20</span></p>
            <p className="font-semibold text-sm">Highway MPG<span className="text-gray-600"> 29</span></p>
            <p className="font-semibold text-sm">Exterior color: <span className="text-gray-600">Aspen white</span> </p>
            <p className="font-semibold text-sm">Interior color: <span className="text-gray-600">Charcoal</span></p>
            <p className="font-semibold text-sm">VIN: <span className="text-gray-600">2HJDK3JFJ6</span></p>
          </div>
        </div>
      </div>
      <div>
        <p>kjndefdkjnki</p>
      </div>
    </div>
  );
}
