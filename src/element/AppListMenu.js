import { AppContainer } from "@element/AppContainer";
import { AppText } from "@element/AppText";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { BackHandler, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { View as ViewAnimated } from 'react-native-animatable';
import PropTypes from 'prop-types';


const AppListMenuComponent: FunctionComponent = (props: any) => {

    const [showListMenuComponentAppListMenu, setStateShowListMenuComponent] = useState(false);
    const [listItemAppListMenuRender, setStateListItemAppListMenuRender] = useState([]);
    const [renderAnimated, setStateRenderAnimated] = useState(false);
    const [animatedComponent, setStateAnimatedComponent] = useState(null);
    const listItemAppListMenuRenderLast = useRef([]);

    useEffect(() => {
        const backAction = () => {
            if (renderAnimated && Array.isArray(listItemAppListMenuRenderLast.current) && listItemAppListMenuRenderLast.current.length > 0) {
                setStateRenderAnimated(false);
                setStateListItemAppListMenuRender(listItemAppListMenuRenderLast.current);
            }
            if (showListMenuComponentAppListMenu) {
                if (renderAnimated) {
                    setStateShowListMenuComponent(true);
                } else {
                    setStateShowListMenuComponent(false);
                }
            } else {
                const { navigation } = props;
                navigation.goBack();
            }
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, [showListMenuComponentAppListMenu, renderAnimated]);

    const renderAnimatedComponent = () => {
        if (animatedComponent) {
            return animatedComponent.component;
        } else {
            return null
        }
    }

    const renderContent = () => {
        const { MenusAppList } = props;
        if (renderAnimated) {
            return (<SafeAreaView style={styles.content}>
                <View style={[{ minHeight: SizeRpScreen.height(100), width: SizeRpScreen.width(100), alignItems: 'center', justifyContent: "center" }]}>
                    {renderAnimatedComponent()}
                </View>
            </SafeAreaView>)
        }
        //List sub menu:
        if (showListMenuComponentAppListMenu) {
            return (
                <SafeAreaView style={styles.content}>
                    <View style={[{ minHeight: SizeRpScreen.height(100), width: SizeRpScreen.width(100) }]}>
                        {Array.isArray(listItemAppListMenuRender) && listItemAppListMenuRender.map((itemRenderAnimated: any, indexRenderAnimated: number) => {
                            return (
                                <ViewAnimated
                                    key={`${indexRenderAnimated}`}
                                    animation="slideInLeft"
                                    useNativeDriver
                                    delay={(indexRenderAnimated + 1) * 500}
                                >
                                    <TouchableOpacity
                                        onPress={() => {
                                            setStateRenderAnimated(true);
                                            setStateAnimatedComponent(itemRenderAnimated);
                                        }}
                                        style={styles.buttonActionsMenu}>
                                        <AppText style={{}}>
                                            {itemRenderAnimated.name}
                                        </AppText>
                                    </TouchableOpacity>
                                </ViewAnimated>
                            )
                        })}
                    </View>
                </SafeAreaView>
            )
        }
        //Menu:
        return (
            <SafeAreaView style={styles.content}>
                {Array.isArray(MenusAppList) && MenusAppList.map((itemMenuAnimated: any, index: number) => {
                    return (
                        <ViewAnimated
                            key={`${index}`}
                            animation="fadeIn"
                            useNativeDriver
                            delay={(index + 1) * 500}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    setStateShowListMenuComponent(true);
                                    setStateListItemAppListMenuRender(itemMenuAnimated.data);
                                    listItemAppListMenuRenderLast.current = itemMenuAnimated.data;
                                }}
                                style={styles.buttonActionsMenu}>
                                <AppText style={{}}>
                                    {itemMenuAnimated.keyName}
                                </AppText>
                            </TouchableOpacity>
                        </ViewAnimated>
                    )
                })}
            </SafeAreaView>
        );
    }
    return (
        <AppContainer
            useLinearGradient={false}
            nameScreen={"AppListMenu"}
            goBackScreen={false}
            flexWrapHeader
        >
            {renderContent()}
        </AppContainer>
    )
};

AppListMenuComponent.propTypes = {
    MenusAppList: PropTypes.array.isRequired,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: "center",
        marginHorizontal: 64,
    },
    textPlatForm: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#433A45",
        paddingLeft: 6,
    },
    viewLogo: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    viewAppName: {
        justifyContent: "center",
    },
    textAppName: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    },
    buttonActionsMenu: {
        height: 50,
        width: SizeRpScreen.width(96),
        backgroundColor: "rgb(248,248,248)",
        marginTop: 12,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 20,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: "red",
    }

});


export {AppListMenuComponent};
