import { DiscoveryMenu } from '@const/DiscoveryMenu';
import { ContextContainer } from '@context/AppContext';
import { green400, white } from '@css/Color';
import { AppIcon } from '@element/AppIcon';
import { AppText } from '@element/AppText';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, } from 'react-native';


const Menudiscovery = () => {
    const { colorApp } = useContext(ContextContainer);
    const renderHeaderFlatList = () => {

    }

    const navigateToScreen = (item) => () => {
        console.log("item Click", item);
    }

    const renderItemMenu = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={navigateToScreen(item)}
                style={{ height: SizeRpScreen.device_height * 0.12, width: SizeRpScreen.device_width / 2 - 10, backgroundColor: white, margin: 5, borderWidth: SizeRpScreen.device_width * 0.01, borderColor: green400, borderRadius: 12, alignItems: "center", justifyContent: "center" }}>
                <AppIcon type={item.iconType} name={item.iconName} color={item.iconColor} iconSize={item.iconSizeMenu}>
                </AppIcon>
                <AppText style={{ fontSize: 16 }}>{item.title}</AppText>
            </TouchableOpacity>
        )
    }
    return (
        <View style={[styles.menudiscovery, { backgroundColor: colorApp.backgroundColor }]}>
            <FlatList
                numColumns={2}
                nestedScrollEnabled={true}
                ListHeaderComponent={renderHeaderFlatList()}
                data={DiscoveryMenu}
                keyExtractor={(_item, index) => index.toString()}
                renderItem={renderItemMenu}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    menudiscovery: {
        width: SizeRpScreen.width(100),
        minHeight: SizeRpScreen.device_height,
        alignItems: "center"
    }
})

export default Menudiscovery;
