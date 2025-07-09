import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSearch, FiHeart } from 'react-icons/fi';
import bgimage1 from '../assets/bgimage1.svg';
import TeakTheoryLogo from '../assets/TeakTheoryLogo.svg';
import loginIcon from '../assets/LoginIcon.svg';
import CartBag from '../assets/CartBag.svg';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col overflow-hidden"
      style={{ backgroundImage: `url(${bgimage1})` }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-5 sm:px-6 md:px-16 py-5 sm:py-6 relative z-30">
        <img 
          src={TeakTheoryLogo} 
          alt="Teak Theory Logo" 
          className="h-10 sm:h-10 md:h-12 w-auto" 
        />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-white font-medium text-sm">
          <Link to="/new" className="hover:opacity-80 transition">New</Link>
          <Link to="/furniture" className="hover:opacity-80 transition">Furniture</Link>
          <Link to="/living-room" className="hover:opacity-80 transition">Living Room</Link>
          <Link to="/dining" className="hover:opacity-80 transition">Dining</Link>
          <Link to="/bedroom" className="hover:opacity-80 transition">Bedroom</Link>
          <Link to="/study" className="hover:opacity-80 transition">Study</Link>
          <Link to="/outdoor" className="hover:opacity-80 transition">Outdoor</Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6 text-white text-sm">
          <Link to="/login" className="flex items-center space-x-1 hover:opacity-80 transition">
            <img src={loginIcon} alt="Login" className="w-4 h-4" />
            <span className="text-white text-sm">Login</span>
          </Link>
          <Link to="/search" className="hover:opacity-80 transition">
            <FiSearch className="text-lg" />
          </Link>
          <Link to="/wishlist" className="hover:opacity-80 transition">
            <FiHeart className="text-lg" />
          </Link>
          <Link to="/cart" className="hover:opacity-80 transition">
            <img src={CartBag} alt="Shopping Cart" className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-white text-xl transition-all duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <Link 
          to="/new" 
          className="py-2 hover:opacity-80 transition" 
          onClick={() => setIsOpen(false)}
        >
          New
        </Link>
        <Link 
          to="/furniture" 
          className="py-2 hover:opacity-80 transition" 
          onClick={() => setIsOpen(false)}
        >
          Furniture
        </Link>
        <Link 
          to="/living-room" 
          className="py-2 hover:opacity-80 transition" 
          onClick={() => setIsOpen(false)}
        >
          Living Room
        </Link>
        <Link 
          to="/dining" 
          className="py-2 hover:opacity-80 transition" 
          onClick={() => setIsOpen(false)}
        >
          Dining
        </Link>
        <Link 
          to="/bedroom" 
          className="py-2 hover:opacity-80 transition" 
          onClick={() => setIsOpen(false)}
        >
          Bedroom
        </Link>
        <Link 
          to="/study" 
          className="py-2 hover:opacity-80 transition" 
          onClick={() => setIsOpen(false)}
        >
          Study
        </Link>
        <Link 
          to="/outdoor" 
          className="py-2 hover:opacity-80 transition" 
          onClick={() => setIsOpen(false)}
        >
          Outdoor
        </Link>
        <Link 
          to="/login" 
          className="py-2 hover:opacity-80 transition mt-4 border-t border-white pt-4"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
      </div>

      {/* Hero Text */}
      <div className="flex-grow flex flex-col items-center justify-center text-center text-white px-4 z-10 sm:mt-[-3.5rem] md:mt-[-5rem]">
        <h1 className="font-garamond text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight tracking-tight max-w-[90%]">
          Designed To Be Passed Down
        </h1>

        <h2 className="mt-4 sm:mt-6 font-garamond italic font-light text-3xl sm:text-4xl md:text-5xl lg:text-[64px] tracking-tight max-w-[90%] leading-tight">
          Not Thrown Away
        </h2>

        <div className="mt-8 sm:mt-10">
          <Link 
            to="/collection"
            className="bg-white text-black px-8 py-3 sm:px-10 sm:py-3 shadow hover:bg-gray-100 transition text-base font-medium"
            aria-label="Explore collection"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;