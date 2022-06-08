import { postAPI } from '@api/AxiosAPI';
import { Api } from '@api/ListAPI';
import { IP_CONFIG } from '@api/Setting';
import { FontAppType } from '@const/TypeFontFamily';
import { black, blue900, blueGrey900 } from '@css/Color';
import AppLinearGradient from '@element/AppLinearGradient';
import { AppText } from '@element/AppText';
import { AppTextInput } from '@element/AppTextInput';
import { DebounceButton } from '@element/DebounceButton';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const FetchAPI = () => {
    const [userName, setStateUserName] = useState("");
    const [passWord, setStatePassWord] = useState("");
    const [responseAPI, setStateResponseAPI] = useState({});
    const server = IP_CONFIG;

    const onChangeText = (keyState, value) => {
        switch (keyState) {
            case "userName":
                setStateUserName(value);
                break;
            case "passWord":
                setStatePassWord(value);
                break;
        }
    };

    const onEndEditing = () => {

    }

    const pressLogin = async () => {
        const dataRequest = {
            body: {
                ten_dang_nhap: userName,
                mat_khau: passWord,
            }
        }
        const response = await postAPI(Api.login(), dataRequest);
        console.log("response", response);
        if (response && response.code == 1000 && !response.isError) {
            setStateResponseAPI(response);
        } else {
            setStateResponseAPI(response);
        }
    }

    return (
        <AppLinearGradient>
            {/* Tên tài khoản */}
            <AppTextInput
                value={userName}
                useClean={true}
                keyState={"userName"}
                titleTextInput={"Tài khoản:"}
                placeholder={"User name"}
                styleContainer={styles.textInput}
                styleTitle={styles.textTitleInput}
                styleInput={styles.styleInput}
                onChangeText={onChangeText}
                onEndEditing={onEndEditing}
            />
            {/* Mật khẩu */}
            <AppTextInput
                value={passWord}
                useClean={true}
                keyState={"passWord"}
                titleTextInput={"Mật khẩu:"}
                placeholder={"Pass Word"}
                styleContainer={styles.textInput}
                styleTitle={styles.textTitleInput}
                styleInput={styles.styleInput}
                onChangeText={onChangeText}
                onEndEditing={onEndEditing}
            />
            <AppText style={{ fontSize: 16, color: 'white', alignSelf: "center", marginTop: 45 }}>{server}</AppText>
            <AppText style={{ fontSize: 16, color: 'white', alignSelf: "center", marginTop: 15 }}>API:{Api.login()}</AppText>
            <AppText style={{ fontSize: 16, color: 'white', alignSelf: "center", marginTop: 15 }}>Response API</AppText>
            <AppText style={{ fontSize: 16, color: 'white', alignSelf: "center", marginTop: 15, color: black, fontSize: 16 }}> {responseAPI?.mess}</AppText>
            <AppText style={{ fontSize: 16, color: 'white', alignSelf: "center", marginTop: 15, color: blue900, fontSize: 14, textAlign: 'center'}}> {responseAPI?.token}</AppText>
            {/* Nút login */}
            <DebounceButton
                title="Login"
                useLoading={false}
                useDelay={true}
                onPress={pressLogin}
                style={{
                    borderRadius: 0,
                    marginLeft: 6,
                    backgroundColor: blueGrey900,
                    marginTop: 50,
                    borderRadius: 12
                }}
            >
            </DebounceButton>
        </AppLinearGradient>
    );
}

const styles = StyleSheet.create({
    textInput: {
        width: SizeRpScreen.width(90),
        marginTop: 12,
        alignSelf: "center",
        marginHorizontal: 8
    },
    textTitleInput: {
        fontFamily: FontAppType.LetterMagic,
        fontSize: 12,
        color: "black"
    },
    btnSearch: {
        height: 45, width: 45, backgroundColor: "green"
    },
    styleInput: {
    }
})

export default FetchAPI;
