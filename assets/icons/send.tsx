import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {color} from '../../src/themes';

export const Send = (props: SvgProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                d="M7.39999 6.32L15.89 3.49C19.7 2.22 21.77 4.3 20.51 8.11L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23 7.39999 6.32Z"
                stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M10.11 13.65L13.69 10.06" stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </Svg>
    );
};