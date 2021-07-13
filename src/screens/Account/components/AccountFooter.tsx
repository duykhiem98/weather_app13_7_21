import React, { memo } from "react";
import styled from "styled-components/native";
import { Fonts } from "@/assets/fonts";
import { Divider } from "@/components";
import {
  IC_BLOCK,
  IC_CONG_DONG,
  IC_EVENT,
  IC_FLAG1,
  IC_GROUP1, IC_MARKET
} from "@/assets";
import {navigateGroupScreen, navigatePageScreen} from '@/utils/navigation';

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor1};
`;
const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
const Name = styled.Text`
  font-size: 13px;
  color: ${p => p.theme.gray1};
  padding-left: 18px;
  line-height: 44px;
  font-family: ${Fonts.Medium};
`;
const Header = styled.View`
  margin-bottom: 5px;
  flex-direction: column;
`;
const ButtonIcon = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;
export const AccountFooter = memo(function AccountFooter() {
  return (
    <Container>
      <Divider height={20} />
      <Header>
        <ButtonIcon>
          <Icon source={IC_CONG_DONG} />
          <Name>Peoples </Name>
        </ButtonIcon>
        <ButtonIcon onPress={navigatePageScreen}>
          <Icon
            source={IC_FLAG1} />
          <Name>Pages</Name>
        </ButtonIcon>
        <ButtonIcon onPress={navigateGroupScreen}>
          <Icon
            source={IC_GROUP1} />
          <Name>Groups</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_EVENT} />
          <Name>Events</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_BLOCK} />
          <Name>Blogs </Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_MARKET} />
          <Name>Market </Name>
        </ButtonIcon>
      </Header>
    </Container>
  );

});
