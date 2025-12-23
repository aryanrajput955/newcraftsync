import LiquidBackground from './components/LiquidBackground';
const App = () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        color: '#ffffff',
      }}
    >
      {/* Full-screen background */}
      <LiquidBackground />

    </div>
  );
};

export default App;