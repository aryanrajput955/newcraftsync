
import LiquidBackground from './components/LiquidBackground';

const App = () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        color: '#ffffff',
        isolation: 'isolate', // Helps with stacking context
      }}
    >
      <LiquidBackground />

  
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '2rem',
          pointerEvents: 'auto', // Explicitly allow interaction
        }}
      >
        <h1>NewCraftSync</h1>
        <p>Move your mouse or touch the screen to see ripples.</p>
        {/* Your other content */}
      </div>
    </div>
  );
};

export default App;