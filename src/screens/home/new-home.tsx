import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {HeaderHome} from './header';
import {color, S, TS} from '../../themes';
import {images} from '../../enums/images';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import * as categoryActions from '../../redux/actions';

export const NewHomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const {isLogin} = useSelector((store: any) => store.auth);

  const ItemHome = (props: any) => {
    const {image, action, title} = props;
    return (
      <TouchableOpacity onPress={action} style={styles.wrapperItem}>
        <Image style={styles.image} source={image} />
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
    dispatch(categoryActions.removeAbroadResult());
    dispatch(categoryActions.removePostResult());
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
                  navigation.navigate('CommonScreen', {title: 'Sinh viên', type: 'SINHVIEN'});
                }}
              />
              <ItemHome
                image={images.worker}
                title={'Lao động'}
                action={() => {
                  // @ts-ignore
                  navigation.navigate('CommonScreen', {title: 'Lao động', type: 'LAODONG'});
                }}
              />
              <ItemHome
                image={images.live}
                title={'Định cư'}
                action={() => {
                  // @ts-ignore
                  navigation.navigate('CommonScreen', {title: 'Định cư', type: 'DINHCU'});
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
                  navigation.navigate('CommonScreen', {title: 'Hành chính', type: 'HANHCHINH'});
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
              style={{...S.flexRow, ...S.justifyBetween, marginVertical: 12}}>
              <ItemHome
                image={images.checkVisa}
                title={'Kiểm tra Visa'}
                action={() => {
                  //@ts-ignore
                  navigation.navigate('IconHome', {
                    title: 'Kiểm tra Visa',
                    link: 'https://go-korea.com/kiem-tra-visa',
                  });
                }}
              />
              <ItemHome
                image={images.parttime}
                title={'Tính tiền làm thêm'}
                action={() => {
                  //@ts-ignore
                  navigation.navigate('IconHome', {
                    title: 'Tính tiền làm thêm',
                    link: 'https://go-korea.com/luong-toi-thieu-nam-2020-cua-han-quoc/',
                  });
                }}
              />
              <ItemHome
                image={images.layoff}
                title={'Tính tiền nghỉ việc'}
                action={() => {
                  //@ts-ignore
                  navigation.navigate('IconHome', {
                    title: 'Tính tiền nghỉ việc',
                    link: 'https://nghi-viec.glitch.me',
                  });
                }}
              />
              <ItemHome
                image={images.embassy}
                title={'Đặt hẹn ĐSQ VN tại Hàn'}
                action={() => {
                  //@ts-ignore
                  navigation.navigate('IconHome', {
                    title: 'Đặt hẹn ĐSQ VN tại Hàn',
                    link: 'https://go-korea.com/lien-he-dsq-viet-nam-tai-han-quoc/',
                  });
                }}
              />
            </View>

            <View
              style={{...S.flexRow, ...S.justifyBetween, marginVertical: 12}}>
              <ItemHome
                image={images.VNfood}
                title={'Bản đồ món Việt'}
                action={() => {
                  //@ts-ignore
                  navigation.navigate('IconHome', {
                    title: 'Bản đồ món Việt',
                    link: 'https://dichvu.go-korea.com/ban-do-doanh-nghiep-viet/',
                  });
                }}
              />
              <ItemHome
                image={images.mbti}
                title={'Trắc nghiệm MBTI'}
                action={() => {
                  //@ts-ignore
                  navigation.navigate('IconHome', {
                    title: 'Trắc nghiệm MBTI',
                    link: 'https://go-korea.com/_/mbti.htm',
                  });
                }}
              />
              <ItemHome
                image={images.korean}
                title={'Tên tiếng Hàn của bạn'}
                action={() => {
                  //@ts-ignore
                  navigation.navigate('IconHome', {
                    title: 'Tên tiếng Hàn của bạn',
                    link: 'https://go-korea.com/dich-ten/',
                  });
                }}
              />
              <ItemHome
                image={images.searchCode}
                title={'Tra cứ mã bưu điện'}
                action={() => {
                  //@ts-ignore
                  navigation.navigate('IconHome', {
                    title: 'Tra cứ mã bưu điện',
                    link: 'https://go-korea.com/luong-toi-thieu-nam-2020-cua-han-quoc/',
                  });
                }}
              />
            </View>

            <View
              style={{...S.flexRow, ...S.justifyBetween, marginVertical: 12}}>
              <ItemHome
                image={images.airplane}
                title={'Lịch bay'}
                action={() => {
                  //@ts-ignore
                  navigation.navigate('IconHome', {
                    title: 'Lịch bay',
                    link: 'https://go-korea.com/luong-toi-thieu-nam-2020-cua-han-quoc/',
                  });
                }}
              />
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
    resizeMode: 'cover',
    width: 50,
    height: 50,
  },
});
