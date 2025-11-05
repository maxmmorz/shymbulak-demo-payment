import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Failed() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-destructive/20 rounded-full blur-2xl"></div>
            </div>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-destructive to-red-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-foreground">
            Payment Failed
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 px-4 max-w-xl mx-auto">
            We couldn't process your payment. Don't worry, no charges were made to your card.
          </p>

          {/* Error Details Card */}
          <div className="bg-white/80 dark:bg-card/50 backdrop-blur-sm rounded-2xl shadow-xl border border-border overflow-hidden mb-8 sm:mb-12 mx-auto max-w-lg">
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-destructive" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-bold text-base sm:text-lg text-foreground mb-3">
                    Common Payment Issues
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Insufficient funds in account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Incorrect card information entered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Card expired or has been blocked</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Bank declined the transaction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="bg-muted/50 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div className="text-left text-sm">
                    <p className="font-semibold text-foreground mb-1">Need immediate assistance?</p>
                    <p className="text-muted-foreground">Contact your bank or try a different payment method</p>
                  </div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground text-left">
                <p className="mb-1"><span className="font-semibold text-foreground">Error Code:</span> PMT-{Date.now().toString().slice(-6)}</p>
                <p><span className="font-semibold text-foreground">Time:</span> {new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => navigate('/checkout')}
              size="lg"
              className="w-full sm:w-auto min-h-[52px] px-8 sm:px-10 text-sm sm:text-base font-semibold mountain-shadow"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Try Again
            </Button>

            <Button
              onClick={() => navigate('/')}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[52px] px-8 sm:px-10 text-sm sm:text-base font-semibold border-2"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return to Home
            </Button>
          </div>

          {/* Support Section */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4 font-medium">
              Still having trouble? Our support team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="#" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Live Chat
              </a>
              <a href="#" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +7 (727) 123-45-67
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
