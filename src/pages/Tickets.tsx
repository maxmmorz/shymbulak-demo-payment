import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export default function Tickets() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const ticketTypes = ['fullDay', 'halfDay', 'season'] as const;
  const categories = ['adult', 'child', 'senior'] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ski-blue via-primary to-ski-ice py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              {t('tickets.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto">
              {t('tickets.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Ticket Cards */}
      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {ticketTypes.map((ticketType) => (
              <div
                key={ticketType}
                className={`relative bg-white dark:bg-card rounded-3xl shadow-xl overflow-hidden ${
                  ticketType === 'fullDay' ? 'ring-4 ring-ski-blue md:scale-105' : ''
                }`}
              >
                {/* Popular Badge */}
                {ticketType === 'fullDay' && (
                  <div className="absolute top-0 right-0 bg-ski-blue text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
                    {t('tickets.popular')}
                  </div>
                )}
                {ticketType === 'season' && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
                    {t('tickets.bestValue')}
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* Ticket Type Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                      {t(`tickets.ticketTypes.${ticketType}.name`)}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t(`tickets.ticketTypes.${ticketType}.description`)}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="mb-6 space-y-2">
                    {(t(`tickets.ticketTypes.${ticketType}.features`, { returnObjects: true }) as string[]).map(
                      (feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-ski-blue flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      )
                    )}
                  </ul>

                  {/* Pricing */}
                  <div className="border-t border-border pt-6 space-y-4">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          {t(`tickets.categories.${category}`)}
                        </span>
                        <span className="text-xl font-bold text-foreground">
                          {t(`tickets.pricing.${ticketType}.${category}`)} {t('tickets.currency')}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Buy Button */}
                  <Button
                    onClick={() => navigate('/checkout')}
                    className={`w-full mt-6 min-h-[48px] font-bold text-base ${
                      ticketType === 'fullDay'
                        ? 'bg-ski-blue hover:bg-ski-blue/90'
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    {t('tickets.buyNow')}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-8 sm:mb-12 text-center">
              {t('tickets.additionalServices.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(['equipment', 'instructor', 'locker'] as const).map((service) => (
                <div
                  key={service}
                  className="bg-white dark:bg-card rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {t(`tickets.additionalServices.${service}.name`)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t(`tickets.additionalServices.${service}.description`)}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-2xl font-extrabold text-ski-blue">
                      {t(`tickets.additionalServices.${service}.price`)} {t('tickets.currency')}
                    </span>
                    <Button onClick={() => navigate('/checkout')} variant="outline" size="sm">
                      {t('tickets.buyNow')}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-blue-50 dark:bg-slate-800 rounded-2xl p-6 sm:p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-ski-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-ski-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                {t('tickets.importantInfo.title')}
              </h2>
            </div>
            <ul className="space-y-3">
              {(t('tickets.importantInfo.items', { returnObjects: true }) as string[]).map((item, idx) => (
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
