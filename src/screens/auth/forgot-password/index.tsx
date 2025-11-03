import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {color, S, TS} from '../../../themes';
import { TextInputCustom } from '../../../components/text-input-custom';
import { ButtonCustom } from '../../../components/button-custom';
import { useNavigation } from '@react-navigation/native';
import { ToastService } from '../../../services/toast/toast-service';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../../redux/actions';

export const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {forgotPassError, forgotPassResult} = useSelector((store: any) => store.auth);
    const [email, setEmail]  = useState<string>('');

    const onSubmit = () => {
      if (email === '') {
        ToastService.showError('Vui lòng nhập Email đã đăng ký tài khoản');
      } else {
        dispatch(authActions.forgotPasswordRequest({
          email: email,
        }))
      }
    };

    useEffect(() => {
      if (forgotPassError) {
        ToastService.showError(forgotPassError);
      } else if (forgotPassResult) {
        ToastService.showSuccess(forgotPassResult);
        // @ts-ignore
        navigation.navigate('ConfirmForgotScreen', {emailRoute: email});
      }
      dispatch(authActions.removeAuthResult());
    }, [forgotPassResult, forgotPassError]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
       
        <View style={{...S.itemsCenter, marginBottom: 12}}>
        <Text
            style={{
              ...TS.text2XlBold,
              textTransform: 'uppercase',
              color: color.green.bold,
            }}>
            Quên mật khẩu
          </Text>
          <Text style={{...TS.textSmMedium, color: color.grey.bold, textAlign: 'center'}}>
          Vui lòng điền email bạn đã đăng ký cho tài khoản muốn khôi phục mật khẩu, chúng tôi sẽ gửi email cho bạn.
          </Text>
        </View>
 

        <TextInputCustom
            placeholder="Email"
            title="Email"
            value={email}
            onChangeValue={(text: string) =>
              setEmail(text)
            }
            keyboardType={'default'}
            redDot
          />
      </View>

      <View style={{...S.itemsCenter, marginTop: 12}}>
        <ButtonCustom
        action={onSubmit}
        title='Xác nhận'
        colorButton={color.green.bold}
        colorTitle={color.white}
         />
          <TouchableOpacity style={{marginTop: 12,}} onPress={() => {navigation.goBack()}}>
          <Text style={{...TS.textSmSemiBold, color: color.green.bold}}>Quay lại</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: color.white,
    ...S.justifyCenter,
  },
  wrapper: {
    marginHorizontal: 12,
  },
});
