import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {color, S, TS} from '../../../themes';
import {TextInputCustom} from '../../../components/text-input-custom';
import {widthScreen, Utils} from '../../../utils';
import {ButtonCustom} from '../../../components/button-custom';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ToastService} from '../../../services/toast/toast-service';
import * as authActions from '../../../redux/actions';
import {ModalLoading} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {registerResult, registerError, isLoading} = useSelector(
    (store: any) => store.auth,
  );

  const [formRegister, setFormRegister] = useState<any>({
    userName: '',
    password: '',
    confirmPassword: '',
    lastName: '',
    firstName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const onSubmitRegister = () => {
    if (formRegister) {
      dispatch(authActions.registerRequest(formRegister));
    }
  };

  useEffect(() => {
    if (registerResult) {
      ToastService.showSuccess(registerResult);
      setFormRegister({
        userName: '',
        password: '',
        confirmPassword: '',
        lastName: '',
        firstName: '',
        email: '',
        phoneNumber: '',
        address: '',
      });
    } else if (registerError) {
      ToastService.showError(registerError);
    }
    dispatch(authActions.removeAuthResult());
  }, [registerError, registerResult]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <View style={{...S.itemsCenter, marginBottom: 18}}>
            <Text
              style={{
                ...TS.text2XlBold,
                textTransform: 'uppercase',
                color: color.green.bold,
              }}>
              Đăng ký
            </Text>
            <Text style={{...TS.textBaseBold}}>Tham gia cùng chúng tôi</Text>
          </View>

          <TextInputCustom
            placeholder="Tên đăng nhập"
            title="Tên đăng nhập"
            value={formRegister.userName}
            onChangeValue={(text: string) =>
              setFormRegister({...formRegister, userName: text})
            }
            keyboardType={'default'}
            redDot
          />
          <TextInputCustom
            placeholder="Mật khẩu"
            title="Mật khẩu"
            value={formRegister.password}
            onChangeValue={(text: string) =>
              setFormRegister({...formRegister, password: text})
            }
            keyboardType={'default'}
            redDot
          />
          <TextInputCustom
            placeholder="Nhập lại mật khẩu"
            title="Nhập lại mật khẩu"
            value={formRegister.confirmPassword}
            onChangeValue={(text: string) =>
              setFormRegister({...formRegister, confirmPassword: text})
            }
            keyboardType={'default'}
            redDot
          />
          <View style={{...S.flexRow, ...S.justifyBetween}}>
            <TextInputCustom
              placeholder="Họ"
              title="Họ"
              value={formRegister.lastName}
              onChangeValue={(text: string) =>
                setFormRegister({...formRegister, lastName: text})
              }
              keyboardType={'default'}
              width={widthScreen / 2.6}
              redDot
            />
            <View style={{marginRight: -8}}>
              <TextInputCustom
                placeholder="Tên"
                title="Tên"
                value={formRegister.firstName}
                onChangeValue={(text: string) =>
                  setFormRegister({...formRegister, firstName: text})
                }
                keyboardType={'default'}
                width={widthScreen / 2.6}
                redDot
              />
            </View>
          </View>
          <TextInputCustom
            placeholder="Email"
            title="Email"
            value={formRegister.email}
            onChangeValue={(text: string) =>
              setFormRegister({...formRegister, email: text})
            }
            keyboardType={'default'}
            redDot
          />
          <TextInputCustom
            placeholder="Số điện thoại"
            title="Số điện thoại"
            value={formRegister.phoneNumber}
            onChangeValue={(text: string) =>
              setFormRegister({...formRegister, phoneNumber: text})
            }
            keyboardType={'numeric'}
            maxLength={10}
            redDot
          />
          <TextInputCustom
            placeholder="Địa chỉ"
            title="Địa chỉ"
            value={formRegister.address}
            onChangeValue={(text: string) =>
              setFormRegister({...formRegister, address: text})
            }
            keyboardType={'default'}
            redDot
          />
          <View style={{...S.itemsCenter, marginTop: 12}}>
            <ButtonCustom
              action={onSubmitRegister}
              title="Đăng ký"
              colorButton={color.green.bold}
              colorTitle={color.white}
            />

            <TouchableOpacity
              style={{marginVertical: 12}}
              onPress={() => {
                //@ts-ignore
                navigation.navigate('LoginScreen');
              }}>
              <Text style={{...TS.textXsRegular}}>
                Bạn đã có tài khoản?{' '}
                <Text style={{...TS.textSmRegular, color: color.green.bold}}>
                  Đăng nhập
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <ModalLoading isVisible={isLoading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: color.white,
  },
  wrapper: {
    height: Utils.isIOS() ? '90%' : '95%',
    marginTop: Utils.isIOS() ? 50 : 12,
    marginHorizontal: 12,
  },
});
