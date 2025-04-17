'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User, Search } from 'lucide-react';
import { useAuth } from './auth/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#1D3557]">
            Japan Explorer
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/activities" className="text-[#457B9D] hover:text-[#1D3557] transition-colors">
              Activities
            </Link>
            <Link href="/food" className="text-[#457B9D] hover:text-[#1D3557] transition-colors">
              Food & Cuisine
            </Link>
            <Link href="/destinations" className="text-[#457B9D] hover:text-[#1D3557] transition-colors">
              Destinations
            </Link>
            <Link href="/flights" className="text-[#457B9D] hover:text-[#1D3557] transition-colors">
              Flights
            </Link>
          </nav>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[#457B9D] hover:text-[#1D3557] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-[#457B9D] hover:text-[#1D3557] transition-colors">
                  <User className="w-5 h-5" />
                  <span>{user.name.split(' ')[0]}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-[#457B9D] hover:bg-[#F1FAEE] hover:text-[#1D3557]">
                    My Profile
                  </Link>
                  <Link href="/bookings" className="block px-4 py-2 text-sm text-[#457B9D] hover:bg-[#F1FAEE] hover:text-[#1D3557]">
                    My Bookings
                  </Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-[#E63946] hover:bg-[#F1FAEE]"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                href="/auth/login" 
                className="bg-[#E63946] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Log In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#457B9D]"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#A8DADC] py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              href="/activities" 
              className="text-[#457B9D] hover:text-[#1D3557] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Activities
            </Link>
            <Link 
              href="/food" 
              className="text-[#457B9D] hover:text-[#1D3557] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Food & Cuisine
            </Link>
            <Link 
              href="/destinations" 
              className="text-[#457B9D] hover:text-[#1D3557] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              href="/flights" 
              className="text-[#457B9D] hover:text-[#1D3557] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Flights
            </Link>
            
            <div className="pt-4 border-t border-[#A8DADC]">
              {user ? (
                <>
                  <div className="flex items-center space-x-2 text-[#1D3557] mb-4">
                    <User className="w-5 h-5" />
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <Link 
                    href="/profile" 
                    className="block py-2 text-[#457B9D] hover:text-[#1D3557] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link 
                    href="/bookings" 
                    className="block py-2 text-[#457B9D] hover:text-[#1D3557] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Bookings
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block py-2 text-[#E63946] hover:text-opacity-80 transition-colors"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <Link 
                  href="/auth/login" 
                  className="block w-full bg-[#E63946] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
