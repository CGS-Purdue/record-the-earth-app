import React from 'react';


export default function BoxX({ children }, props) {
  const boxStyle = {
    display: 'flex',
    padding: '1em',
  };

  const boxInStyle = {
    flex: [1, 1, '100%'],
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    marginBottom: 0,
  };

  return (
     <div className="box" style={boxStyle}>
       <div className="boxin" style={boxInStyle}>
         {children}
       </div>
     </div>
   );
 }

 export { BoxX };
