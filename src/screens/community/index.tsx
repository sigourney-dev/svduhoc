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
import {widthScreen} from '../../utils';

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
      } else if (info.fullname === '') {
        ToastService.showError('Vui lòng nhập Họ tên của bạn');
      } else if (info.email === '') {
        ToastService.showError('Vui lòng nhập Email của bạn');
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
          redDot
        />

        <TextInputCustom
          placeholder="Email"
          title="Email"
          value={info.email}
          onChangeValue={(text: string) => setInfo({...info, email: text})}
          keyboardType={'default'}
          redDot
        />

        <View style={{...S.itemsCenter}}>
          <ButtonCustom
            title="Gửi câu hỏi"
            action={onSubmit}
            colorButton={color.blue.bold}
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
            borderColor: color.grey.bold,
            backgroundColor: color.grey.bold,
            padding: 8,
            borderRadius: 12,
            alignSelf: 'flex-start',
          }}>
          <Text style={{...TS.textSmSemiBold, color: color.white}}>
            {item.fullName}
          </Text>
          <Text style={{...TS.textSmRegular, color: color.white}}>
            {item.content}
          </Text>
        </View>
        {item.answers.length !== 0 && (
          <View
            style={{
              borderWidth: 1,
              marginVertical: 4,
              borderColor: color.blue.bold,
              backgroundColor: color.blue.bold,
              padding: 8,
              borderRadius: 12,
              alignSelf: 'flex-end',
              marginTop: 4,
            }}>
            <Text
              style={{
                ...TS.textSmSemiBold,
                color: color.white,
                textAlign: 'right',
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
                        ...TS.textSmRegular,
                        color: color.white,
                        marginLeft: 4,
                        textAlign: 'right',
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
    );
  };

  const renderFooter = useMemo(() => {
    if (listQuestionResult) {
      if (listQuestionResult.hasNext) {
        return <ActivityIndicator size={'small'} color={color.blue.bold} />;
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
      <TabHeaderCustom title="Cộng đồng" isBack />
      {listQuestionResult && listQuestion && countQuestionResult && (
        <View>
          <View style={{height: '82%', marginHorizontal: 12}}>
            <Text
              style={{
                ...TS.textSmSemiBold,
                marginTop: 12,
                textAlign: 'center',
              }}>
              Đã có {countQuestionResult} câu hỏi gửi đến cho SVDUHOC.VN
            </Text>
            <FlatList
              data={listQuestion}
              renderItem={({item, index}) => renderItem(item, index)}
              onEndReached={onLoadMore}
              onEndReachedThreshold={0.5}
              ListFooterComponent={renderFooter}
              onRefresh={onRefresh}
              refreshing={refreshing}
            />
          </View>
          <View style={{...S.itemsCenter}}>
            <ButtonCustom
              title="Đặt câu hỏi cho SVDUHOC.VN"
              action={() => setIsShowModalForm(true)}
              colorButton={color.blue.bold}
              colorTitle={color.white}
              width={widthScreen * 0.6}
            />
          </View>
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
