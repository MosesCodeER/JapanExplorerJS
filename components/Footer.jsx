'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1D3557] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              Japan Explorer
            </Link>
            <p className="mt-4 text-[#A8DADC]">
              Your ultimate guide to exploring the beauty and culture of Japan.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-white hover:text-[#E63946] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#E63946] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#E63946] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#E63946] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/activities" className="text-[#A8DADC] hover:text-white transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/food" className="text-[#A8DADC] hover:text-white transition-colors">
                  Food & Cuisine
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-[#A8DADC] hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/flights" className="text-[#A8DADC] hover:text-white transition-colors">
                  Flights
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#A8DADC] hover:text-white transition-colors">
                  About Japan
                </Link>
              </li>
              <li>
                <Link href="/travel-tips" className="text-[#A8DADC] hover:text-white transition-colors">
                  Travel Tips
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#A8DADC] hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A8DADC] hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-[#A8DADC] mb-4">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              />
              <button
                type="submit"
                className="bg-[#E63946] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#457B9D] mt-12 pt-6 text-center text-[#A8DADC]">
          <p>&copy; {new Date().getFullYear()} Japan Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
