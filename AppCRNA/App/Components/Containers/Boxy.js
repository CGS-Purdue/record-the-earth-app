import React from 'react';

export default function Boxy ({ children }, props) {
  const boxyStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection:'column',
  };

  const boxyInStyle = {
    flex: [1, 1, 0],
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0,
    marginBottom: 0,
  };

  if (props.style){
    Object.assign(boxyStyle, props.style);
  }

  return (
    <div className="box boxy" style={boxyStyle} >
      <div className="boxyin" style={boxyInStyle}>
        {children}
      </div>
    </div>
  )
}

export { Boxy }
