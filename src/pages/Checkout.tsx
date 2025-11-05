import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Checkout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = async (success: boolean) => {
    setLoading(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    navigate(success ? '/success' : '/failed');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Order Details - Left Column */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white/80 dark:bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-ski-blue/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-ski-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z"/>
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                      Complete Purchase
                    </h1>
                    <p className="text-sm text-muted-foreground">Secure ski pass checkout</p>
                  </div>
                </div>

                {/* Ski Pass Details */}
                <div className="bg-gradient-to-r from-ski-blue to-ski-ice rounded-xl p-6 text-white mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Full Day Ski Pass</h3>
                      <p className="text-blue-100 text-sm">Access to all slopes • Valid for 1 day</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <p className="text-xs font-semibold">PREMIUM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>08:00 - 17:00</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Shymbulak Resort</span>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                    Payment Method
                  </h2>
                  <div className="border-2 border-primary/20 bg-primary/5 rounded-xl p-4 sm:p-5">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-12 h-9 sm:w-14 sm:h-10 bg-gradient-to-br from-ski-blue to-primary rounded-lg flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0">
                        VISA
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-sm sm:text-base text-foreground">
                          •••• •••• •••• 4242
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          Expires 12/25
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-medium text-ski-pine bg-ski-pine/10 px-2 py-1 rounded">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary - Right Column */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 dark:bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-border sticky top-24 sm:top-28">
                <h2 className="text-lg font-bold text-foreground mb-6">Order Summary</h2>

                <div className="space-y-3 sm:space-y-4 mb-6">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Full Day Pass (x1)</span>
                    <span className="font-semibold text-foreground">$99.99</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Service Fee</span>
                    <span className="font-semibold text-foreground">$9.00</span>
                  </div>
                  <div className="border-t-2 border-border pt-3 sm:pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-base sm:text-lg font-bold text-foreground">Total</span>
                      <span className="text-2xl sm:text-3xl font-bold text-primary">$108.99</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <Button
                    onClick={() => handlePayment(true)}
                    disabled={loading}
                    className="w-full min-h-[52px] text-sm sm:text-base font-semibold mountain-shadow"
                    size="lg"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing Payment...
                      </span>
                    ) : (
                      'Complete Payment'
                    )}
                  </Button>

                  <Button
                    onClick={() => handlePayment(false)}
                    disabled={loading}
                    variant="outline"
                    className="w-full min-h-[48px] text-sm sm:text-base border-2 border-destructive/50 text-destructive hover:bg-destructive/5"
                    size="lg"
                  >
                    {loading ? 'Processing...' : 'Simulate Failed Payment'}
                  </Button>

                  <Button
                    onClick={() => navigate('/')}
                    disabled={loading}
                    variant="ghost"
                    className="w-full min-h-[44px] text-sm sm:text-base"
                  >
                    Cancel
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Secured by 256-bit SSL encryption. Your payment information is safe.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
