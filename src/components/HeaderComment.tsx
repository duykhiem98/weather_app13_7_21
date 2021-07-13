import React, {memo, ReactElement} from 'react';
import styled from "styled-components/native";
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors} from "@/themes/Colors";
import {IC_BACK} from "@/assets";
import {goBack} from "@/utils/navigation";
import {TextStyle, View, ViewStyle} from "react-native";
import {Fonts} from "@/assets/fonts";
import FastImage from "react-native-fast-image";

const Container = styled.View`
  height: ${getStatusBarHeight() + 64}px;
  background-color: ${p => p.theme.backgroundColor};
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  padding-bottom: 8px;
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
  padding-right: 20px;
`;

const Right = styled.View`
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
  tint-color: ${p => p.theme.gray1};
`;

const BannerText = styled.Text`
  font-size: 15px;
  line-height: 20px;
  color: ${p => p.theme.gray1};
  font-family: ${Fonts.Medium};
  padding: 0 12px;
`;

const Description = styled.Text`
  font-size: 12px;
  color: ${p => p.theme.gray4};
  padding: 2px 12px 0;
`;

const RowHeader = styled.View`
  flex-direction: row;
  padding: 0 12px
`;

const Avatar = styled(FastImage)`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${p => p.theme.gray5};
  border-width: 0.7px;
  border-color: ${p => p.theme.gray5};
`;

interface Props {
    avatar: string,
    title: string,
    description: string,
    containerStyle?: ViewStyle,
    backColor?: string
}

export const HeaderComment = memo(function HeaderComment(props: Props) {
    const {avatar, title, description, containerStyle, backColor} = props;

    return (
        <Container style={containerStyle}>
            <Left onPress={goBack}>
                <Icon source={IC_BACK} color={backColor}/>
            </Left>
            <Center>
                <RowHeader>
                    <Avatar source={{uri: avatar || ''}}/>
                    <View>
                        <BannerText numberOfLines={2}>
                            {title}
                        </BannerText>
                        <Description>
                            {description}
                        </Description>
                    </View>
                </RowHeader>
            </Center>
        </Container>
    )
});
