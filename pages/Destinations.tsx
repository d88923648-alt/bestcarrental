import React from 'react';
import { POPULAR_DESTINATIONS } from '../constants';
import { CTASection } from '../components/CTASection';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const Destinations: React.FC = () => {
  const { themeConfig } = useThemeConfig();

  return (
    <div style={{ backgroundColor: themeConfig.bgColor, color: themeConfig.textColor, fontFamily: themeConfig.bodyFont }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 text-white text-center"
        style={{ backgroundImage: 'url(https://picsum.photos/1600/600?random=50)', fontFamily: themeConfig.headingFont }}
      >
        <div className="absolute inset-0 bg-darktext bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Our Top USA Destinations</h1>
          <p className="text-xl md:text-2xl drop-shadow-md">Rent a car at major U.S. airports and explore America with confidence.</p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center mb-12" style={{ color: themeConfig.primaryColor }}>
            Pick Up Your Perfect Ride
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {POPULAR_DESTINATIONS.map((destination) => (
              <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <img src={destination.imageUrl} alt={destination.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: themeConfig.primaryColor }}>
                    {destination.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-3">Airport: <span className="font-medium" style={{ color: themeConfig.secondaryColor }}>{destination.airportCode}</span></p>
                  <p className="text-lighttext text-base leading-relaxed">{destination.description}</p>
                  <div className="mt-6">
                    <a
                      href="/contact" // Direct to contact for booking details
                      className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white font-medium rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                      style={{ backgroundColor: themeConfig.accentColor }}
                    >
                      Rent at {destination.airportCode}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTASection
        title="Can't Find Your Destination?"
        subtitle="Contact our team and we'll help you find a rental car wherever you need it in the USA!"
      />
    </div>
  );
};
