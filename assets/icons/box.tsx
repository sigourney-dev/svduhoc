import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {color} from '../../src/themes';

export const Box = (props: SvgProps) => {
    return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <Path d="M3.17004 7.44L12 12.55L20.77 7.46997" stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"/>
        <Path d="M12 21.61V12.54" stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path
            d="M9.92999 2.48L4.59 5.45003C3.38 6.12003 2.39001 7.80001 2.39001 9.18001V14.83C2.39001 16.21 3.38 17.89 4.59 18.56L9.92999 21.53C11.07 22.16 12.94 22.16 14.08 21.53L19.42 18.56C20.63 17.89 21.62 16.21 21.62 14.83V9.18001C21.62 7.80001 20.63 6.12003 19.42 5.45003L14.08 2.48C12.93 1.84 11.07 1.84 9.92999 2.48Z"
            stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M17 13.24V9.58002L7.51001 4.09998" stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    );
};
