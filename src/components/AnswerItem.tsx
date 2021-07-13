import React, {memo, useMemo, useState} from 'react';
import styled from "styled-components/native";
import {Dimensions, TouchableOpacity, View} from "react-native";
import FastImage from "react-native-fast-image";
import {Colors} from "@/themes/Colors";
import {Fonts} from "@/assets/fonts";
import {useComment} from "@/store/comment";
import moment from "moment";
import {useMyProfile} from "@/store/constant";
import {Divider} from "@/components/index";
import {BaseStyles} from "@/themes/BaseStyles";
import {IMG_DEFAULT_AVATAR} from "@/assets";
import PhotoViewModal from "@/components/PhotoView/PhotoViewModal";
import useBoolean from "@/hooks/useBoolean";

const {width, height} = Dimensions.get("window");
const ItemWidth = width - 32;
const ItemHeight = 9 / 16 * ItemWidth;
const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 16px 0;
`;

const RowAnswer = styled.View`
    flex-direction: row;
`;

const Avatar = styled(FastImage)`
  height: 24px;
  width: 24px;
  border-radius: 32px;
  border-width: 1px;
  border-color: ${Colors.orange3};
  margin-top: 4px;
`;

const NameDoctor = styled.Text`
  font-size: 15px;
  font-family: ${Fonts.Medium};
  color: ${Colors.backgroundColor};
`;


const Content = styled.Text`
  font-size: 13px;
  color: ${Colors.gray3};
  padding-top: 6px;
`;


const Time = styled.Text`
  font-size: 11px;
  color: ${Colors.gray5};
  padding-top: 3px;
`;

const ImageBg = styled(FastImage)`
  width: ${ItemWidth - 40}px;
  height: ${ItemHeight}px;
  margin-top: 8px;
  border-radius: 12px;
`;
const RemainingView = styled.View`
    flex: 1;
    padding-left: 12px;
`;

interface Props {
    commentId: string
}

export const AnswerItem = memo(function AnswerItem(props: Props) {
    const {commentId} = props;
    const comment = useComment(commentId || '');
    const [visibleImage, showVisible, hideVisibleImage] = useBoolean(false);
    const [currentUrl, setCurrentUrl] = useState('');
    const images = useMemo(() => {
        const contentMedia: { type: string, url: string }[] = JSON.parse(comment?.contentMedia || '[]');
        return contentMedia.filter(item => item.type === 'image').map(item => item.url)
    }, []);

    if (!comment) {
        return null
    }
    return (
        <Container>
            <RowAnswer>
                <Avatar source={comment?.avatar ? {uri: comment?.avatar || ''} : IMG_DEFAULT_AVATAR}/>
                <RemainingView>
                    <NameDoctor>
                        {comment?.name || 'Ẩn danh'}
                    </NameDoctor>
                    <Time>
                        {moment(comment.createdTime).format('HH:mm DD/MM/YYYY')}
                    </Time>
                    <Content>
                        {comment.content || ''}
                    </Content>
                    <View>
                        {
                            images.map(item => <TouchableOpacity
                                onPress={() => {
                                    setCurrentUrl(item);
                                    showVisible();
                                }}
                                key={item.toString()}>
                                <ImageBg source={{uri: item}}/>
                            </TouchableOpacity>)
                        }
                    </View>
                    <Divider style={BaseStyles.mt12}/>
                </RemainingView>
            </RowAnswer>

            <PhotoViewModal
                isVisible={visibleImage}
                onCloseRequest={hideVisibleImage}
                images={[currentUrl]}
                initialIndex={0}
            />
        </Container>
    )
});
