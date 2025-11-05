import { useTranslation } from 'react-i18next';

interface NewsItem {
  key: string;
  image: string;
}

export default function NewsSection() {
  const { t } = useTranslation();

  const newsItems: NewsItem[] = [
    { key: 'slopes', image: '🏔️' },
    { key: 'equipment', image: '⛷️' },
    { key: 'safety', image: '🦺' },
    { key: 'competition', image: '🏆' },
    { key: 'maintenance', image: '🚡' },
    { key: 'weather', image: '☀️' },
  ];

  return (
    <div className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-8 sm:mb-12 text-center">
            {t('newsSection.title')}
          </h2>

          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {newsItems.map((item) => (
              <div
                key={item.key}
                className="group bg-white dark:bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-ski-blue/10 to-ski-ice/20 dark:from-ski-blue/20 dark:to-ski-ice/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-6xl sm:text-7xl md:text-8xl">{item.image}</span>
                </div>

                {/* Title */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground text-center">
                    {t(`newsSection.items.${item.key}`)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
