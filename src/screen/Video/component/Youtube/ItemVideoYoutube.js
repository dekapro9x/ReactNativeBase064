import { isIOS } from '@const/Setting';
import { AppIcon } from '@element/AppIcon';
import { AppImage } from '@element/AppImage';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import { getIDWithLinkYouTube, getImageWithLinkYouTube } from '@util/VaidateUrlVideoYoutube';
import PropTypes from "prop-types";
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { YouTubeStandaloneIOS } from 'react-native-youtube';
const ItemVideoYoutube = (props) => {
    const { item } = props;
    //Play Video :
    const onPressVideo = () => {
        const { item, playVideoAndroid } = props;
        if (isIOS) {
            YouTubeStandaloneIOS.playVideo(getIDWithLinkYouTube(item.url));
        } else {
            playVideoAndroid(item);
        }
    };

    return (
        <TouchableOpacity
            onPress={onPressVideo}
            style={{ width: SizeRpScreen.device_width, marginTop: 10 }}>
            <AppImage
                source={{
                    uri: getImageWithLinkYouTube(item.url),
                }}
                style={{ width: SizeRpScreen.device_width, height: SizeRpScreen.height(35) }}
                resizeMode="contain"
            />
            <View
                style={[
                    { top: SizeRpScreen.height(15), left: SizeRpScreen.width(45) },
                    {
                        position: 'absolute',
                    },
                ]}>
                <AppIcon type={"AntDesign"} name={'youtube'} size={80} color={"red"} />
            </View>
        </TouchableOpacity>
    );
}

ItemVideoYoutube.propTypes = {
    item: PropTypes.object,
    playVideoAndroid: PropTypes.func,
};

const styles = StyleSheet.create({})

export default ItemVideoYoutube;
