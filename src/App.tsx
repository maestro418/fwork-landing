import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Service from './pages/service';
import HireDev from './pages/hire';
import E404 from './pages/e404';
import Loading from './pages/loading';

// const Home = React.lazy(() => import('./pages/home'))
// const Service = React.lazy(() => import('./pages/service'))
// const HireDev = React.lazy(() => import('./pages/hire'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
        <Route path='/service/:id' element={<Suspense fallback={<Loading />}><Service /></Suspense>} />
        <Route path='/hire-dev/:category?/:slug?' element={<Suspense fallback={<Loading />}><HireDev /></Suspense>} />
        <Route path='/*' element={<E404 />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/service/:id' element={<Service />} />
        <Route path='/hire-dev/:category?/:slug?' element={<HireDev />} />
        <Route path='/*' element={<E404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
