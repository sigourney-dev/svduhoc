import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {color, S, TS} from '../themes';
import {Utils, widthScreen} from '../utils';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from '../../assets/icons';

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
          style={{marginTop: 50}}
          onPress={() => {
            navigation.goBack();
          }}>
          <ArrowLeft color={color.white} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <Text style={[styles.title, {marginRight: isBack ? 16 : 30, width: isBack ? widthScreen * 0.8 : '100%',}]}>{title}</Text>
      {iconRight ? (
        <TouchableOpacity
          onPress={actionRight}
          style={{marginTop: 50}}>
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
    height: 86,
    backgroundColor: color.blue.bold,
    ...S.itemsCenter,
    ...S.justifyBetween,
  },
  title: {
    
    marginTop: 50,
    marginBottom: 8,
    ...TS.textLgMedium,
    color: color.white,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
