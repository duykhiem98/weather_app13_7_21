import React, {memo, useCallback, useEffect, useState} from 'react';
import styled from "styled-components/native";
import {HeaderWrite} from "@/screens/Write/HeaderWrite";
import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {Gray1Icon, IconColor} from "@/components";
import {IC_CAMERA, IC_CLOSE, IC_IMAGE, IC_VIDEO_CAMERA} from "@/assets";
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from "react-native-fast-image";
import {BaseStyles} from "@/themes/BaseStyles";
import {Colors} from "@/themes/Colors";
import SubHeaderWrite from './SubHeaderWrite';
import {useNavigationParams} from "@/hooks/useNavigationParams";

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;

const Input = styled(TextInput).attrs(props => ({
    placeholderTextColor: props.theme.gray3,
}))`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
  color: ${p => p.theme.gray1};
  text-align-vertical: top;
  padding: 12px 16px;
  margin: 0;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  padding-bottom: 12px;
`;

const ImageViewContainer = styled.View`
  height: 100px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const ImageView = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  margin-right: 12px;
`;

const ImageItem = styled(FastImage)`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${Colors.orange1};
`;

const BtnClose = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;
export interface WritePostScreenProps {
    images?: string[],
    videos?: string[]
}

export const WritePostScreen = memo(function WritePostScreen() {
    const {images, videos} = useNavigationParams<WritePostScreenProps>();
    const [stateImages, setStateImages] = useState<string[]>([]);
    const [stateVideos, setStateVideos] = useState<string[]>([]);

    const onImagePicker = useCallback(() => {
        ImagePicker.openPicker({
            multiple: true,
            compressImageQuality: 0.6
        }).then((values) => {
            const urls = values.map(item => item.path);
            setStateImages([...stateImages, ...urls])
        })
    }, [stateImages]);


    const onCameraPicker = useCallback(() => {
        ImagePicker.openCamera({
            mediaType: "photo",
            multiple: true,
            compressImageQuality: 0.6
        }).then(value => {
            setStateImages([...stateImages, value[0].path])
        })
    }, [stateImages]);

    const onVideoPicker = useCallback(() => {
        ImagePicker.openCamera({
            mediaType: "video",
            multiple: true,
            compressImageQuality: 0.6
        }).then(value => {

        })
    }, []);

    useEffect(() => {
        if (images && images.length) {
            setStateImages(images)
        }
    }, [images]);

    useEffect(() => {
        if (videos && videos.length) {
            setStateVideos(videos)
        }
    }, [videos]);

    return (
        <Container>
            <HeaderWrite />
            <SubHeaderWrite />
            <Container>
                <Input
                    multiline={true}
                    autoFocus={true}
                    placeholderTextColor={''}
                    placeholder={'Bạn đang nghĩ gì ... '}
                />
                <ImageViewContainer>
                    <ScrollView
                        contentContainerStyle={BaseStyles.pl16}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            stateImages.map(item => <ImageView>
                                <BtnClose>
                                    <IconColor size={16} color={Colors.white}  source={IC_CLOSE}/>
                                </BtnClose>
                                <ImageItem source={{uri: item}}/>
                            </ImageView>)
                        }
                    </ScrollView>
                </ImageViewContainer>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <Row>
                        <TouchableOpacity onPress={onImagePicker}>
                            <Gray1Icon source={IC_IMAGE} style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onCameraPicker}>
                            <Gray1Icon source={IC_CAMERA} style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onVideoPicker}>
                            <Gray1Icon source={IC_VIDEO_CAMERA} style={styles.icon}/>
                        </TouchableOpacity>
                    </Row>
                </KeyboardAvoidingView>
            </Container>
        </Container>
    )
});

const styles = StyleSheet.create({
    icon: {
        marginRight: 16
    }
});
