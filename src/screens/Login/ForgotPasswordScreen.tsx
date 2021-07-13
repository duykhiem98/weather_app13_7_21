import React, {memo, useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {Colors} from '@/themes/Colors';
import {Dimensions, KeyboardAvoidingView, Platform,} from 'react-native';
import {LoginHeader} from "@/screens/Login/components/LoginHeader";
import {Gray3Icon, Gray3Text, Row} from "@/components";
import {getBottomSpace} from "react-native-iphone-x-helper";
import {IC_BACK, IC_EYE, IC_USER} from "@/assets";
import {InputBorder} from "@/components/InputBorder";

const {width: DWidth} = Dimensions.get('window');


const Container = styled(KeyboardAvoidingView)`
  flex: 1;
`;
const Title = styled.Text`
  font-size: 25px;
  width: 100%;
  text-align: center;
  padding-top: 16px;
  margin-top: 60px;
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

const FlexRow = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 12px;
`;

const ForgotPassword = styled.Text`
  font-size: 14px;
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

interface ParamsInterface {
    username: string;
    password: string;
}

export const ForgotPasswordScreen = memo(function ForgotPasswordScreen() {
    const [params, setParams] = useState<ParamsInterface>({
        username: '', //0979294748
        password: '', //12345678
    });

    const onTextChange = useCallback(
        (keyName: string, value: string) => {
            setParams({
                ...params,
                [keyName]: value,
            });
        },
        [params],
    );
    return (
        <>
            <LoginHeader canGoBack={true}/>
            <Container behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <Title>
                    Đăng nhập
                </Title>
                <Content>
                    <InputBorder value={params.username}
                                 title={"EMAIL"}
                                 keyName={'username'}
                                 placeHolder={'your_email@address.com'}
                                 iconRight={IC_USER}
                                 onTextChange={onTextChange}/>
                    <InputBorder value={params.username}
                                 title={"MẬT KHẨU"}
                                 keyName={'username'}
                                 secureTextEntry={true}
                                 placeHolder={'***********'}
                                 iconRight={IC_EYE}
                                 onTextChange={onTextChange}/>
                    <FlexRow>
                        <ForgotPassword>
                            Quên mật khẩu?
                        </ForgotPassword>
                    </FlexRow>

                    <BtnLogin>
                        <TextLogin>
                            Đăng nhập
                        </TextLogin>
                    </BtnLogin>
                </Content>
                <Footer>
                    <FooterText>
                        Bạn chưa có tài khoản?
                        <FooterTextBlue>
                            {' '}Đăng ký ngay
                        </FooterTextBlue>
                    </FooterText>
                </Footer>
            </Container>
        </>
    );
});
