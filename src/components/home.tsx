import Navbar from "./layout/Navbar";
import BottomNavigation from "./layout/BottomNavigation";
import Footer from "./layout/Footer";
import HeroSection from "./home/HeroSection";
import ProductGrid from "./product/ProductGrid";

function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />
      <main className="pb-20 md:pb-0">
        {/* Add padding at bottom for mobile nav */}
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <ProductGrid />
        </div>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}

export default Home;
