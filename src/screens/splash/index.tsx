import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../enums/images';
import {color, S} from '../../themes';
import {heightScreen, widthScreen} from '../../utils';
import {useSelector} from 'react-redux';

export const SplashScreen = () => {
  const navigation = useNavigation<any>();
  const {isLogin} = useSelector((store: any) => store.auth);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLogin) {
        navigation.replace('BottomSheetStack');
      } else {
        navigation.replace('LoginScreen');
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={images.splashColumn}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: '#32773D',
  },
  logo: {
    width: widthScreen,
    height: heightScreen,
    resizeMode: 'contain',
  },
});
