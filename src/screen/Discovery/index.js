import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { AppContainer } from "../../element/AppContainer";
import Menudiscovery from "./component/MenuDiscovery";
// import { keyNavigation } from "../../navigation/KeyNavigations";

function Discovery({ navigation, router }) {
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
                <Menudiscovery></Menudiscovery>
            </View>
        );
    };

    return (
        <AppContainer
            useLinearGradient={false}
            nameScreen={"Khám phá"}
            goBackScreen={false}
            flexWrapHeader
        >
            {renderContent()}
        </AppContainer>
    );
}
export default React.memo(Discovery);

const styles = StyleSheet.create({
    containerContent: {
        flex: 1,
        alignItems: "center"
    }
});
