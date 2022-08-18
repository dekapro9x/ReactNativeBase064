// import firebase from '@react-native-firebase/app';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
// import auth from '@react-native-firebase/auth';
import {
    GoogleSignin, statusCodes
} from '@react-native-google-signin/google-signin';

const googleConfig = {
        scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
        webClientId:
          "965809574853-hq897v5sh2hq64s3p1m19gtrcnsffknk.apps.googleusercontent.com",
      }

const FireBaseAuth = () => {
    const [userInfo, setStateUserInfo] = useState(null);

    const listButtonAuth = [
        { id: 1, name: "Google", icon: "", backgroundColor: "red", onPress: () => { authenGoogle() } },
    ]

    useEffect(() => {
        GoogleSignin.configure(googleConfig);
        return () => {

        };
    }, []);

    const authenGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const userInfo = await GoogleSignin.signIn();
            setStateUserInfo(userInfo);
        } catch (error) {
            console.log("Lỗi đăng nhập google:", error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    const renderListButtonAuth = () => {
        return listButtonAuth.map((item, index) => {
            return (
                <TouchableOpacity
                    onPress={item.onPress}
                    key={`${index}`}
                    style={[styles.touchAuth, { backgroundColor: item.backgroundColor }]}>
                </TouchableOpacity>
            )
        })
    }
    return (
        <View style={styles.container}>
            {renderListButtonAuth()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: SizeRpScreen.device_height, width: SizeRpScreen.device_width, justifyContent: 'center'
    },
    touchAuth: {
        height: 45,
        width: SizeRpScreen.width(50),
        alignSelf: "center",
        marginTop: 12,
        borderRadius: 12,
        borderWidth: 2
    }
})

export default FireBaseAuth;
