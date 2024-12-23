import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {color} from '../../../src/themes';

export const Routing = (props: SvgProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                d="M2.07006 4.6C2.87006 1.14 8.08006 1.14 8.87006 4.6C9.34006 6.63 8.05006 8.35 6.93006 9.42C6.11006 10.2 4.82006 10.19 4.00006 9.42C2.89006 8.35 1.60006 6.63 2.07006 4.6Z"
                stroke={props.color || color.black} stroke-width="1.5"/>
            <Path
                d="M15.07 16.6C15.87 13.14 21.11 13.14 21.91 16.6C22.38 18.63 21.09 20.35 19.96 21.42C19.14 22.2 17.84 22.19 17.02 21.42C15.89 20.35 14.6 18.63 15.07 16.6Z"
                stroke={props.color || color.black} stroke-width="1.5"/>
            <Path
                d="M11.9999 5H14.6799C16.5299 5 17.3899 7.29 15.9999 8.51L8.00995 15.5C6.61995 16.71 7.47994 19 9.31994 19H11.9999"
                stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M5.48622 5.5H5.49777" stroke={props.color || color.black} stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <Path d="M18.4862 17.5H18.4978" stroke={props.color || color.black} stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </Svg>

    );
};