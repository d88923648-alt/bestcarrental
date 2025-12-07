import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS, LANDING_PAGE_LINKS } from '../constants';
import { useCompanyInfo } from '../context/CompanyInfoContext';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { companyInfo } = useCompanyInfo();
  const { themeConfig } = useThemeConfig();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const linkStyle = `block py-2 px-3 hover:text-[var(--color-accent)] transition-colors duration-200`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-display font-bold" style={{ color: themeConfig.primaryColor }}>
              {companyInfo.companyName.split(' ')[0]} <span className="text-lighttext text-base">Car Rental</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link key={link.name} to={link.href} className={`text-lighttext font-medium ${linkStyle}`}>
                {link.name}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`text-lighttext font-medium ${linkStyle} flex items-center`}
              >
                Landing Pages
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {LANDING_PAGE_LINKS.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="ml-4 px-4 py-2 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: themeConfig.primaryColor }}
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[var(--color-accent)] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-primary)]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-lighttext font-medium ${linkStyle}`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleDropdown}
              className={`text-lighttext font-medium ${linkStyle} w-full text-left flex items-center justify-between`}
            >
              Landing Pages
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="py-1 pl-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {LANDING_PAGE_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => { setIsDropdownOpen(false); toggleMenu(); }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
            <Link
              to="/contact"
              className="mt-2 block w-full text-center px-4 py-2 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: themeConfig.primaryColor }}
              onClick={toggleMenu}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
