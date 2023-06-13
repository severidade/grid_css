import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GridExamples from "../components/GridExamples/GridExamples";

import DefiningTheGrid from '../data/DefiningTheGrid';
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function MakeGrid() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h3>Definindo o grid</h3>
        <GridExamples gridData={DefiningTheGrid} />
      </div>
      <ScrollToTop />
    </>
  );
}
