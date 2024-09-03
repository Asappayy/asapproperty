import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Merchs from './components/Merchs';
import Model from './components/Model';
import Features from './components/Features';
// import HowItWorks from './components/HowItWorks';
import MissionVision from './components/MissionVision';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';
import RealEstate from './components/RealEstate';
import RentEstate from './components/RentEstate';
import CallForInspection from './components/CallForInspection';
import Newsletter from './Newsletter';

const App = () => {
  return (
    <main className="bg-gradient-to-br from-[#0a5d49] to-[#083f52] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Merchs />
      {/* <Highlights /> */}
      {/* <Model />
      <Features /> */}
      <MissionVision />
      <RealEstate  /> 
      <RentEstate /> 
      <CallForInspection /> 
      <Newsletter /> 
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
