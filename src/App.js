import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import PromoBanner from "./components/PromoBanner";
import SEOSection from "./components/SEOSection";

function App() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Categories />
      <FeaturedProducts />
      <SEOSection />
      <PromoBanner />
      <Footer />
    </div>
  );
}

export default App;
