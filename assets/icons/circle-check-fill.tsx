import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {color} from '../../src/themes';

export const CircleCheckFill = (props: SvgProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM17.2803 9.28033C17.5732 8.98744 17.5732 8.51256 17.2803 8.21967C16.9874 7.92678 16.5126 7.92678 16.2197 8.21967L10.25 14.1893L7.78033 11.7197C7.48744 11.4268 7.01256 11.4268 6.71967 11.7197C6.42678 12.0126 6.42678 12.4874 6.71967 12.7803L9.71967 15.7803C10.0126 16.0732 10.4874 16.0732 10.7803 15.7803L17.2803 9.28033Z"
                  fill={props.color || color.black}/>
        </Svg>
    );
};
