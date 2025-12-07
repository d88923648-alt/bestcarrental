import React from 'react';
import { Link } from 'react-router-dom';
import { POPULAR_DESTINATIONS, OUR_SERVICES } from '../constants';
import { CTASection } from '../components/CTASection';
import { SocialProof } from '../components/SocialProof';
import { useCompanyInfo } from '../context/CompanyInfoContext';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const Home: React.FC = () => {
  const { companyInfo } = useCompanyInfo();
  const { themeConfig } = useThemeConfig();

  return (
    <div style={{ backgroundColor: themeConfig.bgColor, color: themeConfig.textColor, fontFamily: themeConfig.bodyFont }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-white"
        style={{ backgroundImage: 'url(https://picsum.photos/1600/900?random=10)', fontFamily: themeConfig.headingFont }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            {companyInfo.tagline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Your trusted partner for seamless car rentals at all major U.S. airports.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/destinations"
              className="px-8 py-4 bg-[var(--color-primary)] text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Explore Destinations
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-[var(--color-primary)] text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              style={{ color: themeConfig.primaryColor }}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* USA Car Rental Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-4" style={{ color: themeConfig.primaryColor }}>
            Why Rent With Us?
          </h2>
          <p className="text-lg text-lighttext mb-12 max-w-3xl mx-auto">
            Experience unparalleled convenience and reliability with Enterprise Car Rental Services.
            We make your U.S. travel effortless from the moment you land.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <span className="text-5xl block mb-4" style={{ color: themeConfig.accentColor }}>✈️</span>
              <h3 className="text-xl font-semibold mb-2" style={{ color: themeConfig.primaryColor }}>Airport Pickups</h3>
              <p className="text-lighttext">Your car waiting for you directly at the airport terminal.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <span className="text-5xl block mb-4" style={{ color: themeConfig.accentColor }}>💰</span>
              <h3 className="text-xl font-semibold mb-2" style={{ color: themeConfig.primaryColor }}>Affordable Rates</h3>
              <p className="text-lighttext">Competitive pricing with no hidden fees for international travelers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <span className="text-5xl block mb-4" style={{ color: themeConfig.accentColor }}>✅</span>
              <h3 className="text-xl font-semibold mb-2" style={{ color: themeConfig.primaryColor }}>Reliable Fleet</h3>
              <p className="text-lighttext">Well-maintained, modern vehicles for a safe and comfortable journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Pickup Info / Featured Destinations */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center mb-12" style={{ color: themeConfig.primaryColor }}>
            Your Gateway to USA Travel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {POPULAR_DESTINATIONS.slice(0, 4).map((destination) => (
              <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <img src={destination.imageUrl} alt={destination.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: themeConfig.primaryColor }}>
                    {destination.name} ({destination.airportCode})
                  </h3>
                  <p className="text-lighttext text-sm mb-4">{destination.description}</p>
                  <Link
                    to="/destinations"
                    className="text-[var(--color-primary)] font-medium hover:underline"
                    style={{ color: themeConfig.primaryColor }}
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-4" style={{ color: themeConfig.primaryColor }}>
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-lighttext mb-12 max-w-3xl mx-auto">
            Beyond just rentals, we offer a suite of services designed to enhance your travel experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OUR_SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-left">
                <span className="text-5xl block mb-4" style={{ color: themeConfig.accentColor }}>{service.icon}</span>
                <h3 className="text-xl font-semibold mb-2" style={{ color: themeConfig.primaryColor }}>{service.title}</h3>
                <p className="text-lighttext">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/services"
              className="px-8 py-4 bg-[var(--color-secondary)] text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: themeConfig.secondaryColor }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials and Trust */}
      <SocialProof />

      {/* Call to Action Section */}
      <CTASection
        title="Ready to Book Your Car?"
        subtitle="Contact our expert team today for personalized assistance and the best rates!"
      />
    </div>
  );
};
