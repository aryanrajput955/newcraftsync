import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Reason {
  title: string;
  image: string;
  description: string;
  details: string[];
}

const WhyChooseUs: React.FC = () => {
  const pinSectionRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const listItemsRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  const reasons: Reason[] = [
    {
      title: 'Expert Team',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      description: 'Seasoned professionals with proven track records',
      details: ['10+ Years Experience', 'Industry Leaders', 'Certified Experts']
    },
    {
      title: 'Innovation First',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      description: 'Cutting-edge solutions using latest technologies',
      details: ['Modern Stack', 'Future-Ready', 'Scalable Architecture']
    },
    {
      title: 'Client Focused',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      description: 'Your success is our priority',
      details: ['24/7 Support', 'Dedicated Manager', 'Transparent Process']
    },
    {
      title: 'Proven Results',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Delivering measurable impact and growth',
      details: ['200+ Projects', '98% Satisfaction', 'Award Winning']
    }
  ];

  useEffect(() => {
    const items = listItemsRef.current.filter(Boolean) as HTMLHeadingElement[];
    const slides = slidesRef.current.filter(Boolean) as HTMLDivElement[];
    const fill = fillRef.current;

    if (!items.length || !slides.length || !fill) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinSectionRef.current,
        start: 'top top',
        end: '+=' + items.length * 50 + '%',
        pin: true,
        scrub: true
      }
    });

    gsap.set(fill, {
      scaleY: 1 / items.length,
      transformOrigin: 'top left'
    });

    items.forEach((item, i) => {
      const previousItem = items[i - 1];
      
      if (previousItem) {
        tl.set(item, { color: '#0f172a' }, 0.5 * i)
          .to(slides[i], { autoAlpha: 1, duration: 0.2 }, '<')
          .set(previousItem, { color: '#e2e8f0' }, '<')
          .to(slides[i - 1], { autoAlpha: 0, duration: 0.2 }, '<');
      } else {
        gsap.set(item, { color: '#0f172a' });
        gsap.set(slides[i], { autoAlpha: 1 });
      }
    });

    tl.to(fill, {
      scaleY: 1,
      transformOrigin: 'top left',
      ease: 'none',
      duration: tl.duration()
    }, 0).to({}, {});

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', fontFamily: "'Montreal', sans-serif" }}>
      {/* Header Section */}
      <section className="w-full py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-full max-w-[1400px] mx-auto px-8">
          <div className="mb-12">
            <span 
              className="inline-flex items-center gap-2 text-sm font-medium mb-8 tracking-wide uppercase"
              style={{ color: '#475569' }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#14b8a6' }} />
              Why Choose Us
            </span>
            <h2 
              className="text-6xl md:text-8xl font-bold leading-none mt-6"
              style={{ 
                color: '#0f172a',
                fontFamily: "'Montreal', sans-serif",
                letterSpacing: '-0.02em'
              }}
            >
              Why Choose <br />
              <span style={{ color: '#14b8a6' }}>The Craftsync</span>?
            </h2>
          </div>
        </div>
      </section>

      {/* Pin Section */}
      <section 
        ref={pinSectionRef}
        className="w-full min-h-screen flex items-center py-20"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 items-center">
          {/* Left Side - Content */}
          <div className="relative">

            <div 
              ref={fillRef}
              className="absolute left-0 w-[2px]"
              style={{ 
                backgroundColor: '#14b8a6',
                top: '80px',
                height: 'calc(100% - 160px)'
              }}
            />

            <div className="pl-8">
              {reasons.map((reason, index) => (
                <h3 
                  key={index}
                  ref={el => { listItemsRef.current[index] = el; }}
                  className="text-5xl md:text-7xl font-bold mb-4 leading-tight transition-colors duration-300"
                  style={{ 
                    color: '#e2e8f0',
                    fontFamily: "'Montreal', sans-serif"
                  }}
                >
                  {reason.title}
                </h3>
              ))}
            </div>

            <button 
              className="mt-12 ml-8 flex items-center gap-2 text-base font-semibold transition-all group"
              style={{ color: '#0f172a' }}
            >
              Explore our approach
              <ArrowRight 
                size={20} 
                className="transition-transform group-hover:translate-x-1"
                style={{ color: '#14b8a6' }}
              />
            </button>
          </div>

          {/* Right Side - Image & Details */}
          <div className="flex items-center justify-center relative">
            {reasons.map((reason, index) => (
              <div
                key={index}
                ref={el => { slidesRef.current[index] = el; }}
                className="absolute w-full opacity-0 invisible"
              >
                <div 
                  className="rounded-2xl overflow-hidden shadow-lg"
                  style={{ backgroundColor: '#e2e8f0' }}
                >
                  <img 
                    src={reason.image} 
                    alt={reason.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-8">
                    <p 
                      className="text-xl mb-6 leading-relaxed"
                      style={{ color: '#0f172a' }}
                    >
                      {reason.description}
                    </p>
                    <ul className="space-y-3">
                      {reason.details.map((detail, idx) => (
                        <li 
                          key={idx}
                          className="flex items-center text-base font-medium"
                          style={{ color: '#475569' }}
                        >
                          <span 
                            className="w-1.5 h-1.5 rounded-full mr-3" 
                            style={{ backgroundColor: '#10b981' }} 
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default WhyChooseUs;