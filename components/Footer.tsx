import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS, SOCIAL_MEDIA_LINKS } from '../constants';
import { useCompanyInfo } from '../context/CompanyInfoContext';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const Footer: React.FC = () => {
  const { companyInfo } = useCompanyInfo();
  const { themeConfig } = useThemeConfig();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darktext text-white py-12" style={{ backgroundColor: themeConfig.textColor }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-display font-semibold mb-4" style={{ color: themeConfig.primaryColor }}>
            {companyInfo.companyName}
          </h3>
          <p className="text-sm text-gray-300 mb-2">{companyInfo.tagline}</p>
          <p className="text-sm text-gray-300">{companyInfo.address}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/admin" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm">
                Admin
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <a href={`tel:${companyInfo.phone}`} className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm">
                📞 {companyInfo.phone}
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm">
                💬 WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm">
                📧 {companyInfo.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href={SOCIAL_MEDIA_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200">
              <span className="sr-only">Facebook</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={SOCIAL_MEDIA_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200">
              <span className="sr-only">Instagram</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.153-1.772 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.858.344-.467.182-.82.368-1.137.673-.316.306-.603.679-.791 1.148-.154.37-.305.838-.344 1.807-.048 1.024-.059 1.379-.059 3.808v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.858.182.467.368.82.673 1.137.306.316.679.603 1.148.791.37.154.838.305 1.807.344 1.024.048 1.379.059 3.808.059h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.858-.344.467-.182.82-.368 1.137-.673.316-.306.603-.679.791-1.148.154-.37.305-.838.344-1.807.048-1.024.059-1.379.059-3.808v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.858a4.902 4.902 0 00-.673-1.137 4.902 4.902 0 00-1.148-.791c-.37-.154-.838-.305-1.807-.344-1.024-.048-1.379-.059-3.808-.059zm0 5.802a4.006 4.006 0 100 8.012 4.006 4.006 0 000-8.012zm0 1.961a2.045 2.045 0 110 4.09 2.045 2.045 0 010-4.09zm6.071-5.11a1.177 1.177 0 100 2.354 1.177 1.177 0 000-2.354z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={SOCIAL_MEDIA_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200">
              <span className="sr-only">TikTok</span>
              {/* Simple TikTok icon, usually a combination of shapes or custom font. Using text for now. */}
              <span className="text-2xl">🎵</span>
            </a>
            <a href={SOCIAL_MEDIA_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-200">
              <span className="sr-only">WhatsApp</span>
              <span className="text-2xl">💬</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-400">
        &copy; {currentYear} {companyInfo.companyName}. All rights reserved.
        <div className="mt-2 space-x-4">
          <Link to="/privacy-policy" className="hover:text-[var(--color-primary)]">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-[var(--color-primary)]">Terms of Service</Link>
          <Link to="/sitemap" className="hover:text-[var(--color-primary)]">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};
