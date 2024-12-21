import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {color, S, TS} from '../../../themes';
import {images} from '../../../enums/images';
import {TextInputCustom} from '../../../components/text-input-custom';
import {widthScreen} from '../../../utils';
import { Profile, Lock, Show, Hide} from '../../../assets/icons';
import { ButtonCustom } from '../../../components/button-custom';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
    const navigation = useNavigation();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={images.logoLogin}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <KeyboardAvoidingView behavior="padding">
        <TextInputCustom
          placeholder="Tài khoản"
          title="Tài khoản"
          value={username}
          onChangeValue={(text: string) => setUsername(text)}
          keyboardType={'default'}
          iconRight={<Profile />}
        />
        <TextInputCustom
          placeholder="Mật khẩu"
          title="Mật khẩu"
          value={password}
          onChangeValue={(text: string) => setPassword(text)}
          keyboardType={'default'}
          iconRight={<Lock />}
          iconLeft={isShowPassword ? <Show /> : <Hide />}
          actionIconLeft={(isShow: boolean) => setIsShowPassword(isShow)}
          isShowActionLeft={isShowPassword}
        />
      </KeyboardAvoidingView>

      <View style={{...S.flexRow, ...S.justifyBetween}}>
        <TouchableOpacity onPress={() => {
            // @ts-ignore
            navigation.navigate('RegisterScreen');
        }}>
          <Text>
            Bạn chưa có tài khoản ? <Text style={{color: color.blue.bold}}>Đăng ký</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            // @ts-ignore
            navigation.navigate('ForgotPasswordScreen');
        }}>
          <Text>Quên mật khẩu ?</Text>
        </TouchableOpacity>
      </View>

      <View style={{...S.itemsCenter, marginTop: 24}}>
        <ButtonCustom
            title='Đăng nhập'
            action={() => {
                // @ts-ignore
                navigation.navigate('BottomSheetStack');
            }}
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
    paddingHorizontal: 12,
  },
  image: {
    marginLeft: widthScreen * 0.1,
    width: 300,
    height: 200,
  },
});
