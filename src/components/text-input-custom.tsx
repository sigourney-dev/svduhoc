import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {color, ms, hs, vs, TS, S} from '../themes';
import {widthScreen} from '../utils';

interface IProps {
  placeholder: string;
  title: string;
  value: string;
  onChangeValue: (s: string) => void;
  iconRight?: any;
  iconLeft?: any;
  actionIconLeft?: (b: boolean) => void;
  isShowActionLeft?: boolean;
  width?: number;
  height?: number;
  keyboardType: any;
  maxLength?: any;
  multiline?: boolean;
  redDot?: boolean;
  notEdit?: boolean;
}

export const TextInputCustom = (props: IProps) => {
  const {
    placeholder,
    title,
    value,
    onChangeValue,
    iconRight,
    iconLeft,
    actionIconLeft,
    isShowActionLeft,
    width,
    height,
    keyboardType,
    maxLength,
    multiline,
    redDot,
    notEdit,
  } = props;

  return (
    <View style={[styles.container, {marginRight: width ? 8 : 0}]}>
      <View style={styles.wrapper}>
        <View style={styles.icon}>{iconRight || null}</View>
        <View>
          <Text style={styles.title}>{title} {redDot && (<Text style={{color: color.red.bold}}>*</Text>)}</Text>
          <TextInput
            editable={!notEdit}
            value={value}
            onChangeText={onChangeValue}
            placeholder={placeholder}
            placeholderTextColor={color.grey.light}
            secureTextEntry={iconLeft ? !!isShowActionLeft : false}
            keyboardType={keyboardType}
            style={[styles.input, {width: width ? width : widthScreen / 1.3, height: height ? height : 36}]}
            maxLength={maxLength}
            multiline={multiline}
          />
        </View>
      </View>
      {iconLeft ? (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            if (actionIconLeft) {
              actionIconLeft(!isShowActionLeft);
            }
          }}>
          {iconLeft}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 12,
    borderColor: color.blue.bold,
    borderRadius: 12,
    ...S.flexRow,
    marginVertical: 8,
    ...S.justifyBetween,
    ...S.itemsCenter,
  },
  wrapper: {
    flexDirection: 'row',
    ...S.itemsCenter,
  },
  input: {
    ...TS.textBaseMedium,
    padding: 4,
    color: color.black,
  },
  title: {
    ...TS.textSmSemiBold,
    position: 'absolute',
    left: 0,
    top: -24,
    color: color.blue.bold,
    backgroundColor: color.white,
  },
  icon: {
    marginTop: 6,
  },
});
