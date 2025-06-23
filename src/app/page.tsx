"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      const scrollPos = window.scrollY + 100;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => {
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h2 className="text-2xl font-bold text-red-600">Sure Deal</h2>
            <div className="space-x-8">
              <a
                href="#home"
                className={`font-semibold transition-colors ${
                  activeSection === "home"
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`font-semibold transition-colors ${
                  activeSection === "about"
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                About Us
              </a>
              <a
                href="#services"
                className={`font-semibold transition-colors ${
                  activeSection === "services"
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Services
              </a>
              <a
                href="#contact"
                className={`font-semibold transition-colors ${
                  activeSection === "contact"
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative w-full h-screen">
        <Image
          src="/images/background-image.jpg"
          alt="Car Dealership"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Welcome to Sure Deal
            </h1>
            <p className="font-bold text-2xl p-2 animate-pulse">
              <i>Your Trusted Transport Partner</i>
            </p>
            <p className="text-xl max-w-3xl mx-auto mb-6">
              Discover the perfect car for every journey — whether you want to
              buy, sell, or rent. At Sure Deal, we deliver reliable vehicles and
              seamless service you can count on.
            </p>
            <p className="font-bold text-2xl animate-bounce">
              Drive with confidence. Travel with peace of mind.
            </p>
            <button onClick={handleGetStarted}
            className="mt-6 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition transform hover:scale-105 animate-fade-in-delay">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-bold text-4xl text-center pb-8 text-red-600 animate-fade-in">
          About Us
        </h1>
        <p className="text-center  max-w-3xl mx-auto mb-12">
          Sure Deal is a reliable car sales and rental company based in Kigali,
          Rwanda. We provide top-quality cars for buying, selling, and hiring
          services. Whether you’re looking for a reliable rental for your trip,
          want to sell your car, or buy a new one — we’ve got you covered.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h2>
            <p className="text-gray-700">
              To become the leading and most trusted transport partner in Rwanda
              and beyond, delivering safe, convenient, and dependable vehicle
              services for every customer, every time.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-red-600">
              Our Mission
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                Offer a wide range of quality vehicles for sale and rental at
                competitive prices.
              </li>
              <li>
                Build lasting relationships through transparency, excellent
                service, and reliability.
              </li>
              <li>
                Make vehicle ownership and rental simple, affordable, and
                stress-free for all.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Trust: Honesty and integrity in every deal.",
              "Customer Satisfaction: Your happiness drives our business.",
              "Quality Service: Well-maintained, clean vehicles.",
              "Affordability: Fair rates without compromise.",
              "Innovation: Continuously improving our services.",
              "Safety: Top safety standards for peace of mind.",
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <p className="text-gray-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="services" className="py-20 bg-gray-100">
        <h1 className="font-bold text-4xl text-center pb-8 text-red-600 animate-fade-in">
          Our Services
        </h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {[
            {
              title: "Car Sales",
              description:
                "Explore a range of new and pre-owned cars for sale at great prices.",
            },
            {
              title: "Car Rentals",
              description:
                "Hire clean, well-maintained vehicles for short or long-term use.",
            },
            {
              title: "Car Buying Service",
              description:
                "Sell your car fast with our fair and transparent buying process.",
            },
            {
              title: "Event Car Hire",
              description:
                "Get stylish, reliable rides for weddings, business trips, and events.",
            },
            {
              title: "Chauffeur Services",
              description:
                "Professional driver services for pickups, tours, and meetings.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="py-20 bg-white">
        <h1 className="font-bold text-4xl text-center pb-8 text-red-600 animate-fade-in">
          Contact Us
        </h1>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg">
              Have a question, need a quote, or want to book a car? Reach out to
              us — we’re here to help!
            </p>
            <div>
              <h2 className="font-bold text-xl text-gray-800">Phone</h2>
              <p className="text-gray-600">+250 791 995 800</p>
            </div>
            <div>
              <h2 className="font-bold text-xl text-gray-800">Email</h2>
              <p className="text-gray-600">info@suredeal.rw</p>
            </div>
            <div>
              <h2 className="font-bold text-xl text-gray-800">Location</h2>
              <p className="text-gray-600">Kigali, Rwanda</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-red-600">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 2.6 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.173.277 2.692.524.566.265 1.038.61 1.503 1.075.465.465.81 1.003 1.075 1.503.248.519.462 1.326.524 2.692.058 1.266.069 1.646.069 4.85s-.012 3.584-.069 4.85c-.062 1.366-.277 2.173-.524 2.692-.265.566-.61 1.038-1.075 1.503-.465.465-1.003.81-1.503 1.075-.519.248-1.326.462-2.692.524-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.069c-1.366-.062-2.173-.277-2.692-.524-.566-.265-1.038-.61-1.503-1.075-.465-.465-.81-1.003-1.075-1.503-.248-.519-.462-1.326-.524-2.692-.058-1.266-.069-1.646-.069-4.85s.012-3.584.069-4.85c.062-1.366.277-2.173.524-2.692.265-.566.61-1.038 1.075-1.503.465-.465 1.003-.81 1.503-1.075.519-.248 1.326-.462 2.692-.524 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.67.014-4.947.072-1.325.058-2.217.245-3.012.514-.795.27-1.469.637-2.145 1.313-.676.676-1.043 1.35-1.313 2.145-.269.795-.456 1.687-.514 3.012-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.058 1.325.245 2.217.514 3.012.27.795.637 1.469 1.313 2.145.676.676 1.35 1.043 2.145 1.313.795.269 1.687.456 3.012.514 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.325-.058 2.217-.245 3.012-.514.795-.27 1.469-.637 2.145-1.313.676-.676 1.043-1.35 1.313-2.145.269-.795.456-1.687.514-3.012.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.058-1.325-.245-2.217-.514-3.012-.27-.795-.637-1.469-1.313-2.145-.676-.676-1.35-1.043-2.145-1.313-.795-.269-1.687-.456-3.012-.514-1.277-.058-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 110 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
          <form className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 transition"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Sure Deal. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-red-600">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 2.6 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.173.277 2.692.524.566.265 1.038.61 1.503 1.075.465.465.81 1.003 1.075 1.503.248.519.462 1.326.524 2.692.058 1.266.069 1.646.069 4.85s-.012 3.584-.069 4.85c-.062 1.366-.277 2.173-.524 2.692-.265.566-.61 1.038-1.075 1.503-.465.465-1.003.81-1.503 1.075-.519.248-1.326.462-2.692.524-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.069c-1.366-.062-2.173-.277-2.692-.524-.566-.265-1.038-.61-1.503-1.075-.465-.465-.81-1.003-1.075-1.503-.248-.519-.462-1.326-.524-2.692-.058-1.266-.069-1.646-.069-4.85s.012-3.584.069-4.85c.062-1.366.277-2.173.524-2.692.265-.566.61-1.038 1.075-1.503.465-.465 1.003-.81 1.503-1.075.519-.248 1.326-.462 2.692-.524 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.67.014-4.947.072-1.325.058-2.217.245-3.012.514-.795.27-1.469.637-2.145 1.313-.676.676-1.043 1.35-1.313 2.145-.269.795-.456 1.687-.514 3.012-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.058 1.325.245 2.217.514 3.012.27.795.637 1.469 1.313 2.145.676.676 1.35 1.043 2.145 1.313.795.269 1.687.456 3.012.514 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.325-.058 2.217-.245 3.012-.514.795-.27 1.469-.637 2.145-1.313.676-.676 1.043-1.35 1.313-2.145.269-.795.456-1.687.514-3.012.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.058-1.325-.245-2.217-.514-3.012-.27-.795-.637-1.469-1.313-2.145-.676-.676-1.35-1.043-2.145-1.313-.795-.269-1.687-.456-3.012-.514-1.277-.058-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 110 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
