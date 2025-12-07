// constants.ts

import { BlogPost, Destination, Service, Testimonial } from './types';

export const SOCIAL_MEDIA_LINKS = {
  facebook: 'https://www.facebook.com/EnterpriseCarRental',
  instagram: 'https://www.instagram.com/EnterpriseCarRental',
  tiktok: 'https://www.tiktok.com/@EnterpriseCarRental',
  whatsapp: 'https://wa.me/+1800CARRENT',
};

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const LANDING_PAGE_LINKS = [
  { name: 'LAX Car Rental', href: '/landing/lax-car-rental' },
  { name: 'Cheap Car Rental USA', href: '/landing/cheap-car-rental-usa' },
  { name: 'Airport Pickup & Drop-off', href: '/landing/airport-pickup-dropoff' },
  { name: 'Last-Minute Rentals', href: '/landing/last-minute-rentals' },
  { name: 'Best Deals in USA', href: '/landing/best-car-rental-deals' },
];

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Los Angeles, CA',
    airportCode: 'LAX',
    imageUrl: 'https://picsum.photos/400/250?random=1',
    description: 'Explore the City of Angels with ease. Pick up your car directly at LAX.',
  },
  {
    id: '2',
    name: 'New York, NY',
    airportCode: 'JFK',
    imageUrl: 'https://picsum.photos/400/250?random=2',
    description: 'Experience the Big Apple. Convenient pickups at JFK, LGA, and EWR.',
  },
  {
    id: '3',
    name: 'Orlando, FL',
    airportCode: 'MCO',
    imageUrl: 'https://picsum.photos/400/250?random=3',
    description: 'Theme park adventures await. Start your magical journey from MCO.',
  },
  {
    id: '4',
    name: 'Miami, FL',
    airportCode: 'MIA',
    imageUrl: 'https://picsum.photos/400/250?random=4',
    description: 'Sun, sand, and vibrant culture. Get your perfect ride from MIA.',
  },
  {
    id: '5',
    name: 'Chicago, IL',
    airportCode: 'ORD',
    imageUrl: 'https://picsum.photos/400/250?random=5',
    description: 'Discover the Windy City. Easy airport access at O\'Hare (ORD).',
  },
  {
    id: '6',
    name: 'San Francisco, CA',
    airportCode: 'SFO',
    imageUrl: 'https://picsum.photos/400/250?random=6',
    description: 'Iconic landmarks and stunning views. Pick up your car at SFO.',
  },
  {
    id: '7',
    name: 'Las Vegas, NV',
    airportCode: 'LAS',
    imageUrl: 'https://picsum.photos/400/250?random=7',
    description: 'Hit the Strip and beyond. Conveniently located at LAS airport.',
  },
  {
    id: '8',
    name: 'Houston, TX',
    airportCode: 'IAH',
    imageUrl: 'https://picsum.photos/400/250?random=8',
    description: 'Explore the Space City. Your vehicle awaits at IAH.',
  },
];

export const OUR_SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Airport Pickups & Drop-offs',
    description: 'Seamless car collection and return at all major U.S. airports.',
    icon: '✈️', // Placeholder for an icon
    imageUrl: 'https://picsum.photos/600/400?random=11',
  },
  {
    id: 's2',
    title: 'Luxury Car Rentals',
    description: 'Arrive in style with our premium selection of luxury vehicles.',
    icon: '✨',
    imageUrl: 'https://picsum.photos/600/400?random=12',
  },
  {
    id: 's3',
    title: 'Long-Term Rentals',
    description: 'Flexible and affordable options for extended stays in the USA.',
    icon: '🗓️',
    imageUrl: 'https://picsum.photos/600/400?random=13',
  },
  {
    id: 's4',
    title: 'Corporate Rentals',
    description: 'Tailored solutions for business travelers and corporate accounts.',
    icon: '💼',
    imageUrl: 'https://picsum.photos/600/400?random=14',
  },
  {
    id: 's5',
    title: '24/7 Roadside Assistance',
    description: 'Peace of mind with around-the-clock support, wherever you are.',
    icon: '🆘',
    imageUrl: 'https://picsum.photos/600/400?random=15',
  },
  {
    id: 's6',
    title: 'Diverse Fleet Options',
    description: 'From economy to SUVs, find the perfect car for your journey.',
    icon: '🚗',
    imageUrl: 'https://picsum.photos/600/400?random=16',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Enterprise made my trip to Miami so easy! Car was ready at MIA, spotless, and the process was super fast.",
    author: "Maria S.",
    location: "São Paulo, Brazil",
    rating: 5,
  },
  {
    id: 't2',
    quote: "Excellent service from start to finish for my corporate trip to Chicago. Highly recommend their long-term options.",
    author: "John D.",
    location: "London, UK",
    rating: 5,
  },
  {
    id: 't3',
    quote: "Needed a last-minute rental at LAX, and Enterprise delivered. Great car, great price, amazing support!",
    author: "Chen W.",
    location: "Beijing, China",
    rating: 4,
  },
  {
    id: 't4',
    quote: "The best car rental experience in the USA. Friendly staff, clear communication, and a fantastic range of vehicles.",
    author: "Ahmed K.",
    location: "Dubai, UAE",
    rating: 5,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Navigating LAX: Your Ultimate Car Rental Guide',
    excerpt: 'Tips and tricks for a smooth car rental experience at Los Angeles International Airport.',
    imageUrl: 'https://picsum.photos/300/200?random=21',
    link: '#blog-detail-1', // Placeholder link
  },
  {
    id: 'b2',
    title: 'The Best Road Trips from Orlando, FL',
    excerpt: 'Discover Florida\'s hidden gems with these incredible road trip ideas from MCO.',
    imageUrl: 'https://picsum.photos/300/200?random=22',
    link: '#blog-detail-2',
  },
  {
    id: 'b3',
    title: 'Budget-Friendly Car Rentals for Your USA Adventure',
    excerpt: 'How to find the cheapest car rental deals without compromising on quality for your trip.',
    imageUrl: 'https://picsum.photos/300/200?random=23',
    link: '#blog-detail-3',
  },
  {
    id: 'b4',
    title: 'What to Expect: Picking Up Your Rental Car at JFK',
    excerpt: 'A step-by-step guide to make your arrival at JFK and car pickup effortless.',
    imageUrl: 'https://picsum.photos/300/200?random=24',
    link: '#blog-detail-4',
  },
];

export const TRUST_BADGES = [
  { name: '24/7 Support', icon: '📞' },
  { name: 'Best Price Guarantee', icon: '💰' },
  { name: 'Flexible Booking', icon: '🔄' },
  { name: 'Secure Payments', icon: '🔒' },
];

// Placeholder for process.env.API_KEY - Ensure this is correctly configured in the deployment environment.
export const GEMINI_API_KEY = process.env.API_KEY || 'YOUR_GEMINI_API_KEY_HERE';
