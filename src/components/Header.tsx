import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl md:text-3xl font-black text-black">
          TheCraftsync
        </div>

        {/* Right Side: Menu Button + Hire Us Button (always together) */}
        <div className="flex items-center gap-4">
          {/* Hire Us Button */}
          <button className="group hidden sm:flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5">
            Hire Us
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Menu Button with Hover Animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 text-black z-50 transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            <div className="relative w-8 h-8">
              <Menu className={`absolute inset-0 w-8 h-8 transition-all duration-500 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`absolute inset-0 w-8 h-8 transition-all duration-500 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
            {/* Subtle ring on hover */}
            <span className="absolute inset-0 rounded-full bg-black/10 scale-0 transition-transform duration-300 group-hover:scale-150" />
          </button>
        </div>
      </div>

      {/* Compact Menu Panel - Slides in from right (not full screen) */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl translate-x-0 transition-transform duration-500 ease-out">
            <div className="flex flex-col items-end justify-center h-full px-12">
              <ul className="space-y-8 text-right mb-16">
                {navItems.map((item, index) => (
                  <li
                    key={item.label}
                    className="overflow-hidden"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-3xl md:text-4xl font-bold text-black relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-1 after:bg-black after:transition-all after:duration-500 hover:after:w-full hover:after:left-0"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Hire Us Button inside menu (visible on mobile too) */}
              <button
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-4 px-8 py-4 bg-black text-white rounded-full font-bold text-xl transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:-translate-y-1"
              >
                Hire Us
                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        ul > li {
          animation: slideIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;