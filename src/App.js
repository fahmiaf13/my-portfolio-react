import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage, EngineerPage } from "./components/pages";
import { AnimatePresence } from "framer-motion";
import React from "react";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<HomePage />} />
          <Route path="/engineer" element={<EngineerPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
