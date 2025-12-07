import React, { useState, useEffect, useCallback } from 'react';
import { useThemeConfig } from '../context/ThemeConfigContext';
import { useCompanyInfo } from '../context/CompanyInfoContext';
import { ThemeConfig, CompanyInfo } from '../types';
import { NAVIGATION_LINKS, LANDING_PAGE_LINKS } from '../constants'; // For navigation to pages

type AdminTab = 'theme' | 'company' | 'pages';

export const AdminDashboard: React.FC = () => {
  const { themeConfig, updateThemeConfig } = useThemeConfig();
  const { companyInfo, updateCompanyInfo } = useCompanyInfo();

  const [currentTab, setCurrentTab] = useState<AdminTab>('theme');

  // State for editable theme values
  const [editableTheme, setEditableTheme] = useState<ThemeConfig>(themeConfig);
  // State for editable company info values
  const [editableCompanyInfo, setEditableCompanyInfo] = useState<CompanyInfo>(companyInfo);
  const [newCompanyValue, setNewCompanyValue] = useState('');

  useEffect(() => {
    setEditableTheme(themeConfig); // Sync internal state when context updates
  }, [themeConfig]);

  useEffect(() => {
    setEditableCompanyInfo(companyInfo); // Sync internal state when context updates
  }, [companyInfo]);

  const handleThemeChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditableTheme({ ...editableTheme, [e.target.name]: e.target.value });
  }, [editableTheme]);

  const saveThemeChanges = useCallback(() => {
    updateThemeConfig(editableTheme);
    alert('Theme settings updated!');
  }, [editableTheme, updateThemeConfig]);

  const handleCompanyInfoChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditableCompanyInfo({ ...editableCompanyInfo, [e.target.name]: e.target.value });
  }, [editableCompanyInfo]);

  const handleValueArrayChange = useCallback((index: number, value: string) => {
    const updatedValues = [...editableCompanyInfo.values];
    updatedValues[index] = value;
    setEditableCompanyInfo({ ...editableCompanyInfo, values: updatedValues });
  }, [editableCompanyInfo]);

  const addCompanyValue = useCallback(() => {
    if (newCompanyValue.trim()) {
      setEditableCompanyInfo((prev) => ({
        ...prev,
        values: [...prev.values, newCompanyValue.trim()],
      }));
      setNewCompanyValue('');
    }
  }, [newCompanyValue]);

  const removeCompanyValue = useCallback((index: number) => {
    setEditableCompanyInfo((prev) => ({
      ...prev,
      values: prev.values.filter((_, i) => i !== index),
    }));
  }, []);

  const saveCompanyInfoChanges = useCallback(() => {
    updateCompanyInfo(editableCompanyInfo);
    alert('Company information updated!');
  }, [editableCompanyInfo, updateCompanyInfo]);

  return (
    <div className="min-h-screen py-10" style={{ backgroundColor: themeConfig.bgColor, fontFamily: themeConfig.bodyFont }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-center mb-10" style={{ color: themeConfig.primaryColor }}>
          Admin Dashboard
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setCurrentTab('theme')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                  currentTab === 'theme'
                    ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                    : 'border-transparent text-lighttext hover:text-gray-700 hover:border-gray-300'
                }`}
                style={currentTab === 'theme' ? {borderColor: themeConfig.primaryColor, color: themeConfig.primaryColor} : {}}
              >
                Theme Settings
              </button>
              <button
                onClick={() => setCurrentTab('company')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                  currentTab === 'company'
                    ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                    : 'border-transparent text-lighttext hover:text-gray-700 hover:border-gray-300'
                }`}
                style={currentTab === 'company' ? {borderColor: themeConfig.primaryColor, color: themeConfig.primaryColor} : {}}
              >
                Company Info
              </button>
              <button
                onClick={() => setCurrentTab('pages')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                  currentTab === 'pages'
                    ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                    : 'border-transparent text-lighttext hover:text-gray-700 hover:border-gray-300'
                }`}
                style={currentTab === 'pages' ? {borderColor: themeConfig.primaryColor, color: themeConfig.primaryColor} : {}}
              >
                Manage Pages
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          {currentTab === 'theme' && (
            <div>
              <h2 className="text-3xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
                Customize Theme
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700">Primary Color</label>
                  <input type="color" id="primaryColor" name="primaryColor" value={editableTheme.primaryColor} onChange={handleThemeChange} className="mt-1 w-full h-10 rounded-md" />
                  <span className="text-sm text-gray-500">{editableTheme.primaryColor}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="secondaryColor" className="block text-sm font-medium text-gray-700">Secondary Color</label>
                  <input type="color" id="secondaryColor" name="secondaryColor" value={editableTheme.secondaryColor} onChange={handleThemeChange} className="mt-1 w-full h-10 rounded-md" />
                  <span className="text-sm text-gray-500">{editableTheme.secondaryColor}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="accentColor" className="block text-sm font-medium text-gray-700">Accent Color</label>
                  <input type="color" id="accentColor" name="accentColor" value={editableTheme.accentColor} onChange={handleThemeChange} className="mt-1 w-full h-10 rounded-md" />
                  <span className="text-sm text-gray-500">{editableTheme.accentColor}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="bgColor" className="block text-sm font-medium text-gray-700">Background Color</label>
                  <input type="color" id="bgColor" name="bgColor" value={editableTheme.bgColor} onChange={handleThemeChange} className="mt-1 w-full h-10 rounded-md" />
                  <span className="text-sm text-gray-500">{editableTheme.bgColor}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="textColor" className="block text-sm font-medium text-gray-700">Text Color</label>
                  <input type="color" id="textColor" name="textColor" value={editableTheme.textColor} onChange={handleThemeChange} className="mt-1 w-full h-10 rounded-md" />
                  <span className="text-sm text-gray-500">{editableTheme.textColor}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="headingFont" className="block text-sm font-medium text-gray-700">Heading Font</label>
                  <select id="headingFont" name="headingFont" value={editableTheme.headingFont} onChange={handleThemeChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]">
                    <option>Montserrat</option>
                    <option>Roboto</option>
                    <option>Open Sans</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="bodyFont" className="block text-sm font-medium text-gray-700">Body Font</label>
                  <select id="bodyFont" name="bodyFont" value={editableTheme.bodyFont} onChange={handleThemeChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]">
                    <option>Roboto</option>
                    <option>Montserrat</option>
                    <option>Open Sans</option>
                  </select>
                </div>
              </div>
              <button
                onClick={saveThemeChanges}
                className="mt-8 inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: themeConfig.primaryColor }}
              >
                Save Theme Changes
              </button>
            </div>
          )}

          {currentTab === 'company' && (
            <div>
              <h2 className="text-3xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
                Edit Company Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.keys(editableCompanyInfo).map((key) => {
                  const typedKey = key as keyof CompanyInfo;
                  if (typedKey === 'values') {
                    return (
                      <div key={typedKey} className="form-group md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 capitalize">Our Values</label>
                        <div className="space-y-2 mt-1">
                          {editableCompanyInfo.values.map((value, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <input
                                type="text"
                                value={value}
                                onChange={(e) => handleValueArrayChange(index, e.target.value)}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                              />
                              <button
                                type="button"
                                onClick={() => removeCompanyValue(index)}
                                className="p-2 text-red-600 hover:text-red-800"
                              >
                                🗑️
                              </button>
                            </div>
                          ))}
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              value={newCompanyValue}
                              onChange={(e) => setNewCompanyValue(e.target.value)}
                              placeholder="Add new value"
                              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            <button
                              type="button"
                              onClick={addCompanyValue}
                              className="p-2 text-green-600 hover:text-green-800"
                            >
                              ➕
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div key={typedKey} className="form-group">
                      <label htmlFor={typedKey} className="block text-sm font-medium text-gray-700 capitalize">{typedKey.replace(/([A-Z])/g, ' $1').trim()}</label>
                      {typedKey === 'mission' || typedKey === 'experience' || typedKey === 'globalPresence' ? (
                        <textarea
                          id={typedKey}
                          name={typedKey}
                          value={editableCompanyInfo[typedKey] as string}
                          onChange={handleCompanyInfoChange}
                          rows={3}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                        ></textarea>
                      ) : (
                        <input
                          type="text"
                          id={typedKey}
                          name={typedKey}
                          value={editableCompanyInfo[typedKey] as string}
                          onChange={handleCompanyInfoChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <button
                onClick={saveCompanyInfoChanges}
                className="mt-8 inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: themeConfig.primaryColor }}
              >
                Save Company Info
              </button>
            </div>
          )}

          {currentTab === 'pages' && (
            <div>
              <h2 className="text-3xl font-display font-bold mb-6" style={{ color: themeConfig.primaryColor }}>
                Manage Website Pages & Landing Pages
              </h2>
              <p className="text-lighttext mb-8">
                This section provides a conceptual interface for managing pages and posts.
                In a full-stack application, this would integrate with a backend CMS.
                For this demo, clicking a link will take you to the respective page.
              </p>

              <h3 className="text-xl font-semibold mb-4" style={{ color: themeConfig.secondaryColor }}>Main Website Pages</h3>
              <ul className="space-y-3 mb-8">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="flex items-center justify-between p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-700">{link.name}</span>
                      <span className="text-sm text-gray-500">{link.href}</span>
                      <button className="text-blue-600 hover:underline">Edit</button>
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-4" style={{ color: themeConfig.secondaryColor }}>Advertising Landing Pages</h3>
              <ul className="space-y-3">
                {LANDING_PAGE_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="flex items-center justify-between p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-700">{link.name}</span>
                      <span className="text-sm text-gray-500">{link.href}</span>
                      <button className="text-blue-600 hover:underline">Edit</button>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-center">
                <button
                  onClick={() => alert('Feature to create new pages/posts would be implemented here!')}
                  className="inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                  style={{ backgroundColor: themeConfig.accentColor }}
                >
                  Create New Page / Post
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
