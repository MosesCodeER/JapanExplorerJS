'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';
import Header from '../Header';
import Footer from '../Footer';
import ActivityCard from '../activities/ActivityCard';
import FlightSearchForm from '../flights/FlightSearchForm';

// Mock data for activities
const FEATURED_ACTIVITIES = [
  {
    id: '1',
    title: 'Cherry Blossom Viewing in Kyoto',
    description: 'Experience the magical sakura season in Japan\'s ancient capital. Visit the most scenic spots for cherry blossom viewing.',
    imageUrl: '/images/activities/cherry_blossoms.jpg',
    location: 'Kyoto',
    category: 'Seasonal'
  },
  {
    id: '2',
    title: 'Mount Fuji Climbing Tour',
    description: 'Climb Japan\'s most iconic mountain with experienced guides. Witness the breathtaking sunrise from the summit.',
    imageUrl: '/images/activities/mt_fuji.jpg',
    location: 'Shizuoka',
    category: 'Adventure'
  },
  {
    id: '3',
    title: 'Traditional Tea Ceremony',
    description: 'Learn the art of Japanese tea ceremony from a master. Experience this ancient cultural practice in an authentic setting.',
    imageUrl: '/images/activities/traditional_street.jpg',
    location: 'Tokyo',
    category: 'Cultural'
  },
  {
    id: '4',
    title: 'Shibuya Crossing Experience',
    description: 'Visit the world\'s busiest pedestrian crossing. Experience the organized chaos of Tokyo\'s famous scramble intersection.',
    imageUrl: '/images/activities/tokyo_crossing.jpg',
    location: 'Tokyo',
    category: 'Urban'
  }
];

// Mock data for categories
const CATEGORIES = [
  { id: '1', name: 'Cultural', icon: '🏯' },
  { id: '2', name: 'Adventure', icon: '🗻' },
  { id: '3', name: 'Food', icon: '🍣' },
  { id: '4', name: 'Nature', icon: '🌸' },
  { id: '5', name: 'Urban', icon: '🏙️' },
  { id: '6', name: 'Relaxation', icon: '♨️' }
];

const HomePage = () => {
  const { user } = useAuth();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/activities/mt_fuji.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Japan</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Explore the land of ancient traditions, breathtaking landscapes, and modern wonders
          </p>
          <div className="w-full max-w-md">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="Search activities, destinations, food..."
                className="w-full p-3 border border-[#A8DADC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Welcome Section */}
      {user && (
        <section className="bg-[#F1FAEE] py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-[#1D3557]">
              {greeting}, {user.name}! Welcome back to your Japan adventure.
            </h2>
          </div>
        </section>
      )}
      
      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1D3557] mb-8 text-center">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map(category => (
              <div key={category.id} className="bg-[#F1FAEE] rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-lg font-medium text-[#1D3557]">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Activities Section */}
      <section className="py-12 bg-[#F1FAEE]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1D3557] mb-8 text-center">Featured Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_ACTIVITIES.map(activity => (
              <ActivityCard
                key={activity.id}
                id={activity.id}
                title={activity.title}
                description={activity.description}
                imageUrl={activity.imageUrl}
                location={activity.location}
                category={activity.category}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Flight Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1D3557] mb-8 text-center">Find Your Flight to Japan</h2>
          <div className="max-w-4xl mx-auto">
            <FlightSearchForm />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 bg-[#1D3557] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#457B9D] p-6 rounded-lg">
              <p className="italic mb-4">"The cherry blossom tour in Kyoto was magical! Our guide was knowledgeable and showed us hidden spots away from the crowds."</p>
              <p className="font-semibold">- Sarah T.</p>
            </div>
            <div className="bg-[#457B9D] p-6 rounded-lg">
              <p className="italic mb-4">"Climbing Mt. Fuji was the highlight of our trip. The sunrise view from the top was worth every step of the journey."</p>
              <p className="font-semibold">- Michael K.</p>
            </div>
            <div className="bg-[#457B9D] p-6 rounded-lg">
              <p className="italic mb-4">"The food tour in Osaka was incredible! We tried so many delicious dishes and learned about Japanese culinary traditions."</p>
              <p className="font-semibold">- Emma L.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-12 bg-[#F1FAEE]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1D3557] mb-4">Stay Updated</h2>
          <p className="text-[#457B9D] mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for travel tips, seasonal recommendations, and exclusive offers.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 p-3 border border-[#A8DADC] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
            />
            <button className="bg-[#E63946] text-white px-6 py-3 rounded-r-md hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
