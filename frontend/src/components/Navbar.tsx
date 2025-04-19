import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film, User, Menu, X, Heart, Clock, Home } from 'lucide-react';
import SearchBar from './SearchBar';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { title: 'Home', path: '/', icon: <Home size={18} /> },
    { title: 'Favorites', path: '/favorites', icon: <Heart size={18} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`
        fixed left-0 right-0 top-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Film size={24} className="text-blue-500" />
            <span className="text-xl font-bold text-white">MovieMind</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  flex items-center space-x-1 text-sm font-medium transition-colors
                  ${isActive(link.path) 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-white'}
                `}
              >
                {link.icon}
                <span>{link.title}</span>
              </Link>
            ))}
          </nav>
          
          {/* Search and Profile */}
          <div className="flex items-center space-x-4">
            <SearchBar />
            
            
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-1 text-gray-300 hover:bg-gray-800 md:hidden"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      
    </header>
  );
};

export default Navbar;