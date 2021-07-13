import axios, {AxiosRequestConfig} from 'axios';
import {Core} from "@/global";
import {setTokenAction} from "@/store/constant";
import {replaceToLoginScreen} from "@/utils/navigation";
import {Alert} from "react-native";
import ToastService from "@/services/ToastService";

let headers = {
    Authorization: '',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=3B96EAB24590868FDE20F41970F1F780'
};

export const Fetch = axios.create({baseURL: Core.baseUrl, headers}); // baseURL: Core.baseUrl


Fetch.interceptors.response.use((response) => {
    return response
}, (error) => {
    if (error.response.status === 401) {
        setTokenAction('');
        replaceToLoginScreen();
        updateFetchToken('');
        Alert.alert('Token error', 'Please login again');
        return Promise.resolve({error});
    }
    console.log('error?.response?.data ', error?.response)
    ToastService.showError(error?.response?.data?.Message || "Có lỗi xảy ra");
    return Promise.resolve({error});
});

export const forceLogout = () => {
    setTokenAction('');
    updateFetchToken('');
};

export const updateFetchToken = (_token: string) => {
    Fetch.defaults.headers['Authorization'] = `Bearer ${_token}`;
};
