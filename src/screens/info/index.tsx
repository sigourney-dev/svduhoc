import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TabHeaderCustom} from '../../components/tab-header-custom';
import {S, color, TS} from '../../themes';

export const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Thông tin liên hệ" isBack />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Trụ sở chính</Text>
        <Text style={styles.content}>
          Tầng 6, Toà MD Complex, số 68 Nguyễn Cơ Thạch, Phường Từ Liêm, TP Hà Nội
        </Text>

        <Text style={styles.title}>Văn phòng tiếp nhận hồ sơ</Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: color.grey.light,
            paddingBottom: 12,
          }}>
          <Text style={styles.point}>Hà Nội</Text>
          <Text style={styles.content}>
            Tầng 3 Trường Trung Cấp Nghệ Thuật Xiếc Và Tạp Kỹ Việt Nam
          </Text>
          <Text style={styles.content}>Mr Tuyển - 0969.211.556</Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: color.grey.light,
            paddingBottom: 12,
          }}>
          <Text style={styles.point}>Đà Nẵng</Text>
          <Text style={styles.content}>
            31 Trần Can, Hòa Khê, Thanh Khê, Đà Nẵng{' '}
          </Text>
          <Text style={styles.content}>Mr Khuyên - 0987.739.527</Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: color.grey.light,
            paddingBottom: 12,
          }}>
          <Text style={styles.point}>Nghệ An</Text>
          <Text style={styles.content}>
            Số 124, Nguyễn Tất Thành, Quỳnh Vinh, Thị xã Hoàng Mai, Nghệ An
          </Text>
          <Text style={styles.content}>Mr Cường - 0921.163.666</Text>
        </View>

        <Text style={styles.title}>Email</Text>
        <Text style={styles.content}>admin@asecom.vn</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: color.white,
  },
  wrapper: {
    ...S.itemsCenter,
    marginHorizontal: 24,
  },
  title: {
    marginTop: 12,
    ...TS.textXlBold,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: color.blue.bold,
  },
  point: {
    marginTop: 12,
    ...TS.textSmBold,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  content: {
    textAlign: 'center',
    marginTop: 4,
    ...TS.textSmSemiBold,
    color: color.grey.bold,
  },
});
