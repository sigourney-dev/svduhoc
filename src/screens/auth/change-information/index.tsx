import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color, S, TS} from '../../../themes';
import {
  TabHeaderCustom,
  TextInputCustom,
  ButtonCustom,
  ModalCustom,
  ModalLoading,
} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../../../redux/actions';
import {ToastService} from '../../../services/toast/toast-service';

export const ChangeInformationScreen = () => {
  const dispatch = useDispatch();
  const {profile, changeInfoError, changeInfoResult, isLoading} = useSelector(
    (store: any) => store.auth,
  );

  const [data, setData] = useState({
    fullName: profile.fullName || profile.lastName + ' ' + profile.firstName,
    email: profile.email,
    phoneNumber: profile.phoneNumber,
    description: '',
  });

  const [isModalConfirm, setIsModalConfirm] = useState<boolean>(false);

  const onConfirm = () => {
    setIsModalConfirm(false);
    dispatch(authActions.changeInformationRequest(data));
  };

  useEffect(() => {
    if (changeInfoError) {
      ToastService.showError(changeInfoError);
    } else if (changeInfoResult) {
      ToastService.showSuccess(changeInfoResult);
      dispatch(authActions.saveProfile(data));
    }
    dispatch(authActions.removeAuthResult());
  }, [changeInfoError, changeInfoResult]);

  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Thông tin tài khoản" isBack />
      <View style={styles.wrapper}>
        <TextInputCustom
          placeholder="Họ tên"
          title="Họ tên"
          value={profile.id === 1465903152627712 ? '' : data.fullName}
          onChangeValue={(text: string) => setData({...data, fullName: text})}
          keyboardType={'default'}
        />

        <TextInputCustom
          placeholder="Số điện thoại"
          title="Số điện thoại"
          value={profile.id === 1465903152627712 ? '' : data.phoneNumber}
          onChangeValue={(text: string) =>
            setData({...data, phoneNumber: text})
          }
          keyboardType={'numeric'}
        />

        <TextInputCustom
          placeholder="Email"
          title="Email"
          value={profile.id === 1465903152627712 ? '' : data.email}
          onChangeValue={(text: string) => setData({...data, email: text})}
          keyboardType={'default'}
        />

        <View style={{...S.itemsCenter, marginTop: 24}}>
          <ButtonCustom
            title="Thay đổi"
            action={() => {
              setIsModalConfirm(true);
            }}
          />
        </View>
      </View>

      <ModalCustom
        isVisible={isModalConfirm}
        title="Xác nhận thay đổi thông tin cá nhân ?"
        actionLeft={() => {
          setIsModalConfirm(false);
        }}
        buttonLeft="Huỷ bỏ"
        actionRight={onConfirm}
        buttonRight="Xác nhận"
      />

      <ModalLoading isVisible={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: color.white,
  },
  wrapper: {
    margin: 12,
  },
});
