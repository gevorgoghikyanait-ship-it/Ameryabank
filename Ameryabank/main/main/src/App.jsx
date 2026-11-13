import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import PromoCards from "./components/PromoCards/promoCards";
import UsefulLinks from "./components/UsefulLinks/UsefulLinks";
import BannerSlider from "./components/bannerSlider/BannerSlider";
import FloatingWidgets from "./components/FloatingWidgets/floatingWidgets";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <PromoCards />
      <UsefulLinks />
      <BannerSlider />
      <FloatingWidgets />

    <ProductShowcase />

    </>
  );
}

export default App;