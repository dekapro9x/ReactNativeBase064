import { greenA700 } from '@css/Color';
import AppLinearGradient from '@element/AppLinearGradient';
import { AppRecordSoundTouch } from '@element/AppRecordSoundTouch';
import { AppText } from '@element/AppText';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const RecordSoundTouch = () => {
    const [resolveSound, setStateResolveSound] = useState("");

    const getSoundResource = (keyResound, arrSoundText, errorMess) => {
        console.log("Kết quả âm thanh:", arrSoundText);
        if (Array.isArray(arrSoundText) && arrSoundText.length > 0) {
            if (keyResound == "PartResults") {
                //1 phần âm thanh được chuyển đổi:
                setStateResolveSound(arrSoundText[0]);
            } else {
                //Toàn bộ âm thanh chuyển đổi:
                setStateResolveSound(arrSoundText[0]);
            }
        } else {
            if (keyResound == "ErrorResult") {
                console.log("Lỗi âm thanh", errorMess);
                setStateResolveSound(`Không phân tích được âm thanh: \n${errorMess.code}=>${errorMess.message}`)
            }
        }
    }

    return (
        <AppLinearGradient style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <AppRecordSoundTouch getSoundResource={getSoundResource}></AppRecordSoundTouch>
            <AppText style={{ fontSize: 20, color: "#FFFFFF", marginTop: 10 }}>Kết quả phân tích âm thanh:</AppText>
            <AppText style={{ textAlign: "center", color: greenA700, fontSize: 25, marginTop: 12 }}>{`${resolveSound}`}</AppText>
        </AppLinearGradient>
    );
}

const styles = StyleSheet.create({})

export default RecordSoundTouch;
