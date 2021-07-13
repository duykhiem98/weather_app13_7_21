import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import styled from "styled-components/native";
import FastImage from "react-native-fast-image";
import {Colors} from "@/themes/Colors";
import {Fonts} from "@/assets/fonts";
import {BaseStyles} from "@/themes/BaseStyles";
import {IC_CLOSE, IC_PLUS} from "@/assets";
import useBoolean from "@/hooks/useBoolean";
import {
    ActivityIndicator,
    InteractionManager,
    Keyboard,
    PermissionsAndroid,
    ScrollView,
    TextInput,
    View
} from "react-native";
import {
    BottomMenuContainer,
    BottomMenuHeader,
    BottomMenuModal,
    SelectorItem,
    UNIQUE_STRING
} from "@/components/BottomMenu";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useMyProfile} from "@/store/constant";
import {useAsyncFn} from "@/hooks/useAsyncFn";
import {requestUpdateComment} from "@/store/comment/functions";
import {requestUploadFile, requestUploadImage} from "@/store/constant/functions";
import ToastService from "@/services/ToastService";

const Container = styled.View`
  width: 100%;
  background-color: ${Colors.white};
  padding: 4px 16px;
  border-top-width: 1px;
  border-top-color: ${Colors.gray6};
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const BtnUploadImage = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${Colors.backgroundColor};
  border-radius: 20px;
`;

const RowAnswer = styled.View`
    flex-direction: row;
    align-items: center;
    padding:  6px 0;
`;

const Avatar = styled(FastImage)`
  height: 24px;
  width: 24px;
  border-radius: 32px;
  border-width: 1px;
  border-color: ${Colors.orange3};
`;

const NameDoctor = styled.Text`
  font-size: 15px;
  font-family: ${Fonts.Medium};
  color: ${Colors.backgroundColor};
  padding-left: 8px;
`;

const Input = styled.TextInput`
  width: 100%;
  min-height: 32px;
  padding: 0;
  margin: 0 0 12px;
  font-family: ${Fonts.NunitoLight};
`;

const Btn = styled.TouchableOpacity`
  margin: 12px 0;
  height: 36px;
  border-radius: 4px;
  background-color: ${Colors.orange3};
  align-items: center;
  justify-content: center;
`;

const BtnText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${Colors.backgroundColor}
`;
const BtnModalPick = styled.TouchableOpacity`
  width: 100%;
  height: 44px;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

const BtnModalText = styled.Text`
  font-size: 15px;
  color: ${Colors.gray1};
  width: 100%;
`;

const ImagePost = styled(FastImage)`
  height: 48px;
  width: 48px;
  border-radius: 12px;
`;

const ViewImageUpload = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 12px;
  border-width: 1px;
  border-color: #ff8030;
`;

const BtnClose = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  z-index: 1;
  align-items: flex-end;
`;
const IconClose = styled.Image`
  width: 12px;
  height: 12px;
  tint-color: #fff;
  margin-top: 2px;
  margin-right: 2px;
`;

interface Props {
    autoFocus?: boolean,
    objectId: string,
    onAddComment: (id: string) => void
}

