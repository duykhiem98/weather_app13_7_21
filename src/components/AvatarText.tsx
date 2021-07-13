import React, {memo, useMemo} from 'react';
import styled from "styled-components/native";
import {ImageProps, ViewStyle} from "react-native";
import FastImage from "react-native-fast-image";
import {stringToColour} from "@/utils/string";

const Container = styled.View<{ size: number, bgColor?: string }>`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  border-radius: ${p => p.size / 2}px;
  background-color: ${p => p.bgColor || '#fff'};
  align-items: center;
  justify-content: center;
`;

const TextAvatar = styled.Text<{ size: number }>`
  font-size: ${p => p.size * 0.4}px;
  color: #fff;
`;
const Avatar = styled(FastImage)<{ size: number }>`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  border-radius: ${p => p.size / 2}px;
`;

interface Props extends ViewStyle {
    size: number,
    name: string,
    url: string
}

export const AvatarText = memo(function AvatarText(props: Props) {
    const {size, name, url, ...remainingProps} = props;

    const char = useMemo(() => {
        if (name) {
            const [char1, char2, ...remain] = name.split('');
            return `${char1.toUpperCase()}${(char2 || '').toUpperCase()}`
        }
        return 'NA'
    }, [name]);

    const color = useMemo(() => {
        return stringToColour(name || 'N/A')
    }, [char]);

    if (url) {
        return <Avatar
            size={size}
            {...remainingProps}
            source={{uri: url || ''}}
        />
    }

    return (
        <Container size={size} bgColor={color}>
            <TextAvatar size={size}>{char}</TextAvatar>
        </Container>
    )
});
