import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer 
      className="relative w-full px-6 py-16 md:py-20"
      style={{
        backgroundColor: '#0f172a', /* --navy-dark */
        color: '#ffffff' /* --snow-white */
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Logo & Email */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <span 
              className="font-bold text-3xl md:text-4xl"
              style={{ color: '#14b8a6' /* --teal-accent */ }}
            >
              TheCraftsync
            </span>
          </div>
          <a 
            href="mailto:thecraftsync@gmail.com" 
            className="text-3xl md:text-4xl font-medium transition-colors duration-300 hover:opacity-80"
            style={{ color: '#ffffff' /* --snow-white */ }}
          >
            thecraftsync@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <ul className="flex flex-wrap gap-4 md:gap-6 text-sm font-medium" style={{ color: '#475569' /* --slate-blue */ }}>
            <li><a href="#" className="hover:opacity-80 transition-opacity duration-300" style={{ color: '#475569' }}>LinkedIn ↗</a></li>
            <li><a href="#" className="hover:opacity-80 transition-opacity duration-300" style={{ color: '#475569' }}>Facebook ↗</a></li>
            <li><a href="#" className="hover:opacity-80 transition-opacity duration-300" style={{ color: '#475569' }}>Instagram ↗</a></li>
            <li><a href="#" className="hover:opacity-80 transition-opacity duration-300" style={{ color: '#475569' }}>Bluesky ↗</a></li>
          </ul>
        </div>

        {/* Links & Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <ul className="flex flex-wrap gap-4 md:gap-6 text-sm font-medium" style={{ color: '#475569' /* --slate-blue */ }}>
            <li><a href="#" className="hover:opacity-80 transition-opacity duration-300" style={{ color: '#475569' }}>Contact</a></li>
            <li><a href="#" className="hover:opacity-80 transition-opacity duration-300" style={{ color: '#475569' }}>FAQs</a></li>
            <li><a href="#" className="hover:opacity-80 transition-opacity duration-300" style={{ color: '#475569' }}>Privacy Policy</a></li>
          </ul>

          <div className="relative">
            <input 
              type="email" 
              placeholder="Sign up to our newsletter" 
              className="w-full md:w-80 px-6 py-4 bg-transparent rounded-full focus:outline-none transition-colors duration-300"
              style={{
                border: '1px solid rgba(71, 85, 105, 0.5)', /* --slate-blue */
                color: '#ffffff', /* --snow-white */
              }}
            />
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: '#14b8a6', /* --teal-accent */
                color: '#ffffff'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#10b981'} /* --emerald-accent */
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#14b8a6'}
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sectors */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm mb-8" style={{ color: '#475569' /* --slate-blue */ }}>
          <span>Our sectors:</span>
          <span className="px-4 py-1 rounded-full transition-colors duration-300 cursor-pointer" style={{ backgroundColor: 'rgba(226, 232, 240, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(20, 184, 166, 0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(226, 232, 240, 0.1)'}>Development</span>
          <span className="px-4 py-1 rounded-full transition-colors duration-300 cursor-pointer" style={{ backgroundColor: 'rgba(226, 232, 240, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(20, 184, 166, 0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(226, 232, 240, 0.1)'}>Marketing</span>
          <span className="px-4 py-1 rounded-full transition-colors duration-300 cursor-pointer" style={{ backgroundColor: 'rgba(226, 232, 240, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(20, 184, 166, 0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(226, 232, 240, 0.1)'}>SEO</span>
          <span className="px-4 py-1 rounded-full transition-colors duration-300 cursor-pointer" style={{ backgroundColor: 'rgba(226, 232, 240, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(20, 184, 166, 0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(226, 232, 240, 0.1)'}>AI Solutions</span>
          <span className="px-4 py-1 rounded-full transition-colors duration-300 cursor-pointer" style={{ backgroundColor: 'rgba(226, 232, 240, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(20, 184, 166, 0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(226, 232, 240, 0.1)'}>Consulting</span>
        </div>

        {/* Simple Copyright */}
        <div className="text-sm" style={{ color: '#475569' /* --slate-blue */ }}>
          © TheCraftsync 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;