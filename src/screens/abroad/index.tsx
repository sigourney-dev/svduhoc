import React, {useState, useEffect, useCallback, useMemo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {TabHeaderCustom} from '../../components/tab-header-custom';
import {S, TS, color} from '../../themes';
import {useDispatch, useSelector} from 'react-redux';
import * as abroadActions from '../../redux/actions';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {ToastService} from '../../services/toast/toast-service';
import {showImage, Utils} from '../../utils';

export const AbroadScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const {listAbroadResult, listAbroadError} = useSelector(
    (store: any) => store.abroad,
  );

  const [abroadList, setAbroadList] = useState<any>([]);
  const [lastId, setLastId] = useState<any>('');
  const existingIds = useRef<Set<string>>(new Set());
  const [refreshing, setRefreshing] = useState(false);

  const onLoadMore = useCallback(() => {
    if (lastId !== '') {
      dispatch(
        abroadActions.getListAbroadRequest({
          pageSize: 10,
          after: lastId,
        }),
      );
    }
  }, [lastId]);

  const renderFooter = useMemo(() => {
    if (listAbroadResult) {
      if (listAbroadResult.hasNext) {
        return <ActivityIndicator size={'small'} color={color.green.bold} />;
      } else {
        return (
          <View style={{...S.itemsCenter, marginVertical: 8}}>
            <Text style={{...TS.textXsThin}}>Không còn bài viết</Text>
          </View>
        );
      }
    } else return null;
  }, [listAbroadResult]);

  useEffect(() => {
    if (abroadList.length === 0) {
      dispatch(
        abroadActions.getListAbroadRequest({
          pageSize: 10,
        }),
      );
    }
  }, []);

  useEffect(() => {
    if (listAbroadResult && listAbroadResult.data.length !== 0) {
      const newAbroadList = listAbroadResult.data.filter(
        (item: any) => !existingIds.current.has(item.id),
      );
      setAbroadList((prevList: any) => [...prevList, ...newAbroadList]);
      newAbroadList.forEach((item: any) => existingIds.current.add(item.id));
      if (listAbroadResult.hasNext) {
        setLastId(listAbroadResult.data[listAbroadResult.data.length - 1].id);
      } else {
        setLastId('');
      }
    } else if (listAbroadError) {
      ToastService.showError(listAbroadError);
    }
  }, [listAbroadResult]);

  const onRefresh = () => {
    setRefreshing(true);
    setAbroadList([]);
    setLastId('');
    existingIds.current.clear();
    dispatch(
      abroadActions.getListAbroadRequest({
        pageSize: 10,
      }),
    );
    setRefreshing(false);
  };

  const renderItem = (item: any, index: any) => {
    if (item.status === 'ACTIVE') {
      return (
        <TouchableOpacity
          style={styles.wrapperItem}
          key={index}
          onPress={() => {
            // @ts-ignore
            navigation.navigate('DetailNewsScreen', {
              idPost: item.id,
              type: 'ABROAD',
            });
          }}>
          <View style={{padding: 8, flex: 2}}>
            <Text
              style={{
                ...TS.textSmSemiBold,
                textTransform: 'uppercase',
                textAlign: 'left',
              }}>
              {item.title}
            </Text>
          </View>
          <Image
            style={styles.image}
            source={{uri: showImage(item.imagePath)}}
          />
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <TabHeaderCustom title={'Tin du học'} />
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatList}
          data={abroadList}
          renderItem={({item, index}) => renderItem(item, index)}
          onEndReached={onLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.flex1,
    backgroundColor: color.grey.light,
  },
  flatList: {
    height: Utils.isIOS() ? '89%' : '92%',
  },
  wrapper: {
    marginBottom: 8,
  },
  wrapperItem: {
    ...S.flexRow,
    ...S.itemsCenter,
    marginTop: 8,
    paddingHorizontal: 12,
    backgroundColor: color.white,
  },
  image: {
    width: 160,
    height: 120,
    borderRadius: 16,
    marginRight: 4,
    resizeMode: 'contain',
  },
});
