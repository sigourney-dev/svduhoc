import * as React from 'react';
import Svg, { Path, SvgProps, G, Mask } from 'react-native-svg';
import {color} from '../../../src/themes';
import {Utils} from '../../../src/utils';

export const Search = (props: SvgProps) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <Mask id="mask0_147_2815" maskUnits="userSpaceOnUse" x={Utils.isIOS() ? '2' : '2'} y={Utils.isIOS() ? '2' : '2'} width="20"
              height="20">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M2 2H21.4768V21.477H2V2Z" fill="white"/>
        </Mask>
        <G mask="url(#mask0_147_2815)">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.7388 3.5C7.19576 3.5 3.49976 7.195 3.49976 11.738C3.49976 16.281 7.19576 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36876 21.477 1.99976 17.108 1.99976 11.738C1.99976 6.368 6.36876 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z"
                  fill={props.color || color.black}/>
        </G>
        <Mask id="mask1_147_2815" maskUnits="userSpaceOnUse" x={Utils.isIOS() ? '17' : '17'} y={Utils.isIOS() ? '17' : '17'} width="6"
              height="6">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M17.24 17.707H22.264V22.7218H17.24V17.707Z" fill="white"/>
        </Mask>
        <G mask="url(#mask1_147_2815)">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M21.5142 22.7218C21.3232 22.7218 21.1312 22.6488 20.9842 22.5028L17.4602 18.9888C17.1672 18.6958 17.1662 18.2208 17.4592 17.9278C17.7512 17.6328 18.2262 17.6348 18.5202 17.9258L22.0442 21.4408C22.3372 21.7338 22.3382 22.2078 22.0452 22.5008C21.8992 22.6488 21.7062 22.7218 21.5142 22.7218Z"
                  fill={props.color || color.black}/>
        </G>
    </Svg>
);
