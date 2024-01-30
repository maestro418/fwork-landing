import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Service from './pages/service';
import HireDev from './pages/hire';

function App() {
  return (
    //<Provider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service/:id' element={<Service />} />
        <Route path='/hire-dev/:category?/:slug?' element={<HireDev />} />
      </Routes>
    </BrowserRouter>

    //</Provider>
  );
}

export default App;
