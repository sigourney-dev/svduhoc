import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {ButtonCustom, TabHeaderCustom} from '../../components';
import {S, TS, color} from '../../themes';
import {TextInputCustom, DropdownCustom} from '../../components';
import {heightScreen} from '../../utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


export const FormApplication = () => {
  const [data, setData] = useState<any>({
    fullname: '',
    birthday: '',
    phone: '',
    province: '',
    average: '',
    degree: {},
    graduate: '',
    service: {},
    certification: '',
    referrer: '',
    school: '',
    otherOffer: '',
  });
  const listDegree = [
    {
      label: 'Trung học phổ thông',
      value: '0',
    },
    {
      label: 'Trung cấp',
      value: '1',
    },
    {
      label: 'Cao đẳng',
      value: '2',
    },
    {
      label: 'Đại học',
      value: '3',
    },
    {
      label: 'Thạc sĩ',
      value: '4',
    },
  ];
  const listService = [
    {
      label: 'Du học tiếng visa D4',
      value: '0',
    },
    {
      label: 'Du học cao đẳng/đại học visa D2',
      value: '1',
    },
    {
      label: 'Du học thạc sĩ D2',
      value: '2',
    },
  ];
  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Đăng ký tư vấn" isBack />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <TextInputCustom
            placeholder="Họ và tên"
            title="Họ và tên"
            value={data.fullname}
            onChangeValue={(fullname: string) =>
              setData({...data, fullname: fullname})
            }
            keyboardType="default"
          />

          <TextInputCustom
            placeholder="Ngày tháng năm sinh"
            title="Ngày tháng năm sinh"
            value={data.birthday}
            onChangeValue={(birthday: string) =>
              setData({...data, birthday: birthday})
            }
            keyboardType="default"
          />

          <TextInputCustom
            placeholder="Số điện thoại"
            title="Số điện thoại"
            value={data.phone}
            onChangeValue={(phone: string) => setData({...data, phone: phone})}
            keyboardType="numeric"
          />

          <TextInputCustom
            placeholder="Thành phố đang sống"
            title="Thành phố đang sống"
            value={data.province}
            onChangeValue={(province: string) =>
              setData({...data, province: province})
            }
            keyboardType="default"
          />

          <TextInputCustom
            placeholder="Điểm trung bình các lớp 10/11/12"
            title="Điểm trung bình các lớp 10/11/12"
            value={data.average}
            onChangeValue={(average: string) =>
              setData({...data, average: average})
            }
            keyboardType="default"
          />

          <DropdownCustom
            listItem={listDegree}
            title="Bằng cấp cao nhât"
            onChangeItem={(item: any) => setData({...data, degree: item})}
            selectedItem={data.degree}
          />

          <TextInputCustom
            placeholder="Tốt nghiệp năm"
            title="Tốt nghiệp năm"
            value={data.graduate}
            onChangeValue={(graduate: string) =>
              setData({...data, graduate: graduate})
            }
            keyboardType="default"
          />

          <DropdownCustom
            listItem={listService}
            title="Bạn muốn đi du học diện nào?"
            onChangeItem={(item: any) => setData({...data, service: item})}
            selectedItem={data.service}
          />

          <TextInputCustom
            placeholder="Tốt nghiệp năm"
            title="Tốt nghiệp năm"
            value={data.graduate}
            onChangeValue={(graduate: string) =>
              setData({...data, graduate: graduate})
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
              title="Đằng ký"
              action={() => {}}
              colorButton={color.blue.bold}
              colorTitle={color.white}
            />
          </View>
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
    marginBottom: 24,
  },
});
