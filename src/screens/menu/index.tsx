import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TabHeaderCustom, ButtonCustom} from '../../components';
import {ArrowRight} from '../../assets/icons';
import {color, S, TS} from '../../themes';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../../redux/actions';
import { setDataStorage } from '../../utils';
import { KeyStores } from '../../enums/key-storage';

interface IPropsItem {
  title: string;
  direction: string;
}

export const MenuScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {isLogin, profile} = useSelector((store: any) => store.auth);

  const ItemMenu = (props: IPropsItem) => {
    const {title, direction} = props;
    return (
      <TouchableOpacity
        style={{
          ...S.flexRow,
          ...S.justifyBetween,
          borderBottomWidth: 1,
          borderColor: color.grey.light,
          padding: 12,
        }}
        onPress={() => {
          //@ts-ignore
          navigation.navigate(direction);
        }}>
        <Text style={{...TS.textSmSemiBold}}>{title}</Text>
        <ArrowRight />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <TabHeaderCustom title={'Menu'} />
      <View style={styles.wrapper}>
        {isLogin && (
          <ItemMenu
            title="Thông tin tài khoản"
            direction="ChangeInformationScreen"
          />
        )}
        {isLogin && (
          <ItemMenu title="Đổi mật khẩu" direction="ChangePasswordScreen" />
        )}
        <ItemMenu title="Hỏi đáp" direction="AskAnswerScreen" />
        <ItemMenu title="Liên hệ" direction="InfoScreen" />
        <ItemMenu title="Đội ngũ đồng hành" direction="MemberScreen" />
      </View>
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
        <Text style={{...TS.textSmBold, color: color.grey.light}}>
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
