import React, {memo} from 'react';
import {BottomMenuContainer, BottomMenuModal} from "@/components/BottomMenu";
import {HeaderWrite} from "@/screens/Write/HeaderWrite";
import SubHeaderWrite from "@/screens/Write/SubHeaderWrite";
import styled from "styled-components/native";
import {BaseStyles} from "@/themes/BaseStyles";

interface Props {
    isVisible: boolean,
    onClose: () => void
}

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;

const Input = styled.TextInput`
  width: 100%;
  height: 150px;
  background-color: ${p => p.theme.backgroundColor};
  color: ${p => p.theme.gray1};
  text-align-vertical: top;
  padding: 12px 16px;
  margin: 0;
`;


export const ShareModal = memo(function ShareModal(props: Props) {
    const {isVisible, onClose} = props;

    return (
        <BottomMenuModal isVisible={isVisible}  onClose={onClose}>
            <BottomMenuContainer containerStyle={BaseStyles.pt8}>
                <SubHeaderWrite />
                <Input
                    multiline={true}
                    autoFocus={true}
                    placeholderTextColor={''}
                    placeholder={'Bạn đang nghĩ gì ... '}
                />
            </BottomMenuContainer>
        </BottomMenuModal>
    )
});
