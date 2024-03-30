import "./App.css";
import ClientsSection from "./components/organisms/clients-section";
import FeaturesSection from "./components/organisms/features-section";
import Header from "./components/organisms/header";
import Hero from "./components/organisms/hero";

function App() {
  return (
    <>
      <div className="px-10 font-body">
        <Header />
        <Hero />
        <ClientsSection />
        <FeaturesSection />
      </div>
    </>
  );
}

export default App;
