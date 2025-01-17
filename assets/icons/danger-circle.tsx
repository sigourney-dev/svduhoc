import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {color} from '../../src/themes';

export const DangerCircle = (props: SvgProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z"
                  fill={props.color || color.black}/>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.9941 13.3731C11.5801 13.3731 11.2441 13.0371 11.2441 12.6231V8.2041C11.2441 7.7901 11.5801 7.4541 11.9941 7.4541C12.4081 7.4541 12.7441 7.7901 12.7441 8.2041V12.6231C12.7441 13.0371 12.4081 13.3731 11.9941 13.3731Z"
                  fill={props.color || color.black}/>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.0039 16.7959C11.4509 16.7959 10.9989 16.3489 10.9989 15.7959C10.9989 15.2429 11.4419 14.7959 11.9939 14.7959H12.0039C12.5569 14.7959 13.0039 15.2429 13.0039 15.7959C13.0039 16.3489 12.5569 16.7959 12.0039 16.7959Z"
                  fill={props.color || color.black}/>
        </Svg>

    );
};
