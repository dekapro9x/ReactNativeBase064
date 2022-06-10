import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';
const VideoMp4 = () => {
    const refVideo = useRef({});
    return (
        <View style={styles.backgroundVideo}>
            <Video
                resizeMode={"cover"}
                poster={"https://img.phonandroid.com/2021/02/Google-Earth.jpg"}
                isPlat
                playInBackground={false}
                source={require('../../../../images/Earn.mp4')}
                ref={refVideo}
                style={styles.video} />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundVideo: {
        flex: 1,
        
    },
    video: {
        height: SizeRpScreen.device_height * 5 / 16,
        width: SizeRpScreen.device_width-32,
    }
})

export default VideoMp4;
