import {  Copy, Download, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { AiOutlineFileSearch } from "react-icons/ai";
import { PiHouseLine } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between text-[#9CA3AF] pb-3">
        <div className="text-sm font-semibold mb-2 flex items-center gap-1">
         <Copy className="h-5 w-5 "/>Over 1 million listings
        </div>
        <div className="text-sm font-semibold mb-2 flex items-center gap-1">
        < AiOutlineFileSearch  className="h-5 w-5"/>Personalized search
        </div>
        <div className="text-sm font-semibold mb-2 flex items-center gap-1">
         < PiHouseLine className="h-5 w-5"/> Online car appraisal
        </div>
        <div className="text-sm font-semibold mb-2 flex items-center gap-1">
        < FaRegLightbulb className="h-5 w-5"/> Non-stop innovation
        </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {/* Buying & Selling */}
          <div>
            <h3 className="text-sm font-semibold  text-white mb-2 flex items-center gap-2">
             Buying & Selling
            </h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-1">Finding a car</li>
              <li className="mb-1">Sell your car</li>
              <li className="mb-1">Car dealers</li>
              <li className="mb-1">Compare cars</li>
              <li className="mb-1">Online car appraisal</li>
            </ul>
          </div>

          {/* Personalized Search */}
          <div>
            <h3 className="text-sm text-white font-semibold mb-2 flex items-center gap-2">
              About
            </h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-1">About Finder</li>
              <li className="mb-1">Contact us</li>
              <li className="mb-1">FAQs & support</li>
              <li className="mb-1">Mobile app</li>
              <li className="mb-1">Blog & news</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-sm text-white font-semibold mb-2 flex items-center gap-2">
              Profile
            </h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-1">My account</li>
              <li className="mb-1">Wishlist</li>
              <li className="mb-1">My listings</li>
              <li className="mb-1">Add listings</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-sm text-white font-semibold mb-2 flex gap-2">Download our app</h3>
            <p className="text-sm text-gray-400 mb-4">
              Download Finder App and join the community of car enthusiasts.
            </p>
            <div className="flex space-x-2">
              <button className="bg-gray-700 text-white px-3 py-2 rounded-md flex items-center">
                <Image
                  src="/images/apple.png" 
                  alt="App Store"
                  width={20}
                  height={20}
                  className="mr-1"
                />
                App Store
              </button>
              <button className="bg-gray-700 text-white px-3 py-2 rounded-md flex items-center">
                <Image
                  src="/images/google-play.png" 
                  alt="Google Play"
                  width={20}
                  height={20}
                  className="mr-1"
                />
                Google Play
              </button>
            </div>
          </div>
        </div>
        <div className="text-center flex justify-between text-xs text-gray-500 border-t border-gray-800 pt-4 font-bold">
          © All rights reserved by Finder Team 2025.
          <div className="flex justify-center mt-2 space-x-4 text-white">
            <Instagram className="h-4 w-4" />
            <Facebook  className="h-4 w-4"/>
            <Twitter  className="h-4 w-4"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;