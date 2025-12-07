// types.ts

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
}

export interface Destination {
  id: string;
  name: string;
  airportCode: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number; // 1-5 stars
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Could be a path to SVG or a class name if using an icon font
  imageUrl?: string;
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  bgColor: string;
  textColor: string;
  headingFont: string;
  bodyFont: string;
}

export interface CompanyInfo {
  companyName: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  tagline: string;
  mission: string;
  values: string[];
  experience: string;
  globalPresence: string;
}

export interface LeadFormInput {
  name: string;
  phone: string;
  travelDate: string;
  pickupAirport: string;
}

export type GeminiMessage = {
  text: string;
  isUser: boolean;
};