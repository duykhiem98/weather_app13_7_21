import React, {memo, useCallback} from 'react';
import styled from "styled-components/native";
import {Colors} from "@/themes/Colors";
import {ViewStyle} from "react-native";
import FastImage from "react-native-fast-image";
import {useMyProfile} from "@/store/constant";


const Container = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const BtnComment = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  padding: 0 16px;
  background-color: #EEE;
  border-width: 0.7px;
  border-color: #CECECE;
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
`;

const Avatar = styled(FastImage)`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border-width: 1px;
  border-color: #fff;
  margin-right: 6px;
  background-color: ${p => p.theme.gray5};
`;
const TextItem = styled.Text`
  font-size: 13px;
  color: ${Colors.gray3}
`;

interface Props {
    objectId: string,
    style?: ViewStyle,
    onPressComment?: (id: string) => void
}

export const ButtonReply = memo(function ButtonReply(props: Props) {
    const {objectId, style, onPressComment} = props;


    const onComment = useCallback(() => {
        if (onPressComment) {
            onPressComment(objectId);
            return
        }
    }, [objectId, onPressComment]);

    const myProfile = useMyProfile();
    return (
        <Container style={style}>
            <Avatar source={{uri: myProfile?.avatar || ''}}/>
            <BtnComment onPress={onComment}>
                <TextItem>
                    Viết bình luận
                </TextItem>
            </BtnComment>
        </Container>
    )
});
