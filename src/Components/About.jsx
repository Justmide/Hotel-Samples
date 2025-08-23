import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      title: "World Class Spa",
      description: "Relax and rejuvenate",
      icon: (
        <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Fine Dining",
      description: "Exquisite culinary experiences",
      icon: (
        <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Fitness Center",
      description: "State-of-the-art equipment",
      icon: (
        <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Luxury Suites",
      description: "Elegant and spacious rooms",
      icon: (
        <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  const images = [
    "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-dark-blue text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gold to-cream bg-clip-text text-transparent">
            About Luxury Haven
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Where extraordinary experiences and unparalleled luxury meet
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                Nestled in the heart of the city, Brava Hotel offers an unparalleled experience of elegance and comfort. 
                Since 1995, we have been providing exceptional service to discerning travelers from around the world.
              </p>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                Our commitment to excellence has earned us numerous awards, including the prestigious Five-Star Diamond Award 
                for ten consecutive years. We take pride in creating unforgettable experiences for our guests.
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-dark-blue to-[#1E293B] p-4 md:p-5 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                >
                  <div className="bg-gold p-3 rounded-full mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <button className="group relative bg-gold text-dark-blue px-6 py-3 md:px-8 md:py-4 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <span className="relative z-10">Explore Our Services</span>
              <div className="absolute inset-0 bg-cream transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
          
          {/* Image Gallery */}
          <div className={`grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {images.map((image, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-xl group ${index === 1 || index === 2 ? 'mt-8' : ''}`}
              >
                <div className="aspect-square md:aspect-[3/4]">
                  <img 
                    src={image} 
                    alt={`Luxury Haven ${index === 0 ? 'Spa' : index === 1 ? 'Restaurant' : index === 2 ? 'Pool' : 'Lobby'}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-cream font-semibold">
                      {index === 0 ? 'Spa & Wellness' : 
                       index === 1 ? 'Fine Dining' : 
                       index === 2 ? 'Infinity Pool' : 
                       'Grand Lobby'}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-gray-700 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">25+</div>
            <div className="text-gray-300">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">150+</div>
            <div className="text-gray-300">Luxury Rooms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">10K+</div>
            <div className="text-gray-300">Happy Guests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">15+</div>
            <div className="text-gray-300">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;