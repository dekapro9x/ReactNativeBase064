import { FontAppType } from "@const/TypeFontFamily";
import { AppContainer } from "@element/AppContainer";
import { AppText } from "@element/AppText";
import { writeLogSystem } from "@logEventSystem/";
import { keyLogSystem } from "@logEventSystem/keyLogSystem";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from "react";
import { BackHandler, SafeAreaView, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { View as ViewAnimated } from 'react-native-animatable';
import LinearGradient from "react-native-linear-gradient";

const AppListMenuComponent = (props) => {
    const { nameScreen, MenusAppList, navigation } = props;
    const [showListMenuComponentAppListMenu, setStateShowListMenuComponent] = useState(false);
    const [listItemAppListMenuRender, setStateListItemAppListMenuRender] = useState([]);
    const [renderAnimated, setStateRenderAnimated] = useState(false);
    const [animatedComponent, setStateAnimatedComponent] = useState(null);
    const listItemAppListMenuRenderLast = useRef([]);
    const timeOut = 100;

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

    useEffect(() => {
        whiteLogGoToScreen();
    }, [])

    const whiteLogGoToScreen = async () => {
        const { nameScreen } = props;
        if (nameScreen) {
            await writeLogSystem(keyLogSystem.goToScreen, nameScreen);
        }
    }

    const renderAnimatedComponent = () => {
        if (animatedComponent) {
            return animatedComponent.component;
        } else {
            return null
        }
    }

    const renderContent = () => {
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
                        <ScrollView
                            style={{ marginBottom: 50 }}
                            showsVerticalScrollIndicator={false}>
                            {Array.isArray(listItemAppListMenuRender) && listItemAppListMenuRender.map((itemRenderAnimated, indexRenderAnimated) => {
                                return (
                                    <ViewAnimated
                                        key={`${indexRenderAnimated}`}
                                        animation="slideInLeft"
                                        useNativeDriver
                                        delay={(indexRenderAnimated + 1) * timeOut}
                                    >
                                        <TouchableOpacity
                                            onPress={() => {
                                                setStateRenderAnimated(true);
                                                setStateAnimatedComponent(itemRenderAnimated);
                                            }}
                                            style={styles.buttonActionsMenu}>
                                            <LinearGradient
                                                colors={["#009245", '#FCEE21']}
                                                end={{ x: 1, y: 1 }}
                                                start={{ x: 0, y: 0 }}
                                                style={{
                                                    flex: 1, 
                                                    borderTopLeftRadius: 10,
                                                    borderTopRightRadius: 10,
                                                }}
                                            >
                                                <View style={styles.subViewIndex} >
                                                    <LinearGradient
                                                        colors={["#F6EA41", '#F408C6']}
                                                        end={{ x: 1, y: 1 }}
                                                        start={{ x: 0, y: 0 }}
                                                        style={{
                                                            flex: 1, borderTopLeftRadius: 12,
                                                            borderTopRightRadius: 12,
                                                            borderBottomLeftRadius: 12,
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}>
                                                    </LinearGradient>
                                                </View>
                                                <AppText style={{ marginLeft: 45, fontSize: 20, color: "#39F7E2", fontFamily: FontAppType.MotoyaLMaru }}>
                                                    {indexRenderAnimated + 1}
                                                </AppText>
                                            </LinearGradient>
                                            <AppText style={{ marginLeft: 45, fontSize: 16, fontFamily: FontAppType.MotoyaLMaru }}>
                                                {itemRenderAnimated.name}
                                            </AppText>
                                            <TouchableOpacity style={styles.subViewIndex}></TouchableOpacity>
                                        </TouchableOpacity>
                                    </ViewAnimated>)
                            })}
                        </ScrollView>
                    </View>
                </SafeAreaView>
            )
        }
        //Menu:
        return (
            <SafeAreaView style={styles.content}>
                <View style={{ minHeight: SizeRpScreen.device_height, width: SizeRpScreen.device_width }}>
                    <ScrollView
                        style={{ marginBottom: 50 }}
                        showsVerticalScrollIndicator={false}>
                        {Array.isArray(MenusAppList) && MenusAppList.map((itemMenuAnimated, index) => {
                            return (
                                <ViewAnimated
                                    key={`${index}`}
                                    animation="fadeIn"
                                    useNativeDriver
                                    delay={(index + 1) * timeOut}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setStateShowListMenuComponent(true);
                                            setStateListItemAppListMenuRender(itemMenuAnimated.data);
                                            listItemAppListMenuRenderLast.current = itemMenuAnimated.data;
                                        }}
                                        style={styles.buttonActionsMenu}>
                                        <LinearGradient
                                            colors={["#FF512F", '#DD2476']}
                                            end={{ x: 1, y: 1 }}
                                            start={{ x: 0, y: 0 }}
                                            style={{
                                                flex: 1,
                                                 borderTopLeftRadius: 10,
                                                borderTopRightRadius: 10,
                                            }}
                                        >
                                            <AppText style={{ marginLeft: 45, fontSize: 20, color: "#39F7E2", fontFamily: FontAppType.MotoyaLMaru }}>
                                                {index + 1}
                                            </AppText>
                                        </LinearGradient>
                                        <View style={styles.subViewIndex} >
                                            <LinearGradient
                                                colors={["#F6EA41", '#F408C6']}
                                                end={{ x: 1, y: 1 }}
                                                start={{ x: 0, y: 0 }}
                                                style={{
                                                    flex: 1, 
                                                    borderTopLeftRadius: 12,
                                                    borderTopRightRadius: 12,
                                                    borderBottomLeftRadius: 12,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}>
                                            </LinearGradient>
                                        </View>
                                        <AppText style={{ marginLeft: 45, fontSize: 16, fontFamily: FontAppType.MotoyaLMaru }}>
                                            {itemMenuAnimated.keyName}
                                        </AppText>
                                    </TouchableOpacity>
                                </ViewAnimated>
                            )
                        })}
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
    return (
        <AppContainer
            useLinearGradient={false}
            nameScreen={nameScreen}
            goBackScreen={false}
            flexWrapHeader
        >
            {renderContent()}
        </AppContainer>
    )
};

AppListMenuComponent.propTypes = {
    MenusAppList: PropTypes.array.isRequired,
    nameScreen: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired
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
        height: 60,
        width: SizeRpScreen.width(90),
        backgroundColor: "rgb(248,248,248)",
        marginTop: 45,
        justifyContent: "center",
        alignSelf: 'center',
        borderWidth: 3,
        borderRadius: 12,
        borderColor: "#D3D5DE",
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    subViewIndex: {
        height: 45,
        width: 45,
        position: 'absolute',
        left: -12,
        top: -30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 12,
    }

});


export { AppListMenuComponent };

