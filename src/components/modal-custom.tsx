import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {TS, S, color, vs, hs} from '../themes';
import {ButtonCustom} from './button-custom';
import {heightScreen, widthScreen} from '../utils';
import {Close} from '../../assets/icons';

interface IModalCustom {
  isVisible: boolean;
  onCloseModal?: () => void;
  title: string;
  buttonLeft?: string;
  actionLeft?: () => void;
  buttonRight?: string;
  actionRight?: () => void;
  children?: React.JSX.Element;
  isBackground?: boolean;
  notCenter?: boolean;
}

export const ModalCustom = (props: IModalCustom) => {
  const {
    isVisible,
    onCloseModal,
    title,
    buttonLeft,
    actionLeft,
    buttonRight,
    actionRight,
    children,
    isBackground,
    notCenter,
  } = props;
  return (
    <View style={styles.container}>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isVisible}
        onRequestClose={onCloseModal ? onCloseModal : () => {}}>
        <KeyboardAvoidingView
          behavior={'height'}
          style={[
            styles.modalOverlay,
            !isBackground && {backgroundColor: 'rgba(0,0,0,0.5)'},
          ]}>
          <View style={styles.container}>
            <View
              style={[
                styles.modalView,
                !notCenter && {...S.itemsCenter, ...S.justifyCenter},
              ]}>
              <Text
                style={{
                  ...TS.textSmMedium,
                  marginBottom: vs(12),
                  textAlign: 'center',
                }}>
                {title}
              </Text>
              {onCloseModal && (
                <TouchableOpacity style={styles.close} onPress={onCloseModal}>
                  <Close />
                </TouchableOpacity>
              )}
              {children ? children : null}
              <View style={{...S.flexRow, justifyContent: 'space-between'}}>
                {buttonLeft && (
                  <View style={{marginRight: 12}}>
                    <ButtonCustom title={buttonLeft} action={actionLeft} colorTitle={color.white} colorButton={color.red.bold}/>
                  </View>
                )}
                {buttonRight && (
                  <ButtonCustom title={buttonRight} action={actionRight} />
                )}
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    marginTop: vs(heightScreen / 3),
    ...S.itemsCenter,
    ...S.justifyCenter,
    width: widthScreen,
  },
  modalView: {
    margin: vs(20),
    backgroundColor: color.white,
    borderRadius: 20,
    padding: vs(24),
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: widthScreen * 0.75,
  },
  close: {
    position: 'absolute',
    top: vs(10),
    right: hs(10),
  },
});
