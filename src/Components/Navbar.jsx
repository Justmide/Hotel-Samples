import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookNow = () => {
    window.location.href = '/booking';
  };

  const navLinks = [
    { to: '#home', label: 'Home' },
    { to: '#rooms', label: 'Rooms' },
    { to: '#about', label: 'About' },
    { to: '/contacts', label: 'Contact', isLink: true },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-dark-blue fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="text-cream">
            <h1 className="text-gold text-2xl font-bold font-serif">
              THEJAGSIBADAN
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) =>
              link.isLink ? (
                <Link
                  key={index}
                  to={link.to}
                  className="text-cream hover:text-gold transition duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={index}
                  href={link.to}
                  className="text-cream hover:text-gold transition duration-300"
                >
                  {link.label}
                </a>
              )
            )}
            <button
              onClick={handleBookNow}
              className="bg-gold text-dark-blue px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300 font-medium"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
         <div className="md:hidden">
  <button
    onClick={toggleMenu}
    className="text-cream focus:outline-none"
    aria-label="Toggle menu"
  >
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  </button>
</div>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-dark-blue pb-3">
            <div className="flex flex-col space-y-3 px-2 pt-2 pb-3">
              {navLinks.map((link, index) =>
                link.isLink ? (
                  <Link
                    key={index}
                    to={link.to}
                    className="text-cream hover:text-gold px-3 py-2 rounded-md text-base font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={link.to}
                    className="text-cream hover:text-gold px-3 py-2 rounded-md text-base font-medium"
                  >
                    {link.label}
                  </a>
                )
              )}
              <button
                onClick={handleBookNow}
                className="bg-gold text-dark-blue px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300 font-medium w-full mt-2"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
