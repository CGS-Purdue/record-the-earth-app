import React from 'react';
import { View } from 'react-native';

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
     <View className="box" style={boxStyle}>
       <View className="boxin" style={boxInStyle}>
         {children}
       </View>
     </View>
   );
 }

 export { BoxX };
