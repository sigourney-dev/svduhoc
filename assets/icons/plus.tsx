import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {color} from '../../src/themes';

export const Plus = (props: SvgProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.75 16.1541C11.336 16.1541 11 15.8181 11 15.4041V8.07715C11 7.66315 11.336 7.32715 11.75 7.32715C12.164 7.32715 12.5 7.66315 12.5 8.07715V15.4041C12.5 15.8181 12.164 16.1541 11.75 16.1541Z"
                  fill={props.color || color.black}/>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.4165 12.4902H8.0835C7.6685 12.4902 7.3335 12.1542 7.3335 11.7402C7.3335 11.3262 7.6685 10.9902 8.0835 10.9902H15.4165C15.8305 10.9902 16.1665 11.3262 16.1665 11.7402C16.1665 12.1542 15.8305 12.4902 15.4165 12.4902Z"
                  fill={props.color || color.black}/>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.064 2.5C4.292 2.5 2.5 4.397 2.5 7.335V16.165C2.5 19.103 4.292 21 7.064 21H16.436C19.209 21 21 19.103 21 16.165V7.335C21 4.397 19.209 2.5 16.436 2.5H7.064ZM16.436 22.5H7.064C3.437 22.5 1 19.954 1 16.165V7.335C1 3.546 3.437 1 7.064 1H16.436C20.063 1 22.5 3.546 22.5 7.335V16.165C22.5 19.954 20.063 22.5 16.436 22.5Z"
                  fill={props.color || color.black}/>
        </Svg>
    );
};
