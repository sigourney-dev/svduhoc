import React from 'react';
import Svg, {SvgProps, Path, Mask, G} from 'react-native-svg';
import {color} from '../../src/themes';

export const Warning = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Mask
        id="mask0_147_3338"
        maskUnits="userSpaceOnUse"
        x="2"
        y="3"
        width="21"
        height="19">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 3H22.0137V21.1855H2V3Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_147_3338)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.0126 4.5C11.5366 4.5 11.1126 4.746 10.8746 5.159L3.67665 17.724C3.44265 18.134 3.44465 18.623 3.68165 19.032C3.91865 19.441 4.34265 19.686 4.81565 19.686H19.1986C19.6706 19.686 20.0946 19.441 20.3316 19.032C20.5696 18.623 20.5716 18.134 20.3356 17.724L13.1506 5.159C12.9136 4.746 12.4896 4.5 12.0126 4.5ZM19.1986 21.186H4.81565C3.80165 21.186 2.89265 20.662 2.38365 19.784C1.87465 18.907 1.87165 17.858 2.37465 16.979L9.57465 4.413C10.0806 3.528 10.9916 3 12.0126 3H12.0136C13.0336 3 13.9466 3.529 14.4526 4.415L21.6386 16.979C22.1416 17.858 22.1386 18.907 21.6296 19.784C21.1206 20.662 20.2116 21.186 19.1986 21.186Z"
          fill={props.color || color.black}
        />
      </G>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0039 14.164C11.5899 14.164 11.2539 13.828 11.2539 13.414V10.314C11.2539 9.89996 11.5899 9.56396 12.0039 9.56396C12.4179 9.56396 12.7539 9.89996 12.7539 10.314V13.414C12.7539 13.828 12.4179 14.164 12.0039 14.164Z"
        fill={props.color || color.black}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0059 17.499C11.4529 17.499 11.0009 17.052 11.0009 16.499C11.0009 15.946 11.4439 15.499 11.9959 15.499H12.0059C12.5589 15.499 13.0059 15.946 13.0059 16.499C13.0059 17.052 12.5589 17.499 12.0059 17.499Z"
        fill={props.color || color.black}
      />
    </Svg>
  );
};
