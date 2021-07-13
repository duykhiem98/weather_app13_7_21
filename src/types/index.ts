export interface RawLogin {
    token: string
}

export interface RawProfile {
    id: string;
    name?: any;
    alias?: any;
    avatar?: any;
    phone?: any;
    phoneVerified?: any;
    email?: any;
    birthYear?: any;
    birthMonth?: any;
    birthDay?: any;
    ageRange: number;
    facebookId?: any;
    gplusId?: any;
    password: string;
    plainPassword?: any;
    hasPassword: number;
    regisDate?: any;
    newPassword?: any;
    isCollaborator?: any;
    headline?: any;
    gender: number;
    nextBeautyPlan?: any;
    lastBeautySalon?: any;
    cityId?: any;
    districtId?: any;
    subdistrictId?: any;
    cityName?: any;
    districtName?: any;
    subdistrictName?: any;
    seeder?: any;
    role?: any;
    expert?: any;
    note?: any;
    officialAccount?: any;
    firstTime?: any;
    token?: any;
    postNum?: any;
    experiencePoint: number;
}

export interface RawCategory {
    id: string;
    avatar: string;
    prevBefore?: any;
    prevAfter?: any;
    name: string;
    parentId: number;
    parentName?: any;
    intro?: any;
    price?: any;
    usecase?: any;
    teasing?: any;
    position?: any;
    active?: any;
    appliedFor?: any;
    bannedFor?: any;
    featured?: any;
}

export interface RawCustomNotify {
    '$id': string;
    contentHTML: string;
    id: number;
    isDeleted: boolean;
}

export interface RawBanner {
    id: string;
    avatar: string;
    video: string;
    link: string;
    position: number;
    active: number;
    createdTime: string;
}

export interface RawPost {
    id: string;
    avatar: string;
    link: string;
    content: string;
    images: string[];
    preview?: any
}

export interface RawNotification {
    id: string;
    content: string;
    image: string;
    seen: boolean;
    created_at: string;
}

export interface RawFriendRequest {
    id: string;
    title: string;
    subTitle: number | string;
    image: string;
}
export interface RawFriend {
    id: string;
    name: string;
    avatar:string;
    title: string;

}
export interface RawListSearch {
    id: string;
    name: string;
    avatar:string;

}
