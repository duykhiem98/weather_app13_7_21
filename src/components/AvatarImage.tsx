import React, {memo} from 'react';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

const Avatar = styled(FastImage)<{width?: number}>`
    width: ${p => p.width ? p.width : 24}px;
    height: ${p => p.width ? p.width : 24}px;
    border-radius: ${p => p.width ? p.width / 2 : 24 / 2}px;
    background-color: ${p => p.theme.gray5};
`;

interface Props {
    uri: string;
    width?: number;
}

export const AvatarImage = memo(function AvatarImg(props: Props) {
    const {uri, width} = props;
    return (
        <Avatar
            source={{
                uri: uri,
            }}
            width={width}
        />
    );
});
