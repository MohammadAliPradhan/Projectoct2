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
import MyForm from './MyForm';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
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
        <Route element={<Navbar />}>
          <Route index element={<App />} />
          <Route path='aboutus' element={<MyForm />} />
          <Route path='terms' element={<TermsAndCondition />} />
        </Route>
      </Routes>
    </Router >
  )
}

export default Routejs;
