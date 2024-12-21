import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import {color} from '../../../src/themes';

export const ArrowLeft = (props: SvgProps) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <Path
            d="M16.2541 4.24106C16.5522 4.53326 16.5793 4.99051 16.3354 5.31272L16.2541 5.40503L9.52658 12L16.2541 18.595C16.5522 18.8872 16.5793 19.3444 16.3354 19.6666L16.2541 19.7589C15.956 20.0511 15.4896 20.0777 15.161 19.8386L15.0668 19.7589L7.7459 12.582C7.44784 12.2898 7.42074 11.8325 7.66461 11.5103L7.7459 11.418L15.0668 4.24106C15.3947 3.91965 15.9262 3.91965 16.2541 4.24106Z"
            fill={props.color || color.black}/>
    </Svg>
);
