import { useState } from 'react';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = () => {
    window.location.href = '/booking';
  };

  const handleViewDetails = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedRoom(null), 300); // Wait for animation to complete
  };

  const rooms = [
    {
      id: 1,
      name: "Executive Suite",
      description: "Spacious suite with panoramic views, premium amenities, and a separate living area for ultimate comfort.",
      longDescription: "Our Executive Suite offers 85 sqm of luxurious living space with floor-to-ceiling windows providing breathtaking ocean views. The suite features a king-sized bed with premium linens, a separate living area with comfortable seating, and a marble bathroom with deep soaking tub and separate rain shower. Guests enjoy exclusive access to the Executive Lounge with complimentary breakfast and evening cocktails.",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["King Size Bed", "Ocean View", "Spa Bath", "Private Balcony", "Free WiFi", "24/7 Room Service"],
      size: "85 sqm",
      price: 399,
      maxGuests: 3
    },
    {
      id: 2,
      name: "Presidential Suite",
      description: "The epitome of luxury with exquisite decor, premium services, and exclusive access to our VIP lounge.",
      longDescription: "The Presidential Suite is our most opulent offering at 150 sqm of meticulously designed space. This two-room suite features a grand living room with fireplace, formal dining area, and a master bedroom with a custom-designed king bed. The luxury marble bathroom includes a jacuzzi tub and premium toiletries. Enjoy personalized butler service, private check-in, and exclusive access to our rooftop terrace with panoramic city views.",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Butler Service", "Private Dining", "Jacuzzi", "Library", "Fireplace", "Private Gym Access"],
      size: "150 sqm",
      price: 799,
      maxGuests: 4
    },
    {
      id: 3,
      name: "Deluxe Room",
      description: "Elegantly designed room with modern amenities, luxurious bathroom, and stunning city views.",
      longDescription: "Our Deluxe Rooms offer a perfect blend of comfort and style across 45 sqm of well-appointed space. Each room features a queen-sized bed with premium mattress, a sitting area, and a spacious bathroom with walk-in shower. Large windows provide abundant natural light and picturesque city views. Modern amenities include a smart TV with streaming capabilities, a well-stocked minibar, and high-speed WiFi.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      features: ["Queen Size Bed", "City View", "Mini Bar", "Smart TV", "Work Desk", "Coffee Maker"],
      size: "45 sqm",
      price: 249,
      maxGuests: 2
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Fade-in Animation */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">Luxurious Accommodations</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our exquisite collection of rooms and suites designed for your ultimate comfort
          </p>
        </div>

        {/* Rooms Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image with Zoom Effect */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gold text-dark-blue px-3 py-1 rounded-md text-sm font-semibold">
                  ${room.price}/night
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-blue mb-2 transition-colors duration-300 hover:text-gold">
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-4 transition-colors duration-300 hover:text-gray-800">
                  {room.description}
                </p>

                {/* Room Specifications */}
                <div className="flex justify-between mb-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {room.size}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Up to {room.maxGuests} Guests
                  </span>
                </div>

                {/* Features List with Checkmark Animation */}
                <ul className="mb-6 space-y-2">
                  {room.features.slice(0, 3).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-700 transition-transform duration-300 hover:translate-x-1"
                    >
                      <svg
                        className="w-4 h-4 text-gold mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                  {room.features.length > 3 && (
                    <li className="text-sm text-gray-500 ml-6">
                      +{room.features.length - 3} more features
                    </li>
                  )}
                </ul>

                {/* Buttons with Hover Effects */}
                <div className="flex justify-between items-center space-x-4">
                  <button
                    onClick={handleBookNow}
                    className="bg-gold text-dark-blue px-5 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Book Now
                  </button>
                  <button 
                    onClick={() => handleViewDetails(room)}
                    className="text-dark-blue border border-dark-blue px-5 py-2 rounded-md text-sm font-medium hover:bg-dark-blue hover:text-cream transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Rooms Button with Pulse Animation */}
        <div className="text-center mt-12">
          <button className="bg-dark-blue text-cream px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse-slow">
            View All Rooms
          </button>
        </div>
      </div>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div className={`fixed inset-0 z-50 overflow-y-auto transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={closeModal}
            ></div>

            {/* Modal panel */}
            <div className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl leading-6 font-bold text-dark-blue">
                        {selectedRoom.name}
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        onClick={closeModal}
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-64 object-cover rounded-lg" />
                        
                        <div className="mt-4 grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="text-sm">{selectedRoom.size}</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="text-sm">Up to {selectedRoom.maxGuests} Guests</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm">${selectedRoom.price}/night</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-600 mb-4">
                          {selectedRoom.longDescription}
                        </p>
                        
                        <h4 className="font-semibold text-dark-blue mb-2">Room Features</h4>
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {selectedRoom.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <svg
                                className="w-4 h-4 text-gold mr-2 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <button
                          onClick={handleBookNow}
                          className="w-full bg-gold text-dark-blue py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300"
                        >
                          Book This Room
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Rooms;