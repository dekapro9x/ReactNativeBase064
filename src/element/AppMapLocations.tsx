import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Linking, Alert, Platform, PermissionsAndroid, ToastAndroid } from 'react-native';
import MapView, { MapEvent, PROVIDER_GOOGLE, Region, Marker } from "react-native-maps";
import PropTypes from 'prop-types';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import { AppIcon } from './AppIcon';
import { AppText } from './AppText';
import { white } from '@css/Color';
import app from "app.json"
import Geolocation from "react-native-geolocation-service";
interface IsState {
  region: object,
  marker: object
}

const AppMapLocations = (props) => {

  const [state, setState] = useState<IsState>({
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015,
    },
    marker: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  })

  useEffect(() => {
    const { getLocations } = props;
    const { marker } = state;
    getLocations(marker)
  }, [])

  const _markerChange = (event: MapEvent) => {
    const { getLocations } = props;
    const marker = event.nativeEvent?.coordinate;
    setState((state) => ({
      ...state,
      marker,
    }));
    getLocations(marker)
  };

  const _onRegionChange = (region: Region) => {
    const { getLocations } = props;
    const marker = {
      latitude: region.latitude,
      longitude: region.longitude
    }
    setState((state) => ({ ...state, region, marker }));
    getLocations(marker);
  }

  const getLocationCurrent = () => {
    hasLocationPermission()
      .then((hasPermission) => {
        if (!hasPermission) return;
        Geolocation.getCurrentPosition(
          (position) => {
            setState({
              region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.015,
              },
              marker: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              },
            });
          },
          (error) => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      })
      .catch(() => Alert.alert("Lỗi", "Kiểm tra quyền truy cập bản đồ thất bại!"));
  }

  const hasLocationPermission = async () => {
    if (Platform.OS === "ios") {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }
    if (Platform.OS === "android" && Platform.Version < 23) return true;
    const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (hasPermission) return true;
    const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;
    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show("Quyền truy cập vị trí người dùng bị từ chối", ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show("Người dùng đã thu hồi quyền truy cập vị trí.", ToastAndroid.LONG);
    }
    return false;
  };

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert("Unable to open settings");
      });
    };
    const status = await Geolocation.requestAuthorization("whenInUse");
    if (status === "granted") return true;
    if (status === "denied") Alert.alert("Location permission denied");
    if (status === "disabled")
      Alert.alert(`Cho phép ứng dụng "${app.displayName}" truy cập vị trí của bạn.`, "", [
        { text: "Đi tới cài đặt", onPress: openSetting },
        { text: "Đóng", style: "cancel" },
      ]);
    return false;
  };

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          height: SizeRpScreen.device_height * 35 / 100,
          width: SizeRpScreen.device_width
        }}
        region={state.region}
        onPress={_markerChange}
        onRegionChangeComplete={_onRegionChange}
        showsUserLocation={true}
        showsMyLocationButton={false}
      >
        <Marker coordinate={state.marker} tracksViewChanges={false} draggable={true} onDragEnd={_markerChange}>
          <View style={{ minHeight: 25, width: 60, backgroundColor: 'red', justifyContent: 'center', borderRadius: 2, alignItems: 'center' }}>
            <AppText style={{ fontSize: 8, color: white }}>{state.marker.latitude}</AppText>
            <AppText style={{ fontSize: 8, color: white }}>{state.marker.longitude}</AppText>
          </View>
          <AppIcon type={'MaterialCommunityIcons'} name="map-marker-radius" size={45} color="red" />
        </Marker>
      </MapView>
      <TouchableOpacity
        style={styles.touchLocation}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        onPress={getLocationCurrent}
      >
        <AppIcon type={'MaterialCommunityIcons'} name="crosshairs-gps" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </>
  );
}

AppMapLocations.propTypes = {
  getLocations: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  touchLocation: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(26,115,232)",
    borderRadius: 5,
    position: "absolute",
    top: "3%",
    right: "4%",
  },
})

export default AppMapLocations;
