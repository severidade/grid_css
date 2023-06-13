import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GridExamples from "../components/GridExamples/GridExamples";

import ImpliedGridData from '../data/ImpliedGridData';
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function ImpliedGrid() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h3>Grid implícito</h3>
        <GridExamples gridData={ ImpliedGridData } />
      </div>
      <ScrollToTop />
    </>
  );
}
