import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Destinations } from './pages/Destinations';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { AdminDashboard } from './pages/AdminDashboard';
import { AirportRentalLAX } from './landingpages/AirportRentalLAX';
import { CheapCarRentalUSA } from './landingpages/CheapCarRentalUSA';
import { AirportPickupDropoff } from './landingpages/AirportPickupDropoff';
import { LastMinuteRentals } from './landingpages/LastMinuteRentals';
import { BestCarRentalDeals } from './landingpages/BestCarRentalDeals';
import { ThemeConfigProvider } from './context/ThemeConfigContext';
import { CompanyInfoProvider } from './context/CompanyInfoContext';
import { GeminiChatbot } from './components/GeminiChatbot';

const App: React.FC = () => {
  useEffect(() => {
    // Set default theme config if not already in localStorage
    if (!localStorage.getItem('themeConfig')) {
      localStorage.setItem('themeConfig', JSON.stringify({
        primaryColor: '#1a73e8',
        secondaryColor: '#4285f4',
        accentColor: '#ea4335',
        bgColor: '#f9fafb',
        textColor: '#3c4043',
        headingFont: 'Montserrat',
        bodyFont: 'Roboto',
      }));
    }
    // Set default company info if not already in localStorage
    if (!localStorage.getItem('companyInfo')) {
      localStorage.setItem('companyInfo', JSON.stringify({
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
      }));
    }
  }, []);

  return (
    <Router>
      <ThemeConfigProvider>
        <CompanyInfoProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/admin" element={<AdminDashboard />} />

                {/* Landing Pages */}
                <Route path="/landing/lax-car-rental" element={<AirportRentalLAX />} />
                <Route path="/landing/cheap-car-rental-usa" element={<CheapCarRentalUSA />} />
                <Route path="/landing/airport-pickup-dropoff" element={<AirportPickupDropoff />} />
                <Route path="/landing/last-minute-rentals" element={<LastMinuteRentals />} />
                <Route path="/landing/best-car-rental-deals" element={<BestCarRentalDeals />} />
              </Routes>
            </main>
            <Footer />
            <GeminiChatbot />
          </div>
        </CompanyInfoProvider>
      </ThemeConfigProvider>
    </Router>
  );
};

export default App;
