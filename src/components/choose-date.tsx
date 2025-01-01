import React from "react";
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import DatePicker from "react-native-date-picker";

export const ChooseDate = (props: any) => {
    const {isChooseDate, mode, onCloseChooseDate, onConfirmChooseDate, dateSelected, title} = props;

    return (
        <View>
            <DatePicker
                modal
                mode={mode}
                open={isChooseDate}
                date={dateSelected}
                title={title}
                confirmText='Xác nhận'
                cancelText='Huỷ'
                onConfirm={(date) => {
                   onConfirmChooseDate(date);
                   onCloseChooseDate();
                }}
                onCancel={() => {
                    onCloseChooseDate();
                }}
            />
        </View>
    );
}