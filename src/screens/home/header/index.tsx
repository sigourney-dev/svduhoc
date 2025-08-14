import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color, TS, S, vs, hs} from '../../../themes';
import {Utils} from '../../../utils';
import {Notification} from '../../../../assets/icons';
import {images} from '../../../enums/images';

export const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Hi,</Text>
        <Text style={{...TS.textBaseBold, color: color.white}}>
          Welcome to SVDUHOC.VN
        </Text>
      </View>
      {/* <Notification color={color.white} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Utils.isIOS() ? 100 : 90,
    paddingHorizontal: 12,
    backgroundColor: color.blue.bold,
    paddingTop: 50,
    paddingBottom: 12,
    ...S.flexRow,
    ...S.justifyBetween,
    ...S.itemsCenter,
    borderBottomWidth: 1,
    borderColor: color.blue.bold,
  },
  title: {
    ...TS.textSmMedium,
    color: color.white,
  },
});
