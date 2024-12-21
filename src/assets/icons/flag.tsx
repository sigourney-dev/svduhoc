import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import {color} from '../../../src/themes';

export const Flag = (props: SvgProps) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <Path d="M5.14999 2V22" stroke={props.color || color.black} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round"/>
        <Path
            d="M5.14999 4H16.35C19.05 4 19.65 5.5 17.75 7.4L16.55 8.6C15.75 9.4 15.75 10.7 16.55 11.4L17.75 12.6C19.65 14.5 18.95 16 16.35 16H5.14999"
            fill={props.color || color.black} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);
