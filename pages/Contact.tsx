import React, { useState } from 'react';
import { useCompanyInfo } from '../context/CompanyInfoContext';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const Contact: React.FC = () => {
  const { companyInfo } = useCompanyInfo();
  const { themeConfig } = useThemeConfig();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div style={{ backgroundColor: themeConfig.bgColor, color: themeConfig.textColor, fontFamily: themeConfig.bodyFont }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 text-white text-center"
        style={{ backgroundImage: 'url(https://picsum.photos/1600/600?random=40)', fontFamily: themeConfig.headingFont }}
      >
        <div className="absolute inset-0 bg-darktext bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-xl md:text-2xl drop-shadow-md">We're here to help you with your car rental needs.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
              Get in Touch
            </h2>
            <p className="text-lg text-lighttext mb-4">
              Our dedicated support team is available to assist you with bookings, inquiries, and any questions you may have.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-start">
                <span className="text-2xl mr-4" style={{ color: themeConfig.accentColor }}>📞</span>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: themeConfig.primaryColor }}>Phone</h3>
                  <p className="text-lighttext text-lg">
                    <a href={`tel:${companyInfo.phone}`} className="hover:underline">{companyInfo.phone}</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4" style={{ color: themeConfig.accentColor }}>💬</span>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: themeConfig.primaryColor }}>WhatsApp / Chat</h3>
                  <p className="text-lighttext text-lg">
                    <a href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:underline">Chat with us directly</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4" style={{ color: themeConfig.accentColor }}>📧</span>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: themeConfig.primaryColor }}>Email</h3>
                  <p className="text-lighttext text-lg">
                    <a href={`mailto:${companyInfo.email}`} className="hover:underline">{companyInfo.email}</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4" style={{ color: themeConfig.accentColor }}>📍</span>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: themeConfig.primaryColor }}>Address</h3>
                  <p className="text-lighttext text-lg">{companyInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4" style={{ color: themeConfig.accentColor }}>⏰</span>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: themeConfig.primaryColor }}>Business Hours</h3>
                  <p className="text-lighttext text-lg">Monday - Friday: 8:00 AM - 6:00 PM (EST)</p>
                  <p className="text-lighttext text-lg">Saturday: 9:00 AM - 3:00 PM (EST)</p>
                  <p className="text-lighttext text-lg">Sunday: Closed</p>
                  <p className="text-sm text-gray-500 mt-2">24/7 support available for active rentals.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-3xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] sm:text-sm"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] sm:text-sm"
                  placeholder="+1 (123) 456-7890"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] sm:text-sm"
                  placeholder="Inquiry about booking"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] sm:text-sm"
                  placeholder="Tell us about your rental needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: themeConfig.primaryColor }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
