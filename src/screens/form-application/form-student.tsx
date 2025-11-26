import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {ButtonCustom, ModalLoading, TabHeaderCustom} from '../../components';
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
  listDegreeForm,
  listServiceForm,
  listProvince,
} from '../../enums/drop-down-list';
import {Calendar} from '../../../assets/icons';

export const FormStudentScreen = (props: any) => {
  const {type} = props.route.params;
  const dispatch = useDispatch();
  const {formBaseResult, formBaseError, isLoading} = useSelector(
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
    province: '',
    average: '',
    degree: {},
    graduate: formatDateMoment(defaultDate),
    service: {},
    certification: '',
    referrer: '',
    school: '',
    otherOffer: '',
    bhp: '',
  });

  const onSubmit = () => {
    if (data.fullname === '') {
      ToastService.showError('Vui lòng nhập Họ và tên');
    } else if (data.birthday === '') {
      ToastService.showError('Vui lòng nhập Ngày tháng năm sinh');
    } else if (data.province === '') {
      ToastService.showError('Vui lòng chọn Thành phố đang sống');
    } else if (data.average === '') {
      ToastService.showError('Vui lòng nhập điểm trung bình các năm');
    } else if (!data.degree.label) {
      ToastService.showError('Vui lòng chọn Bằng cấp cao nhất');
    } else if (data.graduate === '') {
      ToastService.showError('Vui lòng nhập Năm tốt nghiệp');
    } else if (!data.service.label) {
      ToastService.showError('Vui lòng chọn Diện du học mong muốn');
    } else {
      dispatch(
        formActions.formBaseRequest({
          fullName: data.fullname,
          birthday: data.birthday,
          phoneNumber: data.phone,
          province: data.province,
          average: data.average,
          degree: data.degree.label,
          graduate: data.graduate,
          service: data.service.label,
          certification: data.certification,
          referrer: data.referrer,
          school: data.school,
          otherOffer: data.otherOffer,
          bhp: data.bhp,
          type: 'SINHVIEN',
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
        province: '',
        average: '',
        degree: {},
        graduate: formatDateMoment(defaultDate),
        service: {},
        certification: '',
        referrer: '',
        school: '',
        otherOffer: '',
        bhp: '',
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
      <KeyboardAvoidingView behavior="padding">
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
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
            iconLeft={<Calendar color={color.green.bold} />}
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

          <TextInputCustom
            placeholder="Điểm trung bình các lớp 10/11/12"
            title="Điểm trung bình các lớp 10/11/12"
            value={data.average}
            onChangeValue={(average: string) =>
              setData({...data, average: average})
            }
            keyboardType="default"
            redDot
          />

          <DropdownCustom
            listItem={listDegreeForm}
            title="Bằng cấp cao nhât"
            onChangeItem={(item: any) => setData({...data, degree: item})}
            selectedItem={data.degree}
            redDot
          />

          <TextInputCustom
            placeholder="Tốt nghiệp năm"
            title="Tốt nghiệp năm"
            value={data.graduate}
            onChangeValue={(graduate: string) =>
              setData({...data, graduate: graduate})
            }
            keyboardType="default"
            redDot
            iconLeft={<Calendar color={color.green.bold} />}
            actionIconLeft={() => setIsDateGraduate(true)}
            notEdit
          />

          <DropdownCustom
            listItem={listServiceForm}
            title="Bạn muốn đi du học diện nào?"
            onChangeItem={(item: any) => setData({...data, service: item})}
            selectedItem={data.service}
            redDot
          />

          <TextInputCustom
            placeholder="Bạn có người nhà trong hộ khẩu BHP"
            title="Bạn có người nhà trong hộ khẩu BHP"
            value={data.bhp}
            onChangeValue={(graduate: string) =>
              setData({...data, bhp: graduate})
            }
            keyboardType="default"
          />

          <TextInputCustom
            placeholder="Chứng chỉ ngoại ngữ"
            title="Chứng chỉ ngoại ngữ đang có"
            value={data.certification}
            onChangeValue={(certification: string) =>
              setData({...data, certification: certification})
            }
            keyboardType="default"
          />

          <TextInputCustom
            placeholder="Người giới thiệu"
            title="Người giới thiệu"
            value={data.referrer}
            onChangeValue={(referrer: string) =>
              setData({...data, referrer: referrer})
            }
            keyboardType="default"
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
              colorButton={color.green.bold}
              colorTitle={color.white}
              width={160}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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

      <ChooseDate
        isChooseDate={isDateGraduate}
        mode="date"
        onCloseChooseDate={() => setIsDateGraduate(false)}
        onConfirmChooseDate={(date: any) =>
          setData({...data, graduate: formatDateMoment(date)})
        }
        dateSelected={convertDateMoment(data.graduate)}
        title={'Chọn năm tốt nghiệp'}
      />

      <ModalLoading isVisible={isLoading} />
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
    height: '82%',
  },
});
