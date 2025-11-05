import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NewsCarousel from '@/components/NewsCarousel';
import CategoryMenu from '@/components/CategoryMenu';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* News Carousel */}
      <NewsCarousel />

      {/* Category Menu */}
      <CategoryMenu />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-ski-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ski-ice/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20 lg:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Mountain Icon */}
            <div className="mb-6 sm:mb-8 flex justify-center">
              <div className="relative">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-ski-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z"/>
                </svg>
                <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-ski-blue via-primary to-ski-ice bg-clip-text text-transparent">
                {t('home.title')}
              </span>
              <br />
              <span className="text-foreground">{t('home.subtitle')}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 px-4 max-w-2xl mx-auto font-medium">
              {t('home.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
              <Button
                onClick={() => navigate('/checkout')}
                size="lg"
                className="w-full sm:w-auto min-h-[56px] px-8 sm:px-10 text-base sm:text-lg font-semibold mountain-shadow bg-primary hover:bg-primary/90"
              >
                {t('home.purchasePass')}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>

              <Button
                onClick={() => navigate('/checkout')}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-h-[56px] px-8 sm:px-10 text-base sm:text-lg font-semibold border-2 border-primary text-primary hover:bg-primary/5"
              >
                {t('home.viewDemo')}
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="bg-white/80 dark:bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-ski-blue/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-ski-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">{t('home.features.secure.title')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t('home.features.secure.description')}</p>
              </div>

              <div className="bg-white/80 dark:bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">{t('home.features.instant.title')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t('home.features.instant.description')}</p>
              </div>

              <div className="bg-white/80 dark:bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-border hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-ski-pine/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-ski-pine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">{t('home.features.support.title')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t('home.features.support.description')}</p>
              </div>
            </div>

            <div className="inline-block bg-muted/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {t('home.demoNotice')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
