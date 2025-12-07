import React from 'react';
import { BLOG_POSTS } from '../constants';
import { CTASection } from '../components/CTASection';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const Blog: React.FC = () => {
  const { themeConfig } = useThemeConfig();

  return (
    <div style={{ backgroundColor: themeConfig.bgColor, color: themeConfig.textColor, fontFamily: themeConfig.bodyFont }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 text-white text-center"
        style={{ backgroundImage: 'url(https://picsum.photos/1600/600?random=70)', fontFamily: themeConfig.headingFont }}
      >
        <div className="absolute inset-0 bg-darktext bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Our Travel Blog</h1>
          <p className="text-xl md:text-2xl drop-shadow-md">Guides, tips, and insights for your ultimate USA road trip.</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center mb-12" style={{ color: themeConfig.primaryColor }}>
            Latest Articles & Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: themeConfig.primaryColor }}>
                    {post.title}
                  </h3>
                  <p className="text-lighttext text-base mb-4">{post.excerpt}</p>
                  <a
                    href={post.link}
                    className="inline-block px-4 py-2 bg-[var(--color-secondary)] text-white font-medium rounded-full hover:opacity-90 transition-all duration-300"
                    style={{ backgroundColor: themeConfig.secondaryColor }}
                  >
                    Read More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTASection
        title="Need More Travel Advice?"
        subtitle="Our team is here to help you plan the perfect journey across the USA!"
      />
    </div>
  );
};
