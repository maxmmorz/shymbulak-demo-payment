import NewsCarousel from '@/components/NewsCarousel';
import CategoryMenu from '@/components/CategoryMenu';
import NewsSection from '@/components/NewsSection';
import EntertainmentsSection from '@/components/EntertainmentsSection';
import HotelsSection from '@/components/HotelsSection';
import RestaurantsSection from '@/components/RestaurantsSection';
import MobileAppSection from '@/components/MobileAppSection';

export default function Home() {
  return (
    <>
      {/* News Carousel */}
      <NewsCarousel />

      {/* Category Menu */}
      <CategoryMenu />

      {/* News Section */}
      <NewsSection />

      {/* Entertainments Section */}
      <EntertainmentsSection />

      {/* Hotels Section */}
      <HotelsSection />

      {/* Restaurants Section */}
      <RestaurantsSection />

      {/* Mobile App Section */}
      <MobileAppSection />
    </>
  );
}
