import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-animatable';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export class MapViewComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            initialMapView: false,
            region: {
                latitude: 21.089193,
                longitude: 105.795295,
                longitudeDelta: 0.0111,
                latitudeDelta: 0.052,
            },
        };
    }
    componentDidMount() {
        if (this.timeOut) {
            clearTimeout(this.timeOut);
        }
        this.timeOut = setTimeout(
            () => this.setState({ initialMapView: true }),
            1000,
        );
    }

    componentWillUnmount() {
        if (this.timeOut) {
            clearTimeout(this.timeOut);
        }
    }

    renderMapView = () => {
        const {
            region,
            initialMapView
        } = this.state;
        if (initialMapView) {
            return (
                <MapView
                    showsTraffic={true}
                    showsIndoorLevelPicker={false}
                    zoomTapEnabled={true}
                    zoomEnabled={true}
                    pitchEnabled={false}
                    showsUserLocation={false}
                    followsUserLocation={false}
                    showsCompass={false}
                    showsBuildings={false}
                    loadingEnabled={true}
                    showsIndoors={false}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={region}>
                </MapView>
            );
        }
        return null;
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                {this.renderMapView()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: SizeRpScreen.device_width,
    },
});
