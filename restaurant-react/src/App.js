import React from 'react';
import Navbar from './components/Navbar/index';
import Hero from './sections/Hero/index';
import About from './sections/About/index';
import Service from './sections/Service/index';
import Contact from './sections/Contact/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
