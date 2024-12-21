import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {color} from '../../../src/themes';

export const TruckTick = (props: SvgProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                d="M15 2V12C15 13.1 14.1 14 13 14H2V7.62C2.73 8.49 3.85003 9.03 5.09003 9C6.10003 8.98 7.01 8.59 7.69 7.94C8 7.68 8.26002 7.34999 8.46002 6.98999C8.82002 6.37999 9.02 5.65997 9 4.90997C8.97 3.73997 8.45001 2.71 7.64001 2H15Z"
                stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path
                d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z"
                stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path
                d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path
                d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                stroke={props.color || color.black} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke={props.color || color.black}
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path
                d="M8.99993 4.90999C9.01993 5.65999 8.81995 6.38001 8.45995 6.99001C8.25995 7.35001 7.99993 7.68002 7.68993 7.94002C7.00993 8.59002 6.09995 8.98002 5.08995 9.00002C3.84995 9.03002 2.72993 8.49001 1.99993 7.62001C1.85993 7.47001 1.73993 7.30002 1.62993 7.13002C1.23993 6.54002 1.01993 5.84005 0.999928 5.09005C0.969928 3.83005 1.52992 2.68001 2.42992 1.93001C3.10992 1.37001 3.9699 1.02002 4.9099 1.00002C5.9599 0.98002 6.91994 1.36002 7.63994 2.00002C8.44994 2.71002 8.96993 3.73999 8.99993 4.90999Z"
                stroke={props.color || color.black} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
            <Path d="M3.43994 5.03003L4.44995 5.98999L6.53992 3.96997" stroke={props.color || color.black} stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>

    );
};
