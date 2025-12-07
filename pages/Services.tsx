import React from 'react';
import { OUR_SERVICES } from '../constants';
import { CTASection } from '../components/CTASection';
import { useCompanyInfo } from '../context/CompanyInfoContext';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const Services: React.FC = () => {
  const { companyInfo } = useCompanyInfo();
  const { themeConfig } = useThemeConfig();

  return (
    <div style={{ backgroundColor: themeConfig.bgColor, color: themeConfig.textColor, fontFamily: themeConfig.bodyFont }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 text-white text-center"
        style={{ backgroundImage: 'url(https://picsum.photos/1600/600?random=60)', fontFamily: themeConfig.headingFont }}
      >
        <div className="absolute inset-0 bg-darktext bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Our Rental Services</h1>
          <p className="text-xl md:text-2xl drop-shadow-md">Tailored solutions for every traveler's journey across the USA.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center mb-12" style={{ color: themeConfig.primaryColor }}>
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OUR_SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4" style={{ color: themeConfig.accentColor }}>{service.icon}</span>
                    <h3 className="text-2xl font-semibold" style={{ color: themeConfig.primaryColor }}>
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lighttext text-base leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
            Your Best Choice for USA Car Rentals
          </h2>
          <p className="text-lg text-lighttext mb-12 max-w-3xl mx-auto">
            At {companyInfo.companyName}, we are committed to providing exceptional service, a diverse fleet, and peace of mind for all your travels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <span className="text-5xl block mb-4" style={{ color: themeConfig.secondaryColor }}>⭐</span>
              <h3 className="text-xl font-semibold mb-2" style={{ color: themeConfig.primaryColor }}>Premium Support</h3>
              <p className="text-lighttext">Dedicated 24/7 customer service and roadside assistance.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <span className="text-5xl block mb-4" style={{ color: themeConfig.secondaryColor }}>🛡️</span>
              <h3 className="text-xl font-semibold mb-2" style={{ color: themeConfig.primaryColor }}>Comprehensive Insurance</h3>
              <p className="text-lighttext">Various insurance options for a worry-free rental experience.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <span className="text-5xl block mb-4" style={{ color: themeConfig.secondaryColor }}>📈</span>
              <h3 className="text-xl font-semibold mb-2" style={{ color: themeConfig.primaryColor }}>Flexible Booking</h3>
              <p className="text-lighttext">Easy modifications and cancellations to fit your changing plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTASection
        title="Ready to Experience Our Services?"
        subtitle="Contact us today to tailor your perfect car rental package!"
      />
    </div>
  );
};
