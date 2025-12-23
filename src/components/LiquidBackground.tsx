import React from 'react';
import LiquidChrome from '../components/LiquidChrome';

const LiquidBackground: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        backgroundColor: '#ffffff', 
        overflow: 'hidden',
      }}
    >
      <LiquidChrome
        baseColor={[0.9, 0.9, 1]}
        speed={0.35}
        amplitude={0.65}
        frequencyX={3.2}
        frequencyY={2.1}
        interactive={true}
      />
    </div>
  );
};

export default LiquidBackground;