import React, {useContext} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { AppContainer } from "src/element/AppContainer";
import { ContextContainer } from "../../context/AppContext";
import { AppContainer } from "../../element/AppContainer";
import { keyNavigation } from "../../navigation/KeyNavigations";
export default function Login({ navigation, router }) {
  const {colorApp}  = useContext(ContextContainer);
  const navigateHome = () => {
    navigation.navigate(keyNavigation.HOME);
  };
  const renderContent = () => {
    return (
      <View style={styles.containerContent}>
        <Text>Basic JS Screen</Text>
      </View>
    );
  };

  // return (
  //   <View style={styles.container}>
  //     <LinearGradient
  //       colors={["#481E34", "#16192B"]}
  //       end={{ x: 1, y: 1 }}
  //       start={{ x: 0, y: 0 }}
  //       style={styles.container}
  //     >
  //       <TouchableOpacity
  //         styles={{
  //           height: 45,
  //           width: 250,
  //           boderWidth: 1,
  //           boderRadius: 10,
  //         }}
  //         onPress={navigateHome}
  //       >
  //         <Text>LOGIN SCREEN</Text>
  //       </TouchableOpacity>
  //     </LinearGradient>
  //   </View>
  // );
  return (
    <AppContainer
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader
      style={[styles.container, { backgroundColor: colorApp.backgroundColor }]}
    >
      {renderContent()}
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  

  bnt_mid: {}
});
