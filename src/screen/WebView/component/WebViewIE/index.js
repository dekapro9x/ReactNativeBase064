import { FontAppType } from '@const/TypeFontFamily';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
const WebViewIE = () => {
    const webViewRef = useRef(null);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WebView
                ref={webViewRef}
                containerStyle={{ overflow: 'hidden' }}
                style={{ opacity: 0.99, height: SizeRpScreen.device_height, width: SizeRpScreen.device_width }}
                allowFileAccessFromFileURLs={true}
                startInLoadingState={true}
                javaScriptEnabled={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                source={{
                    uri: "https://google.com.vn",
                }}
                onMessage={(e) => {
                    if (e.nativeEvent) {
                    }
                }}
                originWhitelist={['https://*', 'http://', 'file://']}
                onNavigationStateChange={(navState) => {
                    // headerRef.current.onChangeNavigaton(navState);
                }}
                onError={(syntheticEvent) => { }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 50, width: SizeRpScreen.device_width, backgroundColor: "red"
    },
    textInput: {
        width: SizeRpScreen.width(90),
        marginTop: 12,
        alignSelf: "center",
        marginHorizontal: 8,
    },
    textTitleInput: {
        fontFamily: FontAppType.LetterMagic,
        fontSize: 12,
        color: "black",
    },
    btnSearch: {
        height: 45, width: 45, backgroundColor: "green"
    },
    textInputContent: {
        borderRadius: 15,
        backgroundColor: "#F2F2F2"
    }
})

export default WebViewIE;
