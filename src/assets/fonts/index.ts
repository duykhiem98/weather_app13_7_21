import {Platform} from "react-native";

export const Fonts = {
    Regular: Platform.OS === 'ios' ? 'Roboto-Regular' : "Roboto-Regular",
    Light: Platform.OS === 'ios' ? 'Roboto-Light' : "Roboto-Light",
    Bold: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto-Bold',
    Medium: Platform.OS === 'ios' ? 'Roboto-Medium' : 'Roboto-Medium',
    SemiBold: Platform.OS === 'ios' ? 'Roboto-SemiBold' : 'Roboto-SemiBold',
};

