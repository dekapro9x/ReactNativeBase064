import React, { useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import { DataVideoYoutube } from './util/DataVideoYoutube';
import ItemVideoYoutube from "./ItemVideoYoutube";
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import { ApiKeyYoutube } from '@const/Setting';
import { getIDWithLinkYouTube } from '@util/VaidateUrlVideoYoutube';
import YouTube from 'react-native-youtube';
import { AppIcon } from '@element/AppIcon';
import { grey400 } from '@css/Color';
const YoutubeVideo = () => {
    const videoAndroid = useRef(null);
    const [playVideo, setStatePlayVideo] = useState(false);
    const [videoAndroidPlay, setStateVideoAndroidPlay] = useState("");
    const [startVideo, setStateStateVideo] = useState(false);

    const renderItemVideo = ({ item, index }) => {
        return <ItemVideoYoutube item={item} playVideoAndroid={playVideoAndroid} />;
    }

    const playVideoAndroid = (videoPlay) => {
        setStatePlayVideo(true);
        setStateVideoAndroidPlay(videoPlay.url);
        setStateStateVideo(true);
    }
    const closeVideo = () => {
        setStatePlayVideo(false);
        setStateStateVideo(false);
    }
    const renderContent = () => {
        if (playVideo) {
            return (
                <View style={{ height: SizeRpScreen.device_height, width: SizeRpScreen.device_width, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={closeVideo}
                        style={{ backgroundColor: grey400, height: 40, width: 40, alignItems: "center", justifyContent: "center", borderRadius: 12 }}>
                        <AppIcon type={"MaterialCommunityIcons"} name={"close"} size={32} color={"white"}></AppIcon>
                    </TouchableOpacity>
                    <YouTube
                        ref={videoAndroid}
                        apiKey={ApiKeyYoutube}
                        videoId={getIDWithLinkYouTube(videoAndroidPlay)}
                        play={startVideo}
                        loop={false}
                        fullscreen={true}
                        controls={1}
                        style={{
                            alignSelf: 'stretch',
                            height: (SizeRpScreen.width(100) / 16) * 9,
                            marginTop: 15
                        }}
                        onError={(mess) => {
                            if (
                                mess.error === 'UNAUTHORIZED_OVERLAY' &&
                                mess.target === 39497
                            ) {
                                setStateStateVideo(false);
                            }
                        }}
                        // onReady={(read) => {}}
                        // onChangeState={(sea) => {}}
                        // onChangeQuality={(e) => this.setState({quality: e.quality})}
                        onChangeFullscreen={(e) => {
                        }}
                        onProgress={(e) => { }}
                    />
                </View>
            )
        } else {
            return (
                <FlatList
                    style={styles.flatListContainer}
                    data={DataVideoYoutube}
                    renderItem={renderItemVideo}
                    keyExtractor={(item, index) => `${index}`} />
            )
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {renderContent()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    flatListContainer: {
        marginBottom: 50
    }
})

export default YoutubeVideo;
