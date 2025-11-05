import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface LocationState {
  ticketType: 'fullDay' | 'halfDay' | 'season';
  category: 'adult' | 'child' | 'senior';
}

export default function SkiPassForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [formData, setFormData] = useState({
    photo: null as File | null,
    tariff: state?.category || 'adult',
    name: 'John',
    surname: 'Doe',
    birthdate: '1990-01-15',
    phone: '+7 (777) 123-4567',
    email: 'john.doe@example.com',
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, photo: e.target.files[0] });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/checkout');
  };

  const ticketType = state?.ticketType || 'fullDay';
  const category = state?.category || 'adult';

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ski-blue via-primary to-ski-ice py-12 sm:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white hover:text-blue-100 mb-6 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Tickets
            </button>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">
              Ski Pass Application
            </h1>
            <p className="text-lg text-blue-50">
              Fill in your details to complete your ski pass purchase
            </p>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Side - Form */}
            <div className="bg-white dark:bg-card rounded-3xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Personal Information
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Face Photo Upload */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Face Photo *
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                      {formData.photo ? (
                        <img
                          src={URL.createObjectURL(formData.photo)}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <svg className="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                        id="photo-upload"
                      />
                      <label
                        htmlFor="photo-upload"
                        className="cursor-pointer inline-block px-4 py-2 bg-ski-blue text-white rounded-lg hover:bg-ski-blue/90 transition-colors text-sm font-medium"
                      >
                        Upload Photo
                      </label>
                      <p className="text-xs text-muted-foreground mt-2">
                        JPG, PNG or GIF. Max 5MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tariff Selector */}
                <div>
                  <label htmlFor="tariff" className="block text-sm font-semibold text-foreground mb-2">
                    Tariff *
                  </label>
                  <select
                    id="tariff"
                    name="tariff"
                    value={formData.tariff}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ski-blue"
                  >
                    <option value="adult">Adult</option>
                    <option value="child">Child (6-12 years)</option>
                    <option value="senior">Senior (65+)</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ski-blue"
                    required
                  />
                </div>

                {/* Surname */}
                <div>
                  <label htmlFor="surname" className="block text-sm font-semibold text-foreground mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ski-blue"
                    required
                  />
                </div>

                {/* Birthdate */}
                <div>
                  <label htmlFor="birthdate" className="block text-sm font-semibold text-foreground mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ski-blue"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ski-blue"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ski-blue"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full min-h-[48px] font-bold text-base bg-ski-blue hover:bg-ski-blue/90"
                >
                  Proceed to Checkout
                </Button>
              </form>
            </div>

            {/* Right Side - Ski Pass Info */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white dark:bg-card rounded-3xl shadow-xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Ski Pass Details
                </h2>

                {/* Pass Type Badge */}
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 bg-ski-blue/10 rounded-xl">
                    <span className="text-ski-blue font-bold text-lg capitalize">
                      {t(`tickets.ticketTypes.${ticketType}.name`)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {t(`tickets.ticketTypes.${ticketType}.description`)}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Includes:</h3>
                  <ul className="space-y-3">
                    {(t(`tickets.ticketTypes.${ticketType}.features`, { returnObjects: true }) as string[]).map(
                      (feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
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
                </div>

                {/* Price Summary */}
                <div className="border-t border-border pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-semibold text-foreground capitalize">
                      {t(`tickets.categories.${category}`)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="text-2xl font-bold text-ski-blue">
                      {t(`tickets.pricing.${ticketType}.${category}`)} {t('tickets.currency')}
                    </span>
                  </div>

                  {/* Info Box */}
                  <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-4">
                    <div className="flex gap-3">
                      <svg className="w-5 h-5 text-ski-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Important</p>
                        <p className="text-xs text-muted-foreground">
                          Your ski pass will be ready for pickup at the main ticket office. Please bring a valid ID.
                        </p>
                      </div>
                    </div>
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
