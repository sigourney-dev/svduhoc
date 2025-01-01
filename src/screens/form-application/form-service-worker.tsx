import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color, S, TS} from '../../themes';
import * as formActions from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {listServiceWorker} from '../../enums/drop-down-list';
import {
  TabHeaderCustom,
  TextInputCustom,
  DropdownCustom,
  ButtonCustom,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ToastService} from '../../services/toast/toast-service';

export const FormServiceWorker = () => {
  const dispatch = useDispatch();
  const {formBaseResult, formBaseError} = useSelector(
    (store: any) => store.form,
  );

  const [data, setData] = useState<any>({
    name: '',
    phone: '',
    service: {},
  });

  const onSubmitForm = () => {
    if (data.name === '') {
      ToastService.showError('Vui lòng nhập Họ và tên');
    } else if (data.phone === '') {
      ToastService.showError('Vui lòng nhập Số điện thoại');
    } else if (!data.service.label) {
      ToastService.showError('Vui lòng chọn Dịch vụ mong muốn');
    } else {
      dispatch(
        formActions.formBaseRequest({
          fullName: data.name,
          phoneNumber: data.phone,
          service: data.service.label,
          type: 'LAODONG',
        }),
      );
    }
  };

  useEffect(() => {
    if (formBaseError) {
      ToastService.showError(formBaseError);
    } else if (formBaseResult) {
      ToastService.showSuccess(formBaseResult);
      setData({
        name: '',
        phone: '',
        service: {},
      });
    }
    dispatch(formActions.removeForm());
  }, [formBaseError, formBaseResult]);

  return (
    <View style={styles.container}>
      <TabHeaderCustom isBack title="Tư vấn dịch vụ hành chính" />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        extraScrollHeight={150}>
        <View style={{marginHorizontal: 12}}>
          <Text
            style={{
              ...TS.textSmSemiBold,
              color: color.blue.bold,
              textAlign: 'center',
              marginTop: 12,
            }}>
            Vì sao nên dùng dịch vụ hành chính của SVDUHOC ?
          </Text>
          <Text style={styles.textContent}>
            <Text style={styles.textHighlight}> - Thuận tiện</Text>: nộp hồ sơ
            online, giảm thiểu tối đa việc đi lại
          </Text>
          <Text style={styles.textContent}>
            <Text style={styles.textHighlight}> - Nhanh chóng</Text>: có lựa
            chọn làm trong ngày cho các bạn cần gấp
          </Text>
          <Text style={styles.textContent}>
            <Text style={styles.textHighlight}> - Tận tâm</Text>: hồ sơ sau khi
            hoàn tất được giao về tận nhà, không cần đặt lịch hẹn để lấy hồ sơ
          </Text>
          <Text style={styles.textContent}>
            <Text style={styles.textHighlight}> - Chuyên nghiệp</Text>: bạn chỉ
            cần nộp đủ hồ sơ theo hướng dẫn là hoàn tất, bạn không cần lo lắng
            thiếu giấy tờ hay bổ sung gì về sau
          </Text>
        </View>

        <View style={{marginHorizontal: 12, marginTop: 24}}>
          <TextInputCustom
            placeholder="Họ và tên"
            title="Họ và tên"
            value={data.name}
            onChangeValue={(name: any) => setData({...data, name: name})}
            keyboardType={'default'}
            redDot
          />

          <TextInputCustom
            placeholder="Số điện thoại"
            title="Số điện thoại"
            value={data.phone}
            onChangeValue={(phone: any) => setData({...data, phone: phone})}
            keyboardType={'numeric'}
            maxLength={20}
            redDot
          />

          <DropdownCustom
            height={90}
            position
            listItem={listServiceWorker}
            title="Dịch vụ"
            isSearch
            redDot
            selectedItem={data.service}
            onChangeItem={(item: any) => setData({...data, service: item})}
          />

          <View style={{marginTop: 24, ...S.itemsCenter}}>
            <ButtonCustom
              action={onSubmitForm}
              title="Gửi đơn đăng ký"
              width={160}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    ...S.flex1,
  },
  textContent: {
    ...TS.textSmRegular,
    color: color.grey.bold,
    marginTop: 8,
  },
  textHighlight: {
    ...TS.textSmSemiBold,
  },
});
