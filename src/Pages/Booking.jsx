import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import NairaSymbol, { formatNaira } from '../Components/NairaSymbol';

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    roomType: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    price: 0
  });

  const navigate = useNavigate(); // Initialize navigate

  const roomOptions = [
    { id: 1, name: 'Executive Suite', price: 85000 },
    { id: 2, name: 'Presidential Suite', price: 175000 },
    { id: 3, name: 'Deluxe Room', price: 55000 },
    { id: 4, name: 'Ocean View Room', price: 70000 },
    { id: 5, name: 'Family Suite', price: 100000 }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => {
      const updatedData = { ...prev, [name]: value };
      
      // Calculate price if room type and dates are selected
      if (updatedData.roomType && updatedData.checkIn && updatedData.checkOut) {
        const selectedRoom = roomOptions.find(room => room.id === parseInt(updatedData.roomType));
        if (selectedRoom) {
          const checkInDate = new Date(updatedData.checkIn);
          const checkOutDate = new Date(updatedData.checkOut);
          const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
          if (nights > 0) {
            updatedData.price = selectedRoom.price * nights;
          } else {
            updatedData.price = 0;
          }
        }
      }
      
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to payment page
    navigate('/payment', { state: { bookingData } });
  };

  const getNights = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0;
    const checkInDate = new Date(bookingData.checkIn);
    const checkOutDate = new Date(bookingData.checkOut);
    return Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
  };

  const getMinCheckoutDate = () => {
    if (!bookingData.checkIn) return '';
    const nextDay = new Date(bookingData.checkIn);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay.toISOString().split('T')[0];
  };

  return (
    <section id="booking" className="py-16 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-[50px] ">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">Book Your Stay</h2>
          <p className="text-lg text-gray-600 mt-4">
            Reserve your luxurious experience at Brava Hotel
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {/* Room Type Selection */}
            <div className="mb-6">
              <label className="block text-dark-blue font-medium mb-2">Select Room Type</label>
              <select
                name="roomType"
                value={bookingData.roomType}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                required
              >
                <option value="">Choose a room type</option>
                {roomOptions.map(room => (
                  <option key={room.id} value={room.id}>
                    {room.name} - <NairaSymbol />{room.price.toLocaleString()}/night
                  </option>
                ))}
              </select>
            </div>

            {/* Date Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-dark-blue font-medium mb-2">Check-in Date</label>
                <input
                  type="date"
                  name="checkIn"
                  value={bookingData.checkIn}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-dark-blue font-medium mb-2">Check-out Date</label>
                <input
                  type="date"
                  name="checkOut"
                  value={bookingData.checkOut}
                  onChange={handleInputChange}
                  min={getMinCheckoutDate()}
                  disabled={!bookingData.checkIn}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent disabled:bg-gray-100"
                  required
                />
              </div>
            </div>

            {/* Guests Selection */}
            <div className="mb-8">
              <label className="block text-dark-blue font-medium mb-2">Number of Guests</label>
              <select
                name="guests"
                value={bookingData.guests}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Summary */}
            {bookingData.price > 0 && (
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-dark-blue mb-2">Booking Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Room:</span>
                    <span>{roomOptions.find(r => r.id === parseInt(bookingData.roomType))?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{getNights()} night{getNights() !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price per night:</span>
                    <span><NairaSymbol />{roomOptions.find(r => r.id === parseInt(bookingData.roomType))?.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold text-gold">{formatNaira(bookingData.price)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
            
              type="submit"
              disabled={!bookingData.roomType || !bookingData.checkIn || !bookingData.checkOut}
              className="w-full bg-gold text-dark-blue py-3 rounded-md font-semibold hover:bg-opacity-90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Complete Booking
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-dark-blue mb-2">Best Price Guarantee</h3>
            <p className="text-gray-600">Find a lower rate elsewhere? We'll match it and give you an additional discount.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-dark-blue mb-2">Free Cancellation</h3>
            <p className="text-gray-600">Cancel for free up to 48 hours before your check-in date.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-dark-blue mb-2">No Booking Fees</h3>
            <p className="text-gray-600">We don't charge any booking fees or hidden costs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;