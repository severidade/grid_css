import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GridExamples from "../components/GridExamples/GridExamples";

import DefiningTheGrid from '../data/DefiningTheGrid';

export default function MakeGrid() {
  return (
    <>
      <Navbar />
      <h3>DEFININDO O GRID</h3>
      <GridExamples gridData={DefiningTheGrid} />
    </>
  );
}
