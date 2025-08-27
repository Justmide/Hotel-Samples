import React, { useState, useEffect } from "react";
import bgImg from "../assets/backgroundImg.jpg";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const taglines = [
    "Your Escape to Timeless Luxury",
    "Where Elegance Meets Comfort",
    "Experience Unparalleled Hospitality"
  ];

  const handleBookNow = () => {
    window.location.href = '/booking';
  };

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % taglines.length);
        setIsVisible(true);
      }, 500);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <section id="home" className="relative bg-dark-blue overflow-hidden">
      {/* Background image with overlay and parallax effect */}
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url(${bgImg})`,
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-6 h-6 rounded-full bg-gold opacity-20 animate-float-1"></div>
        <div className="absolute top-1/3 right-16 w-10 h-10 rounded-full bg-cream opacity-10 animate-float-2"></div>
        <div className="absolute bottom-32 left-20 w-8 h-8 rounded-full bg-gold opacity-15 animate-float-3"></div>
        <div className="absolute bottom-40 right-24 w-12 h-12 rounded-full bg-cream opacity-10 animate-float-4"></div>
        
        {/* Scrolling text effect at bottom */}
        <div className="absolute bottom-10 left-0 right-0 mx-auto w-full overflow-hidden">
          <div className="animate-scroll-text whitespace-nowrap">
            <span className="inline-block px-2 text-cream text-sm md:text-base">
              • Luxury Suites • Fine Dining • Spa • Infinity Pool • Ocean Views • 24/7 Service •
            </span>
            <span className="inline-block px-2 text-cream text-sm md:text-base">
              • Luxury Suites • Fine Dining • Spa • Infinity Pool • Ocean Views • 24/7 Service •
            </span>
          </div>
        </div>

        <div className="max-w-4xl text-center px-6 text-cream z-10">
        {/* Hotel name  */}
          <div className="flex justify-center mb-6">
            <div className="w-40 h-40 rounded-full border-2 border-gold flex items-center justify-center animate-pulse-slow">
              <span className="text-gold font-bold text-2xl">THEJAGS</span>
            </div>
          </div>
          
          {/* Animated tagline with text rotation */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight min-h-[4rem]">
            <span className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {taglines[currentText]}
            </span>
          </h1>
          
          <p className="text-[17px] md:text-xl lg:text-2xl mb-10 leading-relaxed animate-fade-in-up">
            Experience world-class hospitality, breathtaking views, and indulgent comfort in the heart of the city.
          </p>
          
          {/* Enhanced CTA button with hover effects */}
          <div className="relative inline-block group">
            <button
              onClick={handleBookNow}
              className="relative bg-gold text-dark-blue px-10 py-4 rounded-[12px] text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden z-10"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* Button shine effect */}
            <div className="absolute inset-0 h-full w-full -z-10">
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine transition-all duration-300" />
            </div>
            
            {/* Decorative elements around button */}
            <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes scroll-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        @keyframes scroll {
          0% { transform: translateY(0); }
          50% { transform: translateY(5px); }
          100% { transform: translateY(0); }
        }
        .animate-float-1 {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float 10s ease-in-out infinite 1s;
        }
        .animate-float-3 {
          animation: float 12s ease-in-out infinite 2s;
        }
        .animate-float-4 {
          animation: float 9s ease-in-out infinite 3s;
        }
        .animate-scroll-text {
          animation: scroll-text 30s linear infinite;
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;