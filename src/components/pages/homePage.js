import React from "react";
import { Designer, Hero } from "../organisms";
import About from "../organisms/about";

const HomePage = () => {
  return (
    <div className="overflow-y-hidden">
      <Hero />
      <About />
    </div>
  );
};

export default HomePage;
