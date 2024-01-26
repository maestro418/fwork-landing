import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Provider from './context';
import Blog from './pages/blog';
import DevService from './pages/dev-service';
import HireDev from './pages/hire-dev';
import Loading from './pages/loading';
import InterviewTip from './pages/interview-tip';
import CaseStudy from './pages/case-study';
import DevProfile from './pages/developer';
import Home from './pages/home';

const Login = React.lazy(() => import('./pages/auth/login'))
const Register = React.lazy(() => import('./pages/auth/register'))
const Faq = React.lazy(() => import('./pages/faq'))
const Scholarship = React.lazy(() => import('./pages/scholarship'))
const About = React.lazy(() => import('./pages/about'))
const VettedDev = React.lazy(() => import('./pages/vetted-dev'))
const WorkProcess = React.lazy(() => import('./pages/work-process'))
const Privacy = React.lazy(() => import('./pages/privacy'))
const Terms = React.lazy(() => import('./pages/terms'))

const routers = Object.entries({
  'login': <Suspense fallback={<Loading />}><Login /></Suspense>,
  'register': <Suspense fallback={<Loading />}><Register /></Suspense>,
  'faq': <Suspense fallback={<Loading />}><Faq /></Suspense>,
  'scholarship': <Suspense fallback={<Loading />}><Scholarship /></Suspense>,
  'about': <Suspense fallback={<Loading />}><About /></Suspense>,
  'vetted': < Suspense fallback={< Loading />}> <VettedDev /></Suspense >,
  'workProcess': < Suspense fallback={< Loading />}> <WorkProcess /></Suspense >,
  'privacy': < Suspense fallback={< Loading />}> <Privacy /></Suspense >,
  'terms': < Suspense fallback={< Loading />}> <Terms /></Suspense >,
})

function App() {
  return (
    //<Provider>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='hire/:slug?' element={<HireDev />} />
          <Route path='service/:slug?' element={<DevService />} />
          <Route path='developer/:slug?' element={<DevProfile />} />
          <Route path='itv-tip/:slug?' element={< InterviewTip />} />
          {routers.map((i, k) =>
            <Route key={k} path={i[0]} element={i[1]} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>

    //</Provider>
  );
}

export default App;
