import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {color, S, TS} from '../../../themes';
import {images} from '../../../enums/images';
import {TextInputCustom} from '../../../components/text-input-custom';
import {heightScreen, widthScreen} from '../../../utils';
import {
  Profile,
  Lock,
  Show,
  Hide,
  Circle,
  CircleCheckFill,
} from '../../../../assets/icons';
import {ButtonCustom} from '../../../components/button-custom';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../../../redux/actions';
import {ToastService} from '../../../services/toast/toast-service';
import {ModalLoading} from '../../../components';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loginResult, loginError, loadingLogin, user, pass, isSaveLogin} =
    useSelector((store: any) => store.auth);
  const [username, setUsername] = useState<string>(user);
  const [password, setPassword] = useState<string>(pass);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(true);
  const [isRemember, setIsRemember] = useState<boolean>(isSaveLogin);

  useFocusEffect(
    React.useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => true, // Return true to prevent default behavior
      );

      return () => backHandler.remove();
    }, []),
  );

  const onLogin = () => {
    if (username === '') {
      ToastService.showError('Bạn chưa nhập tài khoản');
    } else if (password === '') {
      ToastService.showError('Bạn chưa nhập mật khẩu');
    } else {
      dispatch(
        authActions.loginRequest({
          userName: username,
          password: password,
        }),
      );
    }
  };

  useEffect(() => {
    if (loginError) {
      ToastService.showError(loginError);
    }
  }, [loginError, loginResult]);

  useEffect(() => {
    if (isRemember) {
      dispatch(
        authActions.saveLogin({
          user: username,
          pass: password,
          isSaveLogin: isRemember,
        }),
      );
    } else {
      dispatch(
        authActions.saveLogin({
          user: '',
          pass: '',
          isSaveLogin: false,
        }),
      );
    }
  }, [isRemember, username, password]);

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#277E3A', '#277E3A']} style={{...S.flex1}}>
        <View
          style={{
            marginBottom: 12,
            ...S.itemsCenter,
            ...S.justifyCenter,
            ...S.flex1,
          }}>
          <Image
            source={images.splash}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <KeyboardAvoidingView behavior="padding">
          <View
            style={{
              backgroundColor: color.white,
              borderColor: color.white,
              borderWidth: 1,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              padding: 16,
              height: heightScreen * 0.4,
            }}>
            <TextInputCustom
              placeholder="Tài khoản"
              title="Tài khoản"
              value={username}
              onChangeValue={(text: string) => setUsername(text)}
              keyboardType={'default'}
              iconRight={<Profile color={color.green.bold} />}
              width={widthScreen * 0.7}
            />
            <TextInputCustom
              placeholder="Mật khẩu"
              title="Mật khẩu"
              value={password}
              onChangeValue={(text: string) => setPassword(text)}
              keyboardType={'default'}
              iconRight={<Lock color={color.green.bold} />}
              iconLeft={
                isShowPassword ? (
                  <Show color={color.green.bold} />
                ) : (
                  <Hide color={color.green.bold} />
                )
              }
              actionIconLeft={(isShow: boolean) => setIsShowPassword(isShow)}
              isShowActionLeft={isShowPassword}
              width={widthScreen * 0.7}
            />

            <View
              style={{
                ...S.flexRow,
                ...S.justifyBetween,
                marginVertical: 12,
                ...S.itemsCenter,
              }}>
              <TouchableOpacity
                style={{...S.flexRow, ...S.itemsCenter}}
                onPress={() => {
                  setIsRemember(!isRemember);
                }}>
                {isRemember ? (
                  <CircleCheckFill color={color.green.bold} />
                ) : (
                  <Circle color={color.grey.mediumLight} />
                )}
                <Text
                  style={{
                    ...TS.textXsRegular,
                    marginLeft: 4,
                    color: color.grey.mediumLight,
                  }}>
                  Nhớ mật khẩu
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // @ts-ignore
                  navigation.navigate('ForgotPasswordScreen');
                }}>
                <Text style={{...TS.textXsRegular, color: color.green.bold}}>
                  Quên mật khẩu?
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{...S.itemsCenter, marginTop: 24}}>
              <ButtonCustom
                title="Đăng nhập"
                action={onLogin}
                colorButton={color.green.bold}
                colorTitle={color.white}
              />

              <TouchableOpacity
                style={{marginVertical: 12}}
                onPress={() => {
                  // @ts-ignore
                  navigation.navigate('RegisterScreen');
                }}>
                <Text
                  style={{...TS.textXsRegular, color: color.grey.mediumLight}}>
                  Bạn chưa có tài khoản?{' '}
                  <Text style={{...TS.textSmRegular, color: color.green.bold}}>
                    Đăng ký ngay
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
            {/* {loadingLogin && <ModalLoading isVisible={loadingLogin} />} */}
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: '#277E3A',
    ...S.justifyCenter,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
