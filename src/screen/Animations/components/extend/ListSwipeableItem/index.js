import AppItemSwipeableRow from '@element/AppItemSwipeableRow';
import { AppText } from '@element/AppText';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React from 'react';
import { FlatList, StyleSheet, View, I18nManager, Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const DataMapSwipeable = [{
    id: 1,
    title: "Item 1",
    status: "1"
}, {
    id: 2,
    title: "Item 2",
    status: "2"
}];


const ListSwipeableItem = (item, index) => {
    const renderLeftComponent = () => {
        return (
            <RectButton
                style={{ height: 60, width: 200, backgroundColor: 'red' }}>

            </RectButton>
        )
    }
    const renderItemSwipeable = ({item, index}) => {
        console.log("item", item);
        return <AppItemSwipeableRow
            renderLeftComponent={renderLeftComponent}
            renderRightComponent={renderRightComponent}>
            <View style={{ height: 100, width: SizeRpScreen.device_width, backgroundColor: 'green', alignItems: "center", justifyContent: "center" }}>
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
            this.close();
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

    const renderRightComponent = (progress, _dragAnimatedValue) => {
        console.log("progress", progress)
        console.log("_dragAnimatedValue", _dragAnimatedValue);
        return (
            <View
                style={{
                    width: SizeRpScreen.width(65),
                    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
                }}>
                {renderRightElement('More', '#C8C7CD', 192, progress)}
                {renderRightElement('Flag', '#ffab00', 128, progress)}
                {renderRightElement('More', '#dd2c00', 64, progress)}
            </View>
        );
    }


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

