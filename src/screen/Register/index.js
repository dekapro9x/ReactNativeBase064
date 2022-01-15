import { ContextContainer } from "@context/AppContext";
import { AppImage } from "@element/AppImage";
import { AppText } from "@element/AppText";
import { AppTextInput } from "@element/AppTextInput";
import { DebounceButton } from "@element/DebounceButton";
import { BEOTRAN_LOGGER } from "@util/Loger";
import React, { useContext, useRef } from "react";
import { Alert, StyleSheet, View, ScrollView } from "react-native";
import { white } from "../../const/Color";
import { FontAppType } from "../../const/TypeFontFamily";
import { AppContainer } from "../../element/AppContainer";
import { keyNavigation } from "../../navigation/KeyNavigations";
import { SizeRpScreen } from "../../resources/ResponsiveScreen";
export default function Register({ navigation, router }) {
    const { logoApp } = useContext(ContextContainer);
    const useName = useRef("");
    const passWord = useRef("");
    const email = useRef("");
    const address = useRef("");

    const navigateLogin = () => {
        navigation.replace(keyNavigation.LOGIN);
    };

    const onChangeText = (keyState, value) => {
        switch (keyState) {
            case "UserName":
                useName.current = value;
                break;
            case "Password":
                passWord.current = value;
                break;
        }
    };

    const pressLogin = () => {
        if (validateAccountRegister()) {
            navigateLogin();
        }
    };

    const validateAccountRegister = () => {
        BEOTRAN_LOGGER(useName.current, passWord.current);
        if (!useName.current) {
            Alert.alert("Đăng nhập không chính xác", "Tài khoản là bắt buộc");
            return false;
        }
        if (!passWord.current) {
            Alert.alert("Đăng nhập không chính xác", "Mật khẩu là bắt buộc");
            return false;
        }
        if (useName.current && passWord.current) {
            return true;
        }
    };

    const renderContent = () => {
        return (
            <View style={[styles.containerContent]}>
                {/* IconApp */}
                <View style={styles.appIconContainer}>
                    <AppImage
                        source={{
                            uri: logoApp
                        }}
                        resizeMode="stretch"
                        style={{ height: SizeRpScreen.width(20), width: SizeRpScreen.width(20) }}>
                    </AppImage>
                </View>
                {/* Form nhập tài khoản */}
                <ScrollView>
                    <View style={styles.containerFormInput}>
                        <AppText style={styles.textTitle}>
                            Well come to React Native Base
                        </AppText>
                        <AppText style={[styles.textTitle, { fontSize: 14 }]}>
                            Discovery Every Thing Around You!
                        </AppText>
                        <AppTextInput
                            useClean={true}
                            keyState={"UserName"}
                            titleTextInput={"UserName"}
                            placeholder={"UserName"}
                            styleContainer={styles.textInput}
                            styleTitle={styles.textTitleInput}
                            onChangeText={onChangeText}
                        />
                        <AppTextInput
                            secureTextEntry={true}
                            useClean={true}
                            keyState={"Password"}
                            titleTextInput={"Password"}
                            placeholder={"Password"}
                            styleContainer={styles.textInput}
                            styleTitle={styles.textTitleInput}
                            onChangeText={onChangeText}
                        />
                          <AppTextInput
                            useClean={true}
                            keyState={"Email"}
                            titleTextInput={"Email"}
                            placeholder={"Email"}
                            styleContainer={styles.textInput}
                            styleTitle={styles.textTitleInput}
                            onChangeText={onChangeText}
                        />
                          <AppTextInput
                            useClean={true}
                            keyState={"Address"}
                            titleTextInput={"Address"}
                            placeholder={"Address"}
                            styleContainer={styles.textInput}
                            styleTitle={styles.textTitleInput}
                            onChangeText={onChangeText}
                        />
                          <AppTextInput
                            useClean={true}
                            keyState={"UserName"}
                            titleTextInput={"UserName"}
                            placeholder={"UserName"}
                            styleContainer={[styles.textInput, {marginBottom:12}]}
                            styleTitle={styles.textTitleInput}
                            onChangeText={onChangeText}
                        />
                    </View>
                </ScrollView>
                <DebounceButton
                    useDelay={true}
                    onPress={pressLogin}
                    loadingColor="#FFFFFF"
                    title={"Register"}
                    textStyle={{
                        color: "#FFFFFF",
                        fontSize: SizeRpScreen.H5 * 1.2,
                        fontWeight: "bold",
                        textAlign: "center"
                    }}
                    style={{
                        backgroundColor: "#06B050",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center"
                    }}
                />
            </View>
        );
    };

    return (
        <AppContainer
            nameScreen={""}
            goBackScreen={false}
            flexWrapHeader>
            {renderContent()}
        </AppContainer>
    );
}

const styles = StyleSheet.create({
    containerContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    linearGradientContainer: {
        flex: 1
    },
    containerFormInput: {
        flex: 1,
        minHeight: SizeRpScreen.width(65),
        backgroundColor: "#781E3A",
        marginTop: 12,
        borderRadius: 12
    },
    appIconContainer: {
        height: SizeRpScreen.width(20),
        width: SizeRpScreen.width(20),
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12,
        backgroundColor: "#D64BFE"
    },
    textTitle: {
        fontSize: SizeRpScreen.H4,
        color: white,
        fontFamily: FontAppType.LetterMagic,
        alignSelf: "center"
    },
    textTitleInput: {
        fontFamily: FontAppType.LetterMagic,
        fontSize: 12
    },
    containerOsConnectUsing: {
        height: 60,
        flexDirection: "row",
        width: SizeRpScreen.width(80),
        alignSelf: "center",
        marginTop: 30,
        justifyContent: "space-between",
        alignItems: "center"
    },
    oSConnectItem: {
        height: 50,
        width: 50,
        backgroundColor: white,
        borderRadius: 12
    },
    textInput: {
        width: SizeRpScreen.width(90),
        marginTop: 12,
        alignSelf: "center",
        marginHorizontal: 8
    }
});
