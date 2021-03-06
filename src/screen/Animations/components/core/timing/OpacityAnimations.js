// import React, { useRef } from "react";
// import {
//   SafeAreaView,
//   ScrollView,
//   Text,
//   StyleSheet,
//   View,
//   ImageBackground,
//   Animated,
//   useWindowDimensions
// } from "react-native";

// const images = new Array(6).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');

// const App = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;

//   const { width: windowWidth } = useWindowDimensions();

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.scrollContainer}>
//         <ScrollView
//           horizontal={true}
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           onScroll={Animated.event([
//             {
//               nativeEvent: {
//                 contentOffset: {
//                   x: scrollX
//                 }
//               }
//             }
//           ])}
//           scrollEventThrottle={1}
//         >
//           {images.map((image, imageIndex) => {
//             return (
//               <View
//                 style={{ width: windowWidth, height: 250 }}
//                 key={imageIndex}
//               >
//                 <ImageBackground source={{ uri: image }} style={styles.card}>
//                   <View style={styles.textContainer}>
//                     <Text style={styles.infoText}>
//                       {"Image - " + imageIndex}
//                     </Text>
//                   </View>
//                 </ImageBackground>
//               </View>
//             );
//           })}
//         </ScrollView>
//         <View style={styles.indicatorContainer}>
//           {images.map((image, imageIndex) => {
//             const width = scrollX.interpolate({
//               inputRange: [
//                 windowWidth * (imageIndex - 1),
//                 windowWidth * imageIndex,
//                 windowWidth * (imageIndex + 1)
//               ],
//               outputRange: [8, 8, 8],
//               extrapolate: "clamp"
//             });
//             return (
//               <Animated.View
//                 key={imageIndex}
//                 style={[styles.normalDot, { width }]}
//               />
//             );
//           })}
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   scrollContainer: {
//     height: 300,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   card: {
//     flex: 1,
//     marginVertical: 4,
//     marginHorizontal: 16,
//     borderRadius: 5,
//     overflow: "hidden",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   textContainer: {
//     backgroundColor: "rgba(0,0,0, 0.7)",
//     paddingHorizontal: 24,
//     paddingVertical: 8,
//     borderRadius: 5
//   },
//   infoText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold"
//   },
//   normalDot: {
//     height: 8,
//     width: 8,
//     borderRadius: 4,
//     backgroundColor: "silver",
//     marginHorizontal: 4
//   },
//   indicatorContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// export default App;
import { animatedComponent } from '@css/';
import { blueGrey900 } from '@css/Color';
import { AppText } from '@element/AppText';
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useRef } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const OpacityAnimations = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const showView = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  const hideView = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  return (
    <View style={animatedComponent}>
      <Text
        style={{ textAlign: 'center', fontSize: SizeRpScreen.H4, fontWeight: 'bold', color: "black" }}>
        Opacity
      </Text>
      <Animated.Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/2048px-Soccerball.svg.png',
        }}
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim
          }
        ]}
      >
      </Animated.Image>
      <View style={{ width: SizeRpScreen.width(80), height: 40, flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          onPress={showView}
          style={{ height: 40, width: SizeRpScreen.width(30), backgroundColor: blueGrey900, justifyContent: "center", alignItems: "center" }}>
          <AppText style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Show</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={hideView}
          style={{ height: 40, width: SizeRpScreen.width(30), backgroundColor: blueGrey900, justifyContent: "center", alignItems: "center" }}>
          <AppText style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Hide</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    borderRadius: 20
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    justifyContent: "space-evenly",
    marginVertical: 16,
  }
});

export { OpacityAnimations };

