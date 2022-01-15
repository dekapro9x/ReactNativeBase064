# lottie-react-native
Chức năng:  Tạo loading ảo trong màn hình trong khi mất mạng hoặc là chưa render xong.
Link: https://github.com/lottie-react-native/lottie-react-native
Link các ảnh mẫu: https://github.com/lottie-react-native/lottie-react-native/tree/master/example/js/animations
Link các animations : https://lottiefiles.com/
# Cài đặt: 
1. Bước 1: yarn add lottie-react-native
+  yarn add lottie-ios@3.2.3
# Sử dụng:
import React from 'react';
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  render() {
    return <LottieView source={require('./animation.json')} autoPlay loop />;
  }
}

import React from 'react';
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('../path/to/animation.json')}
      />
    );
  }
}