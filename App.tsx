// @ts-ignore
import React, {memo, useEffect} from 'react';
import {StatusBar, YellowBox} from 'react-native';
//@ts-ignore
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Routes from './src/Routes';``
// @ts-ignore
import {setCustomText, setCustomTouchableOpacity} from 'react-native-global-props';
import {Fonts} from "./src/assets/fonts";
import {UIKitProvider} from "./src/components/UIKitProvider";

YellowBox.ignoreWarnings(['']);


const App = memo(() => {
    useEffect(() => {
        const customTextProps = {
            style: {
                fontFamily: Fonts.Regular
            }
        };
        setCustomText(customTextProps);
        setCustomTouchableOpacity({activeOpacity: 0.8})
    }, []);


    return (
        <Provider store={require('@/store').default}>
            <PersistGate persistor={require('@/store').persistor}>
                <StatusBar
                    translucent={true}
                    backgroundColor={'transparent'}
                    barStyle="dark-content"
                />
                <UIKitProvider>
                    <Routes/>
                </UIKitProvider>
            </PersistGate>
        </Provider>
    );
});

export default App;
