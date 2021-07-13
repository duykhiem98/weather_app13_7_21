import React, {memo} from 'react';
import styled from "styled-components/native";
import {KeyboardAvoidingView} from "react-native";
import {Colors} from "@/themes/Colors";
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {BaseStyles} from "@/themes/BaseStyles";
import {Gray3Icon, Gray3Text} from "@/components";
import {IC_BACK, IMG_LOGO_APP} from "@/assets";
import {goBack} from "@/utils/navigation";
import {useNavigation} from "@/global";
import {Fonts} from "@/assets/fonts";

const logoSize = 100;
const logoImageSize = 70;

const Container = styled.View`
  height: ${50 + logoSize + getStatusBarHeight()}px;
  background-color: #fff;
  justify-content: flex-end;
`;
const ContentContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  background-color: #fff;
  height: ${logoSize * 0.6};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  overflow: hidden;
`;


const ViewLogo = styled.View`
  height: ${logoSize}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoView = styled.View`
  width: ${logoSize}px;
  height: ${logoSize}px;
  border-radius: ${logoSize}px;
  background-color: ${Colors.backgroundColor2};
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  width: ${logoImageSize}px;
  height: ${logoImageSize}px;
`;

const BtnGoBack = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  left: 20px;
  flex-direction: row;
  align-items: center;
`;

const TextBack = styled(Gray3Text)`
  font-size: 14px;
  font-family: ${Fonts.Medium};
  padding-left: 4px;
`;

interface Props {
    canGoBack?: boolean
}

export const LoginHeader = memo(function LoginHeader(props: Props) {
    const {canGoBack} = props;
    const navigation = useNavigation()
    return (
        <Container>
            <ContentContainer>

            </ContentContainer>
            <ViewLogo>
                {/*<LogoView>*/}
                    {/*<Logo source={IMG_LOGO_APP} resizeMode={"contain"}/>*/}
                {/*</LogoView>*/}
                {
                    canGoBack || navigation.canGoBack()
                        ? <BtnGoBack onPress={goBack}>
                            <Gray3Icon source={IC_BACK}/>
                            <TextBack>
                                Quay lại
                            </TextBack>
                        </BtnGoBack>
                        : null
                }
            </ViewLogo>
        </Container>
    )
})
