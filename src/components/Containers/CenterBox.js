import React from 'react';

export default function CenterBox({ children }) {
  const centeredStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="box" style={centeredStyle}>
      {children}
    </div>
  );
}

export { CenterBox };
