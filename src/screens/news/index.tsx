import React, {useState, useEffect, useMemo, useCallback, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {color, S, TS} from '../../themes';
import {TabHeaderCustom} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import * as postActions from '../../redux/actions';
import {showImage} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {ToastService} from '../../services/toast/toast-service';

export const NewsScreen = (props: any) => {
  const {title, idTitle} = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {postResult, postError} = useSelector((store: any) => store.post);

  const [listPost, setListPost] = useState<any>([]);
  const [lastId, setLastId] = useState<any>('');
  const existingIds = useRef<Set<string>>(new Set());
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.wrapperItem}
        onPress={() => {
          // @ts-ignore
          navigation.navigate('DetailNewsScreen', {idPost: item.id});
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

  const onLoadMore = useCallback(() => {
    if (lastId !== '') {
      console.log('lastId', lastId);
      dispatch(
        postActions.getListPostsRequest({
          categories: [idTitle],
          pageSize: 10,
          after: lastId,
        }),
      );
    }
  }, [lastId]);

  const onRefresh = () => {
    setRefreshing(true);
    setListPost([]);
    setLastId('');
    existingIds.current.clear();
    dispatch(
      postActions.getListPostsRequest({
        categories: [idTitle],
        pageSize: 10,
      }),
    );
    setRefreshing(false);
  };

  const renderFooter = useMemo(() => {
    if (postResult) {
      if (postResult.hasNext) {
        return <ActivityIndicator size={'small'} color={color.blue.bold} />;
      } else {
        return (
          <View style={{...S.itemsCenter, marginVertical: 8}}>
            <Text style={{...TS.textXsThin}}>Không còn bài viết</Text>
          </View>
        );
      }
    } else return null;
  }, [postResult]);

  useEffect(() => {
    dispatch(
      postActions.getListPostsRequest({
        categories: [idTitle],
        pageSize: 10,
      }),
    );
  }, [idTitle]);

  useEffect(() => {
    if (postResult) {
      const newPosts = postResult.data.filter(
        (item: any) => !existingIds.current.has(item.id),
      );
      setListPost((prevList: any) => [...prevList, ...newPosts]);
      newPosts.forEach((item: any) => existingIds.current.add(item.id));
      if (postResult.hasNext) {
        setLastId(postResult.data[postResult.data.length - 1].id);
      } else {
        setLastId('');
      }
    } else if (postError) {
      ToastService.showError(postError);
    }
  }, [postResult, idTitle]);
  return (
    <View style={styles.container}>
      <TabHeaderCustom title={title} isBack />
      <View style={styles.wrapper}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatList}
          data={listPost}
          renderItem={(item: any) => renderItem(item.item)}
          onEndReached={onLoadMore}
          onEndReachedThreshold={0.1}
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
    color: color.white,
  },
  flatList: {
    height: '89%',
  },
  wrapper: {
    // marginHorizontal: 12,
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
  },
});
