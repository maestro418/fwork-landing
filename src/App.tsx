import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Service from './pages/service';
import HireDev from './pages/hire';
import E404 from './pages/e404';

function App() {
  return (
    //<Provider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service/:id' element={<Service />} />
        <Route path='/hire-dev/:category?/:slug?' element={<HireDev />} />
        <Route path='/*' element={<E404 />} />
      </Routes>
    </BrowserRouter>

    //</Provider>
  );
}

export default App;
