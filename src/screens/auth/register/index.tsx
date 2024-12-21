import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {color, S, TS} from '../../../themes';
import {TextInputCustom} from '../../../components/text-input-custom';
import {ScrollView} from 'react-native-gesture-handler';
import {heightScreen, widthScreen} from '../../../utils';
import {ButtonCustom} from '../../../components/button-custom';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [formRegister, setFormRegister] = useState<any>({
    username: '',
    password: '',
    confirmPassword: '',
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    address: '',
  });
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="height">
        <View style={styles.wrapper}>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            style={{marginTop: 12}}>
            <View style={{...S.itemsCenter}}>
              <Text
                style={{
                  ...TS.text2XlBold,
                  textTransform: 'uppercase',
                  color: color.blue.bold,
                }}>
                Đăng ký cộng tác viên
              </Text>
              <Text style={{...TS.textBaseBold}}>Tham gia cùng chúng tôi</Text>
            </View>

            <TextInputCustom
              placeholder="Tên đăng nhập"
              title="Tên đăng nhập"
              value={formRegister.username}
              onChangeValue={(text: string) =>
                setFormRegister({...formRegister, username: text})
              }
              keyboardType={'default'}
            />
            <TextInputCustom
              placeholder="Mật khẩu"
              title="Mật khẩu"
              value={formRegister.password}
              onChangeValue={(text: string) =>
                setFormRegister({...formRegister, password: text})
              }
              keyboardType={'default'}
            />
            <TextInputCustom
              placeholder="Nhập lại mật khẩu"
              title="Nhập lại mật khẩu"
              value={formRegister.confirmPassword}
              onChangeValue={(text: string) =>
                setFormRegister({...formRegister, confirmPassword: text})
              }
              keyboardType={'default'}
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
            />
            <TextInputCustom
              placeholder="Số điện thoại"
              title="Số điện thoại"
              value={formRegister.phone}
              onChangeValue={(text: string) =>
                setFormRegister({...formRegister, phone: text})
              }
              keyboardType={'numeric'}
            />
            <TextInputCustom
              placeholder="Địa chỉ"
              title="Địa chỉ"
              value={formRegister.address}
              onChangeValue={(text: string) =>
                setFormRegister({...formRegister, address: text})
              }
              keyboardType={'default'}
            />
            <View style={{...S.itemsEnd}}>
              <TouchableOpacity
                onPress={() => {
                  //@ts-ignore
                  navigation.navigate('LoginScreen');
                }}>
                <Text>
                  Bạn đã có tài khoản ?{' '}
                  <Text style={{...TS.textBaseBold, color: color.blue.bold}}>
                    Đăng nhập
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{...S.itemsCenter, marginTop: 12}}>
              <ButtonCustom
                action={() => {
                  //@ts-ignore
                  navigation.navigate('BottomSheetStack');
                }}
                title="Đăng ký"
                colorButton={color.blue.bold}
                colorTitle={color.white}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: color.white,
  },
  wrapper: {
    marginTop: 50,
    marginHorizontal: 12,
  },
});
