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

import React, { Component } from "react";
import { StyleSheet, View, Animated, PanResponder } from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.ValueXY(0),
  };

  componentWillMount() {
    this._x = 0;
    this._y = 0;

    this.state.animation.addListener(value => {
      this._x = value.x;
      this._y = value.y;
    });

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.animation.setOffset({ x: this._x, y: this._y });
        this.state.animation.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.animation.x, dy: this.state.animation.y },
      ]),
      onPanResponderRelease: (e, { vx, vy }) => {
        Animated.decay(this.state.animation, {
          velocity: { x: vx, y: vy },
          deceleration: 0.997,
        }).start();
      },
    });
  }

  render() {
    const animatedStyle = {
      transform: this.state.animation.getTranslateTransform(),
    };

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, animatedStyle]}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "tomato",
  },
});