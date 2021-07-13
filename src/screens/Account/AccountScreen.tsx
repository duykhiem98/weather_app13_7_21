import React, { memo} from "react";
import styled from "styled-components/native";
import { AccountHeader } from "@/screens/Account/components/AccountHeader";

import { AccountCenter } from "@/screens/Account/components/AccountCenter";
import { AccountFooter } from "@/screens/Account/components/AccountFooter";
import {getStatusBarHeight} from "react-native-status-bar-height";

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.divider};
  padding-top: ${getStatusBarHeight()}px;
`;
export const AccountScreen = memo(function AccountScreen() {
  return (
    <Container>
      <AccountHeader />
      <AccountCenter />
      <AccountFooter />
    </Container>
  );
});

