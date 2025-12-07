import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { CompanyInfo } from '../types';

interface CompanyInfoContextType {
  companyInfo: CompanyInfo;
  updateCompanyInfo: (newInfo: Partial<CompanyInfo>) => void;
}

const defaultCompanyInfo: CompanyInfo = {
  companyName: 'Enterprise Car Rental Services',
  phone: '+1-800-CAR-RENT',
  whatsapp: '+1-800-CAR-RENT',
  email: 'info@enterprise.com',
  address: '123 Global Drive, Suite 100, Atlanta, GA 30303, USA',
  tagline: 'Your Journey, Our Wheels. Anywhere in the USA.',
  mission: 'To provide seamless, reliable, and affordable car rental experiences for international travelers arriving at U.S. airports.',
  values: ['Customer First', 'Integrity', 'Innovation', 'Excellence', 'Global Reach'],
  experience: 'With over 20 years in the industry, we specialize in understanding the unique needs of international travelers.',
  globalPresence: 'Operating in all major U.S. airports and cities, ensuring convenience no matter your destination.',
};

const CompanyInfoContext = createContext<CompanyInfoContextType | undefined>(undefined);

export const CompanyInfoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => {
    const savedInfo = localStorage.getItem('companyInfo');
    return savedInfo ? JSON.parse(savedInfo) : defaultCompanyInfo;
  });

  useEffect(() => {
    localStorage.setItem('companyInfo', JSON.stringify(companyInfo));
  }, [companyInfo]);

  const updateCompanyInfo = useCallback((newInfo: Partial<CompanyInfo>) => {
    setCompanyInfo((prevInfo) => ({ ...prevInfo, ...newInfo }));
  }, []);

  return (
    <CompanyInfoContext.Provider value={{ companyInfo, updateCompanyInfo }}>
      {children}
    </CompanyInfoContext.Provider>
  );
};

export const useCompanyInfo = () => {
  const context = useContext(CompanyInfoContext);
  if (context === undefined) {
    throw new Error('useCompanyInfo must be used within a CompanyInfoProvider');
  }
  return context;
};
