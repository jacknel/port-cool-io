import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';



const App = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <div>
        <h2>What you are seeing is the skeleton for my site, currently building it out so check back later and see if anything has been added!</h2>
      </div>
      <Footer />
    </Router>
  );
};


export default App;
