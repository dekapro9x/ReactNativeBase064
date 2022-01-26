import { AppContainerScrollHeaderAnimated } from "@element/AppContainerScrollHeaderAnimated";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DebounceButton } from "../../element/DebounceButton";
// import { keyNavigation } from "../../navigation/KeyNavigations";

function PushNotifications({ navigation, router }) {
    useLayoutEffect(() => {
        return () => { };
    }, []);

    useEffect(() => { }, []);

    const navigateAppIntro = () => {
        // navigation.navigate(keyNavigation.APP_INTRO);
    };

    const renderContent = () => {
        return (
            <View style={[styles.containerContent]}>
                <Text>Basic JS Screen</Text>
                <DebounceButton
                    useLoading={false}
                    useDelay={false}
                    onPress={navigateAppIntro}
                />
            </View>
        );
    };

    return (
        <AppContainerScrollHeaderAnimated
            useLinearGradient={true}
            nameScreen={"Thông báo"}
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
