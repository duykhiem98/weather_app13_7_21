import React, {Component, memo, useState} from 'react'
import {AppRegistry, Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import Swiper from 'react-native-swiper'
import {BaseStyles} from "@/themes/BaseStyles";
import styled from "styled-components/native";
import FastImage from "react-native-fast-image";
import useBoolean from "@/hooks/useBoolean";
import PhotoViewModal from "@/components/PhotoView/PhotoViewModal";

const {width} = Dimensions.get("window");
const ItemWidth = width;
const ItemHeight = 9 / 16 * ItemWidth;

const Container = styled.View`
  width: ${ItemWidth}px;
  height: ${ItemHeight}px;
`;

const Image = styled(FastImage)`
  width: ${ItemWidth}px;
  height: ${ItemHeight}px;  
`;
const styles = StyleSheet.create({
    wrapper: {
        width: ItemWidth,
        height: ItemHeight
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

interface Props {
    images: string[]
}

export const SwiperComponent = memo(function (props: Props) {
    const {images} = props;
    const [visibleImage, showImage, hideImage] = useBoolean(false);

    return (
        <Container>
            <Swiper
                showsButtons={false}>
                {
                    images.map(item => {
                        return (
                            <TouchableOpacity
                                onPress={showImage}
                                activeOpacity={9}
                                style={BaseStyles.flex1}>
                                <Image source={{uri: item}} />
                            </TouchableOpacity>
                        )
                    })
                }
            </Swiper>
            <PhotoViewModal
                initialIndex={0}
                images={images}
                isVisible={visibleImage}
                onCloseRequest={hideImage}
            />
        </Container>
    )
});
