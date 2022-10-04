import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Footer from './Footer';
import ResponsiveAppBar from './Responsive';

function App() {
  return (
    <>
      <div className='body'>
        <ResponsiveAppBar />
        <div className="container-fluid">
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/My-personal-Website" element={<Home />} />
              <Route exact="true" path="/service" element={<Services />} />
              <Route exact="true" path="/contact" element={<Contact />} />
              <Route exact="true" path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
