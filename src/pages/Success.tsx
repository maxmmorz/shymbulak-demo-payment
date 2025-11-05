import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export default function Success() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Animation */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-ski-pine/20 rounded-full blur-2xl"></div>
            </div>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-ski-pine to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-foreground">
            {t('success.title')}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 px-4 max-w-xl mx-auto">
            {t('success.description')}
          </p>

          {/* Ticket Card */}
          <div className="bg-white/80 dark:bg-card/50 backdrop-blur-sm rounded-2xl shadow-xl border border-border overflow-hidden mb-8 sm:mb-12 mx-auto max-w-lg">
            {/* Ticket Header */}
            <div className="bg-gradient-to-r from-ski-blue to-ski-ice p-6 sm:p-8 text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-1">{t('success.passTitle')}</h2>
                  <p className="text-blue-100 text-sm">{t('success.resort')}</p>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z"/>
                  </svg>
                </div>
              </div>

              {/* QR Code Placeholder */}
              <div className="bg-white rounded-xl p-4 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <svg className="w-24 h-24 sm:w-32 sm:h-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13-2h-2v2h2v-2zm0 4h-2v4h4v-2h-2v-2zm-4 0h-2v4h2v-4zm2 2h-2v2h2v-2z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Ticket Details */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex justify-between text-sm sm:text-base border-b border-border pb-3">
                <span className="text-muted-foreground">{t('success.transactionId')}</span>
                <span className="font-mono font-semibold text-foreground text-xs sm:text-sm">TXN-{Date.now().toString().slice(-8)}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base border-b border-border pb-3">
                <span className="text-muted-foreground">{t('success.amountPaid')}</span>
                <span className="font-bold text-primary text-lg sm:text-xl">$108.99</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base border-b border-border pb-3">
                <span className="text-muted-foreground">{t('success.date')}</span>
                <span className="font-semibold text-foreground">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-muted-foreground">{t('success.validUntil')}</span>
                <span className="font-semibold text-foreground">{new Date(Date.now() + 86400000).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="w-full sm:w-auto min-h-[52px] px-8 sm:px-10 text-sm sm:text-base font-semibold"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {t('success.returnHome')}
            </Button>

            <Button
              onClick={() => navigate('/checkout')}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[52px] px-8 sm:px-10 text-sm sm:text-base font-semibold border-2 border-primary text-primary hover:bg-primary/5"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              {t('success.buyAnother')}
            </Button>
          </div>

          {/* Help Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              {t('success.needHelp')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="#" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('success.supportEmail')}
              </a>
              <a href="#" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('success.supportPhone')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
