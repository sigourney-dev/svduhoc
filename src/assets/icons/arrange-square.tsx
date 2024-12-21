import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {color} from '../../../src/themes';

export const ArrangeSquare = (props: SvgProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={props.color || color.black}
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M10.1799 17.15L7.13989 14.11" stroke={props.color || color.black} stroke-width="1.5" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M10.1799 6.85V17.15" stroke={props.color || color.black} stroke-width="1.5" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M13.8201 6.85L16.8601 9.89" stroke={props.color || color.black} stroke-width="1.5" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M13.8201 17.15V6.85" stroke={props.color || color.black} stroke-width="1.5" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>

    );
};
