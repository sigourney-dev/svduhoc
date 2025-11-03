import React, { useState } from "react";
import {View, StyleSheet, Text} from 'react-native';
import { TabHeaderCustom } from "../../components/tab-header-custom";
import {S, color, TS} from '../../themes';
import { TextInputCustom } from "../../components/text-input-custom";
import { ButtonCustom } from "../../components/button-custom";

export const AskAnswerScreen = () => {
    const [email, setEmail] = useState<string>('');
    return (
        <View style={styles.container}>
            <TabHeaderCustom title='Hỏi đáp cùng SVDUHOC.VN' isBack/>
            <View style={{marginHorizontal: 12}}>
                <Text style={styles.title}>Đăng ký nhận tin</Text>
                <Text style={styles.content}>
                Cập nhật các chương trình ưu đãi của chúng tôi
                </Text>

                <TextInputCustom
                     placeholder="Email"
                     title="Email"
                     value={email}
                     onChangeValue={(text: string) => setEmail(text)}
                     keyboardType={'default'}
                />
                <View style={{...S.itemsEnd}}>
                <Text style={{...TS.textXsMedium, color: color.red.bold}}>Chúng tôi không chia sẻ id email của bạn</Text>
                </View>

                <View style={{...S.itemsCenter, marginTop: 12}}>
                <ButtonCustom
                    action={() => {}}
                    title='Đăng ký'
                    colorButton={color.green.bold}
                    colorTitle={color.white}
                />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...S.flex1,
        backgroundColor: color.white,
    },
    title: {
        marginTop: 12,
        ...TS.textXlBold,
        textTransform: 'uppercase',
        textAlign: 'center',
        color: color.green.bold,
      },
      content: {
        textAlign: 'center',
        marginVertical: 8,
        ...TS.textSmSemiBold,
        color: color.grey.bold,
      },
});