import React, { useState } from 'react';
import { LeadFormInput } from '../types';
import { useThemeConfig } from '../context/ThemeConfigContext';

interface LeadCaptureFormProps {
  formTitle: string;
  formSubtitle: string;
  onSubmit: (data: LeadFormInput) => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ formTitle, formSubtitle, onSubmit }) => {
  const [formData, setFormData] = useState<LeadFormInput>({
    name: '',
    phone: '',
    travelDate: '',
    pickupAirport: '',
  });
  const { themeConfig } = useThemeConfig();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Optionally reset form
    setFormData({
      name: '',
      phone: '',
      travelDate: '',
      pickupAirport: '',
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 max-w-md mx-auto" style={{ fontFamily: themeConfig.bodyFont, color: themeConfig.textColor }}>
      <h3 className="text-3xl font-display font-bold mb-4 text-center" style={{ color: themeConfig.primaryColor }}>{formTitle}</h3>
      <p className="text-center text-lighttext mb-6">{formSubtitle}</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
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
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] sm:text-sm"
            placeholder="+1 (123) 456-7890"
          />
        </div>
        <div>
          <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700">Travel Date</label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="pickupAirport" className="block text-sm font-medium text-gray-700">Pickup Airport</label>
          <input
            type="text"
            id="pickupAirport"
            name="pickupAirport"
            value={formData.pickupAirport}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] sm:text-sm"
            placeholder="e.g., LAX, JFK, MIA"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          style={{ backgroundColor: themeConfig.accentColor }}
        >
          Request Free Quote
        </button>
      </form>
    </div>
  );
};
