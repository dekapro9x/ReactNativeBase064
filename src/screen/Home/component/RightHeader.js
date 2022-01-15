
import { lightBlue800, lightBlueA700 } from '@css/Color';
import { AppIcon } from '@element/AppIcon';
import { AppSetting } from '@element/AppSetting';
import { keyNavigation } from '@navigation/KeyNavigations';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import ServiceAppModalContent from '@services/ServiceAppModalContent';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';


export const RightHeaderComponent = () => {

    const pressElementRightHeader = keyActions => () => {
        switch (keyActions) {
            case "JS_DefaultScreen":
                navigation.navigate(keyNavigation.BASIC_JS);
                break;
            case "TS_DefaultScreen":
                navigation.navigate(keyNavigation.BASIC_TS);
                break;
            case "Setting":
                ServiceAppModalContent.showModal(<AppSetting />);
                break;
        }
    };

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <TouchableOpacity
                onPress={pressElementRightHeader("JS_DefaultScreen")}
                style={styles.touchConfigColorApp}
            >
                <AppIcon
                    type="AntDesign"
                    name="twitter"
                    iconSize={25}
                    color={lightBlue800}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={pressElementRightHeader("TS_DefaultScreen")}
                style={styles.touchConfigColorApp}
            >
                <AppIcon
                    type="AntDesign"
                    name="facebook-square"
                    iconSize={25}
                    color={lightBlueA700}
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={pressElementRightHeader("Setting")}
                style={styles.touchConfigColorApp}
            >
                <AppIcon
                    type="Ionicons"
                    name="settings"
                    iconSize={25}
                    color="black"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    touchConfigColorApp: {
        flex: 1,
        width: 45,
        alignItems: "center",
        justifyContent: "center"
    }
});
