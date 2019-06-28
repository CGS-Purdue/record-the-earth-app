import React from 'react';

export default function Boxy ({ children }, props) {
  return (
    <div className="boxy-box">
      <span style={props.style}>hi there?</span>
      <span>{children}</span>
    </div>
  )
}

export { Boxy }
