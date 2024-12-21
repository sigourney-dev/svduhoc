import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {color, S, TS} from '../../../themes';
import { TextInputCustom } from '../../../components/text-input-custom';
import { ButtonCustom } from '../../../components/button-custom';
import { useNavigation } from '@react-navigation/native';

export const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail]  = useState<string>('');
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
       
        <View style={{...S.itemsCenter, marginBottom: 12}}>
        <Text
            style={{
              ...TS.text2XlBold,
              textTransform: 'uppercase',
              color: color.blue.bold,
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
          />
      </View>

      <View style={{...S.itemsCenter, marginTop: 12}}>
        <ButtonCustom
        action={() => {
            // @ts-ignore
            navigation.navigate('LoginScreen')
        }}
        title='Xác nhận'
        colorButton={color.blue.bold}
        colorTitle={color.white}
         />
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
