import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { ThemeConfig } from '../types';

interface ThemeConfigContextType {
  themeConfig: ThemeConfig;
  updateThemeConfig: (newConfig: Partial<ThemeConfig>) => void;
}

const defaultTheme: ThemeConfig = {
  primaryColor: '#1a73e8',
  secondaryColor: '#4285f4',
  accentColor: '#ea4335',
  bgColor: '#f9fafb',
  textColor: '#3c4043',
  headingFont: 'Montserrat',
  bodyFont: 'Roboto',
};

const ThemeConfigContext = createContext<ThemeConfigContextType | undefined>(undefined);

export const ThemeConfigProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(() => {
    const savedTheme = localStorage.getItem('themeConfig');
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem('themeConfig', JSON.stringify(themeConfig));
    // Apply dynamic styles to HTML root or generate a style tag
    const root = document.documentElement;
    root.style.setProperty('--color-primary', themeConfig.primaryColor);
    root.style.setProperty('--color-secondary', themeConfig.secondaryColor);
    root.style.setProperty('--color-accent', themeConfig.accentColor);
    root.style.setProperty('--color-bg', themeConfig.bgColor);
    root.style.setProperty('--color-text', themeConfig.textColor);
    root.style.setProperty('--font-heading', `'${themeConfig.headingFont}', sans-serif`);
    root.style.setProperty('--font-body', `'${themeConfig.bodyFont}', sans-serif`);
  }, [themeConfig]);

  const updateThemeConfig = useCallback((newConfig: Partial<ThemeConfig>) => {
    setThemeConfig((prevConfig) => ({ ...prevConfig, ...newConfig }));
  }, []);

  return (
    <ThemeConfigContext.Provider value={{ themeConfig, updateThemeConfig }}>
      {children}
    </ThemeConfigContext.Provider>
  );
};

export const useThemeConfig = () => {
  const context = useContext(ThemeConfigContext);
  if (context === undefined) {
    throw new Error('useThemeConfig must be used within a ThemeConfigProvider');
  }
  return context;
};
