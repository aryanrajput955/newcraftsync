import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Header'
import Footer from './components/Footer'
const FluidBackground = lazy(() => import('./components/FluidBackground'))
const HeroSection = lazy(() => import('./components/Herosection'))
const ProjectSection = lazy(() => import('./components/Projectssection'))
const ServicesSection = lazy(() => import('./components/ServicesSection'))
const ScrollPinSection = lazy(() => import('./components/WhyusSection'))
const TestimonialsSection = lazy(() => import('./components/Testimonials'))
const CTASection = lazy(() => import('./components/CtaSection'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Home = () => (
	<div className='relative min-h-screen text-[#0F172A] isolate overflow-hidden'>
		<FluidBackground />
		<Suspense fallback={<div style={{padding:'2rem', textAlign:'center'}}>Loading…</div>}>
			<HeroSection />
			<ServicesSection />
			<ScrollPinSection />
			<ProjectSection />
			<TestimonialsSection />
			<CTASection />
		</Suspense>
	</div>
)

const App = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const lenis = new Lenis({
			duration: 1.1, // overall smoothness
			smoothWheel: true,
			lerp: 0.1, // inertia
		})

		// Keep ScrollTrigger in sync with Lenis
		lenis.on('scroll', () => ScrollTrigger.update())

		// Use GSAP's ticker so both share the same RAF
		const sync = (time: number) => {
			// GSAP provides seconds; Lenis expects ms
			lenis.raf(time * 1000)
		}
		gsap.ticker.add(sync)
		gsap.ticker.lagSmoothing(0)

		// Optional: snap to bounds after route changes or refresh
		ScrollTrigger.refresh()

		return () => {
			gsap.ticker.remove(sync)
			lenis.destroy()
		}
	}, [])

	return (
		<Router>
			<Navbar />
			<Suspense fallback={<div style={{padding:'2rem', textAlign:'center'}}>Loading page…</div>}>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/aboutus'
					element={<AboutUs />}
				/>
			</Routes>
			</Suspense>
			<Footer />
		</Router>
	)
}

export default App
