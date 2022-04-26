import { getAPI } from "@api/AxiosAPI";
import { Api } from "@api/ListAPI";
import { isIOS } from "@const/Setting";
import { FontAppType } from "@const/TypeFontFamily";
import { ContextContainer } from "@context/AppContext";
import { green800, pinkA400, red, white } from "@css/Color";
import { AppImage } from "@element/AppImage";
import { AppText } from "@element/AppText";
import { Loading } from '@element/Loading';
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import { checkPermissionsLocationPlatform } from "@util/CheckPermissionLocationPlatform";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import { AppContainer } from "../../element/AppContainer";
import TimeCurrent from "./TimeCurrent";

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
            // const fakeLat = 21.0025;
            // const fakeLon = 105.8205;
            getWeatherCurrentLocation(lat, long);
            // getWeatherCurrentLocation(fakeLat, fakeLon);
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
    setStateLoading(true);
    const response = await getAPI(Api.getCurrentWeatherLocations(latitude, longitude));
    if (response) {
      setStateLoading(false)
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

  const getUnitValue = (keyUnit) => {
    console.log("keyUnit", keyUnit);
    let stringValue = "";
    switch (keyUnit) {
      case "Clouds:":
        stringValue = "m/s"
        break;
      case "Temperature:":
        stringValue = unit == "Kelvin" ? "°F" : "°C"
        break;
      case "Temperature Like:":
        stringValue = unit == "Kelvin" ? "°F" : "°C"
        break;
      case "Temperature Max:":
        stringValue = unit == "Kelvin" ? "°F" : "°C"
        break;
      case "Temperature Min:":
        stringValue = unit == "Kelvin" ? "°F" : "°C"
        break;
      case "Pressure:":
        stringValue = "hPa"
        break;
      case "Humidity:":
        stringValue = "%"
        break;
      default:
        break;
    }
    return stringValue;
  }

  const convertTemperature = (value) => {
    if (unit == "Kelvin") {
      return value
    } else {
      return (Number.parseFloat(value) - 273.15).toFixed(2);
    }
  }

  const convertValue = (key, value) => {
    let stringValue = value;
    console.log("value", value);
    switch (key) {
      case "Temperature:":
        return stringValue = convertTemperature(value);
      case "Temperature Like:":
        return stringValue = convertTemperature(value);
      case "Temperature Max:":
        return stringValue = convertTemperature(value);
      case "Temperature Min:":
        return stringValue = convertTemperature(value);
      default:
        return stringValue;
    }
  }

  const renderInfoWeather = () => {
    let infoLocationsMap = [];
    let infoWeatherMap = [];
    if (Object.keys(dataWeatherCurrent).length > 0 && Object.keys(currentLocation).length > 0) {
      infoLocationsMap = [
        { key: "Latitude:", value: "latitude" },
        { key: "Longitude:", value: "longitude" },
        { key: "Speed:", value: "speed" },
        { key: "Timestamp:", value: "timestamp" }];
      infoWeatherMap = [
        { key: "Name:", value: ["name"] },
        { key: "CountryName:", value: ["sys", "country"] },
        { key: "Temperature:", value: ["main", "temp"] },
        { key: "Temperature Like:", value: ["main", "feels_like"] },
        { key: "Temperature Max:", value: ["main", "temp_max"] },
        { key: "Temperature Min:", value: ["main", "temp_min"] },
        { key: "Pressure:", value: ["main", "pressure"] },
        { key: "Humidity:", value: ["main", "humidity"] },
        { key: "Clouds:", value: ["clouds", "all"] },
      ];
    }
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
      return (
        <View style={{ flex: 1, alignItems: "center", paddingBottom: 20 }}>
          <AppText style={{ fontSize: 40, color: pinkA400 || "white", marginTop: 60, fontFamily: FontAppType.LetterMagic }}>
            {name} - {sys?.country}
          </AppText>
          {/* Thời gian hiện tại */}
          <TimeCurrent></TimeCurrent>
          {indexWeather >= 0 && <AppImage
            resizeMode={"stretch"}
            source={{ uri: dayOrNight == "Day" ? caseWeather.iconDay : caseWeather.iconNight }}
            style={{ height: 150, width: 150 }}>
          </AppImage>}
          {/* Chuyển đổi đơn vị đo nhiệt độ */}
          <View style={{
            height: 40, width: SizeRpScreen.width(50),
            borderRadius: 12, flexDirection: "row", justifyContent: "space-between"
          }}>
            {renderListButtonUnit()}
          </View>
          {/* Bảng thông tin vị trí locations: */}
          {infoLocationsMap.map((item, index) => {
            return (<View
              key={`${index}`}
              style={{
                flex: 1, height: 40,
                width: SizeRpScreen.width(98),
                borderWidth: 1, borderRadius: 12,
                marginTop: 5, flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#222222"
              }}>
              {/* Tiêu đề */}
              <View style={{ flex: 1, height: 30, marginLeft: 5, justifyContent: "center" }}>
                <AppText style={{ color: white }}>{item.key}</AppText>
              </View>
              {/* Giá trị nội dung*/}
              <View style={{ flex: 1, height: 30, marginRight: 5, justifyContent: "center" }}>
                <AppText style={{ color: white }}>{currentLocation[`${item.value}`]}</AppText>
              </View>
            </View>)
          })}
          {/* Bảng thông tin nhiệt độ - độ ẩm */}
          {infoWeatherMap.map((item, index) => {
            const lengthKey = item.value.length;
            return (<View key={`${index}`}
              style={{
                flex: 1, height: 40,
                width: SizeRpScreen.width(98),
                borderWidth: 1, borderRadius: 12,
                marginTop: 5, flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#222222"
              }}>
              {/* Tiêu đề */}
              <View style={{ flex: 1, height: 30, marginLeft: 5, justifyContent: "center" }}>
                <AppText style={{ color: white }}>{item.key}</AppText>
              </View>
              {/* Giá trị nội dung*/}
              <View style={{ flex: 1, height: 30, marginRight: 5, justifyContent: "center" }}>
                <AppText style={{ color: white }}>
                  {lengthKey == 1 ? convertValue(item.key, dataWeatherCurrent[`${item.value[0]}`])
                    : convertValue(item.key, dataWeatherCurrent[`${item.value[0]}`][`${item.value[1]}`])}
                  <AppText style={{ color: white }}> {getUnitValue(item.key)}</AppText>
                </AppText>
              </View>
            </View>)
          })}
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
        <ScrollView showsVerticalScrollIndicator={false}>
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
