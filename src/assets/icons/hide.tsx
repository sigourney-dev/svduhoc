import * as React from 'react';
import Svg, { Path, SvgProps, Mask, G } from 'react-native-svg';
import {color} from '../../../src/themes';
import {Utils} from '../../../src/utils';

export const Hide = (props: SvgProps) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <Path fill-rule="evenodd" clip-rule="evenodd"
              d="M9.76082 15.6172C9.56882 15.6172 9.37682 15.5442 9.23082 15.3972C8.49282 14.6602 8.08582 13.6802 8.08582 12.6382C8.08582 10.4782 9.84182 8.72119 11.9998 8.72119C13.0378 8.72119 14.0458 9.14019 14.7648 9.87119C15.0548 10.1672 15.0518 10.6412 14.7558 10.9312C14.4608 11.2232 13.9868 11.2182 13.6958 10.9242C13.2568 10.4772 12.6388 10.2212 11.9998 10.2212C10.6688 10.2212 9.58582 11.3052 9.58582 12.6382C9.58582 13.2792 9.83682 13.8832 10.2908 14.3372C10.5838 14.6302 10.5838 15.1042 10.2918 15.3972C10.1448 15.5442 9.95282 15.6172 9.76082 15.6172Z"
              fill={props.color || color.black}/>
        <Path fill-rule="evenodd" clip-rule="evenodd"
              d="M12.5674 16.4913C12.2124 16.4913 11.8964 16.2373 11.8304 15.8753C11.7564 15.4683 12.0264 15.0773 12.4344 15.0033C13.4144 14.8253 14.1904 14.0473 14.3664 13.0663C14.4404 12.6593 14.8304 12.3913 15.2374 12.4613C15.6454 12.5343 15.9164 12.9243 15.8434 13.3323C15.5564 14.9253 14.2944 16.1893 12.7024 16.4793C12.6574 16.4873 12.6114 16.4913 12.5674 16.4913Z"
              fill={props.color || color.black}/>
        <Mask id="mask0_147_3409" maskUnits="userSpaceOnUse" x={Utils.isIOS() ? '2' : '2'} y={Utils.isIOS() ? '4' : '4'} width="17"
              height="15">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.62451H18.0862V18.7226H2V4.62451Z" fill="white"/>
        </Mask>
        <G mask="url(#mask0_147_3409)">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.65438 18.7226C6.49238 18.7226 6.32938 18.6696 6.19138 18.5626C4.50038 17.2346 3.07138 15.2876 2.06138 12.9336C1.97938 12.7436 1.97938 12.5296 2.06138 12.3406C3.08238 9.97664 4.52038 8.01964 6.22038 6.68264C9.68638 3.93964 14.3004 3.93064 17.8014 6.70264C18.1264 6.95964 18.1814 7.43164 17.9244 7.75664C17.6664 8.07964 17.1964 8.13664 16.8704 7.87864C13.9044 5.53064 10.0834 5.53864 7.14938 7.86064C5.71338 8.99064 4.48038 10.6366 3.57038 12.6386C4.47138 14.6286 5.69338 16.2646 7.11838 17.3826C7.44438 17.6386 7.50038 18.1106 7.24438 18.4356C7.09638 18.6236 6.87638 18.7226 6.65438 18.7226Z"
                  fill={props.color || color.black}/>
        </G>
        <Mask id="mask1_147_3409" maskUnits="userSpaceOnUse" x={Utils.isIOS() ? '8' : '8'} y={Utils.isIOS() ? '8' : '8'} width="14"
              height="13">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M8.71753 8.74121H22.0001V20.6894H8.71753V8.74121Z"
                  fill="white"/>
        </Mask>
        <G mask="url(#mask1_147_3409)">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.0002 20.6894C11.0632 20.6894 10.1312 20.5374 9.23116 20.2384C8.83816 20.1074 8.62516 19.6824 8.75616 19.2894C8.88716 18.8954 9.31016 18.6864 9.70516 18.8144C10.4522 19.0634 11.2242 19.1894 12.0002 19.1894C15.4282 19.1894 18.5612 16.7474 20.4302 12.6364C19.9742 11.6374 19.4432 10.7324 18.8492 9.94242C18.6002 9.61142 18.6662 9.14042 18.9972 8.89142C19.3272 8.64242 19.7982 8.71042 20.0472 9.04042C20.7712 10.0014 21.4072 11.1124 21.9382 12.3384C22.0212 12.5284 22.0212 12.7444 21.9382 12.9334C19.8422 17.7904 16.1272 20.6894 12.0002 20.6894Z"
                  fill={props.color || color.black}/>
        </G>
        <Mask id="mask2_147_3409" maskUnits="userSpaceOnUse" x={Utils.isIOS() ? '3' : '3'} y={Utils.isIOS() ? '4' : '4'} width="18"
              height="18">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M3.36353 4.00049H20.637V21.2735H3.36353V4.00049Z"
                  fill="white"/>
        </Mask>
        <G mask="url(#mask2_147_3409)">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.11328 21.2733C3.92128 21.2733 3.72928 21.2003 3.58328 21.0533C3.29028 20.7603 3.29028 20.2863 3.58328 19.9933L19.3573 4.21926C19.6503 3.92626 20.1243 3.92626 20.4173 4.21926C20.7103 4.51226 20.7103 4.98726 20.4173 5.28026L4.64328 21.0533C4.49728 21.2003 4.30528 21.2733 4.11328 21.2733Z"
                  fill={props.color || color.black}/>
        </G>
    </Svg>
);