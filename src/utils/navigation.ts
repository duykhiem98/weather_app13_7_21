import React from 'react';
import {
    NavigationContainerRef,
    StackActions,
} from '@react-navigation/native';

import {TransitionPresets} from "@react-navigation/stack";
import {CommentScreenProps} from "@/screens/Comment/CommentScreen";
import { ChatScreenProps } from "@/screens/MessScreens/components/ChatScreen";
import {ProfileScreenProps} from "@/screens/ProfileScreen/ProfileScreen"

import {MarketDetailScreenProps} from "@/screens/Market/MarketDetailScreen";
import { ListFriendProps } from "@/screens/ProfileScreen/components/ListFriend";
import {SelectAlbumProps} from '@/screens/SelectAlbum/SelectAlbumScreen'
import {WritePostScreenProps} from "@/screens/Write/WritePostScreen";
import { ChangeProfileProps } from "@/screens/ChangeProfile/ChangeProfileScreen";
import { SearchScreenProps } from "@/screens/Preload/SearchScreen";
import { SearchFullScreenProps } from "@/screens/SearchScreen/SearchFullScreen";

export const defaultScreenOptions = TransitionPresets.SlideFromRightIOS;

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigation = () => navigationRef.current!;

export const createNavigate = <T extends object>(screenName: string) => (
    params?: T,
) => {
    return navigation().navigate(screenName, params);
};

export const createPush = <T extends object>(screenName: string) => (
    params?: T,
) => {
    return navigation().dispatch(StackActions.push(screenName, params))
};


export const createReplace = <T extends object>(screenName: string) => (
    params?: T,
) => {
    return navigation().dispatch(StackActions.replace(screenName, params))
};


export const goBack = () => navigation().goBack();


export const replaceWithMainScreen = createReplace(
    'Main'
);

export const navigateToOTPScreen = createNavigate(
    'OTPScreen'
);

export const navigateToLoginScreen = createNavigate(
    'LoginScreen'
);

export const replaceToLoginScreen = createReplace(
    'LoginScreen'
);

export const navigateToLoginManualScreen = createNavigate(
    'LoginManualScreen'
);

export const navigateToRegisterScreen = createNavigate(
    'RegisterScreen'
);

export const navigateToRegisterManualScreen = createNavigate(
    'RegisterManualScreen'
);

export const navigateMessengerScreen = createNavigate<ChatScreenProps>(
    'MessengerScreen'
);

export const openCommentScreen = createNavigate<CommentScreenProps>(
    'CommentScreen'
);

export const openWritePostScreen = createNavigate<WritePostScreenProps>(
    'WritePostScreen'
);

export const navigateFriendlyRequestScreen = createNavigate(
    'FriendlyRequestScreen'
);

export const navigateFriendlySuggestScreen = createNavigate(
    'FriendlySuggestScreen'
);
export const navigateProfileScreen = createNavigate<ProfileScreenProps>(
  'ProfileScreen'
);

export const navigateMarketDetailScreen = createNavigate<MarketDetailScreenProps>(
    'MarketDetailScreen'
);
export const navigateListFriendScreen = createNavigate<ListFriendProps>(
  'ListFriend'
);
export const navigateSearchScreen = createNavigate<SearchScreenProps>(
  'SearchScreen'
);
export const navigateChangeProfileScreen = createNavigate<ChangeProfileProps>(
  'ChangeProfile'
);
export const navigationSearchFriend=createNavigate<ListFriendProps>(
  'SearchFriends'
);
export const navigateSearchFull=createNavigate<SearchFullScreenProps>(
  'SearchFullScreen'
);


export const navigateSelectAlbumScreen = createNavigate<SelectAlbumProps>(
    'SelectAlbumScreen'
);

export const navigateCreateAlbumScreen = createNavigate('CreateAlbumScreen');

export const navigatePageScreen = createNavigate('PageScreen');

export const navigateGroupScreen = createNavigate('GroupScreen');

/**
 * USAGE EXAMPLE:
 *
 * type-safe NAVIGATE to EditUser screen with required userId props
 * const navigateToEditUser = createNavigate<{userId: string}>('EditUser');
 * -> use: navigateToEditUser({userId: '123'});
 *
 *
 * type-safe NAVIGATION to multiple screens
 * const profileNavigation = createNavigation<{EditUser: {userId: string}, Profile: undefined}>();
 *
 * -> use
 * - navigate to EditUser screen
 * profileNavigation().navigate('EditUser', {userId: '123'});
 * - navigate to Profile screen
 * profileNavigation().navigate('Profile');
 *
 * It's all auto completed. Enjoy!
 */
