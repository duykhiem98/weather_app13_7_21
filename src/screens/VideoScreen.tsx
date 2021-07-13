import React, {memo, useCallback} from 'react';
import styled from 'styled-components/native';
import {Colors} from '@/themes/Colors';
import {Animated, StyleSheet} from 'react-native';
import {useNavigationParams} from '@/hooks/useNavigationParams';
import {getStatusBarHeight} from "react-native-status-bar-height";
import {IC_CLOSE} from "@/assets";
import {useNavigation} from "@/global";
import Video from "react-native-video";

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.black};
  align-items: center;
  justify-content: center;
`;

const BtnClose = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: ${getStatusBarHeight() + 36}px;
  width: 30px;
  height: 30px;
  align-items: flex-end;
  z-index: 1;
`;

const IconClose = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${Colors.white}
`;

export interface VideoScreenProps {
    url: string;
}

export const VideoScreen = memo(function VideoScreen() {
    const {url} = useNavigationParams<VideoScreenProps>();
    const navigation = useNavigation()
    const onClose = useCallback(() => {
        navigation.goBack()
    }, []);

    return (
        <Container>
            <BtnClose onPress={onClose}>
                <IconClose source={IC_CLOSE}/>
            </BtnClose>
            <Video source={{uri: url}}   // Can be a URL or a local file.
                   controls={true}
                   resizeMode={"contain"}
                   style={styles.backgroundVideo}/>
        </Container>
    );
});

let styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignContent: 'center',
        justifyContent: 'center'
    },
});
