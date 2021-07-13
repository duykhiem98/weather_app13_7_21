import React, {memo, useCallback} from 'react';
import styled from "styled-components/native";
import {IC_COMMENT, IC_LIKE, IC_LOVE, IC_SHARE} from "@/assets";
import {Fonts} from "@/assets/fonts";
import {Colors} from "@/themes/Colors";
import {openCommentScreen} from "@/utils/navigation";
import {ShareModal} from "@/components/ShareModal";
import useBoolean from "@/hooks/useBoolean";

const Container = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  border-top-width: 1px;
  border-top-color: ${p => p.theme.divider};
`;

const IconAction = styled.Image<{ liked?: boolean }>`
  width: 20px;
  height: 20px;
  tint-color: ${p => p.liked ? Colors.red0 : p.theme.gray1}
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const ButtonText = styled.Text<{ isLiked?: boolean }>`
  font-size: 13px;
  color: ${p => p.isLiked ? Colors.red0 : p.theme.gray1};
  font-family: ${Fonts.Medium};
  padding-left: 6px;
`;

interface Props {
    isLiked?: boolean,
    onLikePress?: () => void
}

export const EmotionComponent = memo(function EmotionComponent(props: Props) {
    const {isLiked, onLikePress} = props;
    const [isVisible, showShare, hideShare] = useBoolean(false);

    const openCommentModal = useCallback(() => {
        openCommentScreen({id: '1'})
    }, []);

    return (
        <>
            <Container>
                <Button onPress={onLikePress}>
                    <IconAction liked={isLiked} source={IC_LIKE}/>
                    <ButtonText isLiked={isLiked}>
                        Thích
                    </ButtonText>
                </Button>
                <Button onPress={openCommentModal}>
                    <IconAction source={IC_COMMENT}/>
                    <ButtonText>
                        Bình luận
                    </ButtonText>
                </Button>
                <Button onPress={showShare}>
                    <IconAction source={IC_SHARE}/>
                    <ButtonText>
                        Chia sẻ
                    </ButtonText>
                </Button>
            </Container>
            <ShareModal isVisible={isVisible} onClose={hideShare}/>
        </>
    )
});
