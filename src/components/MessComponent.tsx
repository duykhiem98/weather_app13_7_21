import React, {memo} from "react";
import styled from "styled-components/native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import FastImage from "react-native-fast-image";
import {
    IC_DANHBA,
    IC_HOME_SEARCH,
    IC_MENU,
    IC_PLUS,
    IC_VIDEO_CAMERA,
    IMG_LOGO_APP,
    IMG_PHOTOS
} from "@/assets";
import {TextInput, View, Image, FlatList, StyleSheet} from "react-native";
import {Colors} from "@/themes/Colors";
import {Fonts} from "@/assets/fonts";

const DATA = [
    {
        id: "1",
        Name: "Friends",
        image: "https://png.pngtree.com/png-clipart/20190906/original/pngtree-address-book-icon-png-image_4564826.jpg"
    },
    {
        id: "2",
        Name: "Sơn Tùng MTP",
        image: "https://yt3.ggpht.com/ytc/AAUvwniNNRXsKcsAunIOF31uQCGXMaxGrK5m3Kjj_T9cMg=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: "3",
        Name: "Hiền Hồ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQMdxnAjxC2w4Tfn3JtOhtANgl0NdgBhaSA&usqp=CAU"
    },
    {
        id: "4",
        Name: "Ning Dương Lan Ngọc",
        image: "https://dep.com.vn/wp-content/uploads/2021/03/ELASTEN-1.jpg"
    },
    {
        id: "5",
        Name: "Linh 14 tỏi",
        image: "https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2021/5/22/photo1621685160841-16216851612101161903727.jpg"
    },
    {
        id: "6",
        Name: "Noo Phước Thịnh",
        image: "https://vtv1.mediacdn.vn/thumb_w/650/2019/7/18/12654602101538696692846753128890951271157684n-1563420062461130424819-crop-15634200735851613593101.jpg"
    }
];

const Container = styled.View`
  background: ${p => p.theme.backgroundColor};
`;
const Row = styled.View`
  padding-top: 12px;
`;
const Row2 = styled.View`
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

`;
const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: ${60 / 2}px;
`;
const TextMind = styled.Text`
  padding-left: 12px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.gray1};
  font-family: ${Fonts.Medium};
`;
const ButtonIcon = styled.TouchableOpacity`
  padding-right: 16px;
  padding-bottom: 18px;
  width: 85px;
  padding-left: 16px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color:  ${Colors.gray3};

`;
const Name = styled.Text`
  padding-top: 15px;
  font-family: ${Fonts.Medium};
  font-size: 10px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.gray1};
  text-align: center;
`;

const Item = ({item, index}: any) => {
    return (
        <ButtonIcon>
            <Row2>
                <Avatar source={{uri: item.image}}/>
                <Name numberOfLines={2}>{item.Name}</Name>
            </Row2>
        </ButtonIcon>


    );
};
export const MessComponent = memo(function MessComponent() {
    const renderItem = ({item}: any) => {
        return (
            <Item
                item={item}
            />
        );
    };
    return (
        <Container>
            <Row>
                <TextMind>Friends</TextMind>
            </Row>
            <View style={{height: 150, width: "100%"}}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    horizontal={true}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

            </View>
            <View style={{paddingTop: 12, paddingBottom: 10}}>
                <TextMind>Conversations</TextMind>
            </View>
        </Container>
    );
});
