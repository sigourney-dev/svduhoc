import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {color, S, TS} from '../../themes';
import {TabHeaderCustom, ModalCustom, TextInputCustom, ButtonCustom} from '../../components';
import {images} from '../../enums/images';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {ToastService} from '../../services/toast/toast-service';
import * as formActions from '../../redux/actions';

export const ApplicationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {formBaseResult, formBaseError} = useSelector(
    (store: any) => store.form,
  );

  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  
  const ModalForm = () => {
    const [data, setData] = useState<any>({
      name: '',
      phone: '',
    });
  
    const onSubmit = () => {
      if (data.name === '') {
        ToastService.showError('Vui lòng nhập Họ và tên');
      } else if (data.phone === '') {
        ToastService.showError('Vui lòng nhập Số điện thoại');
      } else {
        dispatch(
          formActions.formBaseRequest({
            fullName: data.name,
            phoneNumber: data.phone,
            type: 'HANHCHINH',
          }),
        );
      }
    };
    return (
      <View>
        <TextInputCustom
          placeholder="Họ và tên"
          title="Họ và tên"
          value={data.name}
          onChangeValue={(item: any) => setData({...data, name: item})}
          keyboardType={'default'}
        />

        <TextInputCustom
          placeholder="Số điện thoại"
          title="Số điện thoại"
          value={data.phone}
          onChangeValue={(item: any) => setData({...data, phone: item})}
          keyboardType={'numeric'}
          maxLength={10}
        />

        <View style={{...S.itemsCenter, marginTop: 12}}>
          <ButtonCustom
            title='Đăng ký'
            action={onSubmit}
          />
        </View>
      </View>
    );
  };

  useEffect(() => {
    if (formBaseResult) {
      ToastService.showSuccess(formBaseResult);
      setIsShowModal(false);
    } else if (formBaseError) {
      ToastService.showError(formBaseError);
    }
    dispatch(formActions.removeForm());
  }, [formBaseError, formBaseResult]);

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
          <ItemContent 
          title="Dịch vụ hành chính" 
          image={images.election} 
          action={() => {
            // @ts-ignore
            navigation.navigate('FormServiceWorker');
          }}
          />
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
            action={() => {
              // @ts-ignore
              navigation.navigate('FormStudentScreen', {type: 'SINHVIEN'});
            }}
          />
          <ItemContent
            title="Tư vấn hồ sơ lên chuyên ngành tại Hàn Quốc D2"
            image={images.application}
            action={() => {
              // @ts-ignore
              navigation.navigate('FormVisaD2Screen', {type: 'SINHVIEN'});
            }}
          />
        </View>

        <View style={styles.wrapperContent}>
          <Text style={styles.title}>Dịch vụ sức khoẻ</Text>
          <ItemContent
            title="Đăng ký tư vấn Tài chính - Bảo hiểm Hàn Quốc"
            image={images.health}
            action={() => setIsShowModal(true)}
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
      <ModalCustom
        isVisible={isShowModal}
        title="Tư vấn Tài chính - Bảo hiểm"
        isBackground
        onCloseModal={() => setIsShowModal(false)}
        children={<ModalForm />}
      />
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
