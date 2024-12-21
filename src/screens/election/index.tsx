import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {color, S, TS} from '../../themes';
import {TabHeaderCustom} from '../../components/tab-header-custom';
import Carousel from 'react-native-snap-carousel';
import {images} from '../../enums/images';
import {widthScreen, heightScreen} from '../../utils';
import {Filter, ArrowRight, ArrowDown} from '../../assets/icons';
import {ModalCustom} from '../../components';

export const ElectionScreen = () => {
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

  const dataContent = [
    {
      title: 'Chào đón đại diện trường Đại học KONKUK',
    },
    {
      title: 'Thủ tục và chi phí gia gạn visa D4 Hàn Quốc',
    },
    {
      title:
        'Visa chờ - tấm vé cuối cùng cứu các bạn D4-1 khỏi cư trú bất hợp pháp',
    },
  ];

  const [isModalFilter, setIsModalFilter] = useState<boolean>(false);

  const [isShowVisaD, setIsShowVisaD] = useState<boolean>(false);
  const [isShowVisaE, setIsShowVisaE] = useState<boolean>(false);
  const [isShowVisaF, setIsShowVisaF] = useState<boolean>(false);
  const [isShowVisaOther, setIsShowVisaOther] = useState<boolean>(false);
  const [isShowNationality, setIsShowNationality] = useState<boolean>(false);

  const renderItem = (item: any) => {
    return <Image source={item.item.image} style={styles.image} />;
  };
  return (
    <View style={styles.container}>
      <TabHeaderCustom
        title="Hành chính"
        isBack
        iconRight={<Filter color={color.white} />}
        actionRight={() => setIsModalFilter(true)}
      />
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

        <View style={styles.wrapperBox}>
          <TouchableOpacity
            style={styles.wrapperItem}
            onPress={() => setIsShowVisaD(!isShowVisaD)}>
            <Text style={styles.title}>Visa D</Text>
            {isShowVisaD ? <ArrowDown /> : <ArrowRight />}
          </TouchableOpacity>
          {isShowVisaD && (
            <FlatList
              data={dataContent}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={index}
                    style={{
                      paddingVertical: 8,
                      borderBottomWidth: 1,
                      borderColor: color.grey.light,
                    }}>
                    <Text style={{...TS.textXsSemiBold}}>{item.title}</Text>
                  </View>
                );
              }}
            />
          )}
        </View>

        <View style={styles.wrapperBox}>
          <TouchableOpacity
            style={styles.wrapperItem}
            onPress={() => setIsShowVisaE(!isShowVisaE)}>
            <Text style={styles.title}>Visa E</Text>
            {isShowVisaE ? <ArrowDown /> : <ArrowRight />}
          </TouchableOpacity>
          {isShowVisaE && (
            <FlatList
              data={dataContent}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={index}
                    style={{
                      paddingVertical: 8,
                      borderBottomWidth: 1,
                      borderColor: color.grey.light,
                    }}>
                    <Text style={{...TS.textXsSemiBold}}>{item.title}</Text>
                  </View>
                );
              }}
            />
          )}
        </View>

        <View style={styles.wrapperBox}>
          <TouchableOpacity
            style={styles.wrapperItem}
            onPress={() => setIsShowVisaF(!isShowVisaF)}>
            <Text style={styles.title}>Visa F</Text>
            {isShowVisaF ? <ArrowDown /> : <ArrowRight />}
          </TouchableOpacity>
          {isShowVisaF && (
            <FlatList
              data={dataContent}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={index}
                    style={{
                      paddingVertical: 8,
                      borderBottomWidth: 1,
                      borderColor: color.grey.light,
                    }}>
                    <Text style={{...TS.textXsSemiBold}}>{item.title}</Text>
                  </View>
                );
              }}
            />
          )}
        </View>

        <View style={styles.wrapperBox}>
          <TouchableOpacity
            style={styles.wrapperItem}
            onPress={() => setIsShowNationality(!isShowNationality)}>
            <Text style={styles.title}>Quốc tịch</Text>
            {isShowNationality ? <ArrowDown /> : <ArrowRight />}
          </TouchableOpacity>
          {isShowNationality && (
            <FlatList
              data={dataContent}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={index}
                    style={{
                      paddingVertical: 8,
                      borderBottomWidth: 1,
                      borderColor: color.grey.light,
                    }}>
                    <Text style={{...TS.textXsSemiBold}}>{item.title}</Text>
                  </View>
                );
              }}
            />
          )}
        </View>

        <View style={styles.wrapperBox}>
          <TouchableOpacity
            style={styles.wrapperItem}
            onPress={() => setIsShowVisaOther(!isShowVisaOther)}>
            <Text style={styles.title}>Visa khác</Text>
            {isShowVisaOther ? <ArrowDown /> : <ArrowRight />}
          </TouchableOpacity>
          {isShowVisaOther && (
            <FlatList
              data={dataContent}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={index}
                    style={{
                      paddingVertical: 8,
                      borderBottomWidth: 1,
                      borderColor: color.grey.light,
                    }}>
                    <Text style={{...TS.textXsSemiBold}}>{item.title}</Text>
                  </View>
                );
              }}
            />
          )}
        </View>
      </ScrollView>
      <ModalCustom
        isVisible={isModalFilter}
        title="Bộ lọc"
        onCloseModal={() => setIsModalFilter(false)}
      />
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
    width: '95%',
    height: heightScreen * 0.2,
    resizeMode: 'cover',
  },
  wrapperBox: {
    marginVertical: 12,
  },
  title: {
    ...TS.textSmSemiBold,
    textTransform: 'uppercase',
    color: color.blue.bold,
  },
  wrapperItem: {
    borderWidth: 1,
    borderColor: color.white,
    backgroundColor: color.white,
    borderRadius: 12,
    padding: 12,
    ...S.flexRow,
    ...S.justifyBetween,
  },
});
