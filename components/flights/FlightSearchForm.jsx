'use client';

import { useState } from 'react';
import { Search, Calendar, Users } from 'lucide-react';

const FlightSearchForm = () => {
  const [tripType, setTripType] = useState<'roundtrip' | 'oneway'>('roundtrip');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would call an API or redirect to a flight booking service
    console.log({
      tripType,
      origin,
      destination,
      departDate,
      returnDate,
      passengers
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-[#1D3557] mb-6">Find Flights to Japan</h2>
      
      <div className="flex space-x-4 mb-6">
        <label className="flex items-center">
          <input
            type="radio"
            name="tripType"
            checked={tripType === 'roundtrip'}
            onChange={() => setTripType('roundtrip')}
            className="mr-2 accent-[#E63946]"
          />
          <span className="text-[#1D3557]">Round Trip</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="tripType"
            checked={tripType === 'oneway'}
            onChange={() => setTripType('oneway')}
            className="mr-2 accent-[#E63946]"
          />
          <span className="text-[#1D3557]">One Way</span>
        </label>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label htmlFor="origin" className="block text-sm font-medium text-[#457B9D] mb-1">
              From
            </label>
            <div className="relative">
              <input
                id="origin"
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="City or Airport"
                className="w-full p-3 border border-[#A8DADC] rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
                required
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#457B9D] w-4 h-4" />
            </div>
          </div>
          
          <div className="relative">
            <label htmlFor="destination" className="block text-sm font-medium text-[#457B9D] mb-1">
              To
            </label>
            <div className="relative">
              <input
                id="destination"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="City or Airport in Japan"
                className="w-full p-3 border border-[#A8DADC] rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
                required
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#457B9D] w-4 h-4" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative">
            <label htmlFor="departDate" className="block text-sm font-medium text-[#457B9D] mb-1">
              Depart
            </label>
            <div className="relative">
              <input
                id="departDate"
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="w-full p-3 border border-[#A8DADC] rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
                required
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#457B9D] w-4 h-4" />
            </div>
          </div>
          
          {tripType === 'roundtrip' && (
            <div className="relative">
              <label htmlFor="returnDate" className="block text-sm font-medium text-[#457B9D] mb-1">
                Return
              </label>
              <div className="relative">
                <input
                  id="returnDate"
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full p-3 border border-[#A8DADC] rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
                  required={tripType === 'roundtrip'}
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#457B9D] w-4 h-4" />
              </div>
            </div>
          )}
          
          <div className="relative">
            <label htmlFor="passengers" className="block text-sm font-medium text-[#457B9D] mb-1">
              Passengers
            </label>
            <div className="relative">
              <select
                id="passengers"
                value={passengers}
                onChange={(e) => setPassengers(parseInt(e.target.value))}
                className="w-full p-3 border border-[#A8DADC] rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-[#457B9D] appearance-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                ))}
              </select>
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#457B9D] w-4 h-4" />
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#E63946] text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors font-medium"
        >
          Search Flights
        </button>
      </form>
    </div>
  );
};

export default FlightSearchForm;
