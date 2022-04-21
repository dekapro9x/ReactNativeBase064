import { getAPI } from "@api/AxiosAPI";
import { Api } from "@api/ListAPI";
import { isIOS } from "@const/Setting";
import { FontAppType } from "@const/TypeFontFamily";
import { ContextContainer } from "@context/AppContext";
import { green800, pinkA400 } from "@css/Color";
import { AppImage } from "@element/AppImage";
import { AppText } from "@element/AppText";
import { Loading } from '@element/Loading';
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import { checkPermissionsLocationPlatform } from "@util/CheckPermissionLocationPlatform";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import { AppContainer } from "../../element/AppContainer";


function WeatherScreen(props) {
  const imgBackgroundDay = "https://cdn3.f-cdn.com/contestentries/329593/12725464/569a351b6db82_thumb900.jpg";
  const imgBackgroundNight = "https://cdn.dribbble.com/users/925716/screenshots/3333720/attachments/722375/night.png";
  const [loading, setStateLoading] = useState(true);
  const [currentLocation, setStateCurrentLocation] = useState({});
  const [dataWeatherCurrent, setStateDataWeatherCurrent] = useState({});
  const [dayOrNight, setStateDayOrNight] = useState("");
  const [unit, setStateUnit] = useState("Kelvin");
  const { colorApp } = useContext(ContextContainer);
  useLayoutEffect(() => {
    return () => { };
  }, []);

  useEffect(() => {
    onDidMount();
    const checkDayOrNight = isDay();
    if (checkDayOrNight) {
      setStateDayOrNight("Day");
    } else {
      setStateDayOrNight("Night");
    }
    return () => { };
  }, []);

  const isDay = () => {
    const hours = (new Date()).getHours();
    return (hours >= 6 && hours < 18);
  }

  const onDidMount = async () => {
    let location = await checkPermissionsLocationPlatform();
    if (location == 'GRANTED') {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log("Thông tin vị trí locations", position);
          if (position) {
            console.log(position);
            const lat = position.coords.latitude;
            const long = position.coords.longitude
            setStateLoading(false);
            setStateCurrentLocation({
              latitude: lat,
              longitude: long,
              accuracy: position.coords.accuracy,
              altitudeAccuracy: isIOS
                ? position.coords.altitudeAccuracy
                : position.coords.accuracy,
              heading: position.coords.heading,
              speed: position.coords.speed,
              timestamp: position.timestamp,
              mocked: position.mocked ? position.mocked : false,
            });
            const fakeLat = 21.0025;
            const fakeLon = 105.8205;
            // getWeatherCurrentLocation(lat, long);
            getWeatherCurrentLocation(fakeLat, fakeLon);
          }
        },
        (error) => {
          console.log("Lỗi", error);
          setStateLoading(false);
          setStateCurrentLocation({
            latitude: '',
            longitude: '',
          });
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  };

  const getWeatherCurrentLocation = async (latitude, longitude) => {
    const response = await getAPI(Api.getCurrentWeatherLocations(latitude, longitude));
    if (response) {
      setStateDataWeatherCurrent(response);
    }
  }

  const renderListButtonUnit = () => {
    const arrButtonUnit = [{ id: 1, name: "Kelvin", unit: "°F" }, { id: 2, name: "Celsius", unit: "°C" }];
    return (
      arrButtonUnit.map((button, index) => {
        return (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => { setStateUnit(button.name) }}
              key={index}
              style={{ width: 30, height: 30, alignItems: "center", justifyContent: "center", backgroundColor: button.name == unit ? "red" : "blue", borderRadius: 15 }}>
            </TouchableOpacity>
            <AppText style={{ color: green800, fontWeight: "bold", color: "white", fontSize: 25 }}>{button.unit}</AppText>
          </View>
        )
      })
    )
  }

  const renderInfoWeather = () => {
    console.log("Current locations", currentLocation);
    console.log("Data Weather", dataWeatherCurrent);
    const infoLocationsMap = ["Latitude", "Longitude", "Speed", "Timestamp"];
    const infoWeatherMap = ["Name:", "CountryName", "Temperature"];
    if (dataWeatherCurrent && Object.keys(dataWeatherCurrent)) {
      const { mainWeather } = props;
      const { name, sys, weather } = dataWeatherCurrent;
      const description = weather && weather[0]?.description;
      const getArrDescriptionWeather = mainWeather.map((item, index) => {
        return item.main
      })
      const indexWeather = getArrDescriptionWeather.indexOf(description);
      let caseWeather = {};
      if (indexWeather >= 0) {
        caseWeather = mainWeather[indexWeather];
      }
      console.log("caseWeather", caseWeather);
      return (
        <View style={{ flex: 1, alignItems: "center" }}>
          <AppText style={{ fontSize: 40, color: pinkA400 || "white", marginTop: 60, fontFamily: FontAppType.LetterMagic }}>
            {name} - {sys?.country}
          </AppText>
          {indexWeather >= 0 && <AppImage
            resizeMode={"stretch"}
            source={{ uri: dayOrNight == "Day" ? caseWeather.iconDay : caseWeather.iconNight }}
            style={{ height: 150, width: 150 }}>
          </AppImage>}
          {/* Chuyển đổi đơn vị đo nhiệt độ */}
          <View style={{ height: 40, width: SizeRpScreen.width(50), borderRadius: 12, flexDirection: "row", justifyContent: "space-between" }}>
            {renderListButtonUnit()}
          </View>
          {/* Bảng thông tin vị trí locations: */}

          {/* Bảng thông tin nhiệt độ - độ ẩm */}

        </View>
      )
    }
    return null
  }

  const renderContent = () => {
    if (loading) {
      return <Loading />
    }
    return (
      <ImageBackground
        source={{ uri: dayOrNight == "Day" ? imgBackgroundDay : imgBackgroundNight }}
        style={[styles.containerContent]}>
        <ScrollView>
          {renderInfoWeather()}
        </ScrollView>
      </ImageBackground>
    );
  };

  return (
    <AppContainer
      useLinearGradient={false}
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader
    >
      {renderContent()}
    </AppContainer>
  );
}
export default React.memo(WeatherScreen);

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    alignItems: "center"
  }
});
