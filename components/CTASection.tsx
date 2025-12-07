import React from 'react';
import { Link } from 'react-router-dom';
import { useCompanyInfo } from '../context/CompanyInfoContext';
import { useThemeConfig } from '../context/ThemeConfigContext';

interface CTASectionProps {
  title: string;
  subtitle: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ title, subtitle }) => {
  const { companyInfo } = useCompanyInfo();
  const { themeConfig } = useThemeConfig();

  return (
    <section className="py-16 text-white text-center" style={{ backgroundColor: themeConfig.primaryColor }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`tel:${companyInfo.phone}`}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: themeConfig.accentColor }}
          >
            📞 Call Now ({companyInfo.phone})
          </a>
          <a
            href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9+]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: themeConfig.secondaryColor }}
          >
            💬 Chat Now
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: '#ffffff', color: themeConfig.primaryColor }}
          >
            ✉️ Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};
