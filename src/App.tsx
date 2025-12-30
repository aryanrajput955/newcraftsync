import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FluidBackground from './components/FluidBackground'
import Navbar from './components/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import HeroSection from './components/Herosection'
import ProjectSection from './components/Projectssection'
import ServicesSection from './components/ServicesSection'
import ScrollPinSection from './components/WhyusSection'
import TestimonialsSection from './components/Testimonials'
import CTASection from './components/CtaSection'
const Home = () => (
	<div
		style={{
			position: 'relative',
			minHeight: '100vh',
			color: '#0F172A', // Navy dark for contrast
			isolation: 'isolate',
		}}>
		<FluidBackground />
    <HeroSection />
	<ServicesSection />
	<ScrollPinSection />
	<ProjectSection />
	<TestimonialsSection />
	<CTASection />
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
			<Footer />
		</Router>
	)
}

export default App
