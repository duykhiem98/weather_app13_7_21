import React, {memo, useCallback} from 'react';
import styled from "styled-components/native";
import {Animated} from "react-native";
import {openEditorModal} from "@/utils/navigation";

const Container = styled.View`
  width: 100%;
  height: 90px;
  padding-top: 12px
`;

const ContentContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
  border-radius: 12px;
  background-color: #eee;
  width: 100%;
  height: 100%;
  padding: 12px;
`;

const TextBlog = styled.Text`
  color: #989898;
  font-size: 13px;
`;
interface Props {
    animated?: typeof Animated
}
export const SectionWriteBlog = memo(function SectionWriteBlog(props: Props) {

    // const diffClampScrollY = Animated.diffClamp(scrollY, 0, height);
    // const headerHeight = diffClampScrollY.interpolate({
    //      inputRange: [0, 50],
    //      outputRange: [-50, 0],
    //      extrapolate: 'clamp'
    // })
    const openEditor = useCallback(() => {
        openEditorModal({
            onUpdate: () => {},
            value: "",
            title: "Viết nhật ký"
        })
    },[]);

    return (
        <Container >
            <ContentContainer onPress={openEditor}>
                <TextBlog>
                    Viết nhật ký
                </TextBlog>
            </ContentContainer>
        </Container>
    )
});
