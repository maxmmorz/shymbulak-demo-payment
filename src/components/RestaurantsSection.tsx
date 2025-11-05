import { useTranslation } from 'react-i18next';
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from '@/components/animations';

interface RestaurantItem {
  key: string;
  image: string;
}

export default function RestaurantsSection() {
  const { t } = useTranslation();

  const restaurantItems: RestaurantItem[] = [
    { key: 'fine', image: '🍽️' },
    { key: 'traditional', image: '🥘' },
    { key: 'cafe', image: '☕' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <FadeIn delay={0.1} direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-8 sm:mb-12 text-center">
              {t('restaurantsSection.title')}
            </h2>
          </FadeIn>

          {/* Restaurants Grid */}
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            staggerDelay={0.15}
          >
            {restaurantItems.map((item) => (
              <StaggerItem key={item.key}>
                <ScaleOnHover scale={1.03}>
                  <div className="group bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-ski-blue/10 to-ski-ice/20 dark:from-ski-blue/20 dark:to-ski-ice/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-6xl sm:text-7xl md:text-8xl">{item.image}</span>
                    </div>

                    {/* Title */}
                    <div className="p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground text-center">
                        {t(`restaurantsSection.items.${item.key}`)}
                      </h3>
                    </div>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
