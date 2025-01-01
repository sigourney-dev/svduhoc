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
  position?: boolean;
  isSearch?: boolean;
  height?: any;
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
    position,
    isSearch,
    height,
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
        search={isSearch}
        style={[!flexRow ? styles.dropdown : styles.dropdownWith, {height: height ? height : 66}]}
        data={listItem}
        labelField={'label'}
        valueField={'value'}
        value={selectedItem.value}
        onChange={(item: any) => onChangeItem(item)}
        placeholder={title}
        placeholderStyle={{
          ...TS.textBaseMedium,
          color: color.grey.light,
        }}
        selectedTextStyle={styles.value}
        itemTextStyle={{...TS.textBaseMedium}}
        dropdownPosition={position ? 'top' : 'bottom'}
        searchPlaceholder='Tìm kiếm'
        searchPlaceholderTextColor={color.grey.mediumLight}
        inputSearchStyle={{...TS.textBaseMedium, borderRadius: 12}}
      />
      <View style={!flexRow ? {} : {alignSelf: 'center'}}>
        {title && (
          <Text
            style={[styles.title, { top: height ? height -(height * 2 + 12) : -78,}]}>
            {title}
            {redDot && <Text style={{color: color.red.bold}}> *</Text>}
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
   
    
  },
  value: {
    ...TS.textBaseMedium,
  },
});
