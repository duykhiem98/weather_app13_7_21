import {Fetch, updateFetchToken} from "@/utils/fetch";
import {RawProfile, RawCustomNotify, RawLogin} from "@/types";
import {setTokenAction, setUserAction} from "@/store/constant/index";
import Global from "@/utils/Global";
import ToastService from "@/services/ToastService";
import {replaceToLoginScreen, replaceWithMainScreen} from "@/utils/navigation";
import {Core} from "@/global";
import moment from 'moment';

export interface LoginPrams {
    "phone": string,
    "plainPassword": string
}

export const requestLogin = async (params: LoginPrams) => {
    const {data} = await Fetch.post<{
        result: RawLogin
    }>('user/authenticate', {
        ...params
    }, {
        baseURL: Core.baseLoginUrl
    });
    console.log('data ', data)
    if (!data || !data?.result) {
        return null
    }

    await requestGetProfile();
    updateFetchToken(data?.result?.token);
    setTokenAction(data?.result?.token);
    replaceWithMainScreen();
    return data.result;
};

export interface RegisterPrams {
    phone: string,
    plainPassword: string
}

export const requestRegister = async (params: RegisterPrams) => {
    const {data} = await Fetch.post<{
        result: RawLogin;
    }>('user/register_nu', {
        ...params
    });
    if (!data || !data?.result) {
        return null
    }
    replaceToLoginScreen();
    return data.result;
};

interface ConfigProps {
    key: 'payment' | 'about' | 'version'
}

export const requestGetInfo = async (params: ConfigProps) => {
    const {data} = await Fetch.get<{ data: string }>('api/Account/GetConfig', {
        baseURL: Core.baseLoginUrl,
        params: params
    });

    return data?.data || '';
};
export const requestGetProfile = async () => {
    const {data} = await Fetch.get<{ result: { user: RawProfile } }>('user/me', {
        baseURL: Core.baseLoginUrl
    });
    setUserAction(data?.result?.user || null);
    return data?.result?.user || null;
};

export interface EditUserParams {
    userName: string,
    password: string,
    phoneNumber: string,
    name: string,
    type: number,
    address: string,
    isActive: boolean
}

export const requestEditUser = async (params: EditUserParams) => {
    const {data} = await Fetch.post('api/Account/UpdateUser', {...params}, {
        baseURL: Core.baseLoginUrl
    });

    if (!data || !data?.data) {
        ToastService.show(data.message)
        return null
    }

    return data?.data || null
};


export interface GetCustomNotifyParams {
    customNotifiID: string
}

export const requestGetCustomNotify = async (params: GetCustomNotifyParams) => {
    const {data} = await Fetch.get<{ data: RawCustomNotify, message: string }>('api/Account/GetCustomNotification', {
        headers: {
            Authorization: 'Bearer ' + Global.accessToken
        },
        params: params
    });

    if (!data || !data?.data) {
        ToastService.show(data.message)
        return null
    }

    return data?.data || null
};


export interface UploadImageParams {
    data: string
}

export const requestUploadImage = async (params: UploadImageParams) => {
    const {data} = await Fetch.post<{ result: { image_url: string } }>('api/upload/image', {
        ...params
    }, {
        baseURL: Core.cdn,
    });
    if (!data || !data?.result) {
        return null
    }

    return data?.result?.image_url || null
};

export const requestUploadFile = async (params: UploadImageParams) => {
    let requestFormData = new FormData();
    requestFormData.append("file_upload", {
        uri: params.data || "", //Your Image File Path
        type: 'mp4',
        name: `${moment().toDate()}.mp4`,
    });
    const res = await Fetch({
        baseURL: Core.cdn,
        url: `/api/upload/file`,
        method: 'POST',
        data: requestFormData,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
        }
    });
    const {data} = res;
    console.log('data data ', data)
    if (!data || !data?.result) {
        return null
    }

    return data?.result?.image_url || null
};
