import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {color, S, TS} from '../../themes';
import {useDispatch, useSelector} from 'react-redux';
import {
  ButtonCustom,
  DropdownCustom,
  ModalCustom,
  TabHeaderCustom,
  TextInputCustom,
  ChooseDate,
  ModalLoading,
} from '../../components';
import {ToastService} from '../../services/toast/toast-service';
import {heightScreen} from '../../utils';
import {
  questionAge,
  questionPunishXNC,
  questionPunishVisa,
  questionPunishWon,
  questionAnotherCompany,
  questionIntroCompany,
  questionIntroDepartment,
  questionCapacity,
  questionIncome,
} from '../../enums/question-change-visa';
import {formatDateMoment, convertDateMoment} from '../../utils';
import * as formActions from '../../redux/actions';
import {Calendar} from '../../assets/icons';

export const ChangeVisaScreen = () => {
  const dispatch = useDispatch();
  const {formBaseResult, formBaseError, isLoading} = useSelector(
    (store: any) => store.form,
  );
  const [isShowPoint, setIsShowPoint] = useState<boolean>(false);
  const [point, setPoint] = useState<any>(0);

  const [inComeSelected, setInComeSelected] = useState<any>({});
  const [ageSelected, setAgeSelected] = useState<any>({});
  const [capacitySelected, setCapacitySelected] = useState<any>({});
  const [introDepartment, setIntroDepartment] = useState<any>({});
  const [introCompany, setIntroCompany] = useState<any>({});
  const [anotherCompany, setAnotherCompany] = useState<any>({});
  const [punishWon, setPunishWon] = useState<any>({});
  const [punishVisa, setPunishVisa] = useState<any>({});
  const [punishXNC, setPunishXNC] = useState<any>({});

  const onCalculate = () => {
    if (!inComeSelected.label) {
      ToastService.showError('Vui lòng chọn Thu nhập năm');
    } else if (!ageSelected.label) {
      ToastService.showError('Vui lòng chọn Độ tuổi');
    } else if (!capacitySelected.label) {
      ToastService.showError('Vui lòng chọn Năng lực tiếng Hàn');
    } else if (!introDepartment.label) {
      ToastService.showError('Vui lòng chọn Giấy giới thiệu từ bộ');
    } else if (!introCompany.label) {
      ToastService.showError(
        'Vui lòng chọn Giấy giới thiệu từ công ty hiện tại',
      );
    } else if (!anotherCompany.label) {
      ToastService.showError('Vui lòng chọn Khác');
    } else if (!punishWon.label || !punishVisa.label || !punishXNC.label) {
      ToastService.showError('Vui lòng điền thêm thông tin');
    } else {
      setPoint(
        inComeSelected.value +
          ageSelected.value +
          capacitySelected.value +
          introDepartment.value +
          introCompany.value +
          anotherCompany.value +
          punishVisa.value +
          punishWon.value +
          punishXNC.value,
      );
      setIsShowPoint(true);
    }
  };

  const defaultDate = new Date();
  const [isDateBirthday, setIsDateBirthDay] = useState<boolean>(false);

  const ModalContent = () => {
    const [data, setData] = useState({
      name: '',
      birthday: formatDateMoment(defaultDate),
      phone: '',
    });
    const onSubmit = () => {
      if (data.name === '') {
        ToastService.showError('Vui lòng nhập Họ và tên');
      } else if (data.phone === '') {
        ToastService.showError('Vui lòng nhập số điện thoại');
      } else {
        dispatch(
          formActions.formBaseRequest({
            fullName: data.name,
            birthday: data.birthday,
            phoneNumber: data.phone,
            type: 'LAODONG',
          }),
        );
      }
    };

    return (
      <View>
        <View style={styles.wrapperModalText}>
          <Text
            style={{...TS.text2XlBold, fontSize: 32, color: color.red.bold}}>
            {point}
          </Text>
        </View>
        <Text style={{...TS.textXsRegular, color: color.grey.bold}}>
          Trên 200 điểm là đủ điều kiện đổi E7
        </Text>
        <View style={{marginTop: 12}}>
          <TextInputCustom
            placeholder="Họ và tên"
            title="Họ và tên"
            value={data.name}
            onChangeValue={(item: any) => setData({...data, name: item})}
            keyboardType={'default'}
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
            onChangeValue={(item: any) => setData({...data, phone: item})}
            keyboardType={'numeric'}
            redDot
            maxLength={20}
          />
          <View style={{marginTop: 12, ...S.itemsCenter}}>
            <ButtonCustom action={onSubmit} title="Gửi hồ sơ" />
          </View>
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
      </View>
    );
  };

  useEffect(() => {
    if (formBaseError) {
      ToastService.showError(formBaseError);
    } else if (formBaseResult) {
      setIsShowPoint(false);
      ToastService.showSuccess(formBaseResult);
    }
    dispatch(formActions.removeForm());
  }, [formBaseError, formBaseResult]);

  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Tính điểm đổi visa E-7" isBack />
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <DropdownCustom
          listItem={questionIncome}
          title="Thu nhập năm"
          onChangeItem={(item: any) => setInComeSelected(item)}
          selectedItem={inComeSelected}
          redDot
        />

        <DropdownCustom
          listItem={questionAge}
          title="Độ tuổi"
          onChangeItem={(item: any) => setAgeSelected(item)}
          selectedItem={ageSelected}
          redDot
        />

        <DropdownCustom
          listItem={questionCapacity}
          title="Năng lực tiếng Hàn"
          onChangeItem={(item: any) => setCapacitySelected(item)}
          selectedItem={capacitySelected}
          redDot
        />

        <DropdownCustom
          listItem={questionIntroDepartment}
          title="Giấy giới thiệu từ bộ"
          onChangeItem={(item: any) => setIntroDepartment(item)}
          selectedItem={introDepartment}
          redDot
        />

        <DropdownCustom
          listItem={questionIntroCompany}
          title="Giấy giới thiệu từ công ty hiện tại"
          onChangeItem={(item: any) => setIntroCompany(item)}
          selectedItem={introCompany}
          redDot
        />

        <DropdownCustom
          listItem={questionAnotherCompany}
          title="Khác"
          onChangeItem={(item: any) => setAnotherCompany(item)}
          selectedItem={anotherCompany}
          redDot
        />

        <DropdownCustom
          listItem={questionPunishWon}
          title="Bị hình phạt dưới 1 triệu won"
          onChangeItem={(item: any) => setPunishWon(item)}
          selectedItem={punishWon}
          redDot
        />

        <DropdownCustom
          listItem={questionPunishVisa}
          title="Bị hạn chế cư trú do chậm đóng thuế"
          onChangeItem={(item: any) => setPunishVisa(item)}
          selectedItem={punishVisa}
          redDot
          position
        />

        <DropdownCustom
          listItem={questionPunishXNC}
          title="Bị vi phạm luật quản lý XNC"
          onChangeItem={(item: any) => setPunishXNC(item)}
          selectedItem={punishXNC}
          redDot
          position
        />

        <View style={{...S.itemsCenter, marginTop: 24}}>
          <ButtonCustom title="Tính điểm" action={onCalculate} />
        </View>
      </ScrollView>
      <ModalCustom
        title="Tổng điểm của bạn là"
        isVisible={isShowPoint}
        children={<ModalContent />}
        onCloseModal={() => setIsShowPoint(false)}
      />
      <ModalLoading isVisible={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    ...S.flex1,
  },
  wrapper: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
  wrapperModalText: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: color.grey.light,
    backgroundColor: color.grey.light,
    ...S.itemsCenter,
    ...S.justifyCenter,
    padding: 48,
  },
});
