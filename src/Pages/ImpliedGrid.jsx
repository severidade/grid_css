import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GridExamples from "../components/GridExamples/GridExamples";

import ImpliedGridData from '../data/ImpliedGridData';

export default function ImpliedGrid() {
  return (
    <>
      <Navbar />
      <h3>GRID IMPLÍCITO</h3>
      <GridExamples gridData={ ImpliedGridData } />
    </>
  );
}
