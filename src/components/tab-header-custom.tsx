import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {color, S, TS} from '../themes';
import {Utils} from '../utils';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from '../assets/icons';

interface IProps {
  title: string;
  isBack?: boolean;
  iconRight?: any;
  actionRight?: any;
}

export const TabHeaderCustom = (props: IProps) => {
  const navigation = useNavigation();
  const {title, isBack, iconRight, actionRight} = props;
  return (
    <View style={styles.container}>
      {isBack ? (
        <TouchableOpacity
          style={{marginTop: Utils.isIOS() ? 40 : 0}}
          onPress={() => {
            navigation.goBack();
          }}>
          <ArrowLeft color={color.white} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <Text style={styles.title}>{title}</Text>
      {iconRight ? (
        <TouchableOpacity
          onPress={actionRight}
          style={{marginTop: Utils.isIOS() ? 40 : 0}}>
          {iconRight}
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flexRow,
    paddingHorizontal: 12,
    height: Utils.isIOS() ? 90 : 50,
    backgroundColor: color.blue.bold,
    ...S.itemsCenter,
    ...S.justifyBetween,
  },
  title: {
    marginTop: Utils.isIOS() ? 40 : 0,
    ...TS.textLgMedium,
    color: color.white,
  },
});
