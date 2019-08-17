import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';

const styles={
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#778899'
}

export function CtaBlock(props) {
  return (
    <TouchableOpacity {...props} style={[props.style, { fontFamily: 'space-mono' }]}>
      <Text>Call to Action</Text>
    </TouchableOpacity>
  );
}
