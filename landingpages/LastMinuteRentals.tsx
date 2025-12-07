import React from 'react';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { CTASection } from '../components/CTASection';
import { SocialProof } from '../components/SocialProof';
import { useCompanyInfo } from '../context/CompanyInfoContext';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const LastMinuteRentals: React.FC = () => {
  const { companyInfo } = useCompanyInfo();
  const { themeConfig } = useThemeConfig();

  const handleFormSubmit = (data: any) => {
    console.log('Last-Minute Rental Landing Page Form Data:', data);
    alert(`Thank you, ${data.name}! We're on it! We'll find you a last-minute car for ${data.pickupAirport} on ${data.travelDate}.`);
    // In a real application, this would send data to a CRM or lead management system
  };

  return (
    <div style={{ backgroundColor: themeConfig.bgColor, color: themeConfig.textColor, fontFamily: themeConfig.bodyFont }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 md:py-32 text-white text-center"
        style={{ backgroundImage: 'url(https://picsum.photos/1600/900?random=110)', fontFamily: themeConfig.headingFont }}
      >
        <div className="absolute inset-0 bg-darktext bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Urgent Trip? Last-Minute Car Rentals!
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Don't stress, we've got you covered. Quick and reliable car rentals, even at short notice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className="px-8 py-4 bg-[var(--color-accent)] text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: themeConfig.accentColor }}
            >
              📞 Call Now for Urgent Booking
            </a>
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9+]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[var(--color-secondary)] text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: themeConfig.secondaryColor }}
            >
              💬 Chat with an Agent
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition & Lead Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
              Your Go-To for Immediate Rental Needs
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-lighttext">
              <li><strong>Instant Availability Check:</strong> We find cars available right now.</li>
              <li><strong>Fast Booking Process:</strong> Get on the road quicker than ever.</li>
              <li><strong>All Major Airports:</strong> Pick up your car at LAX, JFK, MIA, and more.</li>
              <li><strong>Flexible Options:</strong> Even for urgent needs, we strive for the best fit.</li>
              <li><strong>24/7 Support:</strong> Our team is always ready to assist.</li>
            </ul>
            <p className="mt-8 text-xl font-semibold" style={{ color: themeConfig.primaryColor }}>
              "Life happens, we get you moving!"
            </p>
          </div>
          <div>
            <LeadCaptureForm
              formTitle="Need a Car NOW? Get a Quick Quote!"
              formSubtitle="Fill in your details, and we'll find available cars."
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
            Arriving Unexpectedly? We're Ready!
          </h2>
          <p className="text-lg text-lighttext max-w-4xl mx-auto mb-8">
            Whether your flight was delayed, plans changed, or you simply forgot to book,
            we understand last-minute needs. Our airport teams are trained to handle urgent requests efficiently,
            getting you into a reliable rental car with minimal fuss.
          </p>
          <img src="https://picsum.photos/800/450?random=111" alt="People rushing" className="rounded-lg shadow-lg mx-auto" />
        </div>
      </section>

      {/* CTA Section (reusing component) */}
      <CTASection
        title="Don't Wait! Get Your Last-Minute Car Rental Now!"
        subtitle="Contact our emergency booking line or chat with us for immediate assistance!"
      />
    </div>
  );
};
