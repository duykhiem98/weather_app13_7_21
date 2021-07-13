import React, {memo} from 'react';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Fonts} from '@/assets/fonts';
import {Gray1Icon} from '@/components';
import {IC_CLOSE} from '@/assets';
import {goBack} from '@/utils/navigation';

const Header = styled.View`
    height: ${56 + getStatusBarHeight()}px;
    padding-top: ${getStatusBarHeight()}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom-width: 0.7px;
    border-bottom-color: ${(p) => p.theme.gray5};
`;

const Left = styled.TouchableOpacity`
    width: 50px;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const Center = styled.View`
    flex: 1;
    align-items: center;
`;

const Right = styled.View`
    width: 60px;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const PostNow = styled.Text`
    font-size: 15px;
    font-family: ${Fonts.Medium};
    color: #fff;
    background-color: rgba(76, 175, 80, 1);
    padding: 5px 10px;
    border-radius: 5px;
`;

const TextCenter = styled.Text`
    font-size: 15px;
    color: ${(p) => p.theme.gray1};
    font-family: ${Fonts.Medium};
`;

export const HeaderWrite = memo(function HeaderWrite() {
    return (
        <Header>
            <Left onPress={goBack}>
                <Gray1Icon source={IC_CLOSE} />
            </Left>
            <Center>
                <TextCenter>Create new post</TextCenter>
            </Center>
            <Right>
                <PostNow>Post</PostNow>
            </Right>
        </Header>
    );
});
