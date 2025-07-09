import { Link } from 'react-router-dom';
import TeakTheoryLogo from '../assets/TeakTheoryLogo.svg';
import ShippingLogo from '../assets/ShippingLogo.svg';
import WarrantyLogo from '../assets/WarrantyLogo.svg';
import WorldWideLogo from '../assets/WorldWideLogo.svg';

const Footer = () => {
  return (
    <div className="border-4 border-white">
      <footer className="bg-[#254127] text-white">
        {/* Top Info Bar */}
        <div className="border-b-4 border-white">
          <div className="bg-[#20381F] text-xs py-3 px-4 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-10 text-center">
            <div className="flex items-center space-x-2">
              <img src={ShippingLogo} alt="Shipping" className="h-4 w-4" />
              <span>Free Shipping over $500</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={WarrantyLogo} alt="Warranty" className="h-4 w-4" />
              <span>5 Year Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={WorldWideLogo} alt="Worldwide Shipping" className="h-4 w-4" />
              <span>Worldwide Shipping</span>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto py-10 px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-3 gap-y-2">
          {/* 1. Logo */}
          <div className="flex flex-col space-y-4">
            <img src={TeakTheoryLogo} alt="Teak Theory Logo" className="h-12" />
          </div>

          {/* 2. Column: Home / About */}
          <div>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About us</Link></li>
              <li><Link to="/why-choose-us" className="hover:underline">Why choose us</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact us</Link></li>
            </ul>
          </div>

          {/* 3. Column: Shop / Furniture */}
          <div>
            <ul className="space-y-2 text-xs">
              <li><Link to="/shop" className="hover:underline">Shop</Link></li>
              <li><Link to="/furniture" className="hover:underline">Furniture</Link></li>
              <li><Link to="/collections" className="hover:underline">Collections</Link></li>
              <li><Link to="/bedroom" className="hover:underline">Bedroom</Link></li>
              <li><Link to="/outdoor" className="hover:underline">Outdoor</Link></li>
            </ul>
          </div>

          {/* 4. Column: Policies */}
          <div>
            <ul className="space-y-2 text-xs">
              <li><Link to="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/return-policy" className="hover:underline">Return Policy</Link></li>
              <li><Link to="/shopping-policy" className="hover:underline">Shopping Policy</Link></li>
            </ul>
          </div>

          {/* 5. Column: Newsletter + Social Media */}
          <div className="flex flex-col space-y-4">
            <div>
              <section>
                <p className="text-sm mb-2">
                  Join our newsletter and get 20% off <br />your first purchase
                </p>
                <form className="flex flex-col sm:flex-row w-full max-w-sm space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    className="bg-[#3E5541] text-white text-xs px-6 py-1 w-full focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black text-xs px-2 py-1 w-full sm:w-auto"
                  >
                    Subscribe
                  </button>
                </form>
              </section>
            </div>
            <div>
              <p className="text-xs mb-2">Social Media</p>
              <div className="flex gap-2 text-xs flex-wrap">
                <a href="#" className="hover:underline">Instagram</a>
                <span>/</span>
                <a href="#" className="hover:underline">Facebook</a>
                <span>/</span>
                <a href="#" className="hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 text-xs py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-white/60">
          <span>© 2025 Teak Theory</span>
          <span className="mt-2 md:mt-0">Designed by: Wisdom Tooth Technologies</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;