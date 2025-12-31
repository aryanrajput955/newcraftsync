import React, { useState } from 'react';
import { Code, Megaphone, TrendingUp, Search, Brain } from 'lucide-react';

interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 'development',
    category: 'DEVELOPMENT',
    title: 'Custom Web & App Development',
    description: 'Build powerful, scalable applications tailored to your business needs with cutting-edge technologies.',
    items: [
      'Progressive Web Applications',
      'Native Mobile Apps (iOS & Android)',
      'Enterprise Web Solutions',
      'API Development & Integration'
    ],
    icon: <Code className="w-full h-full" />
  },
  {
    id: 'marketing',
    category: 'DIGITAL MARKETING',
    title: 'Social Media & Ads Management',
    description: 'Drive growth with strategic social media management and high-performance advertising campaigns.',
    items: [
      'Social Media Management',
      'Performance Marketing & PPC',
      'Google My Business Optimization',
      'Campaign Analytics & Optimization'
    ],
    icon: <Megaphone className="w-full h-full" />
  },
  {
    id: 'seo',
    category: 'SEARCH OPTIMIZATION',
    title: 'SEO & Organic Growth',
    description: 'Dominate search rankings and increase organic traffic with data-driven SEO strategies.',
    items: [
      'Technical SEO Audits',
      'On-Page & Off-Page Optimization',
      'Content Strategy & Marketing',
      'Local SEO & Link Building'
    ],
    icon: <Search className="w-full h-full" />
  },
  {
    id: 'ai',
    category: 'AI SOLUTIONS',
    title: 'AI Implementation & Automation',
    description: 'Transform your business with intelligent automation and cutting-edge AI technologies.',
    items: [
      'Custom AI Chatbots',
      'Business Process Automation',
      'Generative AI Solutions',
      'Third-party API Integrations'
    ],
    icon: <Brain className="w-full h-full" />
  },
  {
    id: 'consulting',
    category: 'STRATEGY',
    title: 'Business & Tech Consulting',
    description: 'Strategic guidance to align technology with your business goals and drive meaningful impact.',
    items: [
      'Digital Transformation Strategy',
      'Technology Stack Consultation',
      'Business Process Optimization',
      'Growth & Scaling Roadmaps'
    ],
    icon: <TrendingUp className="w-full h-full" />
  }
];

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div 
      className="relative w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16"
      style={{
        backgroundColor: '#ffffff', /* --snow-white */
        color: '#0f172a' /* --navy-dark */
      }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
            <span style={{ color: '#0f172a' /* --navy-dark */ }}>OUR </span>
            <span style={{ color: '#14b8a6' /* --teal-accent */ }}>SERVICES</span>
          </h2>
          {/* Custom "ALL SERVICES" Button with Teal Hover */}
          <button
            className="hidden sm:flex rounded-full px-8 py-6 text-lg font-bold transition-all duration-300"
            style={{
              border: '2px solid rgba(15, 23, 42, 0.8)', /* --navy-dark / 80% */
              color: '#0f172a', /* --navy-dark */
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#14b8a6'; /* --teal-accent */
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#14b8a6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#0f172a';
              e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.8)';
            }}
          >
            ALL SERVICES
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Sidebar - Categories */}
        <div className="lg:col-span-3 space-y-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`w-full text-left transition-all duration-300 pl-4 ${
                activeService.id === service.id
                  ? 'font-black text-2xl border-l-4'
                  : 'font-bold text-xl'
              }`}
              style={{
                color: activeService.id === service.id ? '#0f172a' : '#475569', /* --navy-dark / --slate-blue */
                borderColor: activeService.id === service.id ? '#14b8a6' : 'transparent', /* --teal-accent */
              }}
              onMouseEnter={(e) => {
                if (activeService.id !== service.id) {
                  e.currentTarget.style.color = '#0f172a';
                }
              }}
              onMouseLeave={(e) => {
                if (activeService.id !== service.id) {
                  e.currentTarget.style.color = '#475569';
                }
              }}
            >
              {service.category}
            </button>
          ))}
        </div>

        {/* Center Content */}
        <div className="lg:col-span-5 space-y-8 animate-fade-in">
          <p className="text-lg leading-relaxed" style={{ color: '#475569' /* --slate-blue */ }}>
            {activeService.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {activeService.items.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg transition-all duration-300"
                style={{
                  border: '1px solid rgba(71, 85, 105, 0.3)', /* --slate-blue / 30% */
                  animationDelay: `${index * 100}ms`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.5)'; /* --teal-accent */
                  e.currentTarget.style.backgroundColor = 'rgba(226, 232, 240, 0.5)'; /* --alice-blue / 50% */
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.3)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <p className="font-medium text-base" style={{ color: '#0f172a' /* --navy-dark */ }}>{item}</p>
                <div 
                  className="mt-2 h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{
                    backgroundColor: '#14b8a6' /* --teal-accent */
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Illustration */}
        <div className="lg:col-span-4 flex items-center justify-center">
          <div className="relative w-80 h-80 animate-float">
            <div className="absolute inset-0 flex items-center justify-center animate-fade-in" style={{ color: 'rgba(71, 85, 105, 0.3)' /* --slate-blue / 30% */ }}>
              {activeService.icon}
            </div>
            {/* Decorative elements */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="#475569" /* --slate-blue */
                strokeWidth="2"
                opacity="0.3"
                className="animate-spin-slow"
                strokeDasharray="20 10"
              />
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="#475569" /* --slate-blue */
                strokeWidth="2"
                opacity="0.2"
                className="animate-spin-reverse"
                strokeDasharray="15 15"
              />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;