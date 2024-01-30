import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Service from './pages/service';

function App() {
  return (
    //<Provider>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='service/:id' element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>

    //</Provider>
  );
}

export default App;
