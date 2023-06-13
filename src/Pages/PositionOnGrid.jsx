import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GridExamples from "../components/GridExamples/GridExamples";

import GridPosition from '../data/GridPositionData';
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function PositionOnGrid() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h3>Posicionando elementos no grid</h3>
        <GridExamples gridData={GridPosition} />
      </div>
      <ScrollToTop />
    </>
  );
}