export const InputTextAnswer = memo(function InputTextAnswer(props: Props) {
    const {autoFocus, onAddComment, objectId} = props;
    const inputRef = useRef<TextInput>(null);
    const [visible, showPicker, hidePicker] = useBoolean(false);
    const [isFocus, setFocus, setUnFocus] = useBoolean(false);
    const [text, setText] = useState('');
    const [images, setImages] = useState<string[]>([]);
    const myProfile = useMyProfile();
    useEffect(() => {
        if (autoFocus) {
            setTimeout(() => {
                inputRef && inputRef.current && inputRef.current.focus();
                setFocus()
            }, 1000)
        }
    }, [autoFocus]);

    const onShowCb = useCallback(() => {
        Keyboard.dismiss();
        inputRef && inputRef.current && inputRef.current.blur();
        InteractionManager.runAfterInteractions(() => {
            setTimeout(() => {
                showPicker()
            }, 500)
        });
    }, []);

    const onHideCb = useCallback(() => {
        hidePicker();
        InteractionManager.runAfterInteractions(() => {
            setTimeout(() => {
                inputRef && inputRef.current && inputRef.current.focus();
            });
        });
    }, []);

    const requestCameraPermission = useCallback(async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Quyền truy cập máy ảnh",
                    message: "Ứng dụng cần cho phép truy cập máy ảnh ",
                    buttonNeutral: "Hỏi lại sau",
                    buttonNegative: "Từ chối",
                    buttonPositive: "Xác nhận"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
                return true
            } else {
                console.log("Camera permission denied");
                return false
            }
        } catch (err) {
            console.warn(err);
            return false
        }
    }, []);

    const onPickerImage = useCallback(() => {
        launchImageLibrary({
            mediaType: "photo",
            quality: 0.6,
            includeBase64: true
        }, (response) => {
            if (response && response.base64) {
                // @ts-ignore
                setImages([response.base64, ...images]);
                onHideCb();
            }
        })
    }, [images]);

    const onCamera = useCallback(() => {
        requestCameraPermission().then((per) => {
            if (per) {
                launchCamera({
                    mediaType: "photo",
                    quality: 0.6,
                    includeBase64: true
                }, (res) => {
                    if (res && res.base64) {
                        // @ts-ignore
                        setImages([res.base64, ...images]);
                        onHideCb();
                    }
                })
            }
        });
    }, [images]);

    const [{loading}, onComment] = useAsyncFn(async () => {
        let listImg: { type: string, url: string, }[] = [];
        const data = {
            content: text,
            contentDelta: '',
            contentMedia: '',
            id: 0,
            markDeleted: 0,
            objectId: objectId,
            userId: myProfile.id
        };

        if (!text.trim()) {
            ToastService.showError('Vui lòng nhập gì đó.');
            return
        }

        if (images) {
            for (let image of images) {
                const res = await requestUploadImage({data: image});
                if (res) {
                    listImg.push({url: res, type: 'image'})
                }
            }
        }

        setImages([]);
        data['contentMedia'] = JSON.stringify(listImg);

        const res = await requestUpdateComment(data);
        if (res) {
            Keyboard.dismiss();
            setText('');
            setImages([]);
            onAddComment(res)
        }
    }, [myProfile, text, images, objectId]);
    const onRemoveImage = useCallback((_index: number) => {
        const _images = [...images].splice(_index, 1);
        setImages(_images)
    }, [images]);
    return (
        <Container style={BaseStyles.viewShadow}>
            <RowAnswer>
                <Row>
                    <Avatar source={{uri: myProfile?.avatar || ''}}/>
                    <NameDoctor>
                        {myProfile?.name || ''}
                    </NameDoctor>
                </Row>
                <BtnUploadImage onPress={onShowCb}>
                    <Icon source={IC_PLUS}/>
                </BtnUploadImage>
            </RowAnswer>
            <Input
                ref={inputRef}
                autoFocus={isFocus}
                value={text}
                onChangeText={setText}
                onFocus={setFocus}
                onBlur={setUnFocus}
                placeholder={'Viết gì đó '}
                multiline={true}
            />
            {
                images && images.length
                    ? <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            images.map((item, index) => {
                                return (
                                    <ViewImageUpload>
                                        <BtnClose onPress={() => {
                                            onRemoveImage(index)
                                        }}>
                                            <IconClose source={IC_CLOSE}/>
                                        </BtnClose>
                                        <ImagePost source={{uri: "data:image/jpeg;base64," + item}}/>

                                    </ViewImageUpload>
                                )
                            })
                        }
                    </ScrollView>
                    : null
            }
            {
                isFocus
                    ? <Btn onPress={loading ? undefined : onComment}>
                        {
                            loading
                                ? <ActivityIndicator color={'#fff'}/>
                                : <BtnText>Đăng</BtnText>
                        }
                    </Btn>
                    : null
            }
            <BottomMenuModal
                isVisible={visible}
                onClose={onHideCb}
                propagateSwipe={true}>
                <BottomMenuContainer>
                    <BottomMenuHeader title={'Đăng hình ảnh'} onClose={hidePicker}/>
                    <View>
                        <BtnModalPick onPress={onPickerImage}>
                            <BtnModalText>
                                Chọn ảnh từ thư viện
                            </BtnModalText>
                        </BtnModalPick>
                        <BtnModalPick onPress={onCamera}>
                            <BtnModalText>
                                Chụp ảnh
                            </BtnModalText>
                        </BtnModalPick>
                        <BtnModalPick onPress={onHideCb}>
                            <BtnModalText>
                                Hủy
                            </BtnModalText>
                        </BtnModalPick>
                    </View>
                </BottomMenuContainer>
            </BottomMenuModal>
        </Container>
    )
});
