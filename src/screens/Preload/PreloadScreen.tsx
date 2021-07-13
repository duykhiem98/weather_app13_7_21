import React, {memo, useCallback, useEffect} from 'react';
import styled from 'styled-components/native';
import {Colors} from '@/themes/Colors';
import {ActivityIndicator, StatusBar} from 'react-native';
import {replaceToLoginScreen, replaceWithMainScreen} from '@/utils/navigation';
import {useTheme, useToken} from '@/store/constant';
import SplashScreen from 'react-native-splash-screen';
import {BaseStyles} from "@/themes/BaseStyles";
import {IMG_LOGO_APP} from "@/assets";

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.gray1};
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  width: 120px;
  height: 120px;
  tint-color: #fff
`;
export const PreloadScreen = memo(function HomeScreen() {
    const token = useToken();
    const currentTheme = useTheme();


    const getData = useCallback(async () => {
        setTimeout(() => {
            if (token) {
                setTimeout(async() => {

                }, 1000);
                replaceWithMainScreen()
            } else {
                replaceToLoginScreen()
            }
        }, 1000);
    }, [token]);

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    useEffect(() => {
        if (currentTheme) {
            StatusBar.setBarStyle(currentTheme === 'dark' ? "light-content" : "dark-content")
        }
    }, [currentTheme]);

    useEffect(() => {
        getData()
    }, []);

    return (
        <Container>
            <Logo source={IMG_LOGO_APP} resizeMode={"contain"}/>
            <ActivityIndicator style={BaseStyles.mt12} color={Colors.white}/>
        </Container>
    );
});
