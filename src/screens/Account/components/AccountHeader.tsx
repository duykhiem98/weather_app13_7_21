import React, { memo, useCallback } from "react";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Fonts } from "@/assets/fonts";
import {Divider} from "@/components";
import { navigateListFriendScreen, navigateProfileScreen } from "@/utils/navigation";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor1};
  padding: 12px 16px;
`;
const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: ${44 / 2}px;
  background-color: ${p => p.theme.gray5};
`;
const Name = styled.Text`
  font-size: 15px;
  color: ${p => p.theme.gray1};
  font-family: ${Fonts.Medium};
  line-height: 20px;
  padding-left: 12px;
`;
const Header = styled.TouchableOpacity`
  height:44px;
  align-items: center;
  flex-direction: row;
`;


export const AccountHeader = memo(function AccountHeader() {
  const openProfileModal = useCallback(() => {
    navigateProfileScreen({ id: "1" });
  }, []);
  return (
    <Container>
      <Header onPress={openProfileModal}>
        <Image
          source={{ uri: "https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg" }} />
        <Name>Nguyễn Đức Thuần</Name>
      </Header>
    </Container>
  );
});
