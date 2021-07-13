import React, {
    memo,
    ReactElement,
    useCallback,
    useEffect,
    useMemo,
    useRef,
} from 'react';
import {
    Animated, ImageSourcePropType,
    KeyboardType,
    Platform,
    StyleSheet,
    TextInput,
    TextInputProps,
    TouchableWithoutFeedback,
    View,
    ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '@/themes/Colors';
import useBoolean from '@/hooks/useBoolean';
import {Fonts} from "@/assets/fonts";

const Container = styled.View<{ disabled?: boolean, isFocused: boolean }>`
  min-height: 52px;
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.isFocused ? Colors.blue1 : Colors.gray5};
  overflow: hidden;
  margin-top: 12px;
`;

const STextInput = styled.TextInput`
  flex: 1;
  margin: 0;
  height: 100%;
  padding: 0 30px 0 0 ;
  color: ${p => p.theme.gray1};
`;
const Title = styled.Text`
  font-size: 12px;
  font-family: ${Fonts.Medium};
  color: ${p => p.theme.gray1}
`;
const ValueView = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

const ViewRight = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const IconRight = styled.Image<{ isFocused: boolean }>`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.isFocused ? Colors.blue1 : Colors.gray5}
`;

interface Props extends TextInputProps {
    containerStyle?: ViewStyle;
    value: string;
    title: string;
    keyName: string;
    placeHolder: string;
    multiline?: boolean;
    onTextChange: (keyName: string, value: string) => void;
    disabled?: boolean;
    iconRight?: ImageSourcePropType;
    onRightPress?: () => void
    keyboardType?: KeyboardType;
    required?: boolean;
}

export const InputBorder = memo(function InputBorder(props: Props) {
    const {
        placeHolder,
        value,
        title,
        keyName,
        onTextChange,
        disabled,
        containerStyle,
        iconRight,
        onRightPress,
        multiline,
        keyboardType,
        required,
        ...restProps
    } = props;
    const inputRef = useRef<TextInput>(null);
    const [isFocus, setFocus, setNoFocus] = useBoolean(false);

    const focus = useCallback(() => {
        inputRef.current && inputRef.current.focus();
    }, [inputRef]);

    const blur = useCallback(() => {
        inputRef.current && inputRef.current.blur();
    }, [inputRef]);

    const onChange = useCallback(
        (_value) => {
            onTextChange(keyName, _value);
        },
        [onTextChange, keyName],
    );
    const onFocus = useCallback(() => {
        if (disabled) {
            return;
        }
        setFocus();
    }, [disabled, isFocus]);

    const onBlur = useCallback(() => {
        setNoFocus();
    }, [isFocus]);

    const setRequired = useMemo(() => {
        return required ? '*' : '';
    }, [required]);

    return (
        <Container disabled={disabled}
                   isFocused={isFocus}
                   style={containerStyle}>
            <TouchableWithoutFeedback onPress={focus}>
                <Title>
                    {title}
                </Title>
            </TouchableWithoutFeedback>
            <ValueView>
                <STextInput
                    multiline={multiline}
                    ref={inputRef}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    onFocus={onFocus}
                    placeholder={placeHolder}
                    placeholderTextColor={Colors.gray5}
                    underlineColorAndroid={'transparent'}
                    keyboardType={keyboardType}
                    {...restProps}
                />
                {
                    iconRight ?
                        <ViewRight onPress={onRightPress}>
                            <IconRight source={iconRight} isFocused={isFocus}/>
                        </ViewRight>
                        : null
                }
            </ValueView>
        </Container>
    );
});

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingBottom: Platform.OS === 'android' ? 8 : 32,
    },
    valueView: {
        paddingLeft: 12,
        paddingRight: 12,
    },
    label: {
        backgroundColor: 'transparent',
    },
    textInputLabel: {
        paddingLeft: 0,
        paddingTop: Platform.OS === 'android' ? 8 : 2,
        fontSize: 15,
        lineHeight: 18,
        textAlignVertical: 'top',
    },
    textInput: {
        paddingLeft: 0,
        paddingTop: Platform.OS === 'android' ? 8 : 4,
        fontSize: 15,
        lineHeight: 18,
        textAlignVertical: 'top',
    },
});
