import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface Testimonial {
  company: string;
  logo: string;
  quote: string;
  name: string;
  position: string;
  color: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const testimonials: Testimonial[] = [
    {
      company: 'TechCorp',
      logo: 'TC',
      quote: ' The Craftsync understood that vision. They transformed the brief beyond what we had imagined. It\'s no exaggeration to say the final product redefines what a website can be.',
      name: 'Sarah Johnson',
      position: 'CEO of TechCorp Industries',
      color: '#f5e6d3'
    },
    {
      company: 'InnovateLabs',
      logo: 'IL',
      quote: ' They brought our ideas to life with precision and creativity that truly elevated our brand presence. Working with them was an absolute pleasure from start to finish.',
      name: 'Michael Chen',
      position: 'Head of Product at InnovateLabs',
      color: '#d4e8d4'
    },
    {
      company: 'DesignHub',
      logo: 'DH',
      quote: 'Outstanding work from start to finish. The Craftsync team demonstrated exceptional skill in understanding our needs and delivering results that truly made an impact on our business and our clients.',
      name: 'Emily Rodriguez',
      position: 'Creative Director at DesignHub',
      color: '#fef3c7'
    },
    {
      company: 'FutureScale',
      logo: 'FS',
      quote: 'Collaborating with The Craftsync was seamless and productive. Their innovative solutions and dedicated approach helped us achieve our goals faster than we imagined possible.',
      name: 'David Park',
      position: 'Head of Marketing at FutureScale',
      color: '#dbeafe'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStart(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setDragOffset(clientX - dragStart);
  };

  const handleDragEnd = () => {
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset < 0) {
        handleNext();
      } else {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const arrowSize = typeof window !== 'undefined' 
    ? Math.max(24, Math.min(30, window.innerWidth / 40)) 
    : 28;

  return (
    <section 
      style={{ 
        backgroundColor: 'transparent', /* Soft light blue-gray for subtle depth */
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 5%',
        fontFamily: "'Montreal', sans-serif",
        boxSizing: 'border-box'
      }}
    >
      <div 
        style={{ 
          maxWidth: '1600px', 
          margin: '0 auto',
          width: '100%',
        }}
        className="testimonials-wrapper"
      >
        <div className="testimonials-grid">
          {/* Left Side - Heading */}
          <div className="testimonials-heading">
            <h2 style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: '400',
              color: 'var(--navy-dark)',
              margin: 0,
              lineHeight: '1',
              letterSpacing: '-0.01em'
            }}>
              What our<br />clients say
            </h2>
          </div>

          {/* Right Side - Stacked Cards Container */}
          <div className="testimonials-cards-container">
            <div 
              className="testimonials-cards"
              style={{ 
                position: 'relative', 
                height: 'clamp(480px, 75vw, 680px)',
                minHeight: '480px'
              }}
              onMouseDown={(e) => handleDragStart(e.clientX)}
              onMouseMove={(e) => handleDragMove(e.clientX)}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
              onTouchEnd={handleDragEnd}
            >
              {testimonials.map((testimonial, index) => {
                const position = (index - currentIndex + testimonials.length) % testimonials.length;
                const isVisible = position < 3;
                
                if (!isVisible) return null;

                const zIndex = testimonials.length - position;
                const yOffset = position * 20;
                const xOffset = -position * 20;

                return (
                  <div
                    key={index}
                    style={{
                      position: 'absolute',
                      top: `${yOffset}px`,
                      left: `${xOffset}px`,
                      width: 'clamp(320px, 55vw, 580px)',
                      transform: `translateX(${position === 0 && isDragging ? dragOffset : 0}px)`,
                      transition: isDragging ? 'none' : 'all 0.5s ease-out',
                      zIndex: zIndex,
                      cursor: position === 0 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                      userSelect: 'none'
                    }}
                  >
                    <div style={{
                      backgroundColor: testimonial.color,
                      borderRadius: '0 162px 0px 0px',
                      padding: 'clamp(2rem, 5vw, 4.5rem)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.15)',
                      position: 'relative',
                      overflow: 'hidden',
                      boxSizing: 'border-box'
                    }}>
                      {/* Company Logo */}
                      <div style={{
                        fontSize: 'clamp(2rem, 6vw, 3.2rem)',
                        fontWeight: '700',
                        color: 'var(--navy-dark)',
                        marginBottom: 'clamp(1.5rem, 4vw, 3rem)',
                        letterSpacing: '-0.02em',
                        lineHeight: '1'
                      }}>
                        {testimonial.logo}
                      </div>

                      {/* Quote */}
                      <p style={{
                        fontSize: 'clamp(1rem, 2.3vw, 1.4rem)',
                        lineHeight: '1.3',
                        color: 'var(--slate-blue)',
                        margin: '0 0 clamp(2rem, 4vw, 3.5rem) 0',
                        flex: 1,
                        fontWeight: '400'
                      }}>
                        "{testimonial.quote}"
                      </p>

                      {/* Bottom Section */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        flexWrap: 'wrap',
                        gap: '1rem'
                      }}>
                        {/* Author Info */}
                        <div>
                          <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            fontWeight: '600',
                            color: 'var(--navy-dark)',
                            margin: '0 0 0.5rem 0'
                          }}>
                            {testimonial.name}
                          </p>
                          <p style={{
                            fontSize: 'clamp(0.875rem, 1.8vw, 1.05rem)',
                            color: 'var(--slate-blue)',
                            margin: 0,
                            fontWeight: '400'
                          }}>
                            {testimonial.position}
                          </p>
                        </div>

                        {/* Buttons Container */}
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexShrink: 0 }}>
                          {/* View Project Button */}
                          <button style={{
                            padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
                            backgroundColor: 'transparent',
                            color: 'var(--teal-accent)',
                            border: '2px solid var(--teal-accent)',
                            borderRadius: '50px',
                            fontSize: 'clamp(0.875rem, 1.8vw, 1rem)',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease',
                            fontFamily: "'Montreal', sans-serif",
                            whiteSpace: 'nowrap'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--teal-accent)';
                            e.currentTarget.style.color = 'var(--snow-white)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'var(--teal-accent)';
                          }}>
                            View project
                            <ArrowRight size={18} />
                          </button>

                          {/* Navigation Circle Arrow */}
                          {position === 0 && (
                            <button
                              onClick={handleNext}
                              style={{
                                width: 'clamp(48px, 10vw, 68px)',
                                height: 'clamp(48px, 10vw, 68px)',
                                borderRadius: '50%',
                                backgroundColor: 'transparent',
                                border: '2px solid var(--emerald-accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                flexShrink: 0
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--emerald-accent)';
                                const icon = e.currentTarget.querySelector('svg');
                                if (icon) icon.style.stroke = 'var(--snow-white)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                const icon = e.currentTarget.querySelector('svg');
                                if (icon) icon.style.stroke = 'var(--emerald-accent)';
                              }}
                            >
                              <ChevronRight size={arrowSize} strokeWidth={2} color="var(--emerald-accent)" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        :global(:root) {
          --navy-dark: #0f172a;
          --slate-blue: #475569;
          --snow-white: #ffffff;
          --alice-blue: #e2e8f0;
          --teal-accent: #14b8a6;
          --emerald-accent: #10b981;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        .testimonials-cards-container {
          display: flex;
          justify-content: flex-end;
        }

        .testimonials-cards {
          width: clamp(320px, 55vw, 580px);
        }

        @media (min-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: 45% 55%;
            gap: 0;
            align-items: center;
          }

          .testimonials-heading {
            justify-self: start;
          }

          .testimonials-cards-container {
            justify-content: flex-end;
            padding-right: 2rem;
          }

          .testimonials-cards {
            width: 580px;
          }
        }

        @media (max-width: 1023px) {
          .testimonials-heading {
            text-align: center;
          }

          .testimonials-cards-container {
            justify-content: center;
          }

          .testimonials-cards {
            width: clamp(320px, 80vw, 550px);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;