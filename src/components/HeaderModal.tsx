import React, {memo, ReactElement} from 'react';
import styled from "styled-components/native";
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors} from "@/themes/Colors";
import {IC_BACK, IC_CLOSE} from "@/assets";
import {goBack} from "@/utils/navigation";
import {TextStyle, ViewStyle} from "react-native";
import {Fonts} from "@/assets/fonts";

const Container = styled.View`
  height: ${getStatusBarHeight() + 56}px;
  background-color: ${Colors.white};
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #DEDEDE;
`;

const Left = styled.TouchableOpacity`
  width: 40px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
`;

const Center = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

const Right = styled.TouchableOpacity`
  width: 80px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
`;

const Icon = styled.Image<{ color?: string }>`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.color || Colors.orange1};
`;

const BannerText = styled.Text`
  font-size: 17px;
  color: ${Colors.gray1};
  font-family: ${Fonts.Medium};
  padding: 0 12px;
`;

interface Props {
    title: string,
    right?: ReactElement,
    center?: ReactElement,
    rightContainerStyle?: ViewStyle,
    containerStyle?: ViewStyle,
    backColor?: string,
    titleStyle?: TextStyle
}

export const HeaderModal = memo(function HomeHeader(props: Props) {
    const {title, right, center, rightContainerStyle, containerStyle, backColor, titleStyle} = props;
    return (
        <Container style={containerStyle}>
            <Center>
                <BannerText
                    numberOfLines={1}
                    style={titleStyle}>
                    {title}
                </BannerText>
            </Center>
            <Right onPress={goBack}>
                <Icon source={IC_CLOSE}/>
            </Right>
        </Container>
    )
});
