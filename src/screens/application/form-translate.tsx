import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {TabHeaderCustom, TextInputCustom, ButtonCustom} from '../../components';
import {color, S, TS} from '../../themes';
import {widthScreen} from '../../utils';
import {Circle, CircleCheckFill} from '../../assets/icons';
import {useDispatch, useSelector} from 'react-redux';
import * as formActions from '../../redux/actions';
import {ToastService} from '../../services/toast/toast-service';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const FormTranslateScreen = () => {
  const dispatch = useDispatch();
  const {createTranslateResult, createTranslateError} = useSelector(
    (store: any) => store.form,
  );

  const dataList = [
    {
      title: 'Dịch thuật (Dịch Anh - Việt, Hàn - Việt, Anh - Hàn)',
      id: 0,
    },
    {
      title:
        'Thông dịch (phục vụ quanh Seoul, Gyeonggi): dịch khi cần nói chuyện với cảnh sát, kiểm sát, thông dịch chuyên ngành luật',
      id: 1,
    },
    {
      title: 'Công chứng, hợp pháp hoá lãnh sự (gửi tài liệu qua bưu điện)',
      id: 2,
    },
  ];
  const [info, setInfo] = useState<any>({
    fullname: '',
    phone: '',
    content: '',
  });

  const [isSelected, setIsSelected] = useState<any>({});

  const onSubmitTranslate = () => {
    
  };

  useEffect(() => {
    if (createTranslateError) {
      ToastService.showError(createTranslateError);
    } else if (createTranslateResult) {
      ToastService.showSuccess(createTranslateResult);
      setIsSelected({});
      setInfo({
        fullname: '',
        phone: '',
        content: '',
      });
    }
    dispatch(formActions.removeForm());
  }, [createTranslateError, createTranslateResult]);

  const renderItem = (item: any, index: number) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIsSelected(item);
        }}
        key={index}
        style={{
          ...S.flexRow,
          width: '90%',
          ...S.itemsCenter,
          paddingVertical: 12,
        }}>
        {isSelected && isSelected.id === item.id ? (
          <CircleCheckFill color={color.green.bold} />
        ) : (
          <Circle color={color.grey.light} />
        )}
        <Text style={{...TS.textSmMedium, marginLeft: 12}}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Dịch thuật - Công chứng" isBack />
      <KeyboardAwareScrollView style={styles.wrapper}>
        <TextInputCustom
          placeholder="Họ tên"
          title="Họ tên"
          value={info.fullname}
          onChangeValue={(text: string) => setInfo({...info, fullname: text})}
          keyboardType={'default'}
          redDot
        />

        <TextInputCustom
          placeholder="Số điện thoại"
          title="Số điện thoại"
          value={info.phone}
          onChangeValue={(text: string) => setInfo({...info, phone: text})}
          keyboardType={'numeric'}
          maxLength={10}
          redDot
        />

        <Text style={{...TS.textSmMedium}}>Bạn cần</Text>
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={dataList}
          renderItem={({item, index}) => renderItem(item, index)}
        />

        <TextInputCustom
          placeholder="Nội dung bạn muốn yêu cầu"
          title="Nội dung bạn muốn yêu cầu"
          value={info.content}
          onChangeValue={(text: string) => setInfo({...info, content: text})}
          keyboardType={'default'}
          multiline={true}
          redDot
          height={76}
        />

        <View style={{...S.itemsCenter}}>
          <ButtonCustom
            title="Gửi đơn đăng ký"
            action={onSubmitTranslate}
            width={widthScreen * 0.8}
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
  wrapper: {
    marginHorizontal: 12,
    marginTop: 12,
  },
});
