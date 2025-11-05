import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export default function Hotels() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const accommodations = ['deluxe', 'suite', 'standard', 'family', 'chalet', 'apartment'] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ski-blue via-primary to-ski-ice py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              {t('hotels.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto">
              {t('hotels.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Accommodation Cards */}
      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {accommodations.map((accommodation, idx) => (
              <div
                key={accommodation}
                className={`relative bg-white dark:bg-card rounded-3xl shadow-xl overflow-hidden ${
                  idx === 0 ? 'ring-4 ring-ski-blue' : ''
                }`}
              >
                {idx === 0 && (
                  <div className="absolute top-0 right-0 bg-ski-blue text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
                    {t('hotels.luxury')}
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3 capitalize">
                      {t('hotels.roomTitle', { accommodation })}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t('hotels.roomDescription')}
                    </p>
                  </div>

                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-ski-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-foreground">{t('hotels.mountainView')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-ski-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-foreground">{t('hotels.amenities')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-ski-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-foreground">{t('hotels.spaAccess')}</span>
                    </li>
                  </ul>

                  <div className="border-t border-border pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-muted-foreground">{t('hotels.perNight')}</span>
                      <span className="text-xl font-bold text-foreground">{25000 + idx * 10000} {t('hotels.currency')}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => navigate('/checkout')}
                    className={`w-full mt-6 min-h-[48px] font-bold text-base ${
                      idx === 0 ? 'bg-ski-blue hover:bg-ski-blue/90' : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    {t('hotels.bookRoom')}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Important Information */}
          <div className="bg-blue-50 dark:bg-slate-800 rounded-2xl p-6 sm:p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-ski-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-ski-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                {t('hotels.importantInfo.title')}
              </h2>
            </div>
            <ul className="space-y-3">
              {(t('hotels.importantInfo.items', { returnObjects: true }) as string[]).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-ski-blue rounded-full flex-shrink-0 mt-2"></span>
                  <span className="text-sm sm:text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
