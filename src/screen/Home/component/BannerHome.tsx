import { DataSliderHome } from '@const/Setting';
import { ContextContainer } from '@context/AppContext';
import { white } from '@css/Color';
import { AppImage } from '@element/AppImage';
import Carousel from '@libJS/react-native-banner-carousel';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
const BannerWidth = SizeRpScreen.device_width;
const BannerHeight = SizeRpScreen.device_width * 9 / 16;
const listImagesBanner = DataSliderHome;

export default function BannerHome() {
    const { colorApp } = useContext(ContextContainer);
    const renderBanner = (itemBanner, index) => {
        return (
            <View key={`${index}`}>
                <AppImage style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: itemBanner.uri }} />
            </View>
        );
    }
    return (
        <View style={[styles.container, { backgroundColor: colorApp.backgroundColor , position:"relative"}]}>
            <Carousel
                showsPageIndicator
                useNativeDriver={true}
                autoplay
                autoplayTimeout={2000}
                loop={true}
                index={0}
                pageSize={BannerWidth}
            >
                {listImagesBanner.map((itemBanner, index) => renderBanner(itemBanner, index))}
            </Carousel>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    banner: {
        height: SizeRpScreen.width(100) * 9 / 16,
        width: SizeRpScreen.width(100),
    }
})
