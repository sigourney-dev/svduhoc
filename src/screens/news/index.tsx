import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {color, S, TS} from '../../themes';
import {TabHeaderCustom} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import * as postActions from '../../redux/actions';
import {showImage} from '../../utils';
import { useNavigation } from '@react-navigation/native';

export const NewsScreen = (props: any) => {
  const {title, idTitle} = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {postResult, postError} = useSelector((store: any) => store.post);

  const [listPost, setListPost] = useState<any>([]);

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity key={item.id} style={styles.wrapperItem} onPress={() => {
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
      setListPost(postResult.data);
    }
  }, [postResult]);

  return (
    <View style={styles.container}>
      <TabHeaderCustom title={title} isBack />
      <View style={styles.wrapper}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatList}
          data={listPost}
          renderItem={(item: any) => renderItem(item.item)}
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
