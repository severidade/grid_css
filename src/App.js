import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './Pages/Home';
import MakeGrid  from './Pages/MakeGrid';
import ImpliedGrid from './Pages/ImpliedGrid';
import PositionOnGrid from './Pages/PositionOnGrid';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make_grid" element={<MakeGrid />} />
        <Route path='/implied_grid' element={<ImpliedGrid />} />
        <Route path="/position" element={<PositionOnGrid />} />
      </Routes>
    </>
  );
}

export default App;
