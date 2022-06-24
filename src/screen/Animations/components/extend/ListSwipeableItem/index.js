import { colorArray, green200, green500, white } from '@css/Color';
import AppItemSwipeableRow from '@element/AppItemSwipeableRow';
import { AppText } from '@element/AppText';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React from 'react';
import { FlatList, StyleSheet, View, I18nManager, Animated, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const DataMapSwipeable = [{
    id: 1,
    title: "Item 1",
    backgroundColor: colorArray[0]
}, {
    id: 2,
    title: "Item 2",
    backgroundColor: colorArray[1]
},
{
    id: 3,
    title: "Item 3",
    backgroundColor: colorArray[2]
},
{
    id: 4,
    title: "Item 4",
    backgroundColor: colorArray[3]
},
{
    id: 5,
    title: "Item 5",
    backgroundColor: colorArray[4]
},
{
    id: 6,
    title: "Item 6",
    backgroundColor: colorArray[5]
},
];


const ListSwipeableItem = (item, index) => {
    const renderLeftComponent = () => {
        return (
            <RectButton
                style={{ height: "100%", width: 120, backgroundColor: 'red', alignItems: "center", justifyContent: "center" }}>
                <AppText style={{ fontSize: 16, color: white }}>More</AppText>
            </RectButton>
        )
    }
    const renderRightComponent = (progress, _dragAnimatedValue) => {
        return (
            <View
                style={{
                    width: SizeRpScreen.width(100),
                    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
                }}>
                {renderRightElement('More', '#C8C7CD', 192, progress)}
                {renderRightElement('Flag', '#ffab00', 128, progress)}
                {renderRightElement('More', '#dd2c00', 64, progress)}
            </View>
        );
    }

    const renderItemSwipeable = ({ item, index }) => {
        return <AppItemSwipeableRow
            renderLeftComponent={renderLeftComponent}
            renderRightComponent={renderRightComponent}>
            <View style={{ height: 100, width: SizeRpScreen.device_width, backgroundColor: item.backgroundColor, alignItems: "center", justifyContent: "center" }}>
                <AppText style={{ fontSize: 25, fontWeight: 'bold' }}>{item.title}</AppText>
            </View>
        </AppItemSwipeableRow>
    }

    const renderRightElement = (text, color, x, progress) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });

        const pressHandler = () => {
            Alert.alert(text);
        };

        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton
                    style={[styles.rightAction, { backgroundColor: color }]}
                    onPress={pressHandler}>
                    <AppText style={styles.actionText}>{text}</AppText>
                </RectButton>
            </Animated.View>
        );
    };

    return (
        <FlatList
            data={DataMapSwipeable}
            keyExtractor={(item, index) => { `${item.id}${index}` }}
            renderItem={renderItemSwipeable}
        />
    );
}

const styles = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: '#497AFC',
        justifyContent: 'center',
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export { ListSwipeableItem };

