import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/ski-pass-form" element={<SkiPassForm />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/school" element={<School />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/events" element={<Events />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/for-business" element={<ForBusiness />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
