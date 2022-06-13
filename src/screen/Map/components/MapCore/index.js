import { white } from '@css/Color';
import AppMapLocations from '@element/AppMapLocations';
import { AppText } from '@element/AppText';
import { DebounceButton } from '@element/DebounceButton';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useState } from 'react';
import { Linking, StyleSheet, View } from 'react-native';
const MapCoreFunctions = () => {
    const [currentLocations, setStateCurrentLocations] = useState({
        latitude: "",
        longitude: "",
    });

    const getLocations = (locationsSelect) => {
        setStateCurrentLocations(locationsSelect)
    }

    const openMap = () => {
        let url = "";
        let destination = "";
        const { latitude, longitude } = currentLocations;
        destination = `${latitude},${longitude}`;
        url = "http://maps.google.com/?daddr=" + destination;
        return Linking.openURL(url)
            .then(() => Promise.resolve())
            .catch((err) => console.error("An error occurred", err));
    }

    return (
        <View style={styles.container}>
            <AppMapLocations
                stylesContainer={styles.appMapLocationsContainer}
                getLocations={getLocations} />
            <AppText>Map Core Functions </AppText>
            <AppText>Latitude Marker: {currentLocations.latitude}</AppText>
            <AppText>Longitude Marker: {currentLocations.longitude}</AppText>
            <DebounceButton
                title=""
                useLoading={false}
                useDelay={false}
                onPress={openMap}
                style={{
                    height: 50,
                    width: SizeRpScreen.width(45),
                    borderRadius: 0,
                    marginLeft: 6,
                    backgroundColor: "red",
                    borderRadius: 2,
                    marginTop: 12
                }}
            >
                <AppText style={{ fontSize: 18, color: white }}>Open Map</AppText>
            </DebounceButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: SizeRpScreen.device_height,
        width: SizeRpScreen.device_width,
        alignItems: 'center'
    },
    appMapLocationsContainer: {
        height: 100, width: 100
    }
})

export default MapCoreFunctions;
