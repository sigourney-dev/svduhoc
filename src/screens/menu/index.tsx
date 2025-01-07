import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import {TabHeaderCustom, ButtonCustom} from '../../components';
import {ArrowRight} from '../../assets/icons';
import {color, S, TS} from '../../themes';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../../redux/actions';
import {setDataStorage} from '../../utils';
import {KeyStores} from '../../enums/key-storage';
import {images} from '../../enums/images';
import {SvgUri} from 'react-native-svg';
import {showImage} from '../../utils';
import {Utils, widthScreen} from '../../utils';

interface IPropsItem {
  title: string;
  direction?: string;
  type?: string;
  image?: any;
  isDynamic?: any;
  action?: any;
}

export const MenuScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const {isLogin, profile} = useSelector((store: any) => store.auth);
  const {listMenuResult} = useSelector((store: any) => store.menu);

  const ItemMenu = (props: IPropsItem) => {
    const {title, direction, type, image, isDynamic, action} = props;

    return (
      <TouchableOpacity
        style={{
          ...S.flexRow,
          ...S.justifyBetween,
          borderBottomWidth: 1,
          borderColor: color.grey.light,
          padding: 20,
          ...S.itemsCenter,
        }}
        onPress={() => {
          if (type && title) {
            //@ts-ignore
            navigation.navigate(direction, {title: title, type: type});
          } else if (isDynamic) {
            action();
          } else {
            //@ts-ignore
            navigation.navigate(direction);
          }
        }}>
        <View style={{...S.flexRow, ...S.itemsCenter}}>
          {isDynamic ? (
            <View>
              <SvgUri width={32} height={32} uri={image} />
            </View>
          ) : (
            <Image
              source={image}
              style={{width: 32, height: 32, resizeMode: 'cover'}}
            />
          )}
          <Text style={{...TS.textSmSemiBold, marginLeft: 8}}>{title}</Text>
        </View>
        <ArrowRight />
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    dispatch(authActions.removeCategoryResult());
    dispatch(
      authActions.getListMenuRequest({
        pageSize: 100,
      }),
    );
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <TabHeaderCustom title={'Menu'} />
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        {isLogin && (
          <ItemMenu
            title="Thông tin tài khoản"
            direction="ChangeInformationScreen"
            image={images.profile}
          />
        )}
        {isLogin && (
          <ItemMenu
            title="Đổi mật khẩu"
            direction="ChangePasswordScreen"
            image={images.padlock}
          />
        )}
        <ItemMenu
          title="Sinh viên"
          direction="CommonScreen"
          type="SINHVIEN"
          image={images.student}
        />
        <ItemMenu
          title="Lao động"
          direction="CommonScreen"
          type="LAODONG"
          image={images.worker}
        />
        <ItemMenu
          title="Định cư"
          direction="CommonScreen"
          type="DINHCU"
          image={images.live}
        />
        <ItemMenu
          title="Đăng ký"
          direction="ApplicationScreen"
          image={images.application}
        />
        <ItemMenu
          title="Hành chính"
          direction="CommonScreen"
          type="HANHCHINH"
          image={images.election}
        />
        <ItemMenu
          title="Sổ tay"
          direction="NotebookScreen"
          image={images.notebook}
        />
        <ItemMenu
          title="Hỏi đáp"
          direction="CommunityScreen"
          image={images.communication}
        />
        <ItemMenu
          title="Doanh nghiệp"
          direction="InfoScreen"
          image={images.company}
        />
        <ItemMenu
          title="Đội ngũ đồng hành"
          direction="MemberScreen"
          image={images.group}
        />
        {listMenuResult && (
          <FlatList
            scrollEnabled={false}
            data={listMenuResult.data}
            renderItem={({item, index}) => {
              return (
                <View
                  key={index}
                  style={{marginVertical: 8}}>
                  <ItemMenu
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
        <ItemMenu
          title="Liên hệ"
          direction="InfoScreen"
          image={images.customerService}
        />
      </ScrollView>
      {isLogin && (
        <View style={{...S.itemsCenter}}>
          <ButtonCustom
            action={() => {
              dispatch(authActions.logoutRequest());
              setDataStorage(KeyStores.USER_TOKEN);
              setDataStorage(KeyStores.REFRESH_TOKEN);
            }}
            title="Đăng xuất"
            colorButton={color.blue.bold}
            colorTitle={color.white}
          />
        </View>
      )}
      <View style={{...S.itemsCenter, ...S.justifyCenter}}>
        <Text style={{...TS.textXsSemiBold, color: color.grey.light}}>
          Version 1.0
        </Text>
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
  },
});
