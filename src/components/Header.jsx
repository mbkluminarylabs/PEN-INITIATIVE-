import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.jpeg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when on home page
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = location.state.scrollTo;
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
      window.history.replaceState({}, document.title); // remove state after scrolling
    }
  }, [location]);

  const navItems = [
    { to: 'home', label: 'HOME' },
    { to: 'about', label: 'WHO WE ARE' },
    { to: 'gallery', label: 'GALLERY' },
    { to: 'programs', label: 'PROGRAMS' },
    { to: 'impact', label: 'IMPACTS' },
    { to: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (section) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black backdrop-blur-md shadow-lg' : 'bg-[#d53571]'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-[#d53571] to-[#ebad4b] p-2 rounded-full">
              <img src={logo} alt="logo" width={30} className="rounded-full" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white">PEN INITIATIVE</h1>
              <p className="text-base text-white">Where education matters for all</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.to}
                className="text-white hover:text-blue-950 transition-colors duration-200 font-bold cursor-pointer"
                onClick={() => handleNavClick(item.to)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/donate"
              className="bg-gradient-to-r from-[#d53571] to-[#ebad4b] text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.to}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer"
                  onClick={() => handleNavClick(item.to)}
                >
                  {item.label}
                </button>
              ))}

              <Link
                to="/donate"
                className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-teal-700 transition-all duration-200 mt-4"
              >
                Donate
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
