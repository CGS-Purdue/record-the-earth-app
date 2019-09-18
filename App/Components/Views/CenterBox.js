import React from 'react';
import { View } from 'react-native';

export default function CenterBox({ children }) {
  const centeredStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={centeredStyle}>
      {children}
    </View>
  );
}

export { CenterBox };
