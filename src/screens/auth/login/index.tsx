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
import {widthScreen} from '../../../utils';
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
import { ModalLoading } from '../../../components';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loginResult, loginError, isLoading, user, pass, isSaveLogin} = useSelector(
    (store: any) => store.auth,
  );
  const [username, setUsername] = useState<string>(user);
  const [password, setPassword] = useState<string>(pass);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(true);
  const [isRemember, setIsRemember] = useState<boolean>(isSaveLogin);

  useFocusEffect(
    React.useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => true // Return true to prevent default behavior
      );

      return () => backHandler.remove();
    }, [])
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
    } else if (loginResult) {
      //@ts-ignore
      navigation.navigate('BottomSheetStack');
    }
  }, [loginError, loginResult]);

  useEffect(() => {
    if (isRemember) {
      dispatch(authActions.saveLogin({
        user: username,
        pass: password,
        isSaveLogin: isRemember,
      }));
    } else {
      dispatch(authActions.saveLogin({
        user: '',
        pass: '',
        isSaveLogin: false,
      }));
    }
  }, [isRemember, username, password])

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 12}}>
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
          iconRight={<Profile color={color.blue.bold} />}
          width={widthScreen * 0.7}
        />
        <TextInputCustom
          placeholder="Mật khẩu"
          title="Mật khẩu"
          value={password}
          onChangeValue={(text: string) => setPassword(text)}
          keyboardType={'default'}
          iconRight={<Lock color={color.blue.bold} />}
          iconLeft={
            isShowPassword ? (
              <Show color={color.blue.bold} />
            ) : (
              <Hide color={color.blue.bold} />
            )
          }
          actionIconLeft={(isShow: boolean) => setIsShowPassword(isShow)}
          isShowActionLeft={isShowPassword}
          width={widthScreen * 0.7}
        />
      </KeyboardAvoidingView>

      <View style={{...S.itemsEnd, marginBottom: 12}}>
        <TouchableOpacity
          style={{...S.flexRow, ...S.itemsCenter}}
          onPress={() => {
            setIsRemember(!isRemember);
          }}>
          {isRemember ? (
            <CircleCheckFill color={color.green.bold} />
          ) : (
            <Circle />
          )}
          <Text style={{...TS.textXsRegular, marginLeft: 4}}>Nhớ mật khẩu</Text>
        </TouchableOpacity>
      </View>

      <View style={{...S.flexRow, ...S.justifyBetween}}>
        <TouchableOpacity
          onPress={() => {
            // @ts-ignore
            navigation.navigate('RegisterScreen');
          }}>
          <Text>
            Bạn chưa có tài khoản ?{' '}
            <Text style={{...TS.textXsRegular, color: color.blue.bold}}>Đăng ký</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // @ts-ignore
            navigation.navigate('ForgotPasswordScreen');
          }}>
          <Text style={{...TS.textXsRegular, color: color.blue.bold}}>Quên mật khẩu ?</Text>
        </TouchableOpacity>
      </View>

      <View style={{...S.itemsCenter, marginTop: 24,}}>
        <ButtonCustom
          title="Đăng nhập"
          action={onLogin}
          colorButton={color.blue.bold}
          colorTitle={color.white}
        />
        {/* <TouchableOpacity style={{marginTop: 12,}} onPress={() => {navigation.goBack()}}>
          <Text style={{...TS.textXsSemiBold, color: color.blue.bold}}>Quay lại</Text>
        </TouchableOpacity> */}
      </View>
      {isLoading && <ModalLoading isVisible={isLoading}/>}
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
