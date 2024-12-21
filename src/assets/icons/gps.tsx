import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {color} from '../../../src/themes';

export const GPS = (props: SvgProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5Z"
                stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 4V2" stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M4 12H2" stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 20V22" stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M20 12H22" stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
};
