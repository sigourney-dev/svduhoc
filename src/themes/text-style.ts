import {StyleSheet} from 'react-native';
import {color} from './colors';
import {ms} from './platform';

const TextStyle = StyleSheet.create({
  // text xs
  textXsThin: {
    fontFamily: 'Montserrat-Thin',
    fontSize: ms(12),
    lineHeight: ms(16),
    color: color.black,
  },
  textXsRegular: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(12),
    lineHeight: ms(16),
    color: color.black,
  },
  textXsMedium: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(12),
    lineHeight: ms(16),
    color: color.black,
  },
  textXsMediumWrapper: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(12),
    lineHeight: ms(16),
    color: color.blue.bold,
  },
  textXsMediumRed: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(12),
    lineHeight: ms(16),
    color: color.red.bold,
  },
  textXsSemiBold: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(12),
    lineHeight: ms(16),
    color: color.black,
  },
  textXsBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: ms(12),
    lineHeight: ms(16),
    color: color.black,
  },

  // text sm
  textSmThin: {
    fontFamily: 'Montserrat-Thin',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: color.black,
  },
  textSmRegular: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: color.black,
  },
  textSmMedium: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: color.black,
  },
  textSmSemiBold: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: color.black,
  },
  textSmBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: color.black,
  },

  // text base
  textBaseThin: {
    fontFamily: 'Montserrat-Thin',
    fontSize: ms(16),
    lineHeight: ms(24),
    color: color.black,
  },
  textBaseRegular: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(16),
    lineHeight: ms(24),
    color: color.black,
  },
  textBaseMedium: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(16),
    lineHeight: ms(24),
    color: color.black,
  },
  textBaseSemiBold: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(15),
    lineHeight: ms(24),
    color: color.black,
  },
  textBaseBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: ms(16),
    lineHeight: ms(24),
    color: color.black,
  },

  // text lg
  textLgThin: {
    fontFamily: 'Montserrat-Thin',
    fontSize: ms(18),
    lineHeight: ms(28),
    color: color.black,
  },
  textLgRegular: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(18),
    lineHeight: ms(28),
    color: color.black,
  },
  textLgMedium: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(18),
    lineHeight: ms(28),
    color: color.black,
  },
  textLgSemiBold: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(18),
    lineHeight: ms(28),
    color: color.black,
  },
  textLgBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: ms(18),
    lineHeight: ms(28),
    color: color.black,
  },

  // text xl
  textXlThin: {
    fontFamily: 'Montserrat-Thin',
    fontSize: ms(20),
    lineHeight: ms(28),
    color: color.black,
  },
  textXlRegular: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(20),
    lineHeight: ms(28),
    color: color.black,
  },
  textXlMedium: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(20),
    lineHeight: ms(28),
    color: color.black,
  },
  textXlSemiBold: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(20),
    lineHeight: ms(28),
    color: color.black,
  },
  textXlBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: ms(20),
    lineHeight: ms(28),
    color: color.black,
  },

  // text 2xl
  text2XlThin: {
    fontFamily: 'Montserrat-Thin',
    fontSize: ms(24),
    lineHeight: ms(32),
    color: color.black,
  },
  text2XlRegular: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(24),
    lineHeight: ms(32),
    color: color.black,
  },
  text2XlMedium: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(24),
    lineHeight: ms(32),
    color: color.black,
  },
  text2XlSemiBold: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(24),
    lineHeight: ms(32),
    color: color.black,
  },
  text2XlBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: ms(24),
    lineHeight: ms(32),
    color: color.black,
  },
  textXlSemiBoldWhite: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(20),
    lineHeight: ms(28),
    color: color.white,
  },
  textXlSemiSearch: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(14),
    lineHeight: ms(14),
    color: color.white,
  },
  textXlSemiSearchSemi: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(13),
    lineHeight: ms(15),
    color: color.white,
  },
  textSmMediumPlaceholder: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: color.grey.mediumLight,
  },
});

export const TS = TextStyle;
