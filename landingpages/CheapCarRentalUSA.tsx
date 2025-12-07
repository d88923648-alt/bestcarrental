import React from 'react';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { CTASection } from '../components/CTASection';
import { SocialProof } from '../components/SocialProof';
import { useCompanyInfo } from '../context/CompanyInfoContext';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const CheapCarRentalUSA: React.FC = () => {
  const { companyInfo } = useCompanyInfo();
  const { themeConfig } = useThemeConfig();

  const handleFormSubmit = (data: any) => {
    console.log('Cheap Car Rental Landing Page Form Data:', data);
    alert(`Thank you, ${data.name}! We're finding you the cheapest deals for your trip to ${data.pickupAirport} on ${data.travelDate}.`);
    // In a real application, this would send data to a CRM or lead management system
  };

  return (
    <div style={{ backgroundColor: themeConfig.bgColor, color: themeConfig.textColor, fontFamily: themeConfig.bodyFont }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 md:py-32 text-white text-center"
        style={{ backgroundImage: 'url(https://picsum.photos/1600/900?random=90)', fontFamily: themeConfig.headingFont }}
      >
        <div className="absolute inset-0 bg-darktext bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Unbeatable Deals on USA Car Rentals
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Travel more for less! Find the cheapest car rental options across all major U.S. cities and airports.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className="px-8 py-4 bg-[var(--color-accent)] text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: themeConfig.accentColor }}
            >
              📞 Call for Best Price
            </a>
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9+]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[var(--color-secondary)] text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: themeConfig.secondaryColor }}
            >
              💬 Chat for Deals
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition & Lead Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
              Affordable & Reliable Car Rentals
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-lighttext">
              <li><strong>Budget-Friendly Options:</strong> Compare prices from top providers.</li>
              <li><strong>No Hidden Fees:</strong> Transparent pricing, guaranteed.</li>
              <li><strong>Quality Vehicles:</strong> Affordable doesn't mean compromising on quality or safety.</li>
              <li><strong>Flexible Booking:</strong> Change plans? No problem, we've got you covered.</li>
              <li><strong>Nationwide Coverage:</strong> From coast to coast, find cheap rentals wherever you land.</li>
            </ul>
            <p className="mt-8 text-xl font-semibold" style={{ color: themeConfig.primaryColor }}>
              "Your wallet will thank you!"
            </p>
          </div>
          <div>
            <LeadCaptureForm
              formTitle="Find Your Cheap Car Rental in the USA!"
              formSubtitle="Get a free, no-obligation quote today."
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
            Arrive & Drive Away Affordable!
          </h2>
          <p className="text-lg text-lighttext max-w-4xl mx-auto mb-8">
            Don't let high rental costs deter your U.S. travel plans. We specialize in finding the best rates
            for airport pickups, ensuring you get a great car at a price that fits your budget.
          </p>
          <img src="https://picsum.photos/800/450?random=91" alt="USA Roadtrip" className="rounded-lg shadow-lg mx-auto" />
        </div>
      </section>

      {/* CTA Section (reusing component) */}
      <CTASection
        title="Ready for Your Budget-Friendly USA Trip?"
        subtitle="Contact our team today to unlock the best car rental deals!"
      />
    </div>
  );
};
