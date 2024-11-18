import React from "react";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
    </>
  );
};

export default HomePage;
