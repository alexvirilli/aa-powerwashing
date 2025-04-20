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
import About from './About';
import Footer from './Footer';
import PrivacyPolicy from './PrivacyPolicy';


import MargateCity from './MargateCity';
import Ventnor from './Ventnor';
import OceanCity from './OceanCity'
import StoneHarbor from './StoneHarbor';
import LBI from './LBI';
import SomersPoint from './SomersPoint';
import CapeMay from './CapeMay';
import Strathmere from './Strathmere';
import OceanView from './OceanView';
import SeaIsleCity from './SeaIsleCity';
import CapeMayCourtHouse from './CapeMayCourtHouse';
import Avalon from './Avalon';
import Wildwood from './Wildwood';


import Marlton from './Marlton';
import MountLaurel from './MountLaurel';
import Moorestown from './Moorestown';
import Medford from './Medford';
import MarltonLakes from './MarltonLakes';
import MedfordLakes from './MedfordLakes';
import Delran from './Delran';
import Shamong from './Shamong';
import Tabernacle from './Tabernacle';
import Lumberton from './Lumberton';
import Cinnaminson from './Cinnaminson';



import CherryHill from './CherryHill';
import Haddonfield from './Haddonfield';
import HaddonHeights from './HaddonHeights';
import Voorhees from './Voorhees';
import HaddonTownship from './HaddonTownship';
import Collingswood from './Collingswood';


import Woolwich from './Woolwich';
import MullicaHill from './MullicaHill';
import WashingtonTownship from './WashingtonTownship';
import WestDeptford from './WestDeptford';
import Swedesboro from './Swedesboro';


const Home = lazy(() => import('./Home'));
const Services = lazy(() => import('./Services'));
const Contact = lazy(() => import('./Contact'));
const Gallery = lazy(() => import('./Gallery'));


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
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />

          
          <Route path="/MargateCity" element={<MargateCity />}></Route>
          <Route path="/Ventnor" element={<Ventnor />}></Route>
          <Route path="/OceanCity" element={<OceanCity />}></Route>
          <Route path="/StoneHarbor" element={<StoneHarbor />}></Route>
          <Route path="/LBI" element={<LBI />}></Route>
          <Route path="/SomersPoint" element={<SomersPoint />}></Route>
          <Route path="/CapeMay" element={<CapeMay />}></Route>
          <Route path="/Strathmere" element={<Strathmere />}></Route>
          <Route path="/OceanView" element={<OceanView />}></Route>
          <Route path="/SeaIsleCity" element={<SeaIsleCity />}></Route>
          <Route path="/CapeMayCourtHouse" element={<CapeMayCourtHouse />}></Route>
          <Route path="/Avalon" element={<Avalon />}></Route>
          <Route path="/Wildwood" element={<Wildwood />}></Route>

          

          <Route path="/Marlton" element={<Marlton />}></Route>
          <Route path="/MountLaurel" element={<MountLaurel />}></Route>
          <Route path="/Moorestown" element={<Moorestown />}></Route>
          <Route path="/Medford" element={<Medford />}></Route>
          <Route path="/MarltonLakes" element={<MarltonLakes />}></Route>
          <Route path="/MedfordLakes" element={<MedfordLakes />}></Route>
          <Route path="/Delran" element={<Delran />}></Route>
          <Route path="/Shamog" element={<Shamong />}></Route>
          <Route path="/Tabernacle" element={<Tabernacle />}></Route>
          <Route path="/Lumberton" element={<Lumberton />}></Route>
          <Route path="/Cinnaminson" element={<Cinnaminson />}></Route>

          <Route path="/CherryHill" element={<CherryHill />}></Route>
          <Route path="/Haddonfield" element={<Haddonfield />}></Route>
          <Route path="/HaddonHeights" element={<HaddonHeights />}></Route>
          <Route path="/Voorhees" element={<Voorhees />}></Route>
          <Route path="/HaddonTownship" element={<HaddonTownship />}></Route>
          <Route path="/Collingswood" element={<Collingswood />}></Route>

          <Route path="/Woolwich" element={<Woolwich />}></Route>
          <Route path="/MullicaHill" element={<MullicaHill />}></Route>
          <Route path="/WashingtonTownship" element={<WashingtonTownship />}></Route>
          <Route path="/WestDeptford" element={<WestDeptford />}></Route>
          <Route path="/Swedesboro" element={<Swedesboro />}></Route>

          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>


        </Routes>
        <Footer></Footer>
      </Suspense>
    </Router>
  );
}

export default App;
