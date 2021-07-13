import React, {memo, useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {Colors} from '@/themes/Colors';
import {Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity,} from 'react-native';
import {LoginHeader} from "@/screens/Login/components/LoginHeader";
import {Gray3Icon, Gray3Text, Row} from "@/components";
import {getBottomSpace} from "react-native-iphone-x-helper";
import {BaseStyles} from "@/themes/BaseStyles";
import {
    navigateToLoginManualScreen,
    navigateToLoginScreen,
    navigateToRegisterManualScreen,
    replaceToLoginScreen
} from "@/utils/navigation";

const {width: DWidth} = Dimensions.get('window');


const Container = styled(KeyboardAvoidingView)`
  flex: 1;
`;
const Title = styled.Text`
  font-size: 25px;
  width: 100%;
  text-align: center;
  padding-top: 16px;
  color:${Colors.backgroundColor}
`;

const Content = styled.View`
  flex: 1;
  padding: 40px 20px ${30 + getBottomSpace()}px 20px;
`;

const Footer = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
`;
const FooterText = styled.Text`
  font-size: 13px;
  color: ${Colors.gray3};
`;
const FooterTextBlue = styled.Text`
  color: ${Colors.blue1}
`;

const BtnLogin = styled.TouchableOpacity<{ color?: string }>`
  height: 48px;
  background-color: ${p => p.color || Colors.blue1};
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin-top: 20px;
`;

const TextLogin = styled.Text<{ color?: string }>`
  font-size: 16px;
  color: ${p => p.color || Colors.white};
`;
const LoginAsText = styled(Gray3Text)`
  font-size: 16px;
  text-align: center;
  margin-top: 50px;
`;

const ButtonLoginAs = styled.View`
  width: ${(DWidth - 40) / 2 - 10}px;
  height: 48px;
  border-width: 1px;
  border-color: ${Colors.gray5};
  border-radius: 16px;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: center;
`;

export const RegisterScreen = memo(function RegisterScreen() {
    return (
        <>
            <LoginHeader/>
            <Container behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <Title>
                    Đăng ký
                </Title>
                <Content>
                    <BtnLogin style={BaseStyles.mt20} onPress={navigateToRegisterManualScreen}>
                        <TextLogin numberOfLines={1}>
                            Đăng ký bằng số điện thoại
                        </TextLogin>
                    </BtnLogin>
                    <BtnLogin color={'#292929'}>
                        <TextLogin numberOfLines={1}>
                            Đăng ký bằng Apple
                        </TextLogin>
                    </BtnLogin>

                    <LoginAsText>
                        Hoặc đăng ký bằng
                    </LoginAsText>
                    <Row style={[BaseStyles.justifySpaceAround, BaseStyles.mt16]}>
                        <ButtonLoginAs>
                            <TextLogin color={Colors.red0}>Google</TextLogin>
                        </ButtonLoginAs>
                        <ButtonLoginAs>
                            <TextLogin color={Colors.blue1}>Facebook</TextLogin>
                        </ButtonLoginAs>
                    </Row>
                </Content>
                <Footer>
                    <FooterText>
                        Bạn đã có tài khoản?
                        <FooterTextBlue onPress={replaceToLoginScreen}>
                            {' '}Đăng nhập ngay
                        </FooterTextBlue>
                    </FooterText>
                </Footer>
            </Container>
        </>
    );
});
