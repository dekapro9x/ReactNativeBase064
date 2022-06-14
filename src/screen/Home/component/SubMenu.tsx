
import { FontAppType } from "@const/TypeFontFamily";
import { black, white } from "@css/Color";
import { AppImage } from "@element/AppImage";
import { AppText } from "@element/AppText";
import DraggableGrid from '@libJS/react-native-draggable-grid';
import { writeLogSystem } from "@logEventSystem/";
import { keyLogSystem } from "@logEventSystem/keyLogSystem";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import PropTypes from 'prop-types';
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { keyAsyncStorage } from "@const/KeySyncStorage";
interface MyTestProps {
    dataSubMenu: {}[],
    navigation: {}
}

interface MyTestState {
    data: { key: string, name: string }[];
}

export class SubMenu extends React.Component<MyTestProps, MyTestState>{
    static propTypes = {
        dataSubMenu: PropTypes.array.isRequired,
    };

    constructor(props: MyTestProps) {
        super(props);
        this.state = {
            data: this.props.dataSubMenu
        };
    }

    navigateToScreen = (item) => async () => {
        const { navigation } = this.props;
        await writeLogSystem(keyLogSystem.menuClick, `${item.id}`);
        navigation.navigate(item.id, { menuClick: item });
    }

    render_item = (item: { name: string, key: string }) => {
        return (
            <View
                style={styles.item}
                key={item.key}
            >
                <TouchableOpacity
                    onPress={this.navigateToScreen(item)}
                >
                    <AppImage
                        resizeMode={"center"}
                        source={{ uri: item.iconImg }}
                        style={{ height: 35, width: 35 }} />
                </TouchableOpacity>
                <Text style={styles.item_text}>{item.name}</Text>
            </View>
        );
    }

    render() {
        return (
            <>
                <AppText style={{ fontSize: 16, fontFamily: FontAppType.LetterMagic, marginLeft: 12 }}>Danh sách menu hay dùng:</AppText>
                <View style={styles.wrapper}>
                    <DraggableGrid
                        numColumns={5}
                        renderItem={this.render_item}
                        data={this.state.data}
                        onDragRelease={(data) => {
                            this.setState({ data }, async () => {
                                const dataMenuPath = JSON.stringify(data);
                                await AsyncStorage.setItem(keyAsyncStorage.subMenu, dataMenuPath);
                            });
                        }}
                    />
                </View>
            </>
        );
    };
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 100,
        backgroundColor: 'blue',
    },
    wrapper: {
        marginTop: 5,
        width: '100%',
        justifyContent: 'center',
    },
    item: {
        height: SizeRpScreen.device_width / 5 - 5 + 12,
        width: SizeRpScreen.device_width / 5 - 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 5,
        backgroundColor: white
    },
    item_text: {
        fontSize: 10,
        color: black,
        textAlign: 'center'
    },
});

