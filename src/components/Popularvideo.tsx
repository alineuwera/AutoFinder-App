"use client";



import React from "react";
import { FiVideo } from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa";
import Image from "next/image";

const PopularVideo: React.FC = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-[1200px] px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Popular videos
          </h2>
          <a
            href="#"
            className="text-gray-900 hover:text-gray-900 text-sm flex items-center gap-1"
          >
            More videos{" "}
            <span>
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
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Card 1 */}
          <VideoCard
            image="/images/mercedes.jpg"
            alt="Electric Mercedes sedan"
            rating="100%"
            duration="36:12"
            title="Electric Mercedes sedan car reportedly debuting in 2025"
          />

          {/* Video Card 2 */}
          <VideoCard
            image="/images/budget.jpg"
            alt="Budget vs Premium tyres"
            rating="99%"
            duration="24:30"
            title="Budget vs Premium tyres: which are better value this year?"
          />

          {/* Video Card 3 */}
          <VideoCard
            image="/images/Tesla.jpg"
            alt="Tesla update"
            rating="100%"
            duration="17:30"
            title="Tesla fixes common recall with over-the-air update"
          />
        </div>
      </div>
    </section>
  );
};

interface VideoCardProps {
  image: string;
  alt: string;
  rating: string;
  duration: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ image, alt, rating, duration, title }) => (
  <div>
    <div className="bg-white rounded-lg transition-shadow duration-200 overflow-hidden">
      <div className="relative h-48 bg-gray-100">
      <Image
       src={image}
       alt={alt}
       fill
       className="object-cover"
       sizes="(max-width: 768px) 100vw, 33vw"
  />
        <div className="absolute top-2 left-2 bg-gray-800 bg-opacity-70 text-white rounded px-2 py-1 text-xs flex items-center justify-center">
          <FiVideo className="text-lg" />
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-50 px-4 py-2 flex items-center justify-between text-xs text-white">
    <div className="flex items-center gap-1">
    <FaThumbsUp className="text-white" />
    <span>{rating}</span>
  </div>
  <div className="font-medium">{duration}</div>
   </div>
    </div>
    <div className="mt-2 ">
      <h3 className="text-gray-900 font-medium text-base leading-tight">{title}</h3>
    </div>
  </div>
);

export default PopularVideo;









