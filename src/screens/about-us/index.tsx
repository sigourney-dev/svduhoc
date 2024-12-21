import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import { TabHeaderCustom } from "../../components/tab-header-custom";
import {S, color, TS} from '../../themes';

export const AboutUsScreen = () => {
    return (
        <View style={styles.container}>
            <TabHeaderCustom title='Thông tin liên hệ' isBack/>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...S.flex1,
        backgroundColor: color.white,
    }
});