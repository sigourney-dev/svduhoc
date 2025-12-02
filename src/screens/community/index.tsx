import React, {useState, useEffect, useMemo, useCallback, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {color, S, TS} from '../../themes';
import {
  TabHeaderCustom,
  TextInputCustom,
  ButtonCustom,
  ModalCustom,
} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import * as questionActions from '../../redux/actions';
import {ToastService} from '../../services/toast/toast-service';
import {heightScreen, widthScreen} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';

export const CommunityScreen = () => {
  const dispatch = useDispatch();
  const {
    createQuestionResult,
    createQuestionError,
    listQuestionResult,
    listQuestionError,
    countQuestionResult,
  } = useSelector((store: any) => store.question);

  const [isShowModalForm, setIsShowModalForm] = useState<boolean>(false);
  const [listQuestion, setListQuestion] = useState<any>([]);
  const [lastId, setLastId] = useState<any>('');
  const existingIds = useRef<Set<string>>(new Set());
  const [refreshing, setRefreshing] = useState(false);

  const ModalForm = () => {
    const [info, setInfo] = useState<any>({
      question: '',
      fullname: '',
      email: '',
    });

    const onSubmit = () => {
      if (info.question === '') {
        ToastService.showError('Vui lòng nhập câu hỏi của bạn');
      } else {
        dispatch(
          questionActions.createQuestionRequest({
            content: info.question,
            email: info.email,
            fullName: info.fullname,
          }),
        );
      }
    };

    useEffect(() => {
      if (createQuestionError) {
        ToastService.showError(createQuestionError);
      } else if (createQuestionResult) {
        ToastService.showSuccess(createQuestionResult);
        setInfo({question: '', fullname: '', email: ''});
        setIsShowModalForm(false);
      }
    }, [createQuestionError, createQuestionResult]);

    return (
      <View>
        <TextInputCustom
          placeholder="Câu hỏi"
          title="Câu hỏi"
          value={info.question}
          onChangeValue={(text: string) => setInfo({...info, question: text})}
          keyboardType={'default'}
          redDot
          multiline
          height={120}
        />

        <TextInputCustom
          placeholder="Họ tên"
          title="Họ tên"
          value={info.fullname}
          onChangeValue={(text: string) => setInfo({...info, fullname: text})}
          keyboardType={'default'}
        />

        <TextInputCustom
          placeholder="Email"
          title="Email"
          value={info.email}
          onChangeValue={(text: string) => setInfo({...info, email: text})}
          keyboardType={'default'}
        />

        <View style={{...S.itemsCenter}}>
          <ButtonCustom
            title="Gửi câu hỏi"
            action={onSubmit}
            colorButton={color.green.bold}
            colorTitle={color.white}
          />
        </View>
      </View>
    );
  };

  const onLoadMore = useCallback(() => {
    if (lastId !== '') {
      dispatch(
        questionActions.getListQuestionRequest({
          pageSize: 10,
          after: lastId,
        }),
      );
    }
  }, [lastId]);

  const onRefresh = () => {
    setRefreshing(true);
    setListQuestion([]);
    setLastId('');
    existingIds.current.clear();
    dispatch(
      questionActions.getListQuestionRequest({
        pageSize: 10,
      }),
    );
    setRefreshing(false);
  };

  const renderItem = (item: any, index: any) => {
    return (
      <View key={index}>
        <View
          style={{
            borderWidth: 1,
            borderColor: color.green.light,
            backgroundColor: '#D6F6D5',
            padding: 8,
            borderRadius: 12,
            marginBottom: 4,
          }}>
          <Text style={{...TS.textSmSemiBold, color: color.black}}>
            {item.fullName}
          </Text>
          <Text style={{...TS.textSmRegular, color: color.black}}>
            {item.content}
          </Text>
          <View>
          {item.answers.length !== 0 && (
          <View
            style={{
              borderWidth: 1,
              marginVertical: 4,
              borderColor: color.green.bold,
              backgroundColor: color.green.bold,
              padding: 8,
              borderRadius: 12,
              marginTop: 4,
            }}>
            <Text
              style={{
                ...TS.textSmSemiBold,
                color: '#D6F6D5',
              }}>
              SVDUHOC.VN
            </Text>
            <FlatList
              data={item.answers}
              renderItem={({item: it, index: id}) => {
                return (
                  <View key={id}>
                    <Text
                      style={{
                        ...TS.textSmSemiBold,
                        color: color.white,
                        marginLeft: 4,
                      }}>
                      {it.content}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        )}
          </View>
        </View>
      </View>
    );
  };

  const renderFooter = useMemo(() => {
    if (listQuestionResult) {
      if (listQuestionResult.hasNext) {
        return <ActivityIndicator size={'small'} color={color.green.bold} />;
      } else {
        return (
          <View style={{...S.itemsCenter, marginVertical: 8}}>
            <Text style={{...TS.textXsThin}}>Không còn câu hỏi</Text>
          </View>
        );
      }
    } else return null;
  }, [listQuestionResult]);

  useEffect(() => {
    dispatch(
      questionActions.getListQuestionRequest({
        pageSize: 30,
      }),
    );
    dispatch(questionActions.getCountQuestionRequest());
  }, []);

  useEffect(() => {
    if (listQuestionResult && listQuestionResult.data.length !== 0) {
      const newAbroadList = listQuestionResult.data.filter(
        (item: any) => !existingIds.current.has(item.id),
      );
      setListQuestion((prevList: any) => [...prevList, ...newAbroadList]);
      newAbroadList.forEach((item: any) => existingIds.current.add(item.id));
      if (listQuestionResult.hasNext) {
        setLastId(
          listQuestionResult.data[listQuestionResult.data.length - 1].id,
        );
      } else {
        setLastId('');
      }
    } else if (listQuestionError) {
      ToastService.showError(listQuestionError);
    }
  }, [listQuestionResult, listQuestionError]);

  return (
    <View style={styles.container}>
      <TabHeaderCustom title="Cộng đồng" />
      {listQuestionResult && listQuestion && countQuestionResult && (
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              marginHorizontal: 4,
              marginVertical: 8,
              height: heightScreen * 0.8,
            }}>
            <Text
              style={{
                ...TS.textSmSemiBold,
                marginTop: 0,
                textAlign: 'center',
              }}>
              Đã có {countQuestionResult} câu hỏi gửi đến cho SVDUHOC.VN
            </Text>
            <FlatList
             showsVerticalScrollIndicator={false}
              data={listQuestion}
              renderItem={({item, index}) => renderItem(item, index)}
              onEndReached={onLoadMore}
              onEndReachedThreshold={0.5}
              ListFooterComponent={renderFooter}
              onRefresh={onRefresh}
              refreshing={refreshing}
            />
            <View style={{...S.itemsCenter}}>
              <ButtonCustom
                title="Đặt câu hỏi cho SVDUHOC.VN"
                action={() => setIsShowModalForm(true)}
                colorButton={color.green.bold}
                colorTitle={color.white}
                width={widthScreen * 0.6}
              />
            </View>
          </ScrollView>
        </View>
      )}
      <ModalCustom
        isVisible={isShowModalForm}
        title="Đặt câu hỏi"
        children={<ModalForm />}
        isBackground
        onCloseModal={() => setIsShowModalForm(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: color.white,
  },
});
