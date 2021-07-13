import React, {memo} from 'react';
import styled from "styled-components/native";
import {IC_ARROW_DOWN} from "@/assets";
import {TouchableOpacityProps} from "react-native";
import {Fonts} from "@/assets/fonts";

const Container = styled.TouchableOpacity`
   flex-direction: row;
   align-items: center;
   height: 100%;
`;

const TextMore = styled.Text`
  font-size: 12px;
  color: #00C6F2;
  padding-bottom: 1.5px;
`;
const IconDropDownRight = styled.Image`
  width: 10px;
  height: 12px;
  tint-color: #00C6F2;
  transform: rotate(-90deg);
  margin-left: 6px;
`;

interface Props extends TouchableOpacityProps {

}
export const MoreItem = memo(function MoreItem(props: Props) {
    return (
        <Container {...props}>
            <TextMore>Xem tất cả</TextMore>
            <IconDropDownRight resizeMode={"contain"} source={IC_ARROW_DOWN}/>
        </Container>
    )
});
