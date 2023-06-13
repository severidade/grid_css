import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import GridExamples from "../components/GridExamples/GridExamples";

import DefiningTheGrid from '../data/DefiningTheGrid';

export default function MakeGrid() {
  const [buttonToTop, setButtonToTop] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 0.1) {
        setButtonToTop("show");
      } else {
        setButtonToTop("");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h3>Definindo o grid</h3>
        <GridExamples gridData={DefiningTheGrid} />
      </div>
      <button
        className={`toTop ${buttonToTop}`}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Topo
      </button>
    </>
  );
}
