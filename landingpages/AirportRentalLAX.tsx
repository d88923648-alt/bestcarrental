import React from 'react';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { CTASection } from '../components/CTASection';
import { SocialProof } from '../components/SocialProof';
import { useCompanyInfo } from '../context/CompanyInfoContext';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const AirportRentalLAX: React.FC = () => {
  const { companyInfo } = useCompanyInfo();
  const { themeConfig } = useThemeConfig();

  const handleFormSubmit = (data: any) => {
    console.log('LAX Landing Page Form Data:', data);
    alert(`Thank you, ${data.name}! We've received your request for a car at LAX for ${data.travelDate}. Our team will contact you shortly.`);
    // In a real application, this would send data to a CRM or lead management system
  };

  return (
    <div style={{ backgroundColor: themeConfig.bgColor, color: themeConfig.textColor, fontFamily: themeConfig.bodyFont }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 md:py-32 text-white text-center"
        style={{ backgroundImage: 'url(https://picsum.photos/1600/900?random=80)', fontFamily: themeConfig.headingFont }}
      >
        <div className="absolute inset-0 bg-darktext bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Seamless Car Rental at LAX
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Your journey in Los Angeles starts here. Fast, reliable, and affordable airport pickup.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className="px-8 py-4 bg-[var(--color-accent)] text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: themeConfig.accentColor }}
            >
              📞 Call Now
            </a>
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9+]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[var(--color-secondary)] text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: themeConfig.secondaryColor }}
            >
              💬 Chat Now
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition & Lead Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
              Why Choose Us for Your LAX Car Rental?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-lighttext">
              <li><strong>Direct Airport Pickup:</strong> Get your car minutes after landing at LAX.</li>
              <li><strong>Wide Selection:</strong> Economy, SUV, luxury – find your perfect ride.</li>
              <li><strong>Competitive Rates:</strong> Transparent pricing with no hidden fees.</li>
              <li><strong>24/7 Support:</strong> Always there for you, from booking to drop-off.</li>
              <li><strong>International Traveler Friendly:</strong> Simplified process for global visitors.</li>
            </ul>
            <p className="mt-8 text-xl font-semibold" style={{ color: themeConfig.primaryColor }}>
              "Arrive in LA, drive away happy!"
            </p>
          </div>
          <div>
            <LeadCaptureForm
              formTitle="Get Your Free LAX Car Rental Quote!"
              formSubtitle="Tell us about your trip, and we'll find the best car for you."
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
            Smooth Arrivals at Los Angeles International
          </h2>
          <p className="text-lg text-lighttext max-w-4xl mx-auto mb-8">
            We understand that arriving at a busy airport like LAX can be stressful.
            Our service is designed to make your car rental experience as smooth and quick as possible.
            Just land, pick up your luggage, and your pre-booked vehicle will be ready!
          </p>
          <img src="https://picsum.photos/800/450?random=81" alt="LAX Airport" className="rounded-lg shadow-lg mx-auto" />
        </div>
      </section>

      {/* CTA Section (reusing component) */}
      <CTASection
        title="Ready to Drive in Los Angeles?"
        subtitle="Contact us now to secure your LAX airport car rental!"
      />
    </div>
  );
};
