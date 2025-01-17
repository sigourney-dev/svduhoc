import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import {color} from '../../src/themes';

export const TimeCircle = (props: SvgProps) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <Path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z"
              fill={props.color || color.black}/>
        <Path fill-rule="evenodd" clip-rule="evenodd"
              d="M15.4313 15.6922C15.3003 15.6922 15.1683 15.6582 15.0473 15.5872L11.2773 13.3382C11.0513 13.2022 10.9113 12.9572 10.9113 12.6932V7.84521C10.9113 7.43121 11.2473 7.09521 11.6613 7.09521C12.0763 7.09521 12.4113 7.43121 12.4113 7.84521V12.2672L15.8163 14.2972C16.1713 14.5102 16.2883 14.9702 16.0763 15.3262C15.9353 15.5612 15.6863 15.6922 15.4313 15.6922Z"
              fill={props.color || color.black}/>
    </Svg>
);
