import * as React from 'react';
import {memo} from 'react';
import {Image, ImageProps} from 'react-native';
import styled from "styled-components/native";

const Img = styled.Image`
`;

const ImgAbsolute = styled.Image`
  position: absolute;
  z-index: -1;
`;

export const BgTabBarIcon = memo(function BgTabBar(props: ImageProps) {
    return (
        <>
            <Img width={375} height={56} {...props} />
            <ImgAbsolute width={375} height={56} {...props} />
        </>
    );
});
