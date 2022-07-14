import { isAndroid } from '@const/Setting';
import { AppImage } from '@element/AppImage';
import { DebounceButton } from '@element/DebounceButton';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ImagePicker = () => {
    const [arrImageSelect, setStateArrImageSelect] = useState([]);
    useEffect(() => {
    }, []);

    const checkPermissionReadFile = () => {
        if (isAndroid) {
            getListImagesAlbum();
        }
    }

    //Lấy danh sách ảnh trong album:
    const getListImagesAlbum = () => {
        const options = {
            includeBase64: false,
            multiple: true
        };
        launchImageLibrary(options, (response) => {
            if (response && Array.isArray(response.assets) && response.assets.length > 0) {
                setStateArrImageSelect(response.assets);
            }
        });
    }

    //Hiển thị ảnh:
    const renderImageSelect = () => {
        if (arrImageSelect && arrImageSelect[0]) {
            return (
                <AppImage source={{
                    uri: arrImageSelect[0].uri
                }}
                    style={{
                        width: SizeRpScreen.width(100) / 2,
                        height: SizeRpScreen.width(100) / 2,
                        alignSelf: "center",
                        borderRadius: 5
                    }}
                    resizeMode={'cover'}></AppImage>
            )
        } else {
            return null
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 , justifyContent: "center"}}>
                {renderImageSelect()}
            </View>
            <View style={{ flex: 1 }}>
                <DebounceButton
                    title={"Media"}
                    timeDelay={200}
                    useDelay={true}
                    useLoading={false}
                    onPress={getListImagesAlbum}
                    style={{ ...styles.styleContainsDefault, backgroundColor: 'red' }}
                >
                </DebounceButton>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({})

export default ImagePicker;
