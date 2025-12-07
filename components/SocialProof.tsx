import React from 'react';
import { TESTIMONIALS, TRUST_BADGES } from '../constants';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const SocialProof: React.FC = () => {
  const { themeConfig } = useThemeConfig();

  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16" style={{ backgroundColor: themeConfig.bgColor, color: themeConfig.textColor, fontFamily: themeConfig.bodyFont }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-center mb-12" style={{ color: themeConfig.primaryColor }}>
          What Our Customers Say
        </h2>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100 flex flex-col justify-between">
              {renderStars(testimonial.rating)}
              <p className="mt-4 text-lg italic text-lighttext flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="font-semibold text-lg" style={{ color: themeConfig.primaryColor }}>{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <h2 className="text-4xl font-display font-bold text-center mb-12" style={{ color: themeConfig.primaryColor }}>
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_BADGES.map((badge, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
              <span className="text-5xl mb-4 block">{badge.icon}</span>
              <h3 className="text-xl font-semibold" style={{ color: themeConfig.primaryColor }}>{badge.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
