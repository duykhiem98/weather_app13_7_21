import React, {memo, useCallback} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
    ImageSourcePropType,
    InteractionManager,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import {BgTabBarIcon} from './BgTabBar';
import {IMG_TABBAR} from '@/assets';
import {screenShortDimension} from '@/utils/scale';
import {Colors} from "@/themes/Colors";
import FastImage from "react-native-fast-image";

export interface TabBarIconProps {
    icon: ImageSourcePropType;
    isFocused: boolean;
}

const Icon = styled.Image<{ isFocused: boolean }>`
  width: 24px;
  height: 24px;
  tint-color: ${(p) => (p.isFocused ? p.theme.gray1 : p.theme.gray4)};
`;

const Label = styled.Text<{ focused: boolean }>`
  font-style: normal;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: ${(p) => (p.focused ? '#E5AB55' : Colors.gray1)};
`;

export const TabBarIcon = memo(function TabBarIcon({
                                                       icon,
                                                       isFocused,
                                                   }: TabBarIconProps) {
    return <Icon resizeMode={"contain"} source={icon} isFocused={isFocused}/>;
});

const Container = styled.View`
  width: 100%;
  height: ${56 + getBottomSpace()}px;
  padding-bottom: ${getBottomSpace}px;
  background-color: ${p => p.theme.backgroundColor};
  border-top-width: 1px;
  border-top-color: ${p => p.theme.gray5};
`;

export const CustomTabBar = memo(function CustomTabBar(props: BottomTabBarProps) {
    const {state, descriptors, navigation} = props;
    return (
        <Container>
            <View style={styles.contentContainer}>
                {state.routes.map((route, index) => {
                    const {options} = descriptors[route.key];

                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;

                    const isFocused = state.index === index;

                    const onPress = useCallback(() => {
                        InteractionManager.runAfterInteractions(() => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        });
                    }, [route, isFocused, index]);

                    return (
                        <TouchableOpacity
                            key={'tab-' + index.toString()}
                            accessibilityRole="button"
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            style={styles.bottomBarIcon}>
                            {options &&
                            options.tabBarIcon &&
                            options.tabBarIcon({focused: isFocused, color: '', size: 0})}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </Container>
    );
});

const styles = StyleSheet.create({
    containerAbsolute: {

    },
    modalStyle: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 0,
        marginLeft: 16,
        marginRight: 16,
        width: screenShortDimension - 32,
        maxWidth: 400,
        marginBottom: 120 + getBottomSpace(),
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewIconAdd: {
        flex: 1,
        height: 72,
        marginBottom: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomBarIcon: {
        marginTop: 6,
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    buttonAdd: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusHorizontal: {
        position: 'absolute',
        zIndex: 1,
        width: 3,
        height: 20,
        borderRadius: 2,
    },
    plusVertical: {
        position: 'absolute',
        zIndex: 1,
        width: 20,
        height: 3,
        borderRadius: 2,
    },
});
