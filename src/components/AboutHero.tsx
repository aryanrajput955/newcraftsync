
const AboutHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Subheading / Tagline */}
        <p className="text-slate-500 font-medium tracking-widest uppercase mb-4 animate-fade-in-up">
          About Craftsync
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-6 tracking-tight animate-fade-in-up delay-100">
          We Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-navy-800">Digital</span> <br />
          Experiences That Matter.
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed animate-fade-in-up delay-200">
          We are a team of visionary creators, strategists, and developers dedicated to transforming brands through innovative digital solutions.
        </p>

        {/* CTA Button (Optional based on design) */}
        <div className="animate-fade-in-up delay-300">
           <button className="px-8 py-3 bg-navy-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors duration-300 shadow-lg hover:shadow-xl">
             Meet Our Team
           </button>
        </div>
      </div>
      
      {/* Scroll Indicator (Optional) */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </div>

    </section>
  );
};

export default AboutHero;
