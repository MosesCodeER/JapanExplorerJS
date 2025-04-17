'use client';

import { useState } from 'react';
import FlightBookingAPI from './FlightBookingAPI';
import FlightSearchForm from './FlightSearchForm';
import { ArrowRight, Clock, Luggage } from 'lucide-react';

const FlightResults = () => {
  const {
    origin,
    setOrigin,
    destination,
    setDestination,
    departDate,
    setDepartDate,
    returnDate,
    setReturnDate,
    passengers,
    setPassengers,
    tripType,
    setTripType,
    isLoading,
    flights,
    error,
    handleSearch,
    formatDate
  } = FlightBookingAPI();

  const [sortBy, setSortBy] = useState<'price' | 'duration' | 'stops'>('price');

  // Sort flights based on selected criteria
  const sortedFlights = [...flights].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'stops') return a.stops - b.stops;
    // For duration, convert to minutes for comparison
    const getDurationMinutes = (duration) => {
      const match = duration.match(/(\d+)h\s+(\d+)m/);
      if (match) {
        const hours = parseInt(match[1]);
        const minutes = parseInt(match[2]);
        return hours * 60 + minutes;
      }
      return 0;
    };
    return getDurationMinutes(a.duration) - getDurationMinutes(b.duration);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#1D3557] mb-6">Find Flights to Japan</h1>
      
      <FlightSearchForm 
        origin={origin}
        setOrigin={setOrigin}
        destination={destination}
        setDestination={setDestination}
        departDate={departDate}
        setDepartDate={setDepartDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        passengers={passengers}
        setPassengers={setPassengers}
        tripType={tripType}
        setTripType={setTripType}
        onSearch={handleSearch}
      />
      
      {error && (
        <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      
      {isLoading && (
        <div className="mt-8 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1D3557]"></div>
        </div>
      )}
      
      {!isLoading && flights.length > 0 && (
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#1D3557]">
              {flights.length} flights found
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#457B9D]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'duration' | 'stops')}
                className="p-2 border border-[#A8DADC] rounded-md text-[#1D3557] focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
              >
                <option value="price">Price</option>
                <option value="duration">Duration</option>
                <option value="stops">Stops</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            {sortedFlights.map((flight) => (
              <div key={flight.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-[#F1FAEE] rounded-full flex items-center justify-center">
                        <span className="text-[#1D3557] font-bold">{flight.airline.substring(0, 2)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-[#1D3557]">{flight.airline}</p>
                        <p className="text-xs text-[#457B9D]">{flight.flightNumber}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <p className="text-lg font-bold text-[#1D3557]">
                          {new Date(flight.departureTime).getHours()}:{new Date(flight.departureTime).getMinutes().toString().padStart(2, '0')}
                        </p>
                        <p className="text-xs text-[#457B9D]">{flight.departureAirport}</p>
                      </div>
                      
                      <div className="flex-1 mx-4">
                        <div className="relative">
                          <div className="border-t border-[#A8DADC]"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                            <ArrowRight className="text-[#457B9D]" size={16} />
                          </div>
                        </div>
                        <div className="text-center mt-1">
                          <div className="flex items-center justify-center space-x-2">
                            <Clock size={14} className="text-[#457B9D]" />
                            <span className="text-xs text-[#457B9D]">{flight.duration}</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2 mt-1">
                            <Luggage size={14} className="text-[#457B9D]" />
                            <span className="text-xs text-[#457B9D]">
                              {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-lg font-bold text-[#1D3557]">
                          {new Date(flight.arrivalTime).getHours()}:{new Date(flight.arrivalTime).getMinutes().toString().padStart(2, '0')}
                        </p>
                        <p className="text-xs text-[#457B9D]">{flight.arrivalAirport}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-1 flex flex-col items-end justify-center">
                    <p className="text-2xl font-bold text-[#E63946]">${flight.price}</p>
                    <p className="text-xs text-[#457B9D] mb-2">per person</p>
                    <button className="bg-[#E63946] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm">
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightResults;
