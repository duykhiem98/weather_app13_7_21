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
import {Row} from "@/components/index";

const Container = styled.View<{ isError?: boolean, isFocused: boolean }>`
  min-height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.isError ? Colors.red0 : Colors.gray5};
  overflow: hidden;
  margin-top: 12px;
`;

const STextInput = styled.TextInput`
  flex: 1;
  margin: 0;
  height: 100%;
  font-size: 18px;
  padding: 0;
  color: ${Colors.gray3};
`;
const ValueView = styled.View`
  flex: 1;  
`;
const TitleErrorView = styled.View`
  height: 20px;
  width: 100%;
`;
const TitleErrorText = styled.Text`
  font-size: 12px;
  color: ${Colors.red0};
`;
const RowCenter = styled(Row)`
  align-items: flex-start;
  flex: 1;
  padding-bottom: 10px;
`;
interface Props extends TextInputProps {
    containerStyle?: ViewStyle;
    value: string;
    keyName: string;
    placeHolder: string;
    multiline?: boolean;
    onTextChange: (keyName: string, value: string) => void;
    disabled?: boolean;
    isError?: boolean;
    keyboardType?: KeyboardType;
    right?: ReactElement
}

export const InputBig = memo(function InputBig(props: Props) {
    const {
        placeHolder,
        value,
        keyName,
        onTextChange,
        disabled,
        containerStyle,
        multiline,
        isError,
        keyboardType,
        right,
        ...restProps
    } = props;
    const inputRef = useRef<TextInput>(null);
    const [isFocus, setFocus, setNoFocus] = useBoolean(false);

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

    return (
        <Container isError={isError} isFocused={isFocus}
                   style={containerStyle}>
            <ValueView>
                <TitleErrorView>
                    {
                        isError ? <TitleErrorText>
                            Mã OTP không hợp lệ
                        </TitleErrorText> : null
                    }
                </TitleErrorView>
                <RowCenter>
                    <STextInput
                        multiline={multiline}
                        ref={inputRef}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        onFocus={onFocus}
                        placeholder={placeHolder}
                        placeholderTextColor={Colors.gray4}
                        underlineColorAndroid={'transparent'}
                        keyboardType={keyboardType}
                        {...restProps}
                    />

                    {right ? right : null}

                </RowCenter>
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
