import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActions from './components/layout/FloatingActions';
import Home from './pages/Home';

/**
 * App — shell with fixed Navbar, animated routed pages, Footer and sticky CTAs.
 * Single-page (Home); router is wired so more pages can be added later.
 */
export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingActions />
    </div>
  );
}
