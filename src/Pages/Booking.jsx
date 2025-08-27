import React, { useState, useEffect } from 'react';
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

  const [currentStep, setCurrentStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const navigate = useNavigate();

  const roomOptions = [
    { id: 1, name: 'Executive Suite', price: 85000, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    { id: 2, name: 'Presidential Suite', price: 175000, image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    { id: 3, name: 'Deluxe Room', price: 55000, image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80' },
    { id: 5, name: 'Family Suite', price: 100000, image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' }
  ];

  useEffect(() => {
    // Animate form elements on load
    const timer = setTimeout(() => {
      setCurrentStep(1);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => {
      const updatedData = { ...prev, [name]: value };
      
      // Calculate price if room type and dates are selected
      if (updatedData.roomType && updatedData.checkIn && updatedData.checkOut) {
        setIsCalculating(true);
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
        
        // Simulate calculation delay for animation
        setTimeout(() => setIsCalculating(false), 300);
      }
      
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to payment 
    document.getElementById('booking-form').classList.add('animate-fade-out');
    setTimeout(() => {
      navigate('/payment', { state: { bookingData } });
    }, 500);
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

  const goToNextStep = () => {
    if (currentStep === 1 && bookingData.roomType) setCurrentStep(2);
    else if (currentStep === 2 && bookingData.checkIn && bookingData.checkOut) setCurrentStep(3);
  };

  const goToPrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const selectedRoom = roomOptions.find(room => room.id === parseInt(bookingData.roomType));

  return (
    <section id="booking" className="py-16 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-[50px] animate-fade-in-down">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">Book Your Stay</h2>
          <p className="text-lg text-gray-600 mt-4">
            Reserve your luxurious experience at THEJAGSIBADAN Hotel
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 -z-10"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gold transform -translate-y-1/2 -z-10 transition-all duration-500"
              style={{ width: `${(currentStep - 1) * 50}%` }}
            ></div>
            
            {[1, 2, 3].map(step => (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= step ? 'bg-gold border-gold text-white' : 'bg-white border-gray-300 text-gray-400'} transition-all duration-300`}>
                  {step}
                </div>
                <span className="mt-2 text-sm font-medium text-dark-blue">
                  {step === 1 ? 'Room' : step === 2 ? 'Dates' : 'Details'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div id="booking-form" className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in-up">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Room Selection */}
            <div className={`transition-all duration-500 ${currentStep === 1 ? 'block' : 'hidden'}`}>
              <h3 className="text-xl font-semibold text-dark-blue mb-6">Select Your Room</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {roomOptions.map(room => (
                  <div 
                    key={room.id}
                    className={`border-2 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 ${bookingData.roomType == room.id ? 'border-gold shadow-lg' : 'border-gray-200'}`}
                    onClick={() => {
                      setBookingData(prev => ({ ...prev, roomType: room.id }));
                      setTimeout(goToNextStep, 300);
                    }}
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={room.image} 
                        alt={room.name} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-dark-blue">{room.name}</h4>
                      <p className="text-gold font-medium mt-1">{formatNaira(room.price)}/night</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={goToNextStep}
                  disabled={!bookingData.roomType}
                  className="bg-gold text-dark-blue px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next: Select Dates
                </button>
              </div>
            </div>

            {/* Step 2: Date Selection */}
            <div className={`transition-all duration-500 ${currentStep === 2 ? 'block' : 'hidden'}`}>
              <h3 className="text-xl font-semibold text-dark-blue mb-6">Select Your Dates</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="animate-fade-in-left">
                  <label className="block text-dark-blue font-medium mb-2">Check-in Date</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={bookingData.checkIn}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div className="animate-fade-in-right">
                  <label className="block text-dark-blue font-medium mb-2">Check-out Date</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={bookingData.checkOut}
                    onChange={handleInputChange}
                    min={getMinCheckoutDate()}
                    disabled={!bookingData.checkIn}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 disabled:bg-gray-100"
                    required
                  />
                </div>
              </div>
              
              {bookingData.checkIn && bookingData.checkOut && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg animate-fade-in-up">
                  <p className="text-dark-blue">
                    <span className="font-semibold">{getNights()} night{getNights() !== 1 ? 's' : ''}</span> • 
                    Check-in: {new Date(bookingData.checkIn).toLocaleDateString()} • 
                    Check-out: {new Date(bookingData.checkOut).toLocaleDateString()}
                  </p>
                </div>
              )}
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={goToPrevStep}
                  className="text-dark-blue border border-dark-blue px-6 py-2 rounded-md font-medium hover:bg-dark-blue hover:text-white transition duration-300"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={goToNextStep}
                  disabled={!bookingData.checkIn || !bookingData.checkOut}
                  className="bg-gold text-dark-blue px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Step 3: Guest Details */}
            <div className={`transition-all duration-500 ${currentStep === 3 ? 'block' : 'hidden'}`}>
              <h3 className="text-xl font-semibold text-dark-blue mb-6">Guest Details</h3>
              
              <div className="mb-8 animate-fade-in-up">
                <label className="block text-dark-blue font-medium mb-2">Number of Guests</label>
                <select
                  name="guests"
                  value={bookingData.guests}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
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
                <div className={`mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-gold transition-all duration-700 ${isCalculating ? 'opacity-70' : 'opacity-100'}`}>
                  <h3 className="text-lg font-semibold text-dark-blue mb-4">Booking Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Room:</span>
                      <span className="font-medium">{selectedRoom?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{getNights()} night{getNights() !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price per night:</span>
                      <span>{formatNaira(selectedRoom?.price || 0)}</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-300 pt-3 mt-3 text-lg">
                      <span className="font-semibold">Total:</span>
                      <span className="font-semibold text-gold">
                        {isCalculating ? (
                          <span className="inline-flex">
                            Calculating<span className="animate-pulse">...</span>
                          </span>
                        ) : (
                          formatNaira(bookingData.price)
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={goToPrevStep}
                  className="text-dark-blue border border-dark-blue px-6 py-2 rounded-md font-medium hover:bg-dark-blue hover:text-white transition duration-300"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!bookingData.roomType || !bookingData.checkIn || !bookingData.checkOut || isCalculating}
                  className="bg-gold text-dark-blue px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  Payment ->
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Best Price Guarantee",
              description: "Find a lower rate elsewhere? We'll match it and give you an additional discount."
            },
            {
              icon: (
                <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ),
              title: "Free Cancellation",
              description: "Cancel for free up to 48 hours before your check-in date."
            },
            {
              icon: (
                <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              ),
              title: "No Booking Fees",
              description: "We don't charge any booking fees or hidden costs."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-dark-blue mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }
        .animate-fade-out {
          animation: fadeOut 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Booking;