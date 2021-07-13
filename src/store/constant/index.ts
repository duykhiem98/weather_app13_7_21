import {createSelector, createSlice, PayloadAction, Store} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import {useSelector} from "react-redux";
import {RawProfile} from "@/types";
import {useMemo} from "react";

// @ts-ignore
const initialState: RawProfile = null;

const profile = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            if (action.payload) {
                return {
                    ...action.payload
                }
            }
            return null
        },
    }
});

const language = createSlice({
    name: 'language',
    initialState: 'en',
    reducers: {
        setLanguage: (state, action: PayloadAction<any>) => {
            return action.payload
        },
    }
});


const token = createSlice({
    name: 'token',
    initialState: '',
    reducers: {
        setToken: (state, action: PayloadAction<any>) => {
            return action.payload
        },
    }
});

const theme = createSlice({
    name: 'theme',
    initialState: 'dark',
    reducers: {
        setTheme: (state, action: PayloadAction<any>) => {
            return action.payload
        },
    }
});


export const constantReducer = combineReducers({
    profile: profile.reducer,
    language: language.reducer,
    token: token.reducer,
    theme: theme.reducer
});

let _store: Store | undefined;

export const constantSetStore = (store: Store) => {
    _store = store;
};

export const setLanguageAction = (data: string) => {
    _store && _store.dispatch(language.actions.setLanguage(data))
};

export const setUserAction = (data: RawProfile | null) => {
    _store && _store.dispatch(profile.actions.setUser(data))
};


export const setTokenAction = (data: string) => {
    _store && _store.dispatch(token.actions.setToken(data))
};

export const setThemeAction = (value: 'dark' | 'light') => {
    _store && _store.dispatch(theme.actions.setTheme(value))
};


export const useLanguage = () => {
    const selector = useMemo(
        () =>
            createSelector(
                (state: RootState) => state.constant.language,
                (value) => {
                    return value
                }
            ),
        []
    );
    return useSelector(state => selector(state));
};

export const useTheme = () => {
    const selector = useMemo(
        () =>
            createSelector(
                (state: RootState) => state.constant.theme,
                (value) => {
                    return value
                }
            ),
        []
    );
    return useSelector(state => selector(state));
};

export const useMyProfile = () => {
    const selector = useMemo(
        () =>
            createSelector(
                (state: RootState) => state.constant.profile,
                (value) => {
                    return value
                }
            ),
        []
    );
    return useSelector(state => selector(state));
};

export const useToken = () => {
    return useSelector(state => state.constant.token)
};

export const isUserStaff = () => {
    return useSelector(state => state.constant.profile?.role === 'mod')
};
