import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {ButtonCustom, TabHeaderCustom} from '../../components';
import {S, TS, color} from '../../themes';
import {TextInputCustom, DropdownCustom, ChooseDate} from '../../components';
import {
  formatDateMoment,
  convertDateMoment,
  convertProvince,
} from '../../utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import * as formActions from '../../redux/actions';
import {ToastService} from '../../services/toast/toast-service';
import {
  listTopik,
  listServiceVisaD2,
  listProvince,
} from '../../enums/drop-down-list';
import {Calendar} from '../../assets/icons';

export const FormVisaD2Screen = (props: any) => {
  const {type} = props.route.params;
  const dispatch = useDispatch();
  const {formBaseResult, formBaseError} = useSelector(
    (store: any) => store.form,
  );

  const defaultDate = new Date();
  const [isDateBirthday, setIsDateBirthDay] = useState<boolean>(false);
  const [isDateGraduate, setIsDateGraduate] = useState<boolean>(false);
  const [provinceSelected, setProvinceSelected] = useState<any>({
    label: '',
    value: '',
  });

  const [data, setData] = useState<any>({
    fullname: '',
    birthday: formatDateMoment(defaultDate),
    phone: '',
    email: '',
    province: '',
    topik: {},
    service: {},
    certification: '',
    school: '',
    major: '',
    otherOffer: '',
  });

  const onSubmit = () => {
    if (data.fullname === '') {
      ToastService.showError('Vui lòng nhập Họ và tên');
    } else if (data.birthday === '') {
      ToastService.showError('Vui lòng nhập Ngày tháng năm sinh');
    } else if (data.phone === '') {
      ToastService.showError('Vui lòng nhập Số điện thoại');
    } else if (data.email === '') {
      ToastService.showError('Vui lòng nhập Email');
    } else if (data.province === '') {
      ToastService.showError('Vui lòng chọn Thành phố đang sống');
    } else if (!data.topik.label) {
      ToastService.showError('Vui lòng chọn Topik');
    } else if (data.certification === '') {
      ToastService.showError('Vui lòng nhập Chứng chỉ ngoại ngữ');
    } else if (!data.service.label) {
      ToastService.showError('Vui lòng chọn Dịch vụ');
    } else {
      dispatch(
        formActions.formBaseRequest({
          fullName: data.fullName,
          birthday: data.birthday,
          phoneNumber: data.phone,
          email: data.email,
          province: data.province,
          topik: data.topik.label,
          service: data.service.label,
          certification: data.certification,
          school: data.school,
          major: data.major,
          otherOffer: data.otherOffer,
          type: type,
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
        fullname: '',
        birthday: formatDateMoment(defaultDate),
        phone: '',
        email: '',
        province: '',
        topik: {},
        service: {},
        certification: '',
        school: '',
        major: '',
        otherOffer: '',
      });
    }
    dispatch(formActions.removeForm());
  }, [formBaseError, formBaseResult]);

  useEffect(() => {
    if (provinceSelected) {
      setData({...data, province: provinceSelected.label});
    }
  }, [provinceSelected]);

  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Tư vấn du học" isBack />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        extraScrollHeight={150}>
        <View style={styles.wrapper}>
          <TextInputCustom
            placeholder="Họ và tên"
            title="Họ và tên"
            value={data.fullname}
            onChangeValue={(fullname: string) =>
              setData({...data, fullname: fullname})
            }
            keyboardType="default"
            redDot
          />

          <TextInputCustom
            placeholder="Ngày tháng năm sinh"
            title="Ngày tháng năm sinh"
            value={data.birthday}
            onChangeValue={(birthday: string) =>
              setData({...data, birthday: birthday})
            }
            keyboardType="default"
            redDot
            iconLeft={<Calendar color={color.blue.bold} />}
            actionIconLeft={() => setIsDateBirthDay(true)}
            notEdit
          />

          <TextInputCustom
            placeholder="Số điện thoại"
            title="Số điện thoại"
            value={data.phone}
            onChangeValue={(phone: string) => setData({...data, phone: phone})}
            keyboardType="numeric"
            maxLength={10}
            redDot
          />

          <TextInputCustom
            placeholder="Email"
            title="Email"
            value={data.email}
            onChangeValue={(email: string) => setData({...data, email: email})}
            keyboardType="default"
            maxLength={10}
            redDot
          />

          <DropdownCustom
            listItem={convertProvince(listProvince)}
            title="Thành phố đang sống"
            onChangeItem={(item: any) =>
              setProvinceSelected({label: item.label, value: item.value})
            }
            selectedItem={provinceSelected}
            redDot
            isSearch
          />

          <DropdownCustom
            listItem={listTopik}
            title="Bạn đang có Topik mấy"
            onChangeItem={(item: any) => setData({...data, topik: item})}
            selectedItem={data.topik}
            redDot
          />

          <TextInputCustom
            placeholder="Chứng chỉ ngoại ngữ"
            title="Chứng chỉ ngoại ngữ đang có"
            value={data.certification}
            onChangeValue={(certification: string) =>
              setData({...data, certification: certification})
            }
            keyboardType="default"
            redDot
          />

          <DropdownCustom
            listItem={listServiceVisaD2}
            title="Dịch vụ"
            onChangeItem={(item: any) => setData({...data, service: item})}
            selectedItem={data.service}
            redDot
            position
          />

          <TextInputCustom
            placeholder="Tên các trường mong muốn"
            title="Tên các trường mong muốn"
            value={data.school}
            onChangeValue={(school: string) =>
              setData({...data, school: school})
            }
            keyboardType="default"
          />

          <TextInputCustom
            placeholder="Tên các ngành mong muốn"
            title="Tên các ngành mong muốn"
            value={data.major}
            onChangeValue={(major: string) => setData({...data, major: major})}
            keyboardType="default"
          />

          <TextInputCustom
            placeholder="Yêu cầu khác"
            title="Yêu cầu khác"
            value={data.otherOffer}
            onChangeValue={(otherOffer: string) =>
              setData({...data, otherOffer: otherOffer})
            }
            keyboardType="default"
          />
          <View style={{...S.itemsCenter}}>
            <ButtonCustom
              title="Gửi đơn đăng ký"
              action={onSubmit}
              colorButton={color.blue.bold}
              colorTitle={color.white}
              width={160}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <ChooseDate
        isChooseDate={isDateBirthday}
        mode="date"
        onCloseChooseDate={() => setIsDateBirthDay(false)}
        onConfirmChooseDate={(date: any) =>
          setData({...data, birthday: formatDateMoment(date)})
        }
        dateSelected={convertDateMoment(data.birthday)}
        title={'Chọn ngày tháng năm sinh'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: color.white,
  },
  wrapper: {
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 24,
  },
});
