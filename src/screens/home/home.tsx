import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {HeaderHome} from './header';
import {color, S, TS} from '../../themes';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import * as categoryActions from '../../redux/actions';
import * as abroadActions from '../../redux/actions';
import * as questionActions from '../../redux/actions';
import {
  formatUniqueList,
  heightScreen,
  showImage,
  Utils,
  widthScreen,
} from '../../utils';
import Carousel from 'react-native-snap-carousel';
import {images} from '../../enums/images';
import {ToastService} from '../../services/toast/toast-service';
import {ButtonCustom, ModalCustom, TextInputCustom} from '../../components';

export const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const {categoryResult} = useSelector((store: any) => store.category);
  const {listAbroadResult, listAbroadError} = useSelector(
    (store: any) => store.abroad,
  );
  const {
    listQuestionResult,
    listQuestionError,
    countQuestionResult,
    createQuestionResult,
    createQuestionError,
  } = useSelector((store: any) => store.question);

  const [bannerList, setBannerList] = useState<any>([]);
  const [categoryList, setCategoryList] = useState<any>([]);

  const [abroadList, setAbroadList] = useState<any>([]);
  const [lastIdAbroad, setLastIdAbroad] = useState<any>('');
  const existingIdsAbroad = useRef<Set<string>>(new Set());

  const [listQuestion, setListQuestion] = useState<any>([]);
  const [lastIdQuestion, setLastIdQuestion] = useState<any>('');
  const existingIdsQuestion = useRef<Set<string>>(new Set());

  const [isShowModalForm, setIsShowModalForm] = useState<boolean>(false);

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
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          ...S.flexRow,
          width: widthScreen / 2 - 16,
          borderWidth: 1,
          borderRadius: 12,
          borderColor: color.white,
          padding: 12,
          backgroundColor: props.color,
          shadowColor: color.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }}>
        <Image
          source={props.image}
          resizeMode="contain"
          style={{width: 30, height: 30}}
        />
        <View style={{marginLeft: 12}}>
          <Text style={{...TS.textXsBold, color: color.white}}>
            {props.title}
          </Text>
          <Text style={{...TS.textXsSemiBold, color: color.white}}>
            {props.content}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemAbroad = (item: any, index: any) => {
    if (item.status === 'ACTIVE') {
      return (
        <TouchableOpacity
          style={styles.wrapperItem}
          key={index}
          onPress={() => {
            // @ts-ignore
            navigation.navigate('DetailNewsScreen', {
              idPost: item.id,
              type: 'ABROAD',
            });
          }}>
          <Image
            style={styles.imageAbroad}
            source={{uri: showImage(item.imagePath)}}
          />
          <View style={{padding: 8, flex: 2, height: 110}}>
            <Text
              style={{
                ...TS.textSmSemiBold,
                textTransform: 'uppercase',
                textAlign: 'left',
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                ...TS.textXsSemiBold,
                textAlign: 'left',
                color: color.grey.mediumLight,
              }}>
              {item.excerpt}
            </Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const renderItemQuestion = (item: any, index: any) => {
    return (
      <View key={index}>
        <View
          style={{
            borderWidth: 1,
            borderColor: color.green.light,
            backgroundColor: '#D6F6D5',
            padding: 8,
            borderRadius: 12,
            marginBottom: 4,
          }}>
          <Text style={{...TS.textSmSemiBold, color: color.black}}>
            {item.fullName}
          </Text>
          <Text style={{...TS.textSmRegular, color: color.black}}>
            {item.content}
          </Text>
          <View>
            {item.answers.length !== 0 && (
              <View
                style={{
                  borderWidth: 1,
                  marginVertical: 4,
                  borderColor: color.green.bold,
                  backgroundColor: color.green.bold,
                  padding: 8,
                  borderRadius: 12,
                  marginTop: 4,
                }}>
                <Text
                  style={{
                    ...TS.textSmSemiBold,
                    color: '#D6F6D5',
                  }}>
                  SVDUHOC.VN
                </Text>
                <FlatList
                  data={item.answers}
                  renderItem={({item: it, index: id}) => {
                    return (
                      <View key={id}>
                        <Text
                          style={{
                            ...TS.textSmSemiBold,
                            color: color.white,
                            marginLeft: 4,
                          }}>
                          {it.content}
                        </Text>
                      </View>
                    );
                  }}
                />
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };

  const ModalForm = () => {
    const [info, setInfo] = useState<any>({
      question: '',
      fullname: '',
      email: '',
    });

    const onSubmit = () => {
      if (info.question === '') {
        ToastService.showError('Vui lòng nhập câu hỏi của bạn');
      } else {
        dispatch(
          questionActions.createQuestionRequest({
            content: info.question,
            email: info.email,
            fullName: info.fullname,
          }),
        );
      }
    };

    useEffect(() => {
      if (createQuestionError) {
        ToastService.showError(createQuestionError);
      } else if (createQuestionResult) {
        ToastService.showSuccess(createQuestionResult);
        setInfo({question: '', fullname: '', email: ''});
        setIsShowModalForm(false);
      }
    }, [createQuestionError, createQuestionResult]);

    return (
      <View>
        <TextInputCustom
          placeholder="Câu hỏi"
          title="Câu hỏi"
          value={info.question}
          onChangeValue={(text: string) => setInfo({...info, question: text})}
          keyboardType={'default'}
          redDot
          multiline
          height={120}
        />

        <TextInputCustom
          placeholder="Họ tên"
          title="Họ tên"
          value={info.fullname}
          onChangeValue={(text: string) => setInfo({...info, fullname: text})}
          keyboardType={'default'}
        />

        <TextInputCustom
          placeholder="Email"
          title="Email"
          value={info.email}
          onChangeValue={(text: string) => setInfo({...info, email: text})}
          keyboardType={'default'}
        />

        <View style={{...S.itemsCenter}}>
          <ButtonCustom
            title="Gửi câu hỏi"
            action={onSubmit}
            colorButton={color.green.bold}
            colorTitle={color.white}
          />
        </View>
      </View>
    );
  };

  useEffect(() => {
    dispatch(
      categoryActions.getBannerCategoryRequest({
        type: 'SINHVIEN',
      }),
    );
    if (abroadList.length === 0) {
      dispatch(
        abroadActions.getListAbroadRequest({
          pageSize: 10,
        }),
      );
    }

    dispatch(
      questionActions.getListQuestionRequest({
        pageSize: 30,
      }),
    );
    dispatch(questionActions.getCountQuestionRequest());
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

  useEffect(() => {
    if (listAbroadResult && listAbroadResult.data.length !== 0) {
      const newAbroadList = listAbroadResult.data.filter(
        (item: any) => !existingIdsAbroad.current.has(item.id),
      );
      setAbroadList((prevList: any) => [...prevList, ...newAbroadList]);
      newAbroadList.forEach((item: any) =>
        existingIdsAbroad.current.add(item.id),
      );
      if (listAbroadResult.hasNext) {
        setLastIdAbroad(
          listAbroadResult.data[listAbroadResult.data.length - 1].id,
        );
      } else {
        setLastIdAbroad('');
      }
    } else if (listAbroadError) {
      ToastService.showError(listAbroadError);
    }
  }, [listAbroadResult]);

  useEffect(() => {
    if (listQuestionResult && listQuestionResult.data.length !== 0) {
      const newAbroadList = listQuestionResult.data.filter(
        (item: any) => !existingIdsQuestion.current.has(item.id),
      );
      setListQuestion((prevList: any) => [...prevList, ...newAbroadList]);
      newAbroadList.forEach((item: any) =>
        existingIdsQuestion.current.add(item.id),
      );
      if (listQuestionResult.hasNext) {
        setLastIdQuestion(
          listQuestionResult.data[listQuestionResult.data.length - 1].id,
        );
      } else {
        setLastIdQuestion('');
      }
    } else if (listQuestionError) {
      ToastService.showError(listQuestionError);
    }
  }, [listQuestionResult, listQuestionError]);

  return (
    <View style={styles.container}>
      <HeaderHome />
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
            <ItemHome
              image={images.pointKorea}
              title={'17,984,641 đồng'}
              content={'= 1,000,000 won'}
              onPress={() => {}}
              color={color.green.bold}
            />
            <ItemHome
              image={images.election}
              title={'Đăng ký'}
              content={'Dịch vụ SVDUHOC.VN'}
              onPress={() => {
                navigation.navigate('ApplicationScreen');
              }}
              color={color.blue.bold}
            />
          </View>

          <View style={{...S.flexRow, ...S.justifyBetween, marginTop: 12}}>
            <ItemHome
              image={images.notebook}
              title={'Tính năng hay'}
              content={'của SVDUHOC.VN'}
              onPress={() => {
                navigation.navigate('FeatureScreen');
              }}
              color={color.red.light}
            />
            <ItemHome
              image={images.communication}
              title={'Hỏi đáp'}
              content={`${countQuestionResult} câu hỏi`}
              onPress={() => {
                setIsShowModalForm(true);
              }}
              color={color.blue.light}
            />
          </View>

          <View>
            <Text
              style={{
                ...TS.textXlSemiBold,
                textAlign: 'center',
                marginTop: 16,
                color: color.green.bold,
              }}>
              Tin du học
            </Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.flatList}
              data={abroadList}
              renderItem={({item, index}) => renderItemAbroad(item, index)}
            />
          </View>

          <View>
            <Text
              style={{
                ...TS.textXlSemiBold,
                textAlign: 'center',
                marginTop: 16,
                color: color.green.bold,
              }}>
              Đã có {countQuestionResult} câu hỏi trong tất cả các bài viết của{' '}
              <Text style={{...TS.textXlBold, color: color.green.bold}}>
                SVDUHOC.VN
              </Text>
            </Text>
            <FlatList
              data={listQuestion}
              renderItem={({item, index}) => renderItemQuestion(item, index)}
            />
          </View>
        </ScrollView>
      </View>
      <ModalCustom
        isVisible={isShowModalForm}
        title="Đặt câu hỏi"
        children={<ModalForm />}
        isBackground
        onCloseModal={() => setIsShowModalForm(false)}
      />
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
  wrapperItem: {
    ...S.flexRow,
    ...S.itemsCenter,
    marginTop: 8,
    backgroundColor: color.white,
  },
  flatList: {},
  imageAbroad: {
    width: 160,
    height: 120,
    borderRadius: 16,
    marginRight: 4,
    resizeMode: 'contain',
  },
});
