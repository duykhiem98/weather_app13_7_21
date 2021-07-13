import React, {memo, PropsWithChildren, useMemo} from 'react';
import {ThemeProvider} from "styled-components/native";
import '@/types';
import {useTheme} from "@/store/constant";
import {darkMode, lightMode} from "@/assets/themes";


export const UIKitProvider = memo(function UIKitProvider({children}: PropsWithChildren<any>) {
    const currentTheme = useTheme();

    return (
        <ThemeProvider theme={currentTheme === 'dark' ? darkMode : lightMode}>
            <>
                {children}
            </>
        </ThemeProvider>
    )
});
