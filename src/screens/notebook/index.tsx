import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {color, S, TS} from '../../themes';
import {TabHeaderCustom} from '../../components/tab-header-custom';
import {images} from '../../enums/images';

export const NotebookScreen = () => {
  const dataHeader = [
    {
      image: images.pointKorea,
      title: 'Đang ở Hàn',
    },
    {
      image: images.thinkKorea,
      title: 'Sắp sang Hàn',
    },
    {
      image: images.bride,
      title: 'Cô dâu và quốc tịch Hàn',
    },
    {
      image: images.student,
      title: 'Du học sinh',
    },
    {
      image: images.election,
      title: 'Kế toán - Thuế',
    },
    {
      image: images.worker,
      title: 'Người lao động',
    },
    {
      image: images.health,
      title: 'Phúc lợi xã hội',
    },
    {
      image: images.economy,
      title: 'Tài chính',
    },
    {
      image: images.news,
      title: 'Thông tin khác',
    },
  ];

  const dataContent = [
    {
      image: images.lb1,
      title: 'Giới thiệu hiệp hội giao lưu văn hoá Việt - Hàn',
    },
    {
      image: images.lb2,
      title: 'Giới thiệu hiệp hội giao lưu văn hoá Việt - Hàn',
    },
    {
      image: images.lb3,
      title: 'Giới thiệu hiệp hội giao lưu văn hoá Việt - Hàn',
    },
    {
      image: images.lb4,
      title: 'Giới thiệu hiệp hội giao lưu văn hoá Việt - Hàn',
    },
    {
      image: images.lb5,
      title: 'Giới thiệu hiệp hội giao lưu văn hoá Việt - Hàn',
    },
    {
      image: images.lb6,
      title: 'Giới thiệu hiệp hội giao lưu văn hoá Việt - Hàn',
    },
    {
      image: images.lb7,
      title: 'Giới thiệu hiệp hội giao lưu văn hoá Việt - Hàn',
    },
    {
      image: images.lb9,
      title: 'Giới thiệu hiệp hội giao lưu văn hoá Việt - Hàn',
    },
  ];

  const ItemContent = (props: any) => {
    const {item} = props;
    return (
      <TouchableOpacity
        style={{
          ...S.flexRow,
          ...S.itemsCenter,
          borderBottomWidth: 1,
          paddingVertical: 8,
          borderColor: color.grey.light,
        }}>
        <Image
          style={{width: 100, height: 100, resizeMode: 'cover'}}
          source={item.image}
        />
        <Text style={{marginLeft: 12, ...TS.textSmMedium, maxWidth: '65%'}}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const ItemHeader = (props: any) => {
    const {item} = props;
    return (
      <TouchableOpacity
        style={{
          ...S.flexRow,
          ...S.itemsCenter,
          ...S.justifyCenter,
          borderWidth: 1,
          borderColor: color.blue.bold,
          borderRadius: 12,
          padding: 12,
          margin: 8,
          maxHeight: 48,
        }}>
        <Image style={styles.image} source={item.image} />
        <View style={{marginLeft: 4}}>
          <Text style={{...TS.textXsMedium}}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Sổ tay" isBack/>
      <FlatList
        style={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataHeader}
        renderItem={({item, index}) => {
          return (
            <View key={index}>
              <ItemHeader item={item} />
            </View>
          );
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dataContent}
        style={{marginHorizontal: 12,}}
        renderItem={({item, index}) => {
          return (
            <View key={index}>
              <ItemContent item={item} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: color.white,
  },
  image: {
    resizeMode: 'cover',
    width: 30,
    height: 30,
  },
  flatList: {
    maxHeight: 70,
    paddingBottom: 12,
  },
});
