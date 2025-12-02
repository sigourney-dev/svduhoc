import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {color, S, TS} from '../../themes';
import WebView from 'react-native-webview';
import {TabHeaderCustom, ModalLoading} from '../../components';
import {widthScreen, heightScreen} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import * as postActions from '../../redux/actions';
import {ToastService} from '../../services/toast/toast-service';
import {useIsFocused} from '@react-navigation/native';

export const DetailNewsScreen = (props: any) => {
  const {idPost, type} = props.route.params;
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {postDetailError, postDetailResult, isLoading} = useSelector(
    (store: any) => store.post,
  );
  const {detailAbroadResult, detailAbroadError} = useSelector(
    (store: any) => store.abroad,
  );

  const [detail, setDetail] = useState<any>();
  const webViewRef = useRef<WebView>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const injectedJavaScript = `
  (function() {
    let currentZoom = 1;
    const minZoom = 1;
    const maxZoom = 3;
    const zoomStep = 0.5;
    
    // Tạo wrapper div nếu chưa có
    function initZoom() {
      const body = document.body;
      if (!body.querySelector('#zoom-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.id = 'zoom-wrapper';
        wrapper.style.transformOrigin = 'center center';
        wrapper.style.transition = 'transform 0.3s ease';
        
        // Di chuyển tất cả nội dung vào wrapper
        while (body.firstChild) {
          wrapper.appendChild(body.firstChild);
        }
        body.appendChild(wrapper);
      }
    }
    
    // Hàm zoom
    function zoomContent(level) {
      const wrapper = document.getElementById('zoom-wrapper');
      if (wrapper) {
        wrapper.style.transform = 'scale(' + level + ')';
        wrapper.style.width = (100 / level) + '%';
        wrapper.style.height = (100 / level) + '%';
      }
    }
    
    // Xử lý double click
    document.addEventListener('dblclick', function(e) {
      e.preventDefault();
      initZoom();
      
      if (currentZoom === minZoom) {
        currentZoom = minZoom + zoomStep;
      } else if (currentZoom < maxZoom) {
        currentZoom = Math.min(currentZoom + zoomStep, maxZoom);
      } else {
        currentZoom = minZoom;
      }
      
      zoomContent(currentZoom);
    });
    
    // Khởi tạo khi load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initZoom);
    } else {
      initZoom();
    }
    
    true; // Required for injected JavaScript
  })();
`;

  useEffect(() => {
    setDetail(undefined);
    dispatch(postActions.removeAbroadResult());
    dispatch(postActions.removePostResult());
  }, [isFocused, idPost, dispatch, type]);

  useEffect(() => {
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
  }, [idPost, type, dispatch]);

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
  }, [
    postDetailResult,
    postDetailError,
    detailAbroadResult,
    detailAbroadError,
  ]);

  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Bài viết" isBack />
      {detail ? (
        <WebView
          ref={webViewRef}
          source={{html: detail.content}}
          style={styles.webview}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}
          injectedJavaScript={injectedJavaScript}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={true}
        />
      ) : isLoading ? (
        <ModalLoading isVisible={!detail} />
      ) : (
        <View style={{...S.flex1, ...S.itemsCenter, ...S.justifyCenter}}>
          <Text>Bài viết Lỗi hoặc Không tồn tại</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  webview: {
    width: widthScreen,
    flex: 1,
  },
});
