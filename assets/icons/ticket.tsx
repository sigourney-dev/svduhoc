import React from 'react';
import Svg, {Path, Mask, G, SvgProps} from 'react-native-svg';
import {color} from '../../src/themes';

export const Ticket = (props: SvgProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.5996 8.171C13.1856 8.171 12.8496 7.835 12.8496 7.421V5C12.8496 4.586 13.1856 4.25 13.5996 4.25C14.0136 4.25 14.3496 4.586 14.3496 5V7.421C14.3496 7.835 14.0136 8.171 13.5996 8.171Z"
                  fill={props.color || color.black}/>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.5996 21.2842C13.1856 21.2842 12.8496 20.9482 12.8496 20.5342V18.5112C12.8496 18.0962 13.1856 17.7612 13.5996 17.7612C14.0136 17.7612 14.3496 18.0962 14.3496 18.5112V20.5342C14.3496 20.9482 14.0136 21.2842 13.5996 21.2842Z"
                  fill={props.color || color.black}/>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.5996 15.8254C13.1856 15.8254 12.8496 15.4894 12.8496 15.0754V10.2544C12.8496 9.84039 13.1856 9.50439 13.5996 9.50439C14.0136 9.50439 14.3496 9.84039 14.3496 10.2544V15.0754C14.3496 15.4894 14.0136 15.8254 13.5996 15.8254Z"
                  fill={props.color || color.black}/>
            <Mask id="mask0_147_2939" maskUnits="userSpaceOnUse" x={1} y={4} width="22"
                  height="18">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M1 4H22.5V21.4997H1V4Z" fill="white"/>
            </Mask>
            <G mask="url(#mask0_147_2939)">
                <Path fill-rule="evenodd" clip-rule="evenodd"
                      d="M2.5 15.5535V17.4925C2.5 18.8745 3.643 19.9995 5.048 19.9995H18.452C19.857 19.9995 21 18.8745 21 17.4925V15.5535C19.749 15.2245 18.823 14.0925 18.823 12.7505C18.823 11.4075 19.748 10.2765 21 9.94751L20.999 8.00651C20.999 6.62451 19.856 5.49951 18.451 5.49951H5.049C3.644 5.49951 2.501 6.62451 2.501 8.00651L2.5 10.0245C3.767 10.3355 4.677 11.4215 4.677 12.7505C4.677 14.0925 3.751 15.2245 2.5 15.5535ZM18.452 21.4995H5.048C2.816 21.4995 1 19.7015 1 17.4925V14.9005C1 14.4865 1.336 14.1505 1.75 14.1505C2.537 14.1505 3.177 13.5225 3.177 12.7505C3.177 12.0005 2.563 11.4345 1.75 11.4345C1.551 11.4345 1.36 11.3555 1.22 11.2145C1.079 11.0745 1 10.8825 1 10.6845L1.001 8.00651C1.001 5.79751 2.817 3.99951 5.049 3.99951H18.451C20.683 3.99951 22.499 5.79751 22.499 8.00651L22.5 10.6005C22.5 10.7985 22.421 10.9905 22.28 11.1305C22.14 11.2715 21.949 11.3505 21.75 11.3505C20.963 11.3505 20.323 11.9785 20.323 12.7505C20.323 13.5225 20.963 14.1505 21.75 14.1505C22.164 14.1505 22.5 14.4865 22.5 14.9005V17.4925C22.5 19.7015 20.684 21.4995 18.452 21.4995Z"
                      fill={props.color || color.black}/>
            </G>
        </Svg>
    );
};
