import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface SavedCard {
  id: string;
  lastFour: string;
  expiry: string;
  brand: string;
  isDefault: boolean;
}

export default function Checkout() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string>('card1');
  const [showNewCardForm, setShowNewCardForm] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [qrType, setQrType] = useState<'kaspi' | 'halyk' | null>(null);
  const [saveCard, setSaveCard] = useState(true);

  const [newCardData, setNewCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: '',
  });

  const savedCards: SavedCard[] = [
    { id: 'card1', lastFour: '4242', expiry: '12/25', brand: 'VISA', isDefault: true },
    { id: 'card2', lastFour: '5555', expiry: '09/26', brand: 'MC', isDefault: false },
    { id: 'card3', lastFour: '3782', expiry: '03/27', brand: 'AMEX', isDefault: false },
  ];

  const handlePayment = async (success: boolean) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    navigate(success ? '/success' : '/failed');
  };

  const handleQRPayment = (type: 'kaspi' | 'halyk') => {
    setQrType(type);
    setShowQRModal(true);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Payment Methods - Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/90 dark:bg-card/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/20 dark:border-slate-700/50 transition-all duration-300 hover:shadow-3xl">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-ski-blue to-ski-ice rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-ski-blue/10 transition-transform duration-300 hover:scale-110">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z"/>
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground bg-gradient-to-r from-ski-blue to-primary bg-clip-text text-transparent">
                      {t('checkout.title')}
                    </h1>
                    <p className="text-sm text-muted-foreground mt-0.5">{t('checkout.subtitle')}</p>
                  </div>
                </div>

                {/* Digital Wallet Section */}
                <div className="mb-6">
                  <h2 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                    <svg className="w-5 h-5 text-ski-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                    {t('checkout.digitalWallet')}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Apple Pay */}
                    <button
                      onClick={() => handlePayment(true)}
                      className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white rounded-2xl p-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
                    >
                      <svg className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      <span className="font-bold text-base">{t('checkout.applePay')}</span>
                    </button>

                    {/* Google Pay */}
                    <button
                      onClick={() => handlePayment(true)}
                      className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-black dark:text-white border-2 border-gray-200 dark:border-slate-600 rounded-2xl p-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
                    >
                      <svg className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                      </svg>
                      <span className="font-bold text-base">{t('checkout.googlePay')}</span>
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-5 py-1.5 bg-white dark:bg-card text-muted-foreground font-bold uppercase tracking-wide rounded-full border-2 border-border">{t('checkout.or')}</span>
                  </div>
                </div>

                {/* Card Payment Section */}
                <div className="space-y-4 mb-6">
                  {!showNewCardForm ? (
                    <>
                      <div>
                        <h2 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                          <svg className="w-5 h-5 text-ski-blue" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                          </svg>
                          {t('checkout.cardPayment')}
                        </h2>
                        {/* Saved Cards Carousel */}
                        <div className="overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide">
                          <div className="flex gap-4 min-w-max">
                            {savedCards.map((card) => (
                              <button
                                key={card.id}
                                onClick={() => setSelectedCardId(card.id)}
                                className={`relative w-64 h-40 rounded-2xl p-5 transition-all duration-300 ${
                                  selectedCardId === card.id
                                    ? 'ring-4 ring-ski-blue shadow-2xl scale-105'
                                    : 'ring-2 ring-border hover:ring-ski-blue/50 hover:scale-102 shadow-lg'
                                }`}
                                style={{
                                  background: selectedCardId === card.id
                                    ? 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)'
                                    : 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                                }}
                              >
                                {card.isDefault && (
                                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded px-2 py-1">
                                    <span className="text-xs font-semibold text-white">{t('checkout.default')}</span>
                                  </div>
                                )}
                                <div className="h-full flex flex-col justify-between text-white">
                                  <div className="flex justify-between items-start">
                                    <div className="w-12 h-9 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center text-xs font-bold">
                                      {card.brand}
                                    </div>
                                    <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                    </svg>
                                  </div>
                                  <div>
                                    <div className="text-2xl font-bold tracking-wider mb-2">
                                      •••• •••• •••• {card.lastFour}
                                    </div>
                                    <div className="flex justify-between text-sm">
                                      <span className="opacity-80">{t('checkout.expires')}</span>
                                      <span className="font-semibold">{card.expiry}</span>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            ))}
                            {/* Add New Card Button */}
                            <button
                              onClick={() => setShowNewCardForm(true)}
                              className="w-64 h-40 rounded-2xl border-2 border-dashed border-border hover:border-ski-blue bg-gradient-to-br from-muted/40 to-muted/20 hover:from-ski-blue/5 hover:to-ski-blue/10 transition-all duration-300 flex flex-col items-center justify-center gap-3 group shadow-lg hover:shadow-xl hover:scale-102"
                            >
                              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ski-blue/10 to-ski-ice/10 group-hover:from-ski-blue/20 group-hover:to-ski-ice/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                <svg className="w-7 h-7 text-ski-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                </svg>
                              </div>
                              <span className="text-sm font-bold text-foreground group-hover:text-ski-blue transition-colors">{t('checkout.addNewCard')}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* New Card Form */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                            <svg className="w-5 h-5 text-ski-blue" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                            </svg>
                            {t('checkout.addNewCard')}
                          </h2>
                          <button
                            onClick={() => setShowNewCardForm(false)}
                            className="text-sm text-ski-blue hover:text-ski-blue/80 font-bold transition-colors flex items-center gap-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            {t('checkout.useSavedCard')}
                          </button>
                        </div>
                        <div className="space-y-4">
                          <div className="group">
                            <label className="block text-sm font-bold text-foreground mb-2">
                              {t('checkout.cardNumber')}
                            </label>
                            <input
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                              value={newCardData.cardNumber}
                              onChange={(e) =>
                                setNewCardData({
                                  ...newCardData,
                                  cardNumber: formatCardNumber(e.target.value),
                                })
                              }
                              className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-4 focus:ring-ski-blue/20 focus:border-ski-blue transition-all duration-200 shadow-sm hover:shadow-md"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="group">
                              <label className="block text-sm font-bold text-foreground mb-2">
                                {t('checkout.expiryDate')}
                              </label>
                              <input
                                type="text"
                                placeholder="MM/YY"
                                maxLength={5}
                                value={newCardData.expiry}
                                onChange={(e) =>
                                  setNewCardData({
                                    ...newCardData,
                                    expiry: formatExpiry(e.target.value),
                                  })
                                }
                                className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-4 focus:ring-ski-blue/20 focus:border-ski-blue transition-all duration-200 shadow-sm hover:shadow-md"
                              />
                            </div>
                            <div className="group">
                              <label className="block text-sm font-bold text-foreground mb-2">
                                {t('checkout.cvv')}
                              </label>
                              <input
                                type="text"
                                placeholder="123"
                                maxLength={4}
                                value={newCardData.cvv}
                                onChange={(e) =>
                                  setNewCardData({
                                    ...newCardData,
                                    cvv: e.target.value.replace(/[^0-9]/g, ''),
                                  })
                                }
                                className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-4 focus:ring-ski-blue/20 focus:border-ski-blue transition-all duration-200 shadow-sm hover:shadow-md"
                              />
                            </div>
                          </div>
                          <div className="group">
                            <label className="block text-sm font-bold text-foreground mb-2">
                              {t('checkout.cardHolder')}
                            </label>
                            <input
                              type="text"
                              placeholder="JOHN DOE"
                              value={newCardData.cardHolder}
                              onChange={(e) =>
                                setNewCardData({ ...newCardData, cardHolder: e.target.value.toUpperCase() })
                              }
                              className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-4 focus:ring-ski-blue/20 focus:border-ski-blue transition-all duration-200 shadow-sm hover:shadow-md"
                            />
                          </div>

                          {/* Save Card Toggle */}
                          <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                            <button
                              type="button"
                              onClick={() => setSaveCard(!saveCard)}
                              className={`relative w-9 h-5 rounded-full transition-colors duration-200 flex-shrink-0 ${
                                saveCard ? 'bg-ski-blue' : 'bg-border'
                              }`}
                            >
                              <span
                                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-200 ${
                                  saveCard ? 'translate-x-4' : 'translate-x-0'
                                }`}
                              />
                            </button>
                            <div className="flex-1">
                              <div className="text-xs font-semibold text-foreground">{t('checkout.saveCard')}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-5 py-1.5 bg-white dark:bg-card text-muted-foreground font-bold uppercase tracking-wide rounded-full border-2 border-border">{t('checkout.or')}</span>
                  </div>
                </div>

                {/* QR Payment Section */}
                <div>
                  <h2 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                    <svg className="w-5 h-5 text-ski-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clipRule="evenodd"/>
                      <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"/>
                    </svg>
                    {t('checkout.qrPayment')}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Kaspi QR */}
                    <button
                      onClick={() => handleQRPayment('kaspi')}
                      className="flex items-center justify-start gap-3 bg-gradient-to-br from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white rounded-xl p-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <div className="relative flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg ring-2 ring-white/20 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                          <span className="text-red-600 font-black text-xl">K</span>
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-base">{t('checkout.kaspiQR')}</div>
                          <div className="text-xs text-red-100 font-medium">{t('checkout.scanInKaspi')}</div>
                        </div>
                      </div>
                    </button>

                    {/* Halyk QR */}
                    <button
                      onClick={() => handleQRPayment('halyk')}
                      className="flex items-center justify-start gap-3 bg-gradient-to-br from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white rounded-xl p-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <div className="relative flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg ring-2 ring-white/20 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                          <span className="text-green-600 font-black text-xl">H</span>
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-base">{t('checkout.halykQR')}</div>
                          <div className="text-xs text-green-100 font-medium">{t('checkout.scanInHalyk')}</div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary - Right Column */}
            <div className="lg:col-span-1">
              <div className="bg-white/90 dark:bg-card/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/20 dark:border-slate-700/50 sticky top-24 transition-all duration-300 hover:shadow-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-ski-blue to-ski-ice rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-extrabold text-foreground bg-gradient-to-r from-ski-blue to-primary bg-clip-text text-transparent">{t('checkout.orderSummary')}</h2>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-sm sm:text-base p-2.5 rounded-xl bg-muted/30 transition-colors hover:bg-muted/50">
                    <span className="text-foreground font-medium">{t('checkout.fullDayPass')} (x1)</span>
                    <span className="font-bold text-foreground">15,000 {t('tickets.currency')}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base p-2.5 rounded-xl bg-muted/30 transition-colors hover:bg-muted/50">
                    <span className="text-foreground font-medium">{t('checkout.serviceFee')}</span>
                    <span className="font-bold text-foreground">1,500 {t('tickets.currency')}</span>
                  </div>
                  <div className="border-t-2 border-border pt-3 mt-2">
                    <div className="flex justify-between items-center p-3 rounded-2xl bg-gradient-to-br from-ski-blue/10 to-ski-ice/10">
                      <span className="text-base sm:text-lg font-bold text-foreground">{t('checkout.total')}</span>
                      <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-ski-blue to-primary bg-clip-text text-transparent">16,500 {t('tickets.currency')}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Button
                    onClick={() => handlePayment(true)}
                    disabled={loading}
                    className="w-full min-h-[48px] text-base font-bold bg-gradient-to-r from-ski-blue to-primary hover:from-ski-blue/90 hover:to-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    {loading ? (
                      <span className="flex items-center gap-3">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>{t('checkout.processing')}</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>{t('checkout.completePayment')}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    )}
                  </Button>

                  <Button
                    onClick={() => navigate('/')}
                    disabled={loading}
                    variant="outline"
                    className="w-full min-h-[44px] text-base font-semibold border-2 hover:bg-muted/50 transition-all duration-300"
                  >
                    {t('checkout.cancel')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && qrType && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-card rounded-3xl p-6 max-w-md w-full shadow-2xl border border-border animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
                  qrType === 'kaspi' ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-to-br from-green-500 to-green-600'
                }`}>
                  <span className="text-white font-black text-2xl">{qrType === 'kaspi' ? 'K' : 'H'}</span>
                </div>
                <h2 className="text-2xl font-extrabold text-foreground">
                  {qrType === 'kaspi' ? t('checkout.kaspiQR') : t('checkout.halykQR')}
                </h2>
              </div>
              <button
                onClick={() => {
                  setShowQRModal(false);
                  setQrType(null);
                }}
                className="w-10 h-10 rounded-xl hover:bg-muted flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* QR Code Placeholder */}
            <div className={`w-full aspect-square rounded-2xl mb-5 flex items-center justify-center border-4 ${
              qrType === 'kaspi' ? 'bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-900' : 'bg-green-50 dark:bg-green-950/20 border-green-100 dark:border-green-900'
            }`}>
              <div className="w-3/4 aspect-square bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-2xl ring-4 ring-border">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center">
                  <svg className="w-full h-full text-white p-4" viewBox="0 0 100 100">
                    <rect x="0" y="0" width="20" height="20" fill="currentColor"/>
                    <rect x="25" y="0" width="5" height="5" fill="currentColor"/>
                    <rect x="35" y="0" width="10" height="10" fill="currentColor"/>
                    <rect x="50" y="0" width="15" height="5" fill="currentColor"/>
                    <rect x="70" y="0" width="10" height="10" fill="currentColor"/>
                    <rect x="85" y="0" width="15" height="20" fill="currentColor"/>
                    <rect x="0" y="25" width="5" height="10" fill="currentColor"/>
                    <rect x="15" y="25" width="5" height="5" fill="currentColor"/>
                    <rect x="25" y="25" width="15" height="15" fill="currentColor"/>
                    <rect x="45" y="25" width="10" height="5" fill="currentColor"/>
                    <rect x="60" y="25" width="5" height="10" fill="currentColor"/>
                    <rect x="70" y="25" width="10" height="5" fill="currentColor"/>
                    <rect x="85" y="25" width="5" height="15" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-center space-y-3">
              <p className="text-lg font-bold text-foreground">
                {t('checkout.scanQRCode')} {qrType === 'kaspi' ? t('checkout.kaspiApp') : t('checkout.halykApp')} {t('checkout.app')}
              </p>
              <div className={`p-3 rounded-2xl ${
                qrType === 'kaspi' ? 'bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900' : 'bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900'
              }`}>
                <p className="text-sm text-muted-foreground font-medium">
                  {t('checkout.amount')}: <span className="font-extrabold text-foreground text-lg">16,500 {t('tickets.currency')}</span>
                </p>
              </div>
              <Button
                onClick={() => handlePayment(true)}
                className={`w-full min-h-[48px] font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  qrType === 'kaspi'
                    ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
                    : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{t('checkout.completedPayment')}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
