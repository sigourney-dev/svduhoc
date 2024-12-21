import * as React from 'react';
import Svg, { Path, SvgProps, Mask, G } from 'react-native-svg';
import {color} from '../../../src/themes';
import {Utils} from '../../../src/utils';

export const Profile = (props: SvgProps) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <Mask id="mask0_147_3456" maskUnits="userSpaceOnUse" x={Utils.isIOS() ? '4' : '4'} y={Utils.isIOS() ? '14' : '14'} width="16"
              height="8">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M4 14.4961H19.8399V21.8701H4V14.4961Z" fill="white"/>
        </Mask>
        <G mask="url(#mask0_147_3456)">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.9209 15.9961C7.65988 15.9961 5.49988 16.7281 5.49988 18.1731C5.49988 19.6311 7.65988 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.96188 21.8701 3.99988 21.8701 3.99988 18.1731C3.99988 14.8771 8.52088 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z"
                  fill={props.color || color.black}/>
        </G>
        <Mask id="mask1_147_3456" maskUnits="userSpaceOnUse" x={Utils.isIOS() ? '6' : '6'} y={Utils.isIOS() ? '2' : '2'} width="12"
              height="11">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.60986 2H17.2299V12.6186H6.60986V2Z" fill="white"/>
        </Mask>
        <G mask="url(#mask1_147_3456)">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.9209 3.42751C9.77989 3.42751 8.03789 5.16851 8.03789 7.30951C8.03089 9.44351 9.75989 11.1835 11.8919 11.1915L11.9209 11.9055V11.1915C14.0609 11.1915 15.8019 9.44951 15.8019 7.30951C15.8019 5.16851 14.0609 3.42751 11.9209 3.42751ZM11.9209 12.6185H11.8889C8.9669 12.6095 6.59989 10.2265 6.60989 7.30651C6.60989 4.38151 8.99189 1.99951 11.9209 1.99951C14.8489 1.99951 17.2299 4.38151 17.2299 7.30951C17.2299 10.2375 14.8489 12.6185 11.9209 12.6185Z"
                  fill={props.color || color.black}/>
        </G>
    </Svg>
);
