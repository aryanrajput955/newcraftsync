
import FluidBackground from '../components/FluidBackground';
import AboutHero from '../components/AboutHero';

const AboutUs = () => {
  return (
    <div className="relative w-full min-h-screen bg-snow-white text-navy-dark font-primary selection:bg-slate-200">
      <FluidBackground />
      <AboutHero />
      {/* Other About Us sections will go here */}
      <div className="h-screen"></div> {/* Spacer to test scrolling if needed */}
    </div>
  );
};

export default AboutUs;
