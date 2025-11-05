import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface NewsItem {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: string;
  categoryKey: string;
  date: string;
}

const newsItemsData: NewsItem[] = [
  {
    id: 1,
    titleKey: 'news.items.newSlopes.title',
    descriptionKey: 'news.items.newSlopes.description',
    image: '🏔️',
    categoryKey: 'news.categories.slopes',
    date: 'Nov 5, 2025',
  },
  {
    id: 2,
    titleKey: 'news.items.seasonPass.title',
    descriptionKey: 'news.items.seasonPass.description',
    image: '🎿',
    categoryKey: 'news.categories.promotions',
    date: 'Nov 4, 2025',
  },
  {
    id: 3,
    titleKey: 'news.items.freshPowder.title',
    descriptionKey: 'news.items.freshPowder.description',
    image: '❄️',
    categoryKey: 'news.categories.weather',
    date: 'Nov 5, 2025',
  },
  {
    id: 4,
    titleKey: 'news.items.nightSkiing.title',
    descriptionKey: 'news.items.nightSkiing.description',
    image: '🌙',
    categoryKey: 'news.categories.events',
    date: 'Nov 3, 2025',
  },
  {
    id: 5,
    titleKey: 'news.items.newRental.title',
    descriptionKey: 'news.items.newRental.description',
    image: '⛷️',
    categoryKey: 'news.categories.facilities',
    date: 'Nov 2, 2025',
  },
];

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useTranslation();

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItemsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItemsData.length) % newsItemsData.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItemsData.length);
  };

  const currentNews = newsItemsData[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-ski-blue via-primary to-ski-ice overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4">
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Content */}
          <div className="py-16 sm:py-20 md:py-24 lg:py-32">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 max-w-4xl mx-auto">
              {/* Icon/Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-xl">
                  <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]">{currentNews.image}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4 sm:mb-6">
                  <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm sm:text-base font-semibold text-white">
                    {t(currentNews.categoryKey)}
                  </span>
                  <span className="text-sm sm:text-base text-blue-100">{currentNews.date}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                  {t(currentNews.titleKey)}
                </h2>

                <p className="text-lg sm:text-xl md:text-2xl text-blue-50 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                  {t(currentNews.descriptionKey)}
                </p>

                <button className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-primary hover:bg-blue-50 rounded-xl font-bold text-base sm:text-lg transition-colors shadow-lg hover:shadow-xl">
                  {t('news.readMore')}
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 pb-8 sm:pb-10 md:pb-12">
          {newsItemsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentIndex
                  ? 'w-10 sm:w-12 h-2.5 sm:h-3 bg-white rounded-full'
                  : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/40 hover:bg-white/60 rounded-full'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 sm:h-16 md:h-20 lg:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0 C300,60 600,60 900,30 C1050,15 1125,0 1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-sky-50 dark:text-slate-900"
          />
        </svg>
      </div>
    </div>
  );
}
