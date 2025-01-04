import React, {useEffect, useState} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import * as categoryActions from '../../redux/actions';
import {showImage} from '../../utils';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {
  dataHorizontalStudent,
  dataHorizontalWorker,
  dataHorizontalSettlement,
} from '../../enums/data-list';

export const CommonScreen = (props: any) => {
  const {title, type} = props.route.params;
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const {categoryResult} = useSelector((store: any) => store.category);

  const [bannerList, setBannerList] = useState<any>([]);
  const [categoryList, setCategoryList] = useState<any>([]);

  const chooseList = () => {
    switch (type) {
      case 'SINHVIEN': {
        return dataHorizontalStudent;
      }
      case 'LAODONG': {
        return dataHorizontalWorker;
      }
      case 'DINHCU': {
        return dataHorizontalSettlement;
      }
      default: {
        return null;
      }
    }
  };

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
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
  };

  useEffect(() => {
    dispatch(categoryActions.removePostResult());
  } ,[isFocused]);

  useEffect(() => {
    if (!categoryResult) {
      dispatch(
        categoryActions.getBannerCategoryRequest({
          type: type,
        }),
      );
    }
  }, [type, title]);

  useEffect(() => {
    if (categoryResult) {
      if (categoryResult.categories) {
        setCategoryList([...categoryList, ...categoryResult.categories]);
      }
      if (categoryResult.banners) {
        setBannerList([...bannerList, ...categoryResult.banners]);
      }
    }
  }, [categoryResult]);

  return (
    <View style={styles.container}>
      <TabHeaderCustom title={title} isBack />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        <Carousel
          sliderWidth={widthScreen}
          sliderHeight={widthScreen}
          itemWidth={widthScreen}
          data={bannerList}
          renderItem={renderItem}
          hasParallaxImages={true}
          autoplay
          loop
          activeAnimationType="decay"
        />

        {chooseList() && (
          <FlatList
            style={{marginTop: 12}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={chooseList()}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    ...S.flexRow,
                    ...S.itemsCenter,
                    marginRight: 12,
                    borderWidth: 1,
                    padding: 12,
                    borderRadius: 12,
                    borderColor: color.white,
                    backgroundColor: color.white,
                  }}
                  onPress={() => {
                    // @ts-ignore
                    navigation.navigate(item.direction, {type: type});
                  }}>
                  <Image
                    source={item.icon}
                    style={{width: 30, height: 30, resizeMode: 'contain'}}
                  />
                  <Text style={{...TS.textXsMedium, marginLeft: 8}}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        )}

        <FlatList
          scrollEnabled={false}
          data={categoryList}
          renderItem={({item, index}) => {
            return (
              <View style={styles.wrapperBox} key={index}>
                <View
                  style={{...S.flexRow, ...S.itemsCenter, ...S.justifyBetween}}>
                  <Text
                    style={{
                      ...TS.textBaseBold,
                      color: color.blue.bold,
                      marginVertical: 8,
                    }}>
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      // @ts-ignore
                      navigation.navigate('NewsScreen', {
                        title: item.name,
                        idTitle: item.id,
                      });
                    }}>
                    <Text style={{...TS.textXsMedium, color: color.red.bold}}>
                      Xem tất cả
                    </Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={item.postCategories}
                  renderItem={({item: it, index: id}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          // @ts-ignore
                          navigation.navigate('DetailNewsScreen', {
                            idPost: it.postId,
                          });
                        }}
                        key={id}
                        style={styles.wrapperItem}>
                        <Image
                          source={{uri: showImage(it.post.imagePath)}}
                          style={{
                            width: '100%',
                            height: heightScreen * 0.2,
                            resizeMode: 'contain',
                          }}
                        />
                        <Text style={styles.titleItem}>{it.post.title}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            );
          }}
        />
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
    width: '94%',
    height: heightScreen * 0.25,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: color.grey.light,
    borderRadius: 12,
  },
  wrapperBox: {
    marginVertical: 12,
  },
  titleItem: {
    ...TS.textXsSemiBold,
    marginBottom: 4,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  wrapperItem: {
    borderWidth: 1,
    borderColor: color.white,
    backgroundColor: color.white,
    ...S.itemsCenter,
    marginHorizontal: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: widthScreen * 0.456,
  },
});
