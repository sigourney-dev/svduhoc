import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {color, TS, S} from '../../themes';
import {TabHeaderCustom} from '../../components';
import WebView from 'react-native-webview';
import {heightScreen, widthScreen} from '../../utils';

export const IconHome = (props: any) => {
  const {title, link} = props.route.params;
  return (
    <View style={styles.container}>
      <TabHeaderCustom title={title} isBack />
      <ScrollView style={styles.wrapper}>
        <WebView
          source={{uri: link}}
          style={styles.webview}
          startInLoadingState={true}
          scalesPageToFit={true}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.error('WebView error: ', nativeEvent);
          }}
          onHttpError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.error('HTTP error: ', nativeEvent);
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
  },
  wrapper: {
    paddingHorizontal: 0,
    marginBottom: 24,
  },
  webview: {
    width: widthScreen,
    height: heightScreen * 0.9,
    ...S.flex1,
  },
});
