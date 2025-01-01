import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {TabHeaderCustom} from '../../components/tab-header-custom';
import {S, TS, color} from '../../themes';
import {ButtonCustom, TextInputCustom, DropdownCustom} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import * as formActions from '../../redux/actions';
import {ToastService} from '../../services/toast/toast-service';

export const DeliveryScreen = () => {
  const dispatch = useDispatch();
  const {createTransportResult, createTransportError} = useSelector(
    (store: any) => store.form,
  );

  const [data, setData] = useState<any>({
    name: '',
    phone: '',
    address: '',
    postal: '',
  });
  const listOption = [
    {
      label: 'Vận chuyển Hàn - Việt',
      value: '0',
    },
    {
      label: 'Vận chuyển Việt - Hàn',
      value: '1',
    },
  ];
  const [option, setOption] = useState<any>({});

  const onSubmitDelivery = () => {
    
  };

  useEffect(() => {
    if (createTransportError) {
      ToastService.showError(createTransportError);
    } else if (createTransportResult) {
      ToastService.showSuccess(createTransportResult);
      setOption({});
      setData({
        name: '',
        phone: '',
        address: '',
        postal: '',
      });
    }
    dispatch(formActions.removeForm());
  }, [createTransportError, createTransportResult]);

  return (
    <View style={styles.container}>
      <TabHeaderCustom title={'Dịch vụ vận chuyển'} />
      <KeyboardAwareScrollView style={styles.wrapper}>
        <TextInputCustom
          placeholder="Họ và tên"
          title="Họ và tên"
          value={data.name}
          onChangeValue={(name: string) => setData({...data, name: name})}
          keyboardType="default"
          redDot
        />

        <TextInputCustom
          placeholder="Số điện thoại"
          title="Số điện thoại"
          value={data.phone}
          onChangeValue={(phone: string) => setData({...data, phone: phone})}
          keyboardType="numeric"
          redDot
          maxLength={10}
        />
        <DropdownCustom
          listItem={listOption}
          title="Dịch vụ"
          onChangeItem={(item: any) => setOption(item)}
          selectedItem={option}
          redDot
        />
        <TextInputCustom
          placeholder="Địa chỉ"
          title="Địa chỉ"
          value={data.address}
          onChangeValue={(address: string) =>
            setData({...data, address: address})
          }
          keyboardType="default"
          redDot
        />

        <TextInputCustom
          placeholder="Nội dung hàng cần gừi"
          title="Nội dung hàng cần gừi"
          value={data.postal}
          onChangeValue={(postal: string) => setData({...data, postal: postal})}
          keyboardType="default"
          multiline
          height={100}
        />

        <View style={{...S.itemsCenter, marginTop: 24}}>
          <ButtonCustom
            title="Tư vấn"
            action={onSubmitDelivery}
            colorButton={color.blue.bold}
            colorTitle={color.white}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: color.white,
  },
  flatList: {
    height: '90%',
  },
  wrapper: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
});
