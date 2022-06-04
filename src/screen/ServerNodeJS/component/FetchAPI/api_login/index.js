import { postAPI } from '@api/AxiosAPI';
import { Api } from '@api/ListAPI';
import { FontAppType } from '@const/TypeFontFamily';
import { blueGrey900 } from '@css/Color';
import { AppTextInput } from '@element/AppTextInput';
import { DebounceButton } from '@element/DebounceButton';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const FetchAPI = () => {
    const [userName, setStateUserName] = useState("");
    const [passWord, setStatePassWord] = useState("");

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
        console.log("useName:", userName);
        console.log("passWord:", passWord);
        const dataRequest = {
            body: {
                ten_dang_nhap: userName,
                mat_khau: passWord,
            }
        }
        const response = await postAPI(Api.login(), dataRequest);
        console.log("response", response);
    }

    return (
        <View style={{ height: SizeRpScreen.device_height, width: SizeRpScreen.device_width, alignItems: "center" }}>
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
        </View>
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
        borderWidth: 2
    }
})

export default FetchAPI;
