import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import Toast, {
  ToastConfigParams,
  ToastShowParams,
} from 'react-native-toast-message';
import {Notification, Info, Success, Warning, Error} from '../../assets/icons';
import {color, ms, S, TS} from '../../themes';
import {Utils} from '../../utils';

const VISIBILITY_TIME = 3000;

enum ToastType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  NOTIFICATION = 'NOTIFICATION',
}

type ToastComponentProps = {
  type: ToastType;
  title?: string;
  caption?: string;
  onPress?: () => void;
};

interface IToastComponentColor {
  backgroundIconColor: string;
  iconColor: string;
}

function ToastComponent(props: ToastComponentProps) {
  const mapToastColor: {[key in ToastType]: IToastComponentColor} = {
    [ToastType.INFO]: {
      backgroundIconColor: color.grey.light,
      iconColor: color.blue.bold,
    },
    [ToastType.NOTIFICATION]: {
      backgroundIconColor: color.grey.light,
      iconColor: color.yellow.main,
    },
    [ToastType.SUCCESS]: {
      backgroundIconColor: color.grey.light,
      iconColor: color.green.bold,
    },
    [ToastType.WARNING]: {
      backgroundIconColor: color.grey.light,
      iconColor: color.orange.bold,
    },
    [ToastType.ERROR]: {
      backgroundIconColor: color.grey.light,
      iconColor: color.red.bold,
    },
  };

  const iconProps: SvgProps = {
    height: ms(32),
    width: ms(32),
    color: mapToastColor[props.type].iconColor,
  };

  const mapToastIcon: {[key in ToastType]: JSX.Element} = {
    [ToastType.INFO]: <Info {...iconProps} />,
    [ToastType.NOTIFICATION]: <Notification {...iconProps} />,
    [ToastType.SUCCESS]: <Success {...iconProps} />,
    [ToastType.WARNING]: <Warning {...iconProps} />,
    [ToastType.ERROR]: (
      <Error {...iconProps}/>
    ),
  };

  const styles = StyleSheet.create({
    modal: {
      width: '100%',
    },
    container: {
      ...S.flexRow,
      ...S.itemsCenter,
      padding: ms(16),
      borderRadius: ms(16),
      marginHorizontal: ms(24),
      backgroundColor: color.grey.light,
    },
    iconContainer: {
      ...S.itemsCenter,
      ...S.justifyCenter,
      height: ms(40),
      width: ms(40),
      borderRadius: ms(20),
      backgroundColor: mapToastColor[props.type].backgroundIconColor,
    },
    textContainer: {
      ...S.flex1,
      marginLeft: ms(12),
    },
    title: {
      ...TS.textSmSemiBold,
    },
    caption: {
      ...TS.textSmRegular,
      color: color.grey.light,
    },
  });

  return (
    <TouchableOpacity
      style={styles.modal}
      onPress={() => {
        if (props.onPress) {
          props.onPress();
          Toast.hide();
        }
      }}
      disabled={!props.onPress}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>{mapToastIcon[props.type]}</View>
        <View style={styles.textContainer}>
          {props.title ? (
            <Text style={styles.title}>{props.title || ''}</Text>
          ) : (
            ''
          )}
          {props.caption ? (
            <Text style={styles.caption}>{props.caption || ''}</Text>
          ) : (
            ''
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export const toastConfig: {
  [key in ToastType]: (
    props: ToastConfigParams<ToastShowParams>,
  ) => JSX.Element;
} = {
  SUCCESS: ({text1, text2}) => (
    <ToastComponent
      title={text1}
      caption={text2}
      type={ToastType.SUCCESS}
      // onPress={onPress}
    />
  ),
  INFO: ({text1, text2, onPress}) => (
    <ToastComponent
      title={text1}
      caption={text2}
      type={ToastType.INFO}
      onPress={onPress}
    />
  ),
  NOTIFICATION: ({text1, text2}) => (
    <ToastComponent
      title={text1}
      caption={text2}
      type={ToastType.NOTIFICATION}
      // onPress={onPress}
    />
  ),
  WARNING: ({text1, text2}) => (
    <ToastComponent
      title={text1}
      caption={text2}
      type={ToastType.WARNING}
      // onPress={onPress}
    />
  ),
  ERROR: ({text1, text2}) => (
    <ToastComponent
      title={text1}
      caption={text2}
      type={ToastType.ERROR}
      // onPress={onPress}
    />
  ),
};

const toastOptions: ToastShowParams = {
  type: ToastType.SUCCESS,
  position: 'top',
  text1: '',
  text2: '',
  visibilityTime: VISIBILITY_TIME,
  autoHide: true,
  bottomOffset: ms(40),
  props: {},
  onShow: () => {},
  onHide: () => {},
  onPress: () => {},
};

export const ToastService = {
  showSuccess: (message: string, helpText?: string, onPress?: () => void) => {
    if (Utils.isString(message)) {
      Toast.show({
        ...toastOptions,
        text1: message,
        text2: helpText,
        onPress,
      });
    }
  },
  showInfo: (message: string, helpText?: string, onPress?: () => void) => {
    if (Utils.isString(message)) {
      Toast.show({
        ...toastOptions,
        type: ToastType.INFO,
        text1: message,
        text2: helpText,
        onPress,
      });
    }
  },
  showNotification: (
    message: string,
    helpText?: string,
    onPress?: () => void,
  ) => {
    if (Utils.isString(message)) {
      Toast.show({
        ...toastOptions,
        type: ToastType.NOTIFICATION,
        text1: message,
        text2: helpText,
        onPress,
      });
    }
  },
  showWarning: (message: string, helpText?: string, onPress?: () => void) => {
    if (Utils.isString(message)) {
      Toast.show({
        ...toastOptions,
        type: ToastType.WARNING,
        text1: message,
        text2: helpText,
        onPress,
      });
    }
  },
  showError: (message: string, helpText?: string, onPress?: () => void) => {
    if (Utils.isString(message)) {
      Toast.show({
        ...toastOptions,
        type: ToastType.ERROR,
        text1: message,
        text2: helpText,
        onPress,
      });
    }
  },
};
