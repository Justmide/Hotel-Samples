const Rooms = () => {
   const handleBookNow = () => {
    window.location.href = '/booking';
  };
  const rooms = [
    {
      id: 1,
      name: "Executive Suite",
      description: "Spacious suite with panoramic views, premium amenities, and a separate living area for ultimate comfort.",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["King Size Bed", "Ocean View", "Spa Bath", "Private Balcony"]
    },
    {
      id: 2,
      name: "Presidential Suite",
      description: "The epitome of luxury with exquisite decor, premium services, and exclusive access to our VIP lounge.",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Butler Service", "Private Dining", "Jacuzzi", "Library"]
    },
    {
      id: 3,
      name: "Deluxe Room",
      description: "Elegantly designed room with modern amenities, luxurious bathroom, and stunning city views.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      features: ["Queen Size Bed", "City View", "Mini Bar", "Smart TV"]
    }
  ]

  return (

    <section id="rooms" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">Luxurious Accommodations</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our exquisite collection of rooms and suites designed for your ultimate comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map(room => (
            <div key={room.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-blue mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <ul className="mb-6">
                  {room.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700 mb-2">
                      <svg className="w-4 h-4 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center">
                  <button 
                  onClick={handleBookNow}
                  className="bg-gold text-dark-blue px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition duration-300">
                    Book Now
                  </button>
                  <button className="text-dark-blue border border-dark-blue px-4 py-2 rounded-md text-sm font-medium hover:bg-dark-blue hover:text-cream transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-dark-blue text-cream px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition duration-300">
            View All Rooms
          </button>
        </div>
      </div>
    </section>
  )
}

export default Rooms