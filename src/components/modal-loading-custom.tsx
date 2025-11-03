import React from 'react';
import {View, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import {color, S, vs} from '../themes';
import { widthScreen } from '../utils';

export const ModalLoading = (props: any) => {
  const {isVisible} = props;

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalView}>
        <ActivityIndicator size={'large'} color={color.green.bold}/>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
  },
  modalView: {
    ...S.flex1,
    ...S.itemsCenter,
    ...S.justifyCenter,
    backgroundColor: 'rgba(211, 211, 211, 0.5)'
  },
});
