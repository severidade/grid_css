import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import MakeGrid  from './Pages/MakeGrid';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/make_grid" element={<MakeGrid />} />
    </Routes>
  );
}

export default App;
