import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {color, S, TS} from '../../themes';
import WebView from 'react-native-webview';
import {TabHeaderCustom, ModalLoading} from '../../components';
import {widthScreen, heightScreen} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import * as postActions from '../../redux/actions';
import {ToastService} from '../../services/toast/toast-service';

export const DetailNewsScreen = (props: any) => {
  const {idPost, type} = props.route.params;
  const dispatch = useDispatch();
  const {postDetailError, postDetailResult, isLoading} = useSelector(
    (store: any) => store.post,
  );
  const {detailAbroadResult, detailAbroadError} = useSelector(
    (store: any) => store.abroad,
  );

  const [detail, setDetail] = useState<any>();

  useEffect(() => {
    if (!detail) {
      if (type === 'ABROAD') {
        dispatch(
          postActions.getDetailAbroadRequest({
            id: idPost,
          }),
        );
      } else {
        dispatch(
          postActions.getPostDetailRequest({
            id: idPost,
          }),
        );
      }
    }
  }, [idPost]);

  useEffect(() => {
    if (type === 'ABROAD') {
      if (detailAbroadResult) {
        setDetail(detailAbroadResult);
      } else if (detailAbroadError) {
        ToastService.showError(detailAbroadError);
      }
    } else {
      if (postDetailResult) {
        setDetail(postDetailResult);
      } else if (postDetailError) {
        ToastService.showError(postDetailError);
      }
    }
  }, [postDetailResult, postDetailError]);

  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Bài viết" isBack />
      {detail ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <WebView source={{html: detail.content}} style={styles.webview} />
        </ScrollView>
      ) : isLoading ? (
        <ModalLoading isVisible={!detail} />
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
  },
  webview: {
    width: widthScreen * 0.95,
    height: heightScreen * 0.82,
    ...S.flex1,
    margin: 12,
  },
});
