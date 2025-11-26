import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import {TabHeaderCustom, ButtonCustom, ModalCustom} from '../../components';
import {ArrowRight} from '../../../assets/icons';
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
import {ToastService} from '../../services/toast/toast-service';

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
  const {isLogin, profile, deleteError, deleteResult, loadingLogin} = useSelector(
    (store: any) => store.auth,
  );
  const {listMenuResult} = useSelector((store: any) => store.menu);
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);
  const [isShowModalOut, setIsShowModalOut] = useState<boolean>(false);

  const ItemMenu = (props: IPropsItem) => {
    const {title, direction, type, image, isDynamic, action} = props;

    return (
      <TouchableOpacity
        style={{
          ...S.flexRow,
          ...S.justifyBetween,
          borderBottomWidth: 1,
          borderColor: color.grey.light,
          padding: 12,
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
    setIsShowModalOut(false);
  setIsShowModalDelete(false);
  }, [isFocused, isLogin]);

  useEffect(() => {
    if (deleteResult) {
      dispatch(authActions.logoutRequest());
      setDataStorage(KeyStores.USER_TOKEN);
      setDataStorage(KeyStores.REFRESH_TOKEN);
      ToastService.showSuccess(deleteResult);
      dispatch(authActions.removeDelete());
    } else if (deleteError) {
      ToastService.showError(deleteError);
    }
  }, [deleteResult, deleteError]);

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
        {/* <ItemMenu
          title="Sổ tay"
          direction="NotebookScreen"
          image={images.notebook}
        /> */}
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
                <View key={index} style={{marginVertical: 8}}>
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
        {isLogin && (
          <TouchableOpacity
            onPress={() => setIsShowModalDelete(true)}
            style={{
              ...S.flexRow,
              padding: 12,
              ...S.justifyBetween,
              ...S.itemsCenter,
            }}>
            <View style={{...S.flexRow, ...S.itemsCenter}}>
              <Image
                source={images.deleteAccount}
                style={{width: 32, height: 32, resizeMode: 'cover'}}
              />
              <Text style={{...TS.textSmSemiBold, marginLeft: 8}}>
                Xoá tài khoản
              </Text>
            </View>
            <ArrowRight color={color.black} />
          </TouchableOpacity>
        )}
        {isLogin && (
          <View style={{...S.itemsCenter, marginTop: 12}}>
            <ButtonCustom
              action={() => {
                setIsShowModalOut(true);
              }}
              title="Đăng xuất"
              colorButton={color.green.bold}
              colorTitle={color.white}
            />
          </View>
        )}
      </ScrollView>
      <View style={{...S.itemsCenter, ...S.justifyCenter}}>
        <Text style={{...TS.textXsSemiBold, color: color.grey.light}}>
          Version 1.0
        </Text>
      </View>

      <ModalCustom
        isVisible={isShowModalOut && !loadingLogin}
        title="Bạn muốn Đăng xuất ?"
        buttonLeft="Huỷ bỏ"
        actionLeft={() => setIsShowModalOut(false)}
        buttonRight="Xác nhận"
        actionRight={() => {
          setIsShowModalOut(false);
          dispatch(authActions.logoutRequest());
          setDataStorage(KeyStores.USER_TOKEN);
          setDataStorage(KeyStores.REFRESH_TOKEN);
        }}
      />

      <ModalCustom
        isVisible={isShowModalDelete && !loadingLogin}
        title="Bạn muốn Xoá tài khoản ?"
        buttonLeft="Huỷ bỏ"
        actionLeft={() => setIsShowModalDelete(false)}
        buttonRight="Xác nhận"
        actionRight={() => {
          setIsShowModalDelete(false);
          dispatch(
            authActions.deleteAccountRequest(),
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
  wrapper: {
    ...S.flex1,
    marginHorizontal: 12,
  },
});
