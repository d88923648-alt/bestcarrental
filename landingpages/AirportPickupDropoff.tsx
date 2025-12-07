import React from 'react';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { CTASection } from '../components/CTASection';
import { SocialProof } from '../components/SocialProof';
import { useCompanyInfo } from '../context/CompanyInfoContext';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const AirportPickupDropoff: React.FC = () => {
  const { companyInfo } = useCompanyInfo();
  const { themeConfig } = useThemeConfig();

  const handleFormSubmit = (data: any) => {
    console.log('Airport Pickup/Dropoff Landing Page Form Data:', data);
    alert(`Thank you, ${data.name}! We've noted your request for seamless airport service at ${data.pickupAirport} on ${data.travelDate}.`);
    // In a real application, this would send data to a CRM or lead management system
  };

  return (
    <div style={{ backgroundColor: themeConfig.bgColor, color: themeConfig.textColor, fontFamily: themeConfig.bodyFont }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 md:py-32 text-white text-center"
        style={{ backgroundImage: 'url(https://picsum.photos/1600/900?random=100)', fontFamily: themeConfig.headingFont }}
      >
        <div className="absolute inset-0 bg-darktext bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Effortless Airport Pickup & Drop-off
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Your rental car, where and when you need it. Seamless service at all major U.S. airports.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className="px-8 py-4 bg-[var(--color-accent)] text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: themeConfig.accentColor }}
            >
              📞 Call for Service
            </a>
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9+]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[var(--color-secondary)] text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: themeConfig.secondaryColor }}
            >
              💬 Chat for Details
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition & Lead Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
              Convenience from Terminal to Destination
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-lighttext">
              <li><strong>Guaranteed On-Time Delivery:</strong> Your car will be ready when you land.</li>
              <li><strong>Hassle-Free Returns:</strong> Drop off your car conveniently at the airport before departure.</li>
              <li><strong>Major Airport Coverage:</strong> Servicing LAX, JFK, MIA, MCO, ORD, and more.</li>
              <li><strong>Personalized Assistance:</strong> Our team guides you through the process.</li>
              <li><strong>Stress-Free Travel:</strong> Focus on your trip, not on logistics.</li>
            </ul>
            <p className="mt-8 text-xl font-semibold" style={{ color: themeConfig.primaryColor }}>
              "Your car, ready when you are."
            </p>
          </div>
          <div>
            <LeadCaptureForm
              formTitle="Book Your Airport Rental Service!"
              formSubtitle="Tell us your flight details for a smooth experience."
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
            Your Arrival, Our Priority
          </h2>
          <p className="text-lg text-lighttext max-w-4xl mx-auto mb-8">
            We know that after a long flight, the last thing you want is a complicated car rental process.
            Our dedicated airport pickup and drop-off service ensures a swift transition from airplane seat to driver's seat.
          </p>
          <img src="https://picsum.photos/800/450?random=101" alt="Airport terminal" className="rounded-lg shadow-lg mx-auto" />
        </div>
      </section>

      {/* CTA Section (reusing component) */}
      <CTASection
        title="Ready for a Seamless Airport Experience?"
        subtitle="Contact us now to arrange your perfect airport car rental!"
      />
    </div>
  );
};
