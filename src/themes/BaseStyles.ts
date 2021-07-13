import {StyleSheet} from "react-native";
import {Colors} from "@/themes/Colors";

export const BaseStyles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    ph16: {
        paddingHorizontal: 16
    },
    ph20: {
        paddingHorizontal: 20
    },
    ph9: {
        paddingHorizontal: 9
    },
    pb16: {
        paddingBottom: 16
    },
    mv16: {
        marginVertical: 16
    },
    mt20: {
        marginTop: 20,
    },
    mt16: {
        marginTop: 16,
    },
    pt16: {
        paddingTop: 16,
    },
    pt8: {
        paddingTop: 8,
    },
    mt12: {
        marginTop: 12,
    },
    mb16: {
        marginBottom: 16,
    },
    mr16: {
        marginRight: 16
    },
    ml16: {
        marginLeft: 16
    },
    ml8: {
        marginLeft: 8
    },
    ml4: {
        marginLeft: 4
    },
    mr20: {
        marginRight: 20
    },
    mr4: {
        marginRight: 4
    },
    ml20: {
      marginLeft: 20
    },
    pl4: {
      paddingLeft: 4
    },
    pl8: {
      paddingLeft: 8
    },
    pl16: {
      paddingLeft: 16
    },
    pl20: {
      paddingLeft: 20
    },
    mb20: {
        marginBottom: 20,
    },
    alignItemCenter: {
      alignItems: 'center'
    },
    justifySpaceAround: {
      justifyContent: 'space-around'
    },
    justifySpaceBetween: {
      justifyContent: 'space-between'
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 2},
        textShadowRadius: 3,
    },
    viewShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    viewShadowBig: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    },
    viewShadowBlue: {
        shadowColor: Colors.blue1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});
