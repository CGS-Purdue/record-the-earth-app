import React from 'react';
import { SvgUri } from 'react-native-svg';

// /Use with content loaded from uri

const SvgFromUri = (props) => (
  <SvgUri width='100%' height='100%' uri={props.url} />
);

export { SvgFromUri };
