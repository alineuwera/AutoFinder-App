import React, { ReactElement } from "react";
import { FiCopy } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { PiHouseLine } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";

interface Feature {
  id: number;
  icon: ReactElement;
  name: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <FiCopy className="w-6 h-6 text-[#3D7A81]" />,
    name: "Over 1 million listings",
  },
  {
    id: 2,
    icon: <AiOutlineFileSearch className="w-6 h-6 text-[#3D7A81]" />,
    name: "Personalized search",
  },
  {
    id: 3,
    icon: <PiHouseLine className="w-6 h-6 text-[#3D7A81]" />,
    name: "Online car appraisal",
  },
  {
    id: 4,
    icon: <FaRegLightbulb className="w-6 h-6 text-[#3D7A81]" />,
    name: "Non-stop innovation",
  },
];

const SetFinder: React.FC = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-left text-black">
          What sets Finder apart?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-start gap-4 text-left bg-[#ECF2F2] rounded-lg p-4"
            >
              {feature.icon}
              <h3 className="text-sm font-bold pt-3 text-black">{feature.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetFinder;
