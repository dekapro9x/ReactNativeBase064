import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

const SubMenu = (props: any) => {
    const {dataSubMenu} = props;
    return <View style={styles.container}>

    </View>
}

SubMenu.propTypes = {
    dataSubMenu: PropTypes.array.isRequired
  };

const styles = StyleSheet.create({
    container: {
        height: SizeRpScreen.device_width * 55 / 100,
        width: SizeRpScreen.device_width * 95 / 100,
        backgroundColor: "red",
        alignSelf: "center",
        borderRadius:12
    }
})
export { SubMenu }