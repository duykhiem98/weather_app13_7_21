import React, {memo, useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {Colors} from '@/themes/Colors';
import {Dimensions, KeyboardAvoidingView, Platform,} from 'react-native';
import {LoginHeader} from "@/screens/Login/components/LoginHeader";
import {Blue1Text, Gray1Text, Gray3Icon, Gray3Text, Gray4Icon, Gray4Text, Gray5Icon, Row} from "@/components";
import {getBottomSpace} from "react-native-iphone-x-helper";
import {IC_BACK, IC_CALL, IC_CHECK, IC_EYE, IC_USER} from "@/assets";
import {InputBorder} from "@/components/InputBorder";
import {navigateToLoginScreen} from "@/utils/navigation";
import useBoolean from "@/hooks/useBoolean";
import {InputBig} from "@/components/InputBig";
import {BaseStyles} from "@/themes/BaseStyles";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {toBoolean} from "@/utils";
import {Fonts} from "@/assets/fonts";

const {width: DWidth} = Dimensions.get('window');


const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
`;
const Title = styled.Text`
  font-size: 25px;
  width: 100%;
  text-align: center;
  padding-top: 20px;
  color:${Colors.backgroundColor}
`;

const Content = styled.View`
  flex: 1;
  padding: 40px 20px ${30 + getBottomSpace()}px 20px;
`;


const BtnLogin = styled.TouchableOpacity<{ color?: string }>`
  height: 48px;
  background-color: ${p => p.color || Colors.blue1};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin: 0 20px 20px 20px;
`;
const ViewAlert = styled.View`
  height: 40px;
  margin: 40px 20px 0 20px;
  padding: 0 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #a2c9a6;
  flex-direction: row;
  align-items: center;
  background-color: #ccffd6;
`;

const IconCheck = styled.Image`
  width: 16px;
  height: 16px;
`;

const AlertMessage = styled(Gray3Text)`
  font-size: 12px;
  font-family: ${Fonts.Medium};
  padding-left: 4px;
`;
const TextLogin = styled.Text<{ color?: string }>`
  font-size: 16px;
  color: ${p => p.color || Colors.white};
`;
const BtnRight = styled.View`
  min-width: 40px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const IconRight = styled(Gray5Icon)`
  
`;

const RightResend = styled.TouchableOpacity`
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

const TextResend = styled(Gray4Text)`
  height: 16px;
  line-height: 16px;  
  font-size: 13px;
  padding-left: 12px;
  border-left-width: 1px;
  border-left-color: ${Colors.gray4};
`;

interface ParamsInterface {
    phone: string;
    otp: string;
    password: string;
}

export const OTPScreen = memo(function OTPScreen() {
    const [accept, onAccept, onReject] = useBoolean(true);
    const [params, setParams] = useState<ParamsInterface>({
        phone: '', //0979294748
        otp: '', //12345678
        password: '', //12345678
    });
    const [messageError, setMessageError] = useState<ParamsInterface>({
        phone: '', //SĐT ko đúng định dạng
        otp: '', // ko hợp lệ
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
            <Container>
                <Title>
                    Xác minh mã OTP
                </Title>
                <ViewAlert>
                    <IconCheck source={IC_CHECK}/>
                    <AlertMessage>
                        Mã OTP đã được gửi đến số điện thoại của bạn
                    </AlertMessage>
                </ViewAlert>
                <Content>
                    <InputBig value={params.phone}
                              keyName={'phone'}
                              placeHolder={'Nhập số điện thoại'}
                              right={
                                  <BtnRight>
                                      <IconRight source={IC_CALL}/>
                                  </BtnRight>
                              }
                              isError={toBoolean(messageError.phone)}
                              keyboardType={"number-pad"}
                              onTextChange={onTextChange}/>

                    <InputBig value={params.otp}
                              keyName={'otp'}
                              placeHolder={'Nhập mã OTP'}
                              keyboardType={"number-pad"}
                              isError={toBoolean(messageError.otp)}
                              right={<RightResend>
                                  <TextResend>
                                      Gửi lại (60s)
                                  </TextResend>
                              </RightResend>}
                              onTextChange={onTextChange}/>

                    <InputBig value={params.password}
                              keyName={'password'}
                              secureTextEntry={true}
                              placeHolder={'Mật khẩu'}
                              right={
                                  <BtnRight>
                                      <IconRight source={IC_EYE}/>
                                  </BtnRight>
                              }
                              onTextChange={onTextChange}/>
                </Content>
                <BtnLogin style={[BaseStyles.viewShadowBlue, BaseStyles.mt20]}>
                    <TextLogin>
                        Hoàn tất
                    </TextLogin>
                </BtnLogin>
            </Container>
        </>
    );
});
