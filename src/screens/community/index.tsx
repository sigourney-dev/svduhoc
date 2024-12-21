import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {color, S, TS} from '../../themes';
import {TabHeaderCustom, TextInputCustom, ButtonCustom} from '../../components';

export const CommunityScreen = () => {
  const [info, setInfo] = useState<any>({
    question: '',
    fullname: '',
    email: '',
  });

  

  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Cộng đồng" isBack />
      <ScrollView style={styles.wrapper}>
        <Text style={{...TS.textSmSemiBold, marginBottom: 12}}>
          Email của bạn sẽ không được hiển thị công khai.
        </Text>
        <TextInputCustom
          placeholder="Câu hỏi"
          title="Câu hỏi"
          value={info.question}
          onChangeValue={(text: string) => setInfo({...info, question: text})}
          keyboardType={'default'}
        />

        <TextInputCustom
          placeholder="Họ tên"
          title="Họ tên"
          value={info.fullname}
          onChangeValue={(text: string) => setInfo({...info, fullname: text})}
          keyboardType={'default'}
        />

        <TextInputCustom
          placeholder="Email"
          title="Email"
          value={info.email}
          onChangeValue={(text: string) => setInfo({...info, email: text})}
          keyboardType={'default'}
        />

       <View style={{...S.itemsCenter}}>
       <ButtonCustom 
        title='Gửi câu hỏi'
        action={() => {}}
        colorButton={color.blue.bold}
        colorTitle={color.white}
        />
       </View>

        <Text style={{...TS.textSmSemiBold, marginTop: 12}}>Đã có 500 câu hỏi gửi đến cho SVDUHOC.VN</Text>
      </ScrollView>
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
