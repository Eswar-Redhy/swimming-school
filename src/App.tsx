import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { SwimmingLevels } from './components/SwimmingLevels';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingBubbles } from './components/FloatingBubbles';

function App() {
  return (
    <AnimatePresence>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <FloatingBubbles />
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Hero />
          <Features />
          <Services />
          <SwimmingLevels />
          <Testimonials />
          <ContactForm />
          <Footer />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;