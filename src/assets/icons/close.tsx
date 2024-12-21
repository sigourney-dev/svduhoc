import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {color} from '../../../src/themes';

export const Close = (props: SvgProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.71967 5.71967C6.01256 5.42678 6.48744 5.42678 6.78033 5.71967L12 10.9393L17.2197 5.71967C17.5126 5.42678 17.9874 5.42678 18.2803 5.71967C18.5732 6.01256 18.5732 6.48744 18.2803 6.78033L13.0607 12L18.2803 17.2197C18.5732 17.5126 18.5732 17.9874 18.2803 18.2803C17.9874 18.5732 17.5126 18.5732 17.2197 18.2803L12 13.0607L6.78033 18.2803C6.48744 18.5732 6.01256 18.5732 5.71967 18.2803C5.42678 17.9874 5.42678 17.5126 5.71967 17.2197L10.9393 12L5.71967 6.78033C5.42678 6.48744 5.42678 6.01256 5.71967 5.71967Z"
                  fill={props.color || color.black}/>
        </Svg>
    );
};
