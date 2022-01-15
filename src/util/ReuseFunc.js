import { Linking } from "react-native";
//Mở google Map.
function openMapDirect(latitude, longitude) {
    const destination = `${latitude}+${longitude}`;
    const url = Platform.select({
        android: `google.navigation:q=${destination}`,
        ios: `maps://app?daddr=${destination}`,
    });
    Linking.canOpenURL(url)
        .then((supported) => {
            if (supported) {
                return Linking.openURL(url);
            } else {
                Linking.canOpenURL(url)
                    .then((supported) => {
                        Linking.openURL(url).catch((error) => { });
                    })
                    .catch((error) => { });
            }
        })
        .catch((err) => console.error('An error occurred', err));
};

//Mở google Map tarkget store:
function openMapTargetLocations() {
    Linking.openURL(`https://maps.google.com/?q=${latitude},${longitude}`);
};

export {
    openMapDirect,
    openMapTargetLocations
}