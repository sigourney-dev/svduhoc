import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../enums/images';
import {color, S} from '../../themes';
import { heightScreen, widthScreen } from '../../utils';

export const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 2000); // Hiển thị splash screen trong 2 giây
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
    resizeMode: 'contain'
  },
}); 