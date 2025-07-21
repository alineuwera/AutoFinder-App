"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Eye,
  Briefcase,
  User,
  CameraIcon,
} from "lucide-react";
import AuthContext from "@/context/auth-context";

type CategoryKey = "exterior" | "interior" | "safety";
type FeatureKey =
  | "multiZoneAC"
  | "adjustableSteeringWheel"
  | "autoDimmingRearviewMirror"
  | "climateControl" 
  | "driverAdjustableLumbar"
  | "heatedFrontSeats"
  | "intermittentWipers"
  | "leatherSeats"
  | "passengerIlluminatedVisorMirror"
  | "passengerAdjustableLumbar"
  | "steeringWheelAudioControls"
  | "powerDoorLocks"
  | "bankThroughRearSeat"
  | "passThroughRearSeat"
  | "universalGarageDoorOpener";

export default function SellCarPage() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const [role, setRole] = useState("private");
  const [condition, setCondition] = useState("new");
  const [uploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [uploadText, setUploadText] = useState("");
  const [imageSelected, setImageSelected] = useState<string | null>(null);

  const [features, setFeatures] = useState<{
    [key in FeatureKey]: boolean;
  }>({
    multiZoneAC: true,
    adjustableSteeringWheel: true,
    autoDimmingRearviewMirror: false,
    climateControl: false,
    driverAdjustableLumbar: false,
    heatedFrontSeats: true,
    intermittentWipers: false,
    leatherSeats: true,
    passengerIlluminatedVisorMirror: true,
    passengerAdjustableLumbar: false,
    steeringWheelAudioControls: false,
    powerDoorLocks: true,
    bankThroughRearSeat: false,
    passThroughRearSeat: false,
    universalGarageDoorOpener: true,
  });

  const [expandedCategories, setExpandedCategories] = useState<{
    [key in CategoryKey]: boolean;
  }>({
    exterior: false,
    interior: true,
    safety: false,
  });
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [manufactureDate, setManufactureDate] = useState("");
  const [location, setLocation] = useState("");
  const [driveType, setDriveType] = useState("");
  const [engine, setEngine] = useState("");
  const [description, setDescription] = useState("");
  const [brandId, setBrandId] = useState(0);
  const [bodyTypeId, setBodyTypeId] = useState(0);
  const token = user?.token;
  const selectedFeatures = Object.entries(features)
    .filter(([_key, value]) => value)
    .map(([key]) => key);

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [user, router]);

  useEffect(() => {
    const savedImages = localStorage.getItem("uploadedImages");
    if (savedImages) {
      setUploadedImages(JSON.parse(savedImages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("uploadedImages", JSON.stringify(uploadedImages));
  }, [uploadedImages]);

  if (!user) {
    return <div className="p-4 text-center">Redirecting to login...</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const carData = {
      id: 0,
      name,
      price,
      manufactureDate,
      location,
      features: selectedFeatures,
      images: uploadedImages,
      driveType,
      engine,
      description,
      brandId,
      bodyTypeId,
      ownerId: user?.id || 0,
      condition,
    };

    try {
      console.log("Sending this to backend:", carData);
      const response = await fetch("https://carfinder-894g.onrender.com/api/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(carData),
      });

      const contentType = response.headers.get("content-type");

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Backend error:", errorText);
        alert("Failed to save car.");
        return;
      }

      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        console.log("Success:", result);
        alert("Car successfully published!");
      } else {
        console.warn("Response is not JSON");
        alert("Car saved, but backend didn’t return JSON.");
      }
    } catch (error) {
      console.error("Network or JSON error:", error);
      alert("Something went wrong.");
    }
  };

  const toggleCategory = (category: CategoryKey) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleFeatureChange = (feature: FeatureKey) => {
    setFeatures((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadText("Uploading...");
    setImageSelected(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const contentType = res.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();

        if (res.ok && data.url) {
          setUploadedImages((prev) => [...prev, data.url]);
          setUploadText("Uploaded ✅");
        } else {
          console.error("Upload failed:", data.error);
          setUploadText("Upload failed");
        }
      } else {
        const errorText = await res.text();
        console.error("Non-JSON error:", errorText);
        setUploadText("Upload failed");
      }
    } catch (err) {
      console.error("Error uploading:", err);
      setUploadText("Upload error");
    }
  };


  return (
    <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen bg-gray-100 p-6 gap-6 w-full">
      <div className="">
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-2xl font-bold mt-15">Sell Car</h1>
          <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-semibold mb-4">Photos / videos</h2>
            <p className="text-sm text-gray-500 mb-4">
              The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the
              main picture first.
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="block w-full mt-2"
              />

              {uploading && <p>Uploading...</p>}
              {uploadedImages.map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  alt={`Uploaded ${index}`}
                  width={200}
                  height={200}
                  className="rounded"
                />
              ))}
            </div>
            <label htmlFor="" className="font-semibold">
              Link to the video tour
            </label>
            <input
              type="url"
              placeholder="www.youtube.com/..."
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="flex gap-3 mb-4">
            <button
              type="button"
              onClick={() => setCondition("new")}
              className={`px-4 py-2 border rounded-full ${
                condition === "new"
                  ? "bg-gray-100 border-black"
                  : "border-gray-300"
              }`}
            >
              New car
            </button>
            <button
              type="button"
              onClick={() => setCondition("used")}
              className={`px-4 py-2 border rounded-full ${
                condition === "used"
                  ? "bg-gray-100 border-black"
                  : "border-gray-300"
              }`}
            >
              Used car
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="carBrand"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Car Brand *
              </label>
              <select
                id="carBrand"
                className="border border-gray-300 p-2 rounded-md w-full"
              >
                <option value="">Select a brand</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="toyota">Toyota</option>
                <option value="bmw">BMW</option>
                <option value="audi">Audi</option>
                <option value="honda">Honda</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="carModel"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Car Model *
              </label>
              <select
                id="carModel"
                className="border border-gray-300 p-2 rounded-md w-full"
              >
                <option value="">Select a model</option>
                <option value="a2025">A2025</option>
                <option value="civic">Civic</option>
                <option value="corolla">Corolla</option>
                <option value="x5">X5</option>
                <option value="a4">A4</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="manufacturingYear"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Manufacturing Year
              </label>
              <input
                type="number"
                id="manufacturingYear"
                placeholder="2021"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="mileage"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mileage *
              </label>
              <input
                type="text"
                id="mileage"
                placeholder="K miles"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
          </div>
          {/* Body type */}
          <div className="mt-5">
            <h3 className="text-sm font-medium mb-2">Body type *</h3>
            <div className="flex gap-3">
              <button className="flex flex-col items-center rounded-md border border-gray-100 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <Image
                  src="/images/sedan.jpg"
                  alt="Sedan"
                  height={200}
                  width={200}
                  className="object-contain"
                />
                <span className="text-sm mt-1">Sedan</span>
              </button>
              <button className="flex flex-col items-center rounded-md border border-gray-100 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <Image
                  src="/images/sedan.jpg"
                  alt="Convertible"
                  height={200}
                  width={200}
                  className="object-contain"
                />
                <span className="text-xs mt-1">Convertible</span>
              </button>
              <button className="flex flex-col items-center rounded-md border border-gray-100 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <Image
                  src="/images/sedan.jpg"
                  alt="SUV"
                  height={200}
                  width={200}
                  className="object-contain"
                />
                <span className="text-xs mt-1">SUV</span>
              </button>
              <button className="flex flex-col items-center rounded-md border border-gray-100 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <Image
                  src="/images/sedan.jpg"
                  alt="Coupe"
                  height={200}
                  width={200}
                  className="object-contain"
                />
                <span className="text-xs mt-1">Coupe</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Location *
              </label>
              <input
                type="text"
                id="location"
                placeholder="Chicago"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="radius"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Radius
              </label>
              <input
                type="text"
                id="radius"
                placeholder="50 mi"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-md mt-3">
            <div className="mt-5">
              <h2 className="font-bold text-xl mb-3">
                Cars with a verified VIN code sell faster
              </h2>
              <p className="text-gray-600 mb-3">
                We will check the car for free in the registers of the Ministry
                of Internals Affairs, the open data portal and dealer databases.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="VIN code"
                  className="border p-2 rounded-md bg-white"
                />
                <CameraIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold mb-6">Specifications</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="driveType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Drive type *
                </label>
                <select
                  id="driveType"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Select drive type</option>
                  <option value="fwd">FWD (Front-Wheel Drive)</option>
                  <option value="rwd">RWD (Rear-Wheel Drive)</option>
                  <option value="awd">AWD (All-Wheel Drive)</option>
                  <option value="4wd">4WD (Four-Wheel Drive)</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="engine"
                  className="block text-sm font-medium text-gray-700"
                >
                  Engine *
                </label>
                <select
                  id="engine"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Select engine</option>
                  <option value="v4">V4</option>
                  <option value="v6">V6</option>
                  <option value="v8">V8</option>
                  <option value="electric">Electric Motor</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="transmission"
                  className="block text-sm font-medium text-gray-700"
                >
                  Transmission *
                </label>
                <select
                  id="transmission"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>7-Speed Shiftable Automatic</option>
                  <option value="manual">6-Speed Manual</option>
                  <option value="auto">8-Speed Automatic</option>
                  <option value="cvt">
                    Continuously Variable Transmission (CVT)
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="fuelType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fuel type *
                </label>
                <select
                  id="fuelType"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Gasoline</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">Electric</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="cityMPG"
                  className="block text-sm font-medium text-gray-700"
                >
                  City MPG
                </label>
                <select
                  id="cityMPG"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Miles per gallon</option>
                  <option value="20">20 MPG</option>
                  <option value="25">25 MPG</option>
                  <option value="30">30 MPG</option>
                  <option value="35">35 MPG</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="highwayMPG"
                  className="block text-sm font-medium text-gray-700"
                >
                  Highway MPG
                </label>
                <select
                  id="highwayMPG"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Miles per gallon</option>
                  <option value="25">25 MPG</option>
                  <option value="30">30 MPG</option>
                  <option value="35">35 MPG</option>
                  <option value="40">40 MPG</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="exteriorColor"
                  className="block text-sm font-medium text-gray-700"
                >
                  Exterior color
                </label>
                <select
                  id="exteriorColor"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Select color</option>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="silver">Silver</option>
                  <option value="blue">Blue</option>
                  <option value="red">Red</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="interiorColor"
                  className="block text-sm font-medium text-gray-700"
                >
                  Interior color
                </label>
                <select
                  id="interiorColor"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Select color</option>
                  <option value="black">Black</option>
                  <option value="beige">Beige</option>
                  <option value="gray">Gray</option>
                  <option value="brown">Brown</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description *
              </label>
              <textarea
                id="description"
                placeholder="Here you can let your imagination run wild and describe the car in the best possible way!"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 focus:ring-blue-500 focus:border-blue-500 h-24"
                maxLength={2000}
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">
                Maximum 2000 characters
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Features
          </h2>
          <div className="space-y-4">
            {/* Exterior */}
            <div>
              <button
                onClick={() => toggleCategory("exterior")}
                className="w-full flex justify-between items-center text-lg font-medium text-gray-900"
              >
                <span>Exterior</span>
                <span className="text-sm text-gray-500">
                  {expandedCategories.exterior ? "-" : "+"}
                </span>
              </button>
              {expandedCategories.exterior && (
                <div className="mt-2 space-y-2 pl-4">
                  {/* Add exterior features here if needed */}
                </div>
              )}
            </div>

            {/* Interior */}
            <div>
              <button
                onClick={() => toggleCategory("interior")}
                className="w-full flex justify-between items-center text-lg font-medium text-gray-900"
              >
                <span>Interior</span>
                <span className="text-sm text-gray-500">
                  {expandedCategories.interior ? "-" : "+"}
                </span>
              </button>
              {expandedCategories.interior && (
                <div className="mt-2 space-y-2 pl-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.multiZoneAC}
                      onChange={() => handleFeatureChange("multiZoneAC")}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Multi-Zone A/C</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.adjustableSteeringWheel}
                      onChange={() =>
                        handleFeatureChange("adjustableSteeringWheel")
                      }
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Adjustable Steering Wheel</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.autoDimmingRearviewMirror}
                      onChange={() =>
                        handleFeatureChange("autoDimmingRearviewMirror")
                      }
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Auto-Dimming Rearview Mirror</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.climateControl}
                      onChange={() => handleFeatureChange("climateControl")}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Climate Control</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.driverAdjustableLumbar}
                      onChange={() =>
                        handleFeatureChange("driverAdjustableLumbar")
                      }
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Driver Adjustable Lumbar</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.heatedFrontSeats}
                      onChange={() => handleFeatureChange("heatedFrontSeats")}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Heated Front Seats</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.intermittentWipers}
                      onChange={() => handleFeatureChange("intermittentWipers")}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Intermittent Wipers</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.leatherSeats}
                      onChange={() => handleFeatureChange("leatherSeats")}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Leather Seats</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.passengerIlluminatedVisorMirror}
                      onChange={() =>
                        handleFeatureChange("passengerIlluminatedVisorMirror")
                      }
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Passenger Illuminated Visor Mirror</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.passengerAdjustableLumbar}
                      onChange={() =>
                        handleFeatureChange("passengerAdjustableLumbar")
                      }
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Passenger Adjustable Lumbar</span>
                  </label>
                </div>
              )}
            </div>

            {/* Safety */}
            <div>
              <button
                onClick={() => toggleCategory("safety")}
                className="w-full flex justify-between items-center text-lg font-medium text-gray-900"
              >
                <span>Safety</span>
                <span className="text-sm text-gray-500">
                  {expandedCategories.safety ? "-" : "+"}
                </span>
              </button>
              {expandedCategories.safety && (
                <div className="mt-2 space-y-2 pl-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.steeringWheelAudioControls}
                      onChange={() =>
                        handleFeatureChange("steeringWheelAudioControls")
                      }
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Steering Wheel Audio Controls</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.powerDoorLocks}
                      onChange={() => handleFeatureChange("powerDoorLocks")}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Power Door Locks</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.bankThroughRearSeat}
                      onChange={() =>
                        handleFeatureChange("bankThroughRearSeat")
                      }
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Bank-Through Rear Seat</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.passThroughRearSeat}
                      onChange={() =>
                        handleFeatureChange("passThroughRearSeat")
                      }
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Pass-Through Rear Seat</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={features.universalGarageDoorOpener}
                      onChange={() =>
                        handleFeatureChange("universalGarageDoorOpener")
                      }
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Universal Garage Door Opener</span>
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Price</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price *
            </label>
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded-md p-2">
                <option>$</option>
                <option>€</option>
                <option>£</option>
              </select>
              <input
                type="number"
                placeholder="41900"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <Image
                src="/images/switch.png"
                alt="switch"
                width={40}
                height={40}
              />
            </label>
            <span className="text-gray-700 text-sm font-semibold">
              Negotiated price
            </span>
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-2 text-gray-700 text-sm">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                defaultChecked
              />
              Payment in installments is possible
            </label>

            <label className="flex items-center gap-2 text-gray-700 text-sm">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              Exchange for a car is possible
            </label>

            <label className="flex items-center gap-2 text-gray-700 text-sm">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              Uncleared car
            </label>
          </div>
        </div>

        {/* Contacts */}
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold mb-6">Contacts</h2>

          <div className="flex gap-3 mb-6">
            <button
              type="button"
              onClick={() => setRole("private")}
              className={`flex items-center gap-2 px-4 py-2 border rounded-full ${
                role === "private"
                  ? "bg-gray-100 border-black"
                  : "border-gray-300"
              }`}
            >
              <User size={18} /> Private seller
            </button>

            <button
              type="button"
              onClick={() => setRole("dealer")}
              className={`flex items-center gap-2 px-4 py-2 border rounded-full ${
                role === "dealer"
                  ? "bg-gray-100 border-black"
                  : "border-gray-300"
              }`}
            >
              <Briefcase size={18} /> Dealer
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Last name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone number *
                </label>
                <input
                  type="tel"
                  placeholder="(__) __-____"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="coop" className="w-4 h-4" />
              <label htmlFor="coop" className="text-sm">
                Ready to cooperate with dealers
              </label>
            </div>
          </form>
        </div>
        {/* Submit Buttons */}
        <div className="w-full max-w-4xl flex justify-between items-center flex-wrap gap-4">
          <button
            type="button"
            className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50"
          >
            <Eye size={18} /> Detailed preview
          </button>

          <button
            type="submit"
            className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600"
            onClick={handleSubmit}
          >
            <Image
              src="/images/save.png" // Ensure this path is correct in your public directory
              alt="save image"
              height={20}
              width={20}
            />{" "}
            Save and publish
          </button>
        </div>
      </div>
    </div>
  );
}
