import React, { memo, useCallback, useState } from "react";
import styled from "styled-components/native";
import { setThemeAction, useTheme } from "@/store/constant";
import { StatusBar, Switch } from "react-native";
import { IC_CHANGETHEMES } from "@/assets";
import { Fonts } from "@/assets/fonts";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;
const ViewIcon = styled.View`
  align-items: center;
  flex-direction: row;
  flex:9;
`;
const ViewSwitch = styled.View`
  justify-content: center;
  flex: 1;
`;
const Icon=styled.Image`
  width: 20px;
  height: 20px;
  tint-color: ${p => p.theme.gray1};
`;
const Name = styled.Text`
  font-size: 13px;
  font-family: ${Fonts.Medium};
  color: ${p => p.theme.gray1};
  padding-left: 18px;
  line-height: 44px;
`;
export const ChangeThemes = memo(function ChangeThemes() {
  const currentTheme = useTheme();

  const onChangeTheme = useCallback(() =>{
    setThemeAction(currentTheme === "dark" ? "light" : "dark");
    StatusBar.setBarStyle(currentTheme === "light" ? "light-content" : "dark-content");
  }, [currentTheme]);

  // cái current theme này thay đổi dựa vào cái useTheme
  console.log('vcurrentTheme ', currentTheme)
  return (
    <Container>
      <ViewIcon>
        <Icon source={IC_CHANGETHEMES}/>
        <Name>Changes Themes </Name>
      </ViewIcon>
      <ViewSwitch>
        <Switch trackColor={{ false: "#999", true: "#eee" }}
                thumbColor={currentTheme === 'dark' ? "#999" : "#111"}
                onValueChange={onChangeTheme}
                value={currentTheme === 'dark'}
        />
        {/* <BtnChangeTheme onPress={onChangeTheme}>
          <TextChangeTheme>
            Change theme
          </TextChangeTheme>
        </BtnChangeTheme>*/}
      </ViewSwitch>
    </Container>
  );
});