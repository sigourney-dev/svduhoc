import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  ButtonCustom,
  TextInputCustom,
  TabHeaderCustom,
} from '../../../components';
import {color, S, TS} from '../../../themes';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from '../../../redux/actions';
import { useNavigation } from '@react-navigation/native';
import { ToastService } from '../../../services/toast/toast-service';

export const ConfirmForgotScreen = (props: any) => {
  const {emailRoute} = props.route.params;
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {confirmForgotError, confirmForgotResult} = useSelector((store: any) => store.auth);

  const [data, setData] = useState<any>({
    code: '',
    email: emailRoute,
    password: '',
    confirmPassword: '',
  });

  const onSubmit = () => {
    if (data.code === '') {
        ToastService.showError('Vui lòng nhập Mã xác nhận được gửi về email');
    } else if (data.password === '') {
        ToastService.showError('Vui lòng nhập Mật khẩu mới');
    } else if (data.confirmPassword === '') {
        ToastService.showError('Vui lòng nhập Mật khẩu xác nhận');
    } else if (data.password !== data.confirmPassword) {
        ToastService.showError('Mật khẩu xác nhận không khớp');
    } else {
        dispatch(authActions.confirmForgotRequest({
            otp: data.code,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
        }));
    }
  };

  useEffect(() => {
    if (confirmForgotError) {
        ToastService.showError(confirmForgotError);
    } else if (confirmForgotResult) {
        ToastService.showSuccess(confirmForgotResult);
        setData({
            code: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
        // @ts-ignore
        navigation.navigate('LoginScreen');
    }
  }, [confirmForgotError, confirmForgotResult]);

  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Quên mật khẩu" isBack/>
      <View style={styles.wrapper}>
        <TextInputCustom
          placeholder="Mã xác nhận"
          title="Mã xác nhận"
          value={data.code}
          onChangeValue={(item: any) => setData({...data, code: item})}
          keyboardType="default"
          redDot
        />

        <TextInputCustom
          placeholder="Mật khẩu mới"
          title="Mật khẩu"
          value={data.password}
          onChangeValue={(item: any) => setData({...data, password: item})}
          keyboardType="default"
          redDot
        />

        <TextInputCustom
          placeholder="Xác nhận mật khẩu"
          title="Xác nhận mật khẩu"
          value={data.confirmPassword}
          onChangeValue={(item: any) =>
            setData({...data, confirmPassword: item})
          }
          keyboardType="default"
          redDot
        />
      </View>
          <View style={{marginTop: 12, ...S.itemsCenter}}>
            <ButtonCustom 
            title={'Xác nhận'}
            action={onSubmit}
            />
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
    margin: 12,
  },
});
