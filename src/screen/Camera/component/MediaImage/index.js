import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
import { AppImage } from '@element/AppImage';
import { SizeRpScreen } from '@resources/ResponsiveScreen';


const MediaPicture = () => {
    const [listImagesAlbum, setStateImagesAlbum] = useState([]);
    useEffect(() => {
        getPhotoAlbum();
    }, []);

    const getPhotoAlbum = async () => {
        const params = {
            first: 10,
            assetType: 'Photos'
        }
        const response = await CameraRoll.getPhotos(params);
        if (response && Array.isArray(response.edges) && response.edges.length > 0) {
            setStateImagesAlbum(response.edges);
        }
    }

    const renderItemImage = (itemImage, indexImage) => {
        const { item } = itemImage;
        const { node } = item;
        const { image } = node;
        const { type, uri } = image;
        return (
            <AppImage source={{
                uri: uri
            }}
                style={{
                    width: SizeRpScreen.width(100) / 3,
                    height: SizeRpScreen.width(100) / 3,
                    alignSelf: "center",
                }}
                resizeMode={'cover'}></AppImage>
        )

    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                renderItem={renderItemImage}
                numColumns={3}
                data={listImagesAlbum}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({})

export default MediaPicture;
