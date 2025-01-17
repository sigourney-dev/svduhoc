import React from 'react';
import Svg, {SvgProps, Path, Mask, G} from 'react-native-svg';
import {color} from '../../src/themes';

export const BookMark = (props: SvgProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Mask id="mask0_147_2857" maskUnits="userSpaceOnUse" x={3} y={2} width="18"
                  height="21">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M3 2H20.0388V22.8467H3V2Z" fill="white"/>
            </Mask>
            <G mask="url(#mask0_147_2857)">
                <Path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8.34176 3.5C5.79276 3.5 4.49976 4.482 4.49976 6.421V21.145C4.49976 21.239 4.55376 21.29 4.59876 21.316C4.64376 21.344 4.71476 21.364 4.79676 21.318L11.1788 17.738C11.4068 17.611 11.6858 17.61 11.9148 17.739L18.2418 21.313C18.3248 21.361 18.3958 21.339 18.4408 21.312C18.4858 21.285 18.5388 21.234 18.5388 21.14V6.604C18.5388 5.837 18.5388 3.5 14.7008 3.5H8.34176ZM4.69876 22.847C4.40376 22.847 4.10876 22.768 3.84076 22.61C3.31376 22.303 2.99976 21.754 2.99976 21.145V6.421C2.99976 3.611 4.94676 2 8.34176 2H14.7008C18.0928 2 20.0388 3.679 20.0388 6.604V21.14C20.0388 21.75 19.7248 22.299 19.1968 22.606C18.6708 22.914 18.0368 22.92 17.5048 22.62L11.5448 19.253L5.52976 22.627C5.26976 22.773 4.98476 22.847 4.69876 22.847Z"
                      fill={props.color || color.black}/>
            </G>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.1397 10.2285H7.82166C7.40766 10.2285 7.07166 9.89252 7.07166 9.47852C7.07166 9.06452 7.40766 8.72852 7.82166 8.72852H15.1397C15.5537 8.72852 15.8897 9.06452 15.8897 9.47852C15.8897 9.89252 15.5537 10.2285 15.1397 10.2285Z"
                  fill={props.color || color.black}/>
        </Svg>

    );
};
