import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import {color} from '../../../src/themes';

export const Delete = (props: SvgProps) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <Path fill-rule="evenodd" clip-rule="evenodd"
              d="M12.2466 22.0001C10.8916 22.0001 9.5706 21.9852 8.2636 21.9581C6.5916 21.9251 5.4346 20.8411 5.2456 19.1291C4.9306 16.2891 4.3916 9.59515 4.3866 9.52815C4.3526 9.11515 4.6606 8.75315 5.0736 8.72015C5.4806 8.70915 5.8486 8.99515 5.8816 9.40715C5.8866 9.47515 6.4246 16.1461 6.7366 18.9641C6.8436 19.9371 7.3686 20.4391 8.2946 20.4581C10.7946 20.5112 13.3456 20.5141 16.0956 20.4641C17.0796 20.4451 17.6116 19.9531 17.7216 18.9571C18.0316 16.1631 18.5716 9.47515 18.5776 9.40715C18.6106 8.99515 18.9756 8.70715 19.3846 8.72015C19.7976 8.75415 20.1056 9.11515 20.0726 9.52815C20.0666 9.59615 19.5246 16.3071 19.2126 19.1221C19.0186 20.8691 17.8646 21.9321 16.1226 21.9641C14.7896 21.9871 13.5036 22.0001 12.2466 22.0001Z"
              fill={props.color || color.black}/>
        <Path fill-rule="evenodd" clip-rule="evenodd"
              d="M20.708 6.98926H3.75C3.336 6.98926 3 6.65326 3 6.23926C3 5.82526 3.336 5.48926 3.75 5.48926H20.708C21.122 5.48926 21.458 5.82526 21.458 6.23926C21.458 6.65326 21.122 6.98926 20.708 6.98926Z"
              fill={props.color || color.black}/>
        <Path fill-rule="evenodd" clip-rule="evenodd"
              d="M17.4405 6.98949C16.3025 6.98949 15.3145 6.17849 15.0905 5.06249L14.8475 3.84649C14.7965 3.66149 14.5855 3.50049 14.3455 3.50049H10.1125C9.87246 3.50049 9.66146 3.66149 9.60046 3.89249L9.36746 5.06249C9.14446 6.17849 8.15546 6.98949 7.01746 6.98949C6.60346 6.98949 6.26746 6.65349 6.26746 6.23949C6.26746 5.82549 6.60346 5.48949 7.01746 5.48949C7.44346 5.48949 7.81346 5.18549 7.89746 4.76749L8.14046 3.55149C8.38746 2.61949 9.19446 2.00049 10.1125 2.00049H14.3455C15.2635 2.00049 16.0705 2.61949 16.3075 3.50649L16.5615 4.76749C16.6445 5.18549 17.0145 5.48949 17.4405 5.48949C17.8545 5.48949 18.1905 5.82549 18.1905 6.23949C18.1905 6.65349 17.8545 6.98949 17.4405 6.98949Z"
              fill={props.color || color.black}/>
    </Svg>
);
