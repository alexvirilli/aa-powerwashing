import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

const Home = lazy(() => import('./Home'));
const Services = lazy(() => import('./Services'));
const Contact = lazy(() => import('./Contact'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
