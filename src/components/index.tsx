import styled from "styled-components/native";
import {Colors} from "@/themes/Colors";

import React, {memo, PropsWithChildren, ReactElement} from 'react';
import {Text, ImageSourcePropType, TouchableOpacity} from 'react-native';
import {toBoolean} from "@/utils";
import {Fonts} from "@/assets/fonts";


export const Divider = styled.View<{color?: string, height?: number}>`
  height: ${p => p.height || 1}px;
  background-color: ${p => p.color || p.theme.divider};
`;

const ItemContainer = styled.View`
  width: 100%;
  min-height: 44px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
`;

const Icon1 = styled.Image`
  margin: 8px 8px 6px -4px;
  width: 24px;
  height: 24px;
  tint-color: ${p => p.theme.gray3}
`;

const Label = styled.Text`
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 16px;
  font-size: 15px;
  line-height: 18px;
  color: ${p => p.theme.gray3};
  max-width: 80%;
`;

const SDivider = styled.View`
  margin: 0 16px;
  height: 1px;
  background-color: ${p => p.theme.gray6};
`;
const Left = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
interface ItemProps {
    icon?: ImageSourcePropType;
    label: string;
    divider?: boolean;
    children?: React.ReactNode;
    willTranslate?: boolean;
}

export const Item = memo(
    ({icon, label, children, divider, willTranslate = true}: ItemProps) => {
        return (
            <>
                <ItemContainer>
                        {icon && <Icon1 source={icon} />}
                        <Label>{label}</Label>
                    {children}
                </ItemContainer>
                {divider && <SDivider />}
            </>
        );
    },
);

interface ClickableItemProps extends ItemProps {
    disabled?: boolean;
    onPress?: () => void;
}

export const ClickableItem = memo(
    ({disabled, onPress, ...itemProps}: ClickableItemProps) => {
        return (
            <TouchableOpacity onPress={onPress} disabled={disabled}>
                <Item {...itemProps} />
            </TouchableOpacity>
        );
    },
);

interface SimpleClickableItemProps
    extends Omit<ClickableItemProps, 'children'> {
    content?: string;
}

export const SimpleClickableItem = memo(
    ({content, ...itemProps}: SimpleClickableItemProps) => {
        return (
            <ClickableItem {...itemProps}>
                <ClickableText clickable={!itemProps.disabled}>{content}</ClickableText>
            </ClickableItem>
        );
    },
);
export const SimpleItem = memo(function SimpleItem({
                                                       content,
                                                       ...props
                                                   }: ItemProps & {content?: string}) {
    return (
        <Item {...props}>
            <ItemContent>{content}</ItemContent>
        </Item>
    );
});

export const ItemContent = styled.Text`
  flex: 1;
  font-size: 15px;
  line-height: 18px;
  text-align: right;
  margin: 13px 0;
  color: ${p => p.theme.gray1};
`;

export const ClickableText = styled(ItemContent)<{clickable?: boolean}>`
  color: ${(props) => (props.clickable ? Colors.blue : Colors.grey1)};
`;

const SectionContainer = styled.View<{withDivider: boolean}>`
  height: 44px;
  margin: 8px 16px 0 16px;
  flex-direction: row;
  border-bottom-color: ${p => p.theme.gray5}80;
  border-bottom-width: ${(props) => (props.withDivider ? 1 : 0)}px;
  justify-content: space-between;
`;

const SectionText = styled.Text`
  font-size: 18px;
  line-height: 21px;
  color: ${p => p.theme.gray1};
  margin-top: 12px;
  text-align: left;
  font-family: ${Fonts.Medium};
`;

interface SectionTitleProps {
    title: string;
    withDivider?: boolean;
    children?: ReactElement | ReactElement[];
}

export const SectionTitle = memo(function SectionTitle({
                                                           title,
                                                           withDivider = true,
                                                           children,
                                                       }: PropsWithChildren<SectionTitleProps>) {
    return (
        <SectionContainer withDivider={withDivider}>
            <SectionText>{title}</SectionText>
            {children}
        </SectionContainer>
    );
});

const Pad = styled.View`
  width: 100%;
  padding: 0 16px;
`;

export const FullDivider = memo(() => <Divider />);
export const PadDivider = memo(() => (
    <Pad>
        <Divider />
    </Pad>
));

const ItemSeparatorContainer = styled.View`
  width: 100%;
  padding: 0 16px;
`;

export const ItemSeparator = memo(() => (
    <ItemSeparatorContainer>
        <Divider />
    </ItemSeparatorContainer>
));

export const ItemsWrapper = styled.View`
  width: 100%;
  padding: 8px 0;
`;



const YesNo = styled(ItemContent)<{active: boolean}>`
  color: ${(p) => (p.active ? p => Colors.green1 : p => Colors.red1)};
`;

interface Props {
    active: string | '0' | '1' | boolean;
}

export const YesNoItem = memo(({active}: Props) => {
    const isEnabled = toBoolean(active);
    return (
        <YesNo active={isEnabled}>
            {isEnabled ? 'Có' : 'Không'}
        </YesNo>
    );
});

export const OnOffItem = memo(({active}: Props) => {
    const isEnabled = toBoolean(active);
    return (
        <YesNo active={isEnabled}>
            {isEnabled ? 'Bật' : 'Tắt'}
        </YesNo>
    );
});


export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Blue1Text = styled(Text)`
  color: ${p => Colors.blue1}
`;
export const IconColor = styled.Image<{color?: string, size?: number}>`
  tint-color: ${p => p.color || "none"};
  width: ${p => p.size || 24}px;
  height: ${p => p.size || 24}px;
`;
export const Gray1Icon = styled(Icon)`
  tint-color: ${p => p.theme.gray1}
`;
export const Gray2Icon = styled(Icon)`
  tint-color: ${p => p.theme.gray2}
`;
export const Gray3Icon = styled(Icon)`
  tint-color: ${p => p.theme.gray3}
`;
export const Gray4Icon = styled(Icon)`
  tint-color: ${p => p.theme.gray4}
`;
export const Gray5Icon = styled(Icon)`
  tint-color: ${p => p.theme.gray5}
`;

export const Gray1Text = styled(Text)`
  color: ${p => p.theme.gray1}
`;
export const Gray2Text = styled(Text)`
  color: ${p => p.theme.gray2}
`;
export const Gray3Text = styled(Text)`
  color: ${p => p.theme.gray3}
`;
export const Gray4Text = styled(Text)`
  color: ${p => p.theme.gray4}
`;
export const Gray5Text = styled(Text)`
  color: ${p => p.theme.gray5}
`;

export const BlueText = styled(Text)`
  color: ${p => Colors.blue1}
`;

export const Bold = styled(Text)`
  font-family: ${Fonts.Medium};
`;

export const Row = styled.View`
  flex-direction: row;
`;
