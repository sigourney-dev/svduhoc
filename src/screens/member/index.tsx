import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import {TabHeaderCustom} from '../../components/tab-header-custom';
import {S, color, TS} from '../../themes';
import {images} from '../../enums/images';

export const MemberScreen = () => {
  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Đội ngũ đồng hành" isBack />
      <View style={{marginHorizontal: 12, ...S.itemsCenter}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{height: '85%'}}>
        <View style={styles.wrapperImage}>
          <Image style={styles.image} source={images.mem1} />
          <View style={{padding: 12, ...S.itemsCenter}}>
            <Text style={styles.title}>Ông: Nguyễn Đình Tuyển</Text>
            <Text style={styles.content}>
              GĐ Trung Tâm Du Học Quốc Tế SVDUHOC.VN
            </Text>
          </View>
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
  },
  wrapperImage: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: color.white,
    backgroundColor: color.white,
    borderRadius: 12,
    ...S.itemsCenter,
  },
  image: {
    borderRadius: 12,
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    ...TS.textLgSemiBold,
    color: color.green.bold,
  },
  content: {
    ...TS.textSmSemiBold,
    color: color.green.bold,
  },
});
