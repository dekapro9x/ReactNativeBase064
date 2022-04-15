import { AppContainerScrollHeaderAnimated } from "@element/AppContainerScrollHeaderAnimated";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DebounceButton } from "../../element/DebounceButton";

function PushNotifications({ navigation, router }) {
    useLayoutEffect(() => {
        return () => { };
    }, []);

    useEffect(() => { }, []);

    const navigateAppIntro = () => {
    };

    const renderContent = () => {
        return (
            <View style={[styles.containerContent]}>
               
            </View>
        );
    };

    return (
        <AppContainerScrollHeaderAnimated
            useLinearGradient={false}
            nameScreen={"THÔNG BÁO"}
            goBackScreen={false}
            flexWrapHeader
        >
            {renderContent()}
        </AppContainerScrollHeaderAnimated>
    );
}
export default React.memo(PushNotifications);

const styles = StyleSheet.create({
    containerContent: {
        minHeight: SizeRpScreen.device_height * 2,
        minWidth: SizeRpScreen.device_width,
        alignItems: "center"
    }
});
