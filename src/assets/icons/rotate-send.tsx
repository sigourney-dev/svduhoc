import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {color} from '../../../src/themes';

export const RotateSend = (props: SvgProps) => {
  return (
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
          <Path d="M6.69995 9.26001L11.9999 12.33L17.2599 9.28001" stroke={props.color || color.black} stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M12 17.77V12.32" stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <Path
              d="M10.76 6.28998L7.56 8.06998C6.84 8.46998 6.23999 9.47998 6.23999 10.31V13.7C6.23999 14.53 6.83 15.54 7.56 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.3C17.77 9.46998 17.18 8.45998 16.45 8.05998L13.25 6.27998C12.56 5.89998 11.44 5.89998 10.76 6.28998Z"
              stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke={props.color || color.black} stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75" stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"/>
      </Svg>
  );
};
