import {StyleSheet} from 'react-native';

const AppStyle = StyleSheet.create({
  flex: {
    display: 'flex',
  },
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  itemsStart: {
    alignItems: 'flex-start',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
});

export const S = AppStyle;
