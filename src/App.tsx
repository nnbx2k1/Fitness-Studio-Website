import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Classes from './components/Classes';
import Trainers from './components/Trainers';
import Booking from './components/Booking';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Classes />
      <Trainers />
      <Booking />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;