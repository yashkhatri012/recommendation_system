import React from 'react';
import { Film, Github, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    about: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    
    socials: [
      { name: 'Twitter', href: '#', icon: <Twitter size={18} /> },
      { name: 'Instagram', href: '#', icon: <Instagram size={18} /> },
      { name: 'Github', href: '#', icon: <Github size={18} /> },
    ],
  };
  
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Film size={24} className="text-blue-500" />
              <span className="text-xl font-bold text-white">MovieMind</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Discover new movies, get personalized recommendations,
              and stay up to date with the latest releases.
            </p>
            <div className="mt-4 flex space-x-4">
              {footerLinks.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 transition-colors hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* About Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          
          
          {/* Newsletter */}
          
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-gray-400 md:flex-row md:space-y-0">
            <p>© {currentYear} MovieMind. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400">Terms of Service</Link>
              <Link to="/accessibility" className="hover:text-blue-400">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;