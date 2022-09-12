import React from "react";
import { Engineer } from "../organisms";
import About from "../organisms/about";

const EngineerPage = () => {
  return (
    <div className="overflow-y-hidden">
      <Engineer />
      <About />
    </div>
  );
};

export default EngineerPage;
