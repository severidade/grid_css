import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import MakeGrid  from './Pages/MakeGrid';
import ImpliedGrid from './Pages/ImpliedGrid';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/make_grid" element={<MakeGrid />} />
      <Route path='/implied_grid' element={<ImpliedGrid />} />
    </Routes>
  );
}

export default App;
