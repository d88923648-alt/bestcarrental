import React from 'react';
import { useThemeConfig } from '../context/ThemeConfigContext';

export const LoadingSpinner: React.FC = () => {
  const { themeConfig } = useThemeConfig();

  return (
    <div className="flex justify-center items-center">
      <div
        className="animate-spin rounded-full h-8 w-8 border-b-2 border-r-2"
        style={{ borderColor: themeConfig.primaryColor }}
      ></div>
    </div>
  );
};
