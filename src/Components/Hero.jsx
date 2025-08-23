const Hero = () => {
   const handleBookNow = () => {
    window.location.href = '/booking';
  };
  return (
    <section id="home" className="pt-20 bg-dark-blue">
      <div 
        className="h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-cream">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow animate-fade-in">
            Experience Ultimate Luxury
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-shadow">
            Indulge in the epitome of elegance and comfort at our exquisite five-star hotel
          </p>
          <button
          onClick={handleBookNow} 
          className="bg-gold text-dark-blue px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
            Book Your Stay
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero