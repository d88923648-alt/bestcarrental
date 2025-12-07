import React from 'react';
import { CTASection } from '../components/CTASection';
import { useCompanyInfo } from '../context/CompanyInfoContext';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const About: React.FC = () => {
  const { companyInfo } = useCompanyInfo();
  const { themeConfig } = useThemeConfig();

  return (
    <div style={{ backgroundColor: themeConfig.bgColor, color: themeConfig.textColor, fontFamily: themeConfig.bodyFont }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 text-white text-center"
        style={{ backgroundImage: 'url(https://picsum.photos/1600/600?random=30)', fontFamily: themeConfig.headingFont }}
      >
        <div className="absolute inset-0 bg-darktext bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">About {companyInfo.companyName}</h1>
          <p className="text-xl md:text-2xl drop-shadow-md">Your trusted partner in international car rentals across the USA.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/600/400?random=31" alt="Our Mission" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
              Our Mission
            </h2>
            <p className="text-lg text-lighttext leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-10" style={{ color: themeConfig.primaryColor }}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {companyInfo.values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <span className="text-5xl block mb-4" style={{ color: themeConfig.secondaryColor }}>
                  {['🌟', '🤝', '💡', '🏆', '🌍'][index % 5]} {/* Placeholder icons */}
                </span>
                <h3 className="text-xl font-semibold" style={{ color: themeConfig.primaryColor }}>{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Global Presence */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
              Experience You Can Trust
            </h2>
            <p className="text-lg text-lighttext leading-relaxed mb-6">
              {companyInfo.experience}
            </p>
            <h3 className="text-3xl font-display font-bold mb-4" style={{ color: themeConfig.primaryColor }}>
              Our Global Reach
            </h3>
            <p className="text-lg text-lighttext leading-relaxed">
              {companyInfo.globalPresence}
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/600/400?random=32" alt="Global Presence" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTASection
        title="Start Your U.S. Adventure Today!"
        subtitle="Contact us to find the perfect rental car for your arrival at any major U.S. airport."
      />
    </div>
  );
};
