import { ContextContainer } from '@context/AppContext';
import { keyNavigation } from '@navigation/KeyNavigations';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import AnimationCell from '@screen/Animations/components/lib/animatable/AnimationCell';
import { navigate } from '@services/NavigationService';
import React, { useContext } from 'react';
import { SectionList, StyleSheet } from "react-native";
import { createAnimatableComponent, View } from 'react-native-animatable';
import { AppImage } from './AppImage';

const AnimatableSectionList = createAnimatableComponent(SectionList);

const AppDrawer = (props) => {
    const { canRenderDrawer, dataMenuDrawer } = props;
    const NATIVE_INCOMPATIBLE_ANIMATIONS = [
        'jello',
        'lightSpeedIn',
        'lightSpeedOut',
    ];
    const COLORS = [
        '#65b237', // green
        '#346ca5', // blue
        '#a0a0a0', // light grey
        '#ffc508', // yellow
        '#217983', // cobolt
        '#435056', // grey
        '#b23751', // red
        '#333333', // dark
        '#ff6821', // orange
        '#e3a09e', // pink
        '#1abc9c', // turquoise
        '#302614', // brown
    ];
    const { colorApp } = useContext(ContextContainer);

    const handleRowPressed = (item, index) => () => {
        console.log("item", item);
        console.log("index", index);
        switch (index) {
            case 0:
                navigate(keyNavigation.INFO_DEVICES_AND_APP);
                break;
        }
    };

    if (canRenderDrawer) {
        return (
            <View style={{ flex: 1, backgroundColor: colorApp.backgroundColor }}>
                <AnimatableSectionList
                    animation="bounceInUp"
                    contentInsetAdjustmentBehavior="automatic"
                    duration={1100}
                    delay={1400}
                    keyExtractor={item => item}
                    sections={dataMenuDrawer}
                    removeClippedSubviews={false}
                    renderSectionHeader={({ section }) => (
                        <AppImage
                            source={{
                                uri: "https://isoftglobe.com/wp-content/uploads/2021/02/react-native.png"
                              }}
                            style={{
                                width: SizeRpScreen.width(72),
                                height: SizeRpScreen.height(20),
                                marginBottom: 5
                            }}
                            resizeMode={'cover'}
                        >
                        </AppImage>
                    )}
                    renderItem={({ item, index }) => (
                        <AnimationCell
                            animationType={item}
                            color={COLORS[index % COLORS.length]}
                            onPress={handleRowPressed(item, index)}
                            useNativeDriver={
                                NATIVE_INCOMPATIBLE_ANIMATIONS.indexOf(item) === -1
                            }
                        />
                    )}
                />
            </View>
        );
    }
    return null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginBottom: 20
    },
    title: {
        fontSize: 28,
        fontWeight: '300',
        textAlign: 'center',
        margin: 20,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 20,
        backgroundColor: 'transparent',
    },
    slider: {
        height: 30,
        margin: 10,
    },
    toggle: {
        width: 120,
        backgroundColor: '#333',
        borderRadius: 3,
        padding: 5,
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center',
        margin: 10,
        color: 'rgba(255, 255, 255, 1)',
    },
    toggledOn: {
        color: 'rgba(255, 33, 33, 1)',
        fontSize: 16,
        transform: [
            {
                rotate: '8deg',
            },
            {
                translateY: -20,
            },
        ],
    },
    sectionHeader: {
        backgroundColor: '#F5FCFF',
        padding: 15,
        minHeight: SizeRpScreen.height(20)
    },
    sectionHeaderText: {
        textAlign: 'center',
        fontSize: 18,
    },
});

export default AppDrawer;
