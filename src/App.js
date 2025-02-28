import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import Powerwashing from './Powerwashing';
import HouseWashing from './HouseWashing';
import WindowCleaning from './WindowCleaning';
import RoofCleaning from './RoofCleaning';
import BinCleaning from './BinCleaning';
import GutterCleaning from './GutterCleaning';
import CommercialPowerwashing from './CommercialPowerwashing';
import Footer from './Footer';

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
          <Route path="/services/Powerwashing" element={<Powerwashing />} />
          <Route path="/services/HouseWashing" element={<HouseWashing />} />
          <Route path="/services/WindowCleaning" element={<WindowCleaning />} />
          <Route path="/services/RoofCleaning" element={<RoofCleaning />} />
          <Route path="/services/BinCleaning" element={<BinCleaning />} />
          <Route path="/services/GutterCleaning" element={<GutterCleaning />} />
          <Route path="/services/CommercialPowerwashing" element={<CommercialPowerwashing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </Suspense>
    </Router>
  );
}

export default App;
