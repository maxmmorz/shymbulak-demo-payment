import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageTransition } from '@/components/animations';
import Home from '@/pages/Home';
import Tickets from '@/pages/Tickets';
import SkiPassForm from '@/pages/SkiPassForm';
import Rent from '@/pages/Rent';
import School from '@/pages/School';
import Entertainment from '@/pages/Entertainment';
import Hotels from '@/pages/Hotels';
import Restaurants from '@/pages/Restaurants';
import Events from '@/pages/Events';
import Kids from '@/pages/Kids';
import ForBusiness from '@/pages/ForBusiness';
import Checkout from '@/pages/Checkout';
import Success from '@/pages/Success';
import Failed from '@/pages/Failed';
import NotFound from '@/pages/NotFound';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/tickets" element={<PageTransition><Tickets /></PageTransition>} />
          <Route path="/ski-pass-form" element={<PageTransition><SkiPassForm /></PageTransition>} />
          <Route path="/rent" element={<PageTransition><Rent /></PageTransition>} />
          <Route path="/school" element={<PageTransition><School /></PageTransition>} />
          <Route path="/entertainment" element={<PageTransition><Entertainment /></PageTransition>} />
          <Route path="/hotels" element={<PageTransition><Hotels /></PageTransition>} />
          <Route path="/restaurants" element={<PageTransition><Restaurants /></PageTransition>} />
          <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
          <Route path="/kids" element={<PageTransition><Kids /></PageTransition>} />
          <Route path="/for-business" element={<PageTransition><ForBusiness /></PageTransition>} />
          <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
          <Route path="/success" element={<PageTransition><Success /></PageTransition>} />
          <Route path="/failed" element={<PageTransition><Failed /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
