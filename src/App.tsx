import "./App.css";
import ClientsSection from "./components/organisms/clients-section";
import FeaturesSection from "./components/organisms/features-section";
import FirstCTASection from "./components/organisms/first-cta-section";
import Header from "./components/organisms/header";
import Hero from "./components/organisms/hero";
import MetricsSection from "./components/organisms/metrics-section";
import PricingSection from "./components/organisms/pricing-section";
import SatisfiedCustomersSection from "./components/organisms/satisfied-customers-section";

function App() {
  return (
    <>
      <div className="px-10 font-body">
        <Header />
        <Hero />
        <ClientsSection />
        <FeaturesSection />
        <MetricsSection />
        <FirstCTASection />
        <SatisfiedCustomersSection />
        <PricingSection />
      </div>
    </>
  );
}

export default App;
