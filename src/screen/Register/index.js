import React, { useEffect, useLayoutEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DebounceButton } from "../../element/DebounceButton";
import { ContextContainer } from "../../context/AppContext";
import { AppContainer } from "../../element/AppContainer";
import { keyNavigation } from "../../navigation/KeyNavigations";

function Register({ navigation, router }) {
    const { colorApp } = useContext(ContextContainer);
    useLayoutEffect(() => {
        return () => { };
    }, []);

    useEffect(() => { }, []);

    const navigateAppIntro = () => {
        navigation.navigate(keyNavigation.APP_INTRO);
    };

    // const renderContent = () => {
    //     return (
    //         <View
    //             style={
    //                 (
    //                     [styles.containerContent,
    //                     { backgroundColor: colorApp.backgroundColor }]
    //                 )
    //             }
    //         >
    //             <Text>Basic JS Screen</Text>
    //             <DebounceButton useDelay={false} onPress={navigateAppIntro} />
    //         </View>
    //     );
    // };

    return (
        <AppContainer
            nameScreen={""}
            goBackScreen={false}
            flexWrapHeader
        >
            {/* {renderContent()} */}
        </AppContainer>
    );
}
export default React.memo(Register);

const styles = StyleSheet.create({
    containerContent: {
        flex: 1,
        alignItems: "center"
    }
});
