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
import {useNavigation} from '@react-navigation/native';
import {ToastService} from '../../services/toast/toast-service';
import {showImage} from '../../utils';

export const AbroadScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {listAbroadResult, listAbroadError} = useSelector(
    (store: any) => store.abroad,
  );

  const [abroadList, setAbroadList] = useState<any>([]);
  const [lastId, setLastId] = useState<any>('');
  const existingIds = useRef<Set<string>>(new Set());

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
        return <ActivityIndicator size={'small'} color={color.blue.bold} />;
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

  const renderItem = (item: any, index: any) => {
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
        <Image style={styles.image} source={{uri: showImage(item.imagePath)}} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TabHeaderCustom title={'Du học'} />
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatList}
          data={abroadList}
          renderItem={({item, index}) => renderItem(item, index)}
          onEndReached={onLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
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
    height: '89%',
  },
  wrapper: {
    marginBottom: 8,
  },
  wrapperItem: {
    ...S.flexRow,
    ...S.itemsCenter,
    borderWidth: 1,
    borderColor: color.white,
    borderRadius: 12,
    marginTop: 8,
    marginHorizontal: 12,
    backgroundColor: color.white,
  },
  image: {
    ...S.flex1,
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 4,
    resizeMode: 'contain',
  },
});
