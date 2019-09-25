import React from 'react';
import Svg, { Defs, LinearGradient, Stop, G, Circle, Path, Text, TSpan } from 'react-native-svg';

const RecordButtonSvgr = ({ svgRef, title, ...props }) => (
  <Svg {...props} width={458.76} height={460.24} ref={svgRef}>
    <title>{title}</title>
    <Defs>
      <LinearGradient id="prefix__b">
        <Stop offset={0} stopColor="#c79691" />
        <Stop offset={1} stopColor="#af4336" />
      </LinearGradient>
      <LinearGradient id="prefix__c">
        <Stop offset={0} stopColor="#7b1407" />
        <Stop offset={1} stopColor="#d92510" />
      </LinearGradient>
      <LinearGradient id="prefix__a">
        <Stop offset={0} stopColor="#d6270f" />
        <Stop offset={1} stopColor="#d6270f" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#prefix__b"
        id="prefix__e"
        gradientUnits="userSpaceOnUse"
        x1={232.65}
        y1={558.84}
        x2={228.82}
        y2={701.39}
        gradientTransform="translate(-2 -8)"
      />
      <LinearGradient
        xlinkHref="#prefix__c"
        id="prefix__d"
        x1={228.61}
        y1={541.5}
        x2={233.62}
        y2={981.43}
        gradientUnits="userSpaceOnUse"
      />
    </Defs>
    <G transform="translate(-3.63 -534.22)">
      <Circle
        cx={231.11}
        cy={761.97}
        r={222.98}
        fill="url(#prefix__d)"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M230.65 550.84a228.2 228.2 0 00-69.07 10.9c-46.36 14.99-85.24 52.45-95.64 92.17-12.3 46.72 48.12 49.05 168.72 41.42 38.04-2.4 84.48-17.4 126.92-14.1 15.16 1.18 33.64 16.47 45.64 6.85 5.07-4.07 4.57-13.22 1.36-19.45-23.85-45.48-55.34-88.99-110.5-107.36-21.11-7.03-44.14-10.5-67.43-10.43z"
        fill="url(#prefix__e)"
        stroke="#670000"
      />
      <Text
        y={810.5}
        x={93.09}
        style={{
          lineHeight: 1.25,
        }}
        fontWeight={400}
        fontSize={133.33}
        fontFamily="sans-serif"
        letterSpacing={0}
        wordSpacing={0}
      >
        <TSpan y={810.5} x={93.09} fill="#fff">
          {'REC'}
        </TSpan>
      </Text>
    </G>
  </Svg>
);

const ForwardRef = React.forwardRef((props, ref) => (
  <RecordButtonSvgr svgRef={ref} {...props} />
));
export default ForwardRef;


export { RecordButtonSvgr };
