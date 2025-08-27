import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: "World Class Spa",
      description: "Relax and rejuvenate with our premium spa treatments",
      icon: (
        <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Fine Dining",
      description: "Exquisite culinary experiences by master chefs",
      icon: (
        <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Fitness Center",
      description: "State-of-the-art equipment with personal trainers",
      icon: (
        <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Luxury Suites",
      description: "Elegant and spacious rooms with premium amenities",
      icon: (
        <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  const images = [
    {
      url: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      title: "Spa & Wellness"
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Fine Dining"
    },
    {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      title: "Infinity Pool"
    },
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Grand Lobby"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-dark-blue text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-gold/10 px-4 py-2 rounded-full mb-6">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">Premium Experience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold via-cream to-gold bg-clip-text text-transparent">
              THEJAGSIBADAN
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where extraordinary experiences and unparalleled luxury converge in the heart of the city
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-150 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-6">Our Story</h3>
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-200">
                Nestled in the vibrant heart of the city, THEJAGSIBADAN stands as a beacon of elegance and comfort. 
                Since our establishment, we have dedicated ourselves to providing exceptional service to discerning 
                travelers from around the globe.
              </p>
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-200">
                Our unwavering commitment to excellence has earned us numerous prestigious awards, including the 
                celebrated Five-Star Diamond Award. We take immense pride in crafting 
                unforgettable experiences that linger in the memories of our guests long after their departure.
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-dark-blue/50 to-[#1E293B]/70 p-5 rounded-2xl border border-gold/20 shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-2 flex items-start group ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gold p-3 rounded-xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gold group-hover:text-cream transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <button className="group relative bg-gold text-dark-blue px-8 py-4 rounded-xl font-semibold hover:bg-cream transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-lg hover:shadow-xl">
              <span className="relative z-10 flex items-center justify-center">
                Discover Our Services
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-cream transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
          
          {/* Image Gallery */}
          <div className={`grid grid-cols-2 gap-4 sm:gap-5 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {images.map((image, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-2xl group ${
                  index === 1 || index === 2 ? 'mt-8' : ''
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="aspect-square md:aspect-[3/4]">
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-5 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-cream font-bold text-lg drop-shadow-lg">
                      {image.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-gold mt-2 transform translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-500 delay-150"></div>
                  </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gold/20 transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: "25+", label: "Years of Excellence" },
            { value: "150+", label: "Luxury Rooms" },
            { value: "10K+", label: "Happy Guests" },
            { value: "15+", label: "Awards Won" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-300 group-hover:text-cream transition-colors duration-300 font-medium">
                {stat.label}
              </div>
              <div className="w-8 h-0.5 bg-gold mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;