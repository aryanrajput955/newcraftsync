import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FluidBackground from './components/FluidBackground'
import AboutUs from './pages/AboutUs'

const Home = () => (
	<div className='relative min-h-screen text-[#0F172A] isolate overflow-hidden'>
		<FluidBackground />
		<div className='relative z-10 flex flex-col items-center justify-center min-h-screen p-8 pointer-events-auto'>
			<h1
				className='text-5xl md:text-7xl font-black mb-4 tracking-tight'
				style={{ fontFamily: 'var(--font-heading)' }}>
				NewCraftSync
			</h1>
			<p
				className='text-lg md:text-xl text-slate-600'
				style={{ fontFamily: 'var(--font-primary)' }}>
				Move your mouse or touch the screen to see ripples.
			</p>
		</div>
	</div>
)

const App = () => {
	return (
		<Router>
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
		</Router>
	)
}

export default App
