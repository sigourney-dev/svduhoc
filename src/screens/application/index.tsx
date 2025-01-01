import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {color, S, TS} from '../../themes';
import {TabHeaderCustom} from '../../components/tab-header-custom';
import {images} from '../../enums/images';
import {useNavigation} from '@react-navigation/native';

export const ApplicationScreen = () => {
  const navigation = useNavigation();
  const ItemContent = (props: any) => {
    const {title, image, action} = props;
    return (
      <TouchableOpacity
        style={{...S.flexRow, ...S.itemsCenter, padding: 12}}
        onPress={action}>
        <Image source={image} style={styles.image} />
        <Text style={{...TS.textSmMedium, marginLeft: 8, maxWidth: '90%'}}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Dịch vụ đăng ký" isBack />
      <ScrollView style={styles.wrapper}>
        <View style={styles.wrapperContent}>
          <Text style={styles.title}>Dịch vụ cộng đồng</Text>
          <ItemContent
            title="Dịch vụ dịch thuật, thông dịch, công chứng"
            image={images.thinkKorea}
            action={() => {
              // @ts-ignore
              navigation.navigate('FormTranslateScreen');
            }}
          />
          <ItemContent title="Dịch vụ hành chính" image={images.election} />
        </View>

        <View style={styles.wrapperContent}>
          <Text style={styles.title}>Dành cho visa lao động (E)</Text>
          <ItemContent
            title="Tính điểm đổi visa E-7-4"
            image={images.checkVisa}
            action={() => {
              // @ts-ignore
              navigation.navigate('ChangeVisaScreen');
            }}
          />
        </View>

        <View style={styles.wrapperContent}>
          <Text style={styles.title}>Dành cho visa du học (D)</Text>
          <ItemContent
            title="Tư vấn du học Hàn Quốc miễn phí"
            image={images.student}
          />
          <ItemContent
            title="Tư vấn hồ sơ lên chuyên ngành tại Hàn Quốc D2"
            image={images.application}
          />
        </View>

        <View style={styles.wrapperContent}>
          <Text style={styles.title}>Dịch vụ sức khoẻ</Text>
          <ItemContent
            title="Đăng ký tư vấn Tài chính - Bảo hiểm Hàn Quốc"
            image={images.health}
          />
        </View>

        <View style={styles.wrapperContent}>
          <Text style={styles.title}>Tiện ích khác</Text>
          <ItemContent
            title="Quảng bá thông tin doanh nghiệp"
            image={images.company}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
  },
  wrapper: {
    marginHorizontal: 12,
    marginTop: 12,
  },
  wrapperContent: {
    marginVertical: 12,
  },
  title: {
    ...TS.textSmSemiBold,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
