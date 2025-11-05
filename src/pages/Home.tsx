import NewsCarousel from '@/components/NewsCarousel';
import CategoryMenu from '@/components/CategoryMenu';
import NewsSection from '@/components/NewsSection';
import EntertainmentsSection from '@/components/EntertainmentsSection';
import HotelsSection from '@/components/HotelsSection';
import RestaurantsSection from '@/components/RestaurantsSection';
import MobileAppSection from '@/components/MobileAppSection';
import { FadeIn } from '@/components/animations';

export default function Home() {
  return (
    <>
      {/* News Carousel */}
      <NewsCarousel />

      {/* Category Menu */}
      <FadeIn delay={0.2} direction="up">
        <CategoryMenu />
      </FadeIn>

      {/* News Section */}
      <FadeIn delay={0.1} direction="up">
        <NewsSection />
      </FadeIn>

      {/* Entertainments Section */}
      <FadeIn delay={0.1} direction="up">
        <EntertainmentsSection />
      </FadeIn>

      {/* Hotels Section */}
      <FadeIn delay={0.1} direction="up">
        <HotelsSection />
      </FadeIn>

      {/* Restaurants Section */}
      <FadeIn delay={0.1} direction="up">
        <RestaurantsSection />
      </FadeIn>

      {/* Mobile App Section */}
      <FadeIn delay={0.1} direction="up">
        <MobileAppSection />
      </FadeIn>
    </>
  );
}
