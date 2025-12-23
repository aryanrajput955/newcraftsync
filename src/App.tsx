import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FluidBackground from './components/FluidBackground'
import AboutUs from './pages/AboutUs'

const Home = () => (
	<div
		style={{
			position: 'relative',
			minHeight: '100vh',
			color: '#0F172A', // Navy dark for contrast
			isolation: 'isolate',
		}}>
		<FluidBackground />
		<div
			style={{
				position: 'relative',
				zIndex: 10,
				padding: '2rem',
				pointerEvents: 'auto',
			}}>
			<h1>NewCraftSync</h1>
			<p>Move your mouse or touch the screen to see ripples.</p>
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
