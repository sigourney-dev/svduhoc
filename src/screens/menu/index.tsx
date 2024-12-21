import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TabHeaderCustom} from '../../components/tab-header-custom';
import {ArrowRight} from '../../assets/icons';
import {color, S, TS} from '../../themes';
import {useNavigation} from '@react-navigation/native';

interface IPropsItem {
  title: string;
  direction: string;
}

export const MenuScreen = () => {
  const navigation = useNavigation();
  const ItemMenu = (props: IPropsItem) => {
    const {title, direction} = props;
    return (
      <TouchableOpacity
        style={{
          ...S.flexRow,
          ...S.justifyBetween,
          borderBottomWidth: 1,
          borderColor: color.grey.light,
          padding: 12,
        }}
        onPress={() => {
          //@ts-ignore
          navigation.navigate(direction);
        }}>
        <Text style={{...TS.textSmSemiBold}}>{title}</Text>
        <ArrowRight />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <TabHeaderCustom title={'Menu'} />
      <View style={styles.wrapper}>
        <ItemMenu title="Hỏi đáp" direction="AskAnswerScreen" />
        <ItemMenu title="Liên hệ" direction="InfoScreen" />
        <ItemMenu title="Đội ngũ đồng hành" direction="MemberScreen" />
        {/* <ItemMenu title="Về chúng tôi" direction="AboutUsScreen" /> */}
      </View>
      <View style={{...S.itemsCenter, ...S.justifyCenter}}>
        <Text style={{...TS.textSmBold, color: color.grey.light}}>
          Version 1.0
        </Text>
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
    ...S.flex1,
    marginHorizontal: 12,
  },
});
