import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
} from './components';

import About from './About';
import styles from './style';
import TermsAndCondition from "./TermsAndCondition"

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>


  );
};

function Routejs() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/terms' element={<TermsAndCondition />} />
      </Routes>
    </Router>
  )
}

export default Routejs;
