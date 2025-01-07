import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {HeaderHome} from './header';
import {color, S, TS} from '../../themes';
import {images} from '../../enums/images';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import * as categoryActions from '../../redux/actions';
import {showImage, widthScreen} from '../../utils';
import {SvgUri} from 'react-native-svg';

export const NewHomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const {isLogin} = useSelector((store: any) => store.auth);
  const {listMenuResult} = useSelector((store: any) => store.menu);

  const ItemHome = (props: any) => {
    const {image, action, title, isDynamic} = props;
    return (
      <TouchableOpacity onPress={action} style={styles.wrapperItem}>
        {isDynamic ? (
          <View>
            <SvgUri width={50} height={50} uri={image} />
          </View>
        ) : (
          <Image style={styles.image} source={image} />
        )}

        <Text
          style={{
            ...TS.textXsMedium,
            textAlign: 'center',
            width: 80,
            marginTop: 4,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    dispatch(categoryActions.removeCategoryResult());
    dispatch(
      categoryActions.getListMenuRequest({
        pageSize: 100,
      }),
    );
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <HeaderHome />
      <View style={styles.wrapper}>
        <View style={{...S.flexRow, ...S.justifyBetween}}>
          <TouchableOpacity
            onPress={() => {
              //@ts-ignore
              navigation.navigate('FormStudentScreen', {type: 'SINHVIEN'});
            }}>
            <Text style={{...TS.textSmSemiBold, color: color.red.bold}}>
              Đăng ký tư vấn miễn phí
            </Text>
          </TouchableOpacity>

          {!isLogin && (
            <TouchableOpacity
              onPress={() => {
                //@ts-ignore
                navigation.navigate('LoginScreen');
              }}>
              <Text style={{...TS.textSmSemiBold, color: color.red.bold}}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: '90%'}}>
          <View>
            <Text style={{...TS.textLgSemiBold}}>Tính năng chính</Text>
            <View
              style={{...S.flexRow, ...S.justifyBetween, marginVertical: 8}}>
              <ItemHome
                image={images.student}
                title={'Sinh viên'}
                action={() => {
                  // @ts-ignore
                  navigation.navigate('CommonScreen', {
                    title: 'Sinh viên',
                    type: 'SINHVIEN',
                  });
                }}
              />
              <ItemHome
                image={images.worker}
                title={'Lao động'}
                action={() => {
                  // @ts-ignore
                  navigation.navigate('CommonScreen', {
                    title: 'Lao động',
                    type: 'LAODONG',
                  });
                }}
              />
              <ItemHome
                image={images.live}
                title={'Định cư'}
                action={() => {
                  // @ts-ignore
                  navigation.navigate('CommonScreen', {
                    title: 'Định cư',
                    type: 'DINHCU',
                  });
                }}
              />
              <ItemHome
                image={images.application}
                title={'Đăng ký'}
                action={() => {
                  // @ts-ignore
                  navigation.navigate('ApplicationScreen');
                }}
              />
            </View>

            <View
              style={{...S.flexRow, ...S.justifyBetween, marginVertical: 8}}>
              <ItemHome
                image={images.election}
                title={'Hành chính'}
                action={() => {
                  // @ts-ignore
                  navigation.navigate('CommonScreen', {
                    title: 'Hành chính',
                    type: 'HANHCHINH',
                  });
                }}
              />
              <ItemHome
                image={images.notebook}
                title={'Sổ tay'}
                action={() => {
                  // @ts-ignore
                  navigation.navigate('NotebookScreen');
                }}
              />
              <ItemHome
                image={images.communication}
                title={'Cộng đồng'}
                action={() => {
                  // @ts-ignore
                  navigation.navigate('CommunityScreen');
                }}
              />
              <ItemHome
                image={images.company}
                title={'Doanh nghiệp'}
                action={() => {}}
              />
            </View>
          </View>

          <View>
            <Text style={{...TS.textLgSemiBold, marginTop: 12}}>
              Chỉ có ở SVDUHOC.VN
            </Text>
            <View
              style={{
                marginVertical: 12,
              }}>
              {listMenuResult && (
                <FlatList
                  numColumns={4}
                  scrollEnabled={false}
                  data={listMenuResult.data}
                  renderItem={({item, index}) => {
                    return (
                      <View key={index} style={{width: widthScreen / 4, marginVertical: 8,}}>
                        <ItemHome
                          isDynamic
                          image={showImage(item.imagePath)}
                          title={item.name}
                          action={() => {
                            //@ts-ignore
                            navigation.navigate('IconHome', {
                              title: item.name,
                              link: item.link,
                            });
                          }}
                        />
                      </View>
                    );
                  }}
                />
              )}
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
    backgroundColor: color.white,
  },
  wrapper: {
    marginHorizontal: 12,
    paddingTop: 12,
  },
  wrapperItem: {
    ...S.itemsCenter,
    width: 80,
    height: 80,
    padding: 4,
  },
  image: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
