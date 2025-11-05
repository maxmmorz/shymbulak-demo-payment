import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from '@/components/animations';
import { motion } from 'framer-motion';

export default function Rent() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const equipmentTypes = ['beginnerSki', 'advancedSki', 'beginnerSnowboard', 'advancedSnowboard', 'clothing', 'accessories'] as const;
  const rentalPeriods = ['halfDay', 'fullDay', 'twoDays'] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ski-blue via-primary to-ski-ice py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn delay={0.1} direction="up">
              <div className="mb-6 flex justify-center">
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </motion.div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
                {t('rent.title')}
              </h1>
            </FadeIn>
            <FadeIn delay={0.3} direction="up">
              <p className="text-lg sm:text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto">
                {t('rent.subtitle')}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Equipment Cards */}
      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
            staggerDelay={0.15}
          >
            {equipmentTypes.map((equipmentType) => (
              <StaggerItem key={equipmentType}>
                <ScaleOnHover scale={1.02}>
                  <div
                    className={`relative bg-white dark:bg-card rounded-3xl shadow-xl overflow-hidden h-full ${
                      equipmentType === 'beginnerSki' ? 'ring-4 ring-ski-blue' : ''
                    }`}
                  >
                    {/* Popular Badge */}
                    {equipmentType === 'beginnerSki' && (
                      <div className="absolute top-0 right-0 bg-ski-blue text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
                        {t('rent.popular')}
                      </div>
                    )}

                    <div className="p-6 sm:p-8">
                      {/* Equipment Type Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                          {t(`rent.equipmentTypes.${equipmentType}.name`)}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {t(`rent.equipmentTypes.${equipmentType}.description`)}
                        </p>
                      </div>

                      {/* Includes */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-muted-foreground mb-3">{t('rent.includes')}:</h4>
                        <ul className="space-y-2">
                          {(t(`rent.equipmentTypes.${equipmentType}.includes`, { returnObjects: true }) as string[]).map(
                            (item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <svg
                                  className="w-5 h-5 text-ski-blue flex-shrink-0 mt-0.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm text-foreground">{item}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Pricing */}
                      <div className="border-t border-border pt-6 space-y-4">
                        {rentalPeriods.map((period) => (
                          <div key={period} className="flex items-center justify-between">
                            <span className="text-sm font-medium text-muted-foreground">
                              {t(`rent.rentalPeriods.${period}`)}
                            </span>
                            <span className="text-xl font-bold text-foreground">
                              {t(`rent.pricing.${equipmentType}.${period}`)} {t('rent.currency')}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Rent Button */}
                      <Button
                        onClick={() => navigate('/checkout')}
                        className={`w-full mt-6 min-h-[48px] font-bold text-base ${
                          equipmentType === 'beginnerSki'
                            ? 'bg-ski-blue hover:bg-ski-blue/90'
                            : 'bg-primary hover:bg-primary/90'
                        }`}
                      >
                        {t('rent.rentNow')}
                      </Button>
                    </div>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Important Information */}
          <FadeIn delay={0.2} direction="up">
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
                  {t('rent.importantInfo.title')}
                </h2>
              </div>
              <ul className="space-y-3">
                {(t('rent.importantInfo.items', { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-ski-blue rounded-full flex-shrink-0 mt-2"></span>
                    <span className="text-sm sm:text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
