import React, {memo, useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {Colors} from '@/themes/Colors';
import {ActivityIndicator, KeyboardAvoidingView, Platform,} from 'react-native';
import {getBottomSpace} from "react-native-iphone-x-helper";
import {IC_EYE, IC_USER, IMG_LOGO_APP} from "@/assets";
import {InputBorder} from "@/components/InputBorder";
import {navigateToRegisterScreen, replaceWithMainScreen} from "@/utils/navigation";
import {LoginPrams} from "@/store/constant/functions";
import {useAsyncFn} from "@/hooks/useAsyncFn";


const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
  padding-top: 150px;
`;

const Title = styled.Text`
  font-size: 25px;
  width: 100%;
  text-align: center;
  padding-top: 16px;
  margin-top: 60px;
  color:${p => p.theme.gray1}
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
  color: ${p => p.theme.gray3};
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

const ViewAvatar = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoApp = styled.Image`
  width: 150px;
  height: 50px;
  tint-color:${p => p.theme.gray1}
`;

export const LoginScreen = memo(function LoginScreen() {
    const [params, setParams] = useState<LoginPrams>({
        phone: '0973090393', //0979294748
        plainPassword: 'Drlena@32123', //12345678
    });

    const [{loading}, onLogin] = useAsyncFn(async () => {
        if (loading) {
            return
        }
        replaceWithMainScreen();
    }, [params]);

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
            <Container behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ViewAvatar>
                    <LogoApp source={IMG_LOGO_APP} resizeMode={"contain"}/>
                </ViewAvatar>
                <Content>
                    <InputBorder value={params.phone}
                                 title={"SỐ ĐIỆN THOẠI"}
                                 keyName={'username'}
                                 placeHolder={'Số điện thoại'}
                                 iconRight={IC_USER}
                                 onTextChange={onTextChange}/>
                    <InputBorder value={params.plainPassword}
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

                    <BtnLogin onPress={onLogin}>
                        {
                            loading
                                ? <ActivityIndicator color={'#fff'}/>
                                : <TextLogin>
                                    Đăng nhập
                                </TextLogin>
                        }
                    </BtnLogin>
                </Content>
                <Footer>
                    <FooterText>
                        Bạn chưa có tài khoản?
                        <FooterTextBlue onPress={navigateToRegisterScreen}>
                            {' '}Đăng ký ngay
                        </FooterTextBlue>
                    </FooterText>
                </Footer>
            </Container>
        </>
    );
});
