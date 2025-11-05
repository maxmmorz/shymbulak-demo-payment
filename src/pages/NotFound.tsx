import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center px-3 sm:px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ski-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ski-ice/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative bg-white/80 dark:bg-card/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 border border-border">
            {/* Mountain Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <svg className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-ski-mountain/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z"/>
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 404 Text */}
            <div className="mb-6 sm:mb-8">
              <div className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-extrabold leading-none mb-4">
                <span className="bg-gradient-to-r from-ski-blue via-primary to-ski-ice bg-clip-text text-transparent">
                  404
                </span>
              </div>
              <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-ski-blue to-ski-ice mx-auto rounded-full"></div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Lost on the Mountain?
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 px-4 max-w-xl mx-auto">
              Looks like you've ventured off the marked trails. The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Suggestions */}
            <div className="bg-muted/30 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10">
              <h3 className="font-bold text-base sm:text-lg text-foreground mb-4">Maybe you were looking for:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm sm:text-base">
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-card border border-border hover:border-primary transition-colors text-left"
                >
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="font-medium text-foreground">Home Page</span>
                </button>

                <button
                  onClick={() => navigate('/checkout')}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-card border border-border hover:border-primary transition-colors text-left"
                >
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-medium text-foreground">Buy Passes</span>
                </button>

                <button
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-card border border-border hover:border-primary transition-colors text-left"
                >
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium text-foreground">Go Back</span>
                </button>
              </div>
            </div>

            {/* Main Action Button */}
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="min-h-[56px] px-10 sm:px-12 text-base sm:text-lg font-semibold mountain-shadow"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Return to Safety
            </Button>

            {/* Error Code */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                Error Code: 404 | Page Not Found
              </p>
            </div>
          </div>

          {/* Help Text */}
          <p className="mt-8 text-sm text-muted-foreground">
            If you believe this is an error, please{' '}
            <a href="#" className="text-primary hover:text-primary/80 font-medium transition-colors">
              contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
