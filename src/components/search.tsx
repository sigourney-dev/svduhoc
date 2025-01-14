import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {color, S, TS} from '../themes';
import { Search } from '../../assets/icons';

interface IProps {
    placeholder: string;
    onPressSearch: any;
    searchText: string;
    onChangeSearchText: any;
}

export const SearchCustom = (props: IProps) => {
    const {
        placeholder,
        onPressSearch,
        searchText,
        onChangeSearchText,
    } = props;
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Search />
            </View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={searchText}
                onChangeText={onChangeSearchText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...S.flexRow,
        borderWidth: 1,
        borderColor: color.grey.light,
        borderRadius: 48,
        padding: 12,
        backgroundColor: color.grey.light,
        ...S.itemsCenter,
    },
    input: {
        ...S.flex1,
        ...TS.textSmRegular,
    },
    icon: {
        ...S.flexRow,
        marginRight: 8,
    },
});