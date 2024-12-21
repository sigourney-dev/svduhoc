import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {TabHeaderCustom} from '../../components/tab-header-custom';
import {S, TS, color} from '../../themes';
import {images} from '../../enums/images';

export const AbroadScreen = () => {
  const list = [
    {
      id: 1,
      image: images.lb1,
      title: '[2024] ĐIỀU KIỆN DU HỌC NHẬT BẢN CẦN NHỮNG GÌ',
      description:
        'Điều kiện du học Nhật Bản 2024 sẽ có sự khác nhau giữa các chương trình đào tạo. Bạn cần xác định bản thân sẽ đi du học ở bậc học nào để chuẩn bị cho tốt những điều kiện cơ bản dưới đây.Nếu bạn đang có ý định đi du học...',
    },
    {
      id: 2,
      image: images.lb2,
      title: 'CHƯƠNG TRÌNH THỰC TẬP HƯỞNG LƯƠNG TẠI CHÂU ÂU',
      description:
        'Thực tập hưởng lương tại Châu Âu là một chương trình mới với vô vàn lợi ích cho sinh viên Việt Nam nhằm phát triển bản thân và nâng cao kiến thức, kỹ năngĐức, Hà Lan, Na uy  và Thụy Điển là 4 quốc gia ở Châu Âu có nhiều...',
    },
    {
      id: 3,
      image: images.lb3,
      title: 'THỰC TẬP HƯỞNG LƯƠNG TẠI MỸ - CHƯƠNG TRÌNH DU HỌC HOT NHẤT 2024',
      description:
        'Chương trình du học nghề/ thực tập hưởng lương tại Mỹ này cung cấp cơ hội cho bạn trẻ Việt Nam để trải nghiệm văn hóa, tích lũy kinh nghiệm thực tập thông qua các khóa học nghề trong các lĩnh vực như: nông nghiệp, lâm...',
    },
    {
      id: 4,
      image: images.lb4,
      title: 'DU HỌC ÚC - ĐIỀU KIỆN - CHI PHÍ CHƯƠNG TRÌNH DU HỌC ÚC',
      description:
        'Du học Úc dần trở thành xu hướng lựa chọn của những bạn trẻ khát khao được vươn ra thế giới để học hỏi những điều mới lạ, đó cũng là lựa chọn của những gia đình mong muốn con em mình được hưởng nền giáo dục tiên...',
    },
    {
      id: 5,
      image: images.lb5,
      title: 'Du Học Hàn Quốc',
      description:
        'Điều kiện để Du Học Hàn Quốc là gì ? Chắc hản nhiều bạn mong muốn tìm hiểu về du học cũng đều rất thắc mắc để có thể chuẩn bị thất kỹ hành trang du học của mình. Qua bài viết này SVDUHOC.VN sẽ giúp bạn giải đáp thắc mắc về',
    },
    {
      id: 6,
      image: images.lb6,
      title: 'Du học Nhật Bản - Những điều cần biết',
      description:
        'Du học Nhật Bản là chương trình sang học tập tại các trường đào tạo tại Nhật Bản. Với điểm mạnh là hệ thống giáo dục toàn diện, cũng như đãi ngộ cực tốt nếu được làm việc tại Nhật sau khi ra trường. Nhiều bạn trẻ quyết',
    },
    {
      id: 7,
      image: images.lb7,
      title: 'DU HỌC NGHỀ ĐỨC - MIỄN PHÍ 100% HỌC PHÍ',
      description: '',
    },
    {
      id: 8,
      image: images.lb8,
      title: 'TUYỂN SINH DU HỌC HÀN QUỐC',
      description:
        'Với hơn 7 năm kinh nghiệm trong lĩnh vực đào tạo du học, Trung Tâm Du Học Quốc Tế SVDUHOC.VN thuộc CTY Cổ Phần Đầu tư và Phát Triển Thương mại SVDUHOC.VN vinh dự góp mặt là một trong những doanh nghiệp xuất sắc với hơn',
    },
  ];

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity style={styles.wrapperItem}>
        <View style={{padding: 8, flex: 2}}>
          <Text
            style={{
              ...TS.textSmSemiBold,
              textTransform: 'uppercase',
              textAlign: 'left',
            }}>
            {item.title}
          </Text>
          <Text style={{...TS.textXsMediumWrapper, color: color.grey.bold}}>
            {item.description}
          </Text>
        </View>
        <Image style={styles.image} source={item.image} />
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
          data={list}
          renderItem={(item: any) => renderItem(item.item)}
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
    height: '90%',
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
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: color.white,
  },
  image: {
    ...S.flex1,
    width: 120,
    height: 120,
    borderRadius: 12,
    borderBottomWidth: 1,
    borderColor: color.blue.bold,
    marginRight: 4,
  },
});
