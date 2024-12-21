import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {color, S, TS} from '../../themes';
import {TabHeaderCustom} from '../../components/tab-header-custom';
import Carousel from 'react-native-snap-carousel';
import {images} from '../../enums/images';
import {widthScreen, heightScreen} from '../../utils';

export const WorkerScreen = () => {
  const data = [
    {
      image: images.lb1,
    },
    {
      image: images.lb2,
    },
    {
      image: images.lb3,
    },
    {
      image: images.lb4,
    },
    {
      image: images.lb5,
    },
  ];

  const dataHorizontal = [
    {
      icon: images.student,
      title: 'Tư vấn du học Hàn Quốc miễn phí',
    },
    {
      icon: images.application,
      title: 'Tư vấn hồ sơ lên chuyên ngành tại Hàn Quốc D2',
    },
  ];

  const dataList = [
    {
      image: images.lb6,
      title: 'Tuyển du học sinh Hàn Quốc kỳ tháng 6-9/2025',
    },
    {
      image: images.lb7,
      title:
        'Chào đón đại diện trường đại học MOKWON đến thăm và làm việc tại SVDUHOC.VN',
    },
    {
      image: images.lb8,
      title: 'Danh sách các trường TOP tuyển sinh tháng 9-12/2024',
    },
    {
      image: images.lb9,
      title: 'Chào mừng trường ĐH SUNMOON đến thăm và làm việc tại SVDUHOC.VN',
    },
  ];

  const renderItem = (item: any) => {
    return <Image source={item.item.image} style={styles.image} />;
  };
  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Lao động" isBack />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        <Carousel
          sliderWidth={widthScreen}
          sliderHeight={widthScreen}
          itemWidth={widthScreen - 40}
          data={data}
          renderItem={renderItem}
          hasParallaxImages={true}
          autoplay
          loop
          activeAnimationType="decay"
        />

        <FlatList
          style={{marginTop: 12}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataHorizontal}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  ...S.flexRow,
                  ...S.itemsCenter,
                  marginRight: 12,
                  borderWidth: 1,
                  padding: 12,
                  borderRadius: 12,
                  borderColor: color.white,
                  backgroundColor: color.white,
                }}>
                <Image
                  source={item.icon}
                  style={{width: 30, height: 30, resizeMode: 'contain'}}
                />
                <Text style={{...TS.textXsMedium, marginLeft: 8}}>
                  {item.title}
                </Text>
              </View>
            );
          }}
        />

        <View style={styles.wrapperBox}>
          <Text style={{...TS.textLgMedium}}>Hành chính VISA E</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={dataList}
            renderItem={({item, index}) => {
              return (
                <View
                  key={index}
                  style={styles.wrapperItem}>
                  <Image
                    source={item.image}
                    style={{
                      width: '100%',
                      height: heightScreen * 0.2,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text style={styles.titleItem}>{item.title}</Text>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.wrapperBox}>
          <Text style={{...TS.textLgMedium}}>Sổ tay cho người lao động</Text>
          <FlatList
          showsHorizontalScrollIndicator={false}
            horizontal
            data={dataList}
            renderItem={({item, index}) => {
              return (
                <View
                  key={index}
                  style={styles.wrapperItem}>
                  <Image
                    source={item.image}
                    style={{
                      width: '100%',
                      height: heightScreen * 0.2,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text style={styles.titleItem}>{item.title}</Text>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.wrapperBox}>
          <Text style={{...TS.textLgMedium}}>Phúc lợi xã hội</Text>
          <FlatList
          showsHorizontalScrollIndicator={false}
            horizontal
            data={dataList}
            renderItem={({item, index}) => {
              return (
                <View
                  key={index}
                  style={styles.wrapperItem}>
                  <Image
                    source={item.image}
                    style={{
                      width: '100%',
                      height: heightScreen * 0.2,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text style={styles.titleItem}>{item.title}</Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
  },
  wrapper: {
    marginHorizontal: 12,
    marginBottom: 40,
  },
  image: {
    width: widthScreen,
    height: heightScreen * 0.2,
    resizeMode: 'cover',
  },
  wrapperBox: {
    marginVertical: 12,
  },
  titleItem: {
    ...TS.textSmSemiBold,
    marginTop: 8,
    textAlign: 'center',
  },
  wrapperItem: {
    borderWidth: 1,
    borderColor: color.white,
    backgroundColor: color.white,
    ...S.itemsCenter,
    marginHorizontal: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    width: widthScreen / 2,
  },
});
