import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color, S, TS} from '../../../themes';
import {ButtonCustom, TabHeaderCustom, TextInputCustom} from '../../../components';
import * as authActions from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {ToastService} from '../../../services/toast/toast-service';

export const ChangePasswordScreen = () => {
  const dispatch = useDispatch();
  const {changePasswordResult, changePasswordError} = useSelector(
    (store: any) => store.auth,
  );

  const [data, setData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const onConfirmPassword = () => {
    if (data.oldPassword === '') {
        ToastService.showError('Chưa nhập mật khẩu cũ');
    } else if (data.newPassword === '') {
        ToastService.showError('Chưa nhật mật khẩu mới');
    } else if (data.confirmPassword === '') {
        ToastService.showError('Chưa xác nhận mật khẩu');
    } else {
        dispatch(authActions.changePasswordRequest(data));
    }
  };

  useEffect(() => {
    if (changePasswordError) {
        ToastService.showError(changePasswordError);
    } else if (changePasswordResult) {
        ToastService.showSuccess(changePasswordResult);
        setData({
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        });
    }
  }, [changePasswordResult, changePasswordError]);

  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Thay đổi mật khẩu" isBack />
      <View style={{margin: 12}}>
        <TextInputCustom
          placeholder="Mật khẩu cũ"
          title="Mật khẩu cũ"
          value={data.oldPassword}
          onChangeValue={(text: string) =>
            setData({...data, oldPassword: text})
          }
          keyboardType={'default'}
        />

        <TextInputCustom
          placeholder="Mật khẩu mới"
          title="Mật khẩu mới"
          value={data.newPassword}
          onChangeValue={(text: string) =>
            setData({...data, newPassword: text})
          }
          keyboardType={'default'}
        />

        <TextInputCustom
          placeholder="Xác nhận mật khẩu"
          title="Xác nhận mật khẩu"
          value={data.confirmPassword}
          onChangeValue={(text: string) =>
            setData({...data, confirmPassword: text})
          }
          keyboardType={'default'}
        />

        <View style={{...S.itemsCenter, marginTop: 24}}>
            <ButtonCustom 
                title='Xác nhận'
                action={onConfirmPassword}
            />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: color.white,
  },
});
