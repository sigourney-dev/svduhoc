import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {S, TS, color} from '../themes';
import {Dropdown} from 'react-native-element-dropdown';
import {widthScreen} from '../utils';

interface IProps {
  listItem: any;
  title: string;
  onChangeItem: (item: any) => void;
  selectedItem: any;
  redDot?: boolean;
  flexRow?: boolean;
  isCenter?: boolean;
}

export const DropdownCustom = (props: IProps) => {
  const {
    listItem,
    title,
    onChangeItem,
    selectedItem,
    redDot,
    flexRow,
    isCenter,
  } = props;
  return (
    <View
      style={
        !flexRow
          ? styles.container
          : {
              ...S.flexRow,
              width: widthScreen / 1.3,
              ...S.justifyBetween,
            }
      }>
      
      <Dropdown
        style={!flexRow ? styles.dropdown : styles.dropdownWith}
        data={listItem}
        labelField={'label'}
        valueField={'value'}
        value={selectedItem.value}
        onChange={(item: any) => onChangeItem(item)}
        placeholder={title}
        placeholderStyle={{
          ...TS.textSmSemiBold,
          color: color.grey.light,
        }}
        selectedTextStyle={styles.value}
        itemTextStyle={{...TS.textBaseSemiBold}}
      />
      <View style={!flexRow ? {} : {alignSelf: 'center'}}>
        {title && (
          <Text
            style={styles.title}>
            {title}
            {redDot && <Text style={{color: color.red.bold}}>*</Text>}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },

  dropdown: {
    borderWidth: 1,
    borderColor: color.blue.bold,
    borderRadius: 12,
    padding: 12,
    height: 66,
    color: color.black,
  },
  dropdownWith: {
    borderWidth: 1,
    borderColor: color.blue.bold,
    borderRadius: 12,
    padding: 12,
    height: 50,
    color: color.black,
    width: widthScreen / 2,
  },
  title: {
    backgroundColor: color.white,
    ...TS.textSmSemiBold,
    color: color.blue.bold,
    position: 'absolute',
    left: 12,
    top: -78,
    
  },
  value: {
    ...TS.textSmSemiBold,
  },
});
