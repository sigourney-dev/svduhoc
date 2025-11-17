import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {HeaderHome} from './header';
import {color, S, TS} from '../../themes';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import * as categoryActions from '../../redux/actions';
import {
  formatUniqueList,
  heightScreen,
  showImage,
  widthScreen,
} from '../../utils';
import Carousel from 'react-native-snap-carousel';
import {images} from '../../enums/images';

export const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const {categoryResult} = useSelector((store: any) => store.category);
  const {listAbroadResult, listAbroadError} = useSelector(
    (store: any) => store.abroad,
  );

  const [bannerList, setBannerList] = useState<any>([]);
  const [categoryList, setCategoryList] = useState<any>([]);
  const [abroadList, setAbroadList] = useState<any>([]);

  const renderItemBanner = (item: any) => {
    if (item.item.status === 'ACTIVE') {
      return (
        <TouchableOpacity
          key={item.item.id}
          onPress={() => {
            // @ts-ignore
            navigation.navigate('DetailNewsScreen', {idPost: item.item.postId});
          }}>
          <Image
            source={{uri: showImage(item.item.imagePath)}}
            style={styles.image}
          />
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const ItemHome = (props: any) => {
    return (
      <View
        style={{
          ...S.flexRow,
          width: widthScreen / 2 - 32,
          borderWidth: 1,
          borderRadius: 12,
          borderColor: color.white,
          padding: 12,
          backgroundColor: color.blue.light,
          shadowColor: color.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }}>
        <Image
          source={images.airplane}
          resizeMode="contain"
          style={{width: 40, height: 40}}
        />
        <View style={{marginLeft: 12}}>
          <Text style={{...TS.textSmSemiBold, color: color.white}}>title</Text>
          <Text style={{...TS.textSmMedium, color: color.white}}>content</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    dispatch(
      categoryActions.getBannerCategoryRequest({
        type: 'HANHCHINH',
      }),
    );
  }, [isFocused]);

  useEffect(() => {
    if (categoryResult) {
      if (categoryResult.banners) {
        setBannerList(
          formatUniqueList([...bannerList, ...categoryResult.banners], 'id'),
        );
      }
    }
  }, [categoryResult]);

  return (
    <View style={styles.container}>
      <HeaderHome />
      <View style={styles.wrapper}>
        <ScrollView>
          {bannerList.length !== 0 && (
            <Carousel
              sliderWidth={widthScreen}
              sliderHeight={widthScreen}
              itemWidth={widthScreen}
              data={bannerList}
              renderItem={renderItemBanner}
              hasParallaxImages={true}
              autoplay
              loop
              activeAnimationType="decay"
            />
          )}

          <View style={{...S.flexRow, ...S.justifyBetween, marginTop: 12}}>
            <ItemHome />
            <ItemHome />
          </View>

          <View style={{...S.flexRow, ...S.justifyBetween, marginTop: 12}}>
            <ItemHome />
            <ItemHome />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: color.white,
  },
  wrapper: {
    ...S.flex1,
    marginHorizontal: 12,
    paddingTop: 12,
  },
  image: {
    width: '94%',
    height: heightScreen * 0.25,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: color.grey.light,
    borderRadius: 12,
  },
});
