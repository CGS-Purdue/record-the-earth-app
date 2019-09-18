import React from 'react';
import { SvgUri } from 'react-native-svg';

// /Use with content loaded from uri

const SvgFromUri = () => (
  <SvgUri
    width="100%"
    height="100%"
    uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
  />
);

export{ SvgFromUri }
