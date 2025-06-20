import { Car, Copy, Download, Facebook, Instagram, Search, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {/* Buying & Selling */}
          <div>
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Copy className="h-5 w-5 "/> Over 1 million listings
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
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Search  className="h-5 w-5 "/> Personalized search
            </h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-1">About Finder</li>
              <li className="mb-1">Contact us</li>
              <li className="mb-1">FAQs & support</li>
              <li className="mb-1">Mobile app</li>
              <li className="mb-1">Blog & news</li>
            </ul>
          </div>

          {/* Online Car Appraisal */}
          <div>
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Car className="h-5 w-5"/> Online car appraisal
            </h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-1">My account</li>
              <li className="mb-1">Wishlist</li>
              <li className="mb-1">My listings</li>
              <li className="mb-1">Add listings</li>
            </ul>
          </div>

          {/* Download Our App */}
          <div>
            <h3 className="text-sm font-semibold mb-2 flex gap-2"> <Download  className="h-5 w-5"/>Download our app</h3>
            <p className="text-sm text-gray-400 mb-4">
              Download Finder App and join the community of car enthusiasts.
            </p>
            <div className="flex space-x-2">
              <button className="bg-gray-700 text-white px-3 py-2 rounded-md flex items-center">
                <Image
                  src="/images/apple.png" // Replace with actual App Store icon path
                  alt="App Store"
                  width={20}
                  height={20}
                  className="mr-1"
                />
                App Store
              </button>
              <button className="bg-gray-700 text-white px-3 py-2 rounded-md flex items-center">
                <Image
                  src="/images/google-play.png" // Replace with actual Google Play icon path
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
        <div className="text-center text-xs text-gray-500 border-t border-gray-800 pt-4 font-bold">
          © All rights reserved by Finder Team 2025.
          <div className="flex justify-center mt-2 space-x-2 text-white">
            <Instagram className="h-5 w-5" />
            <Facebook  className="h-5 w-5"/>
            <Twitter  className="h-5 w-5"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;