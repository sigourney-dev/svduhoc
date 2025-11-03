import React from 'react';
import {StyleSheet, TouchableOpacity, Text, TextStyle} from 'react-native';
import {color, ms, hs, vs, TS, S} from '../themes';

interface IProps {
  title: string;
  colorButton?: string;
  colorTitle?: string;
  action: any;
  width?: number;
  height?: number;
  textStyle?: TextStyle;
  changeBorderColor?: boolean;
}

export const ButtonCustom = (props: IProps) => {
  const {
    title,
    colorTitle,
    colorButton,
    action,
    width,
    height,
    textStyle,
    changeBorderColor,
  } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        {
          width: width || hs(140),
          height: height || vs(50),
          backgroundColor: colorButton || color.green.bold,
          borderColor: color.blue.light,
          borderWidth: changeBorderColor ? 3 : 0,
        },
      ]}
      onPress={action}>
      <Text
        {...props.textStyle}
        style={{
          ...TS.textSmMedium,
          color: colorTitle || color.white,
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.justifyCenter,
    ...S.itemsCenter,
    borderWidth: ms(1),
    borderRadius: ms(24),
    paddingHorizontal: hs(12),
  },
});
