import HeroSearchForm from "@/components/HeroSearchForm";
import CarTypesSection from "@/components/CarTypesSection";
import TopOffersSection from "@/components/TopOffersSection";
import BrandsSection from "@/components/BrandsSection";
import NavigationBar from "@/components/NavigationBar";

export default function HomePage() {
  return (
    <div className="text-white">
      <NavigationBar />
      <div className="bg-[#267180] opacity-85 p-6">
        <div className="flex items-center justify-between mb-4 mx-auto py-15 mt-20 px-4 sm:px-6 lg:px-8  max-w-7xl">
          <HeroSearchForm />
          <h1 className="text-5xl font-bold mb-4 ml-10 mx-auto">
            Easy way to find the right car
          </h1>
        </div>
      </div>
      <CarTypesSection />
      <TopOffersSection />
      <BrandsSection />
    </div>
  );
}