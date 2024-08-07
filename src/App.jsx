import React from "react";
import Header from "./components/header";
import Hero from "./view/Hero";
import About from "./view/About";
import Tokenomics from "./view/Tokenomics";
import Footer from "./components/Footer";
import Gallery from "./view/Gallery";

const App = () => {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Gallery />
      <Footer />
    </main>
  );
};

export default App;
