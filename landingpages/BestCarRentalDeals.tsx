import React from 'react';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { CTASection } from '../components/CTASection';
import { SocialProof } from '../components/SocialProof';
import { useCompanyInfo } from '../context/CompanyInfoContext';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const BestCarRentalDeals: React.FC = () => {
  const { companyInfo } = useCompanyInfo();
  const { themeConfig } = useThemeConfig();

  const handleFormSubmit = (data: any) => {
    console.log('Best Car Rental Deals Landing Page Form Data:', data);
    alert(`Thank you, ${data.name}! We're working to find you the best deals for your trip to ${data.pickupAirport} on ${data.travelDate}.`);
    // In a real application, this would send data to a CRM or lead management system
  };

  return (
    <div style={{ backgroundColor: themeConfig.bgColor, color: themeConfig.textColor, fontFamily: themeConfig.bodyFont }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 md:py-32 text-white text-center"
        style={{ backgroundImage: 'url(https://picsum.photos/1600/900?random=120)', fontFamily: themeConfig.headingFont }}
      >
        <div className="absolute inset-0 bg-darktext bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Discover the Best Car Rental Deals in the USA
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Exclusive offers, unbeatable prices, and premium vehicles for your American adventure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className="px-8 py-4 bg-[var(--color-accent)] text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: themeConfig.accentColor }}
            >
              📞 Call for Today's Deals
            </a>
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9+]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[var(--color-secondary)] text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: themeConfig.secondaryColor }}
            >
              💬 Chat for Personalized Offers
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition & Lead Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
              Unlock Premier Savings & Quality
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-lighttext">
              <li><strong>Exclusive Discounts:</strong> Access deals not found elsewhere.</li>
              <li><strong>Value for Money:</strong> Best prices for top-quality, modern vehicles.</li>
              <li><strong>Flexible Pickups:</strong> Conveniently available at all major U.S. airports.</li>
              <li><strong>Transparent Pricing:</strong> No surprises, just great deals.</li>
              <li><strong>Expert Guidance:</strong> Our team helps you maximize savings.</li>
            </ul>
            <p className="mt-8 text-xl font-semibold" style={{ color: themeConfig.primaryColor }}>
              "Your adventure, at the best possible price!"
            </p>
          </div>
          <div>
            <LeadCaptureForm
              formTitle="Get the Best Car Rental Deals in the USA!"
              formSubtitle="Enter your details for customized offers and savings."
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section (reusing component) */}
      <SocialProof />

      {/* Airport Arrival Focused Messaging */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
            Arrive Smart, Drive Affordable
          </h2>
          <p className="text-lg text-lighttext max-w-4xl mx-auto mb-8">
            Landing at a U.S. airport doesn't have to mean expensive car rentals.
            We are dedicated to providing the best value, combining competitive rates with top-notch service
            for all international travelers.
          </p>
          <img src="https://picsum.photos/800/450?random=121" alt="Happy traveler with car" className="rounded-lg shadow-lg mx-auto" />
        </div>
      </section>

      {/* CTA Section (reusing component) */}
      <CTASection
        title="Ready to Grab the Best Deal?"
        subtitle="Contact our team today to find incredible savings on your next car rental!"
      />
    </div>
  );
};
