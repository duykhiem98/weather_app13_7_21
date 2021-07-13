import React, {memo, useCallback, useMemo, useState} from 'react';
import {
    Keyboard,
    TextStyle,
    ImageSourcePropType,
    ViewStyle,
} from 'react-native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SelectorOption, UNIQUE_STRING, SelectorItem} from './SelectorItem';

import {
    Wrapper,
    Icon,
    TextWrapper,
    ContentWrapper,
    Content,
    Label,
    Button,
} from './components';
import {BottomMenuModal} from './BottomMenuModal';
import {BottomMenuContainer} from './BottomMenuContainer';
import {BottomMenuHeader} from './BottomMenuHeader';
import {Colors} from "@/themes/Colors";
import styled from "styled-components/native";

const SText = styled(Content)<{ hasValue: boolean }>`
  flex: 1;
  color: ${p => (p.hasValue ? Colors.gray1 : Colors.gray4)};
`;

interface Props {
    label?: string;
    options: SelectorOption[];
    selectedValue?: string | number;
    placeholder?: string;
    inputName: string;
    renderIcon?: (icon: ImageSourcePropType) => React.ReactElement | null;
    onSelectOption: (inputName: string, value: string) => void;
    containerStyle?: ViewStyle;
    filtered?: boolean | undefined;
    textStyle?: TextStyle;
    visible: boolean;
    onHide: () => void
}

export const BottomMenuSelector = memo(
    ({
         inputName,
         label,
         options,
         selectedValue,
         placeholder = '',
         onSelectOption,
         renderIcon,
         textStyle,
         visible,
         onHide
     }: Props) => {
        const selectedOption: SelectorOption | undefined = useMemo(() => {
            return !!options
                ? options.filter((option) => option.value === selectedValue)[0]
                : undefined;
        }, [options, selectedValue]);

        const selectedOptionLabel = useMemo(
            () => (!!selectedOption ? selectedOption.label : placeholder),
            [selectedOption, placeholder],
        );

        const noTranslate = useMemo(
            () => (!!selectedOption ? !!selectedOption.noTranslate : false),
            [selectedOption],
        );

        const text = !!selectedOption
            ? noTranslate
                ? selectedOptionLabel
                : selectedOptionLabel
            : placeholder;

        const hideMenu = useCallback(() => {
            onHide && onHide()
        }, [onHide]);

        const onSelectOptionCb = useCallback(
            (value: string | number) => {
                hideMenu();
                onSelectOption(inputName, `${value}`);
            },
            [inputName, onSelectOption, hideMenu],
        );

        return (
            <BottomMenuModal
                isVisible={visible}
                onClose={hideMenu}
                propagateSwipe={true}>
                <BottomMenuContainer>
                    {
                        label ? <BottomMenuHeader title={label} onClose={hideMenu}/> : null
                    }
                    <ScrollView style={styles.maxHeightScroll}>
                        {options.map((option) => {
                            const selected = option.value === selectedValue;
                            return (
                                <View
                                    style={styles.optionContainer}
                                    key={option.value || UNIQUE_STRING}>
                                    <SelectorItem
                                        option={option}
                                        renderIcon={renderIcon}
                                        selected={selected}
                                        onSelect={onSelectOptionCb}
                                    />
                                </View>
                            );
                        })}
                    </ScrollView>
                </BottomMenuContainer>
            </BottomMenuModal>
        );
    },
);

const styles = StyleSheet.create({
    optionContainer: {
        marginHorizontal: 0,
    },
    maxHeightScroll: {
        maxHeight: '100%',
    },
});
