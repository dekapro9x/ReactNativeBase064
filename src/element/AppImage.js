import { LoadingAppType } from "../const/TypeLoading";
import React, { PureComponent } from "react";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { grey300 } from "../const/Color";
// import { Loading } from "./Loading";

class AppImage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      height: this.props.style.height 
    };
  }

  getResizeMode = resizeMode => {
    switch (resizeMode) {
      case "cover":
        return FastImage.resizeMode.cover;
      case "center":
        return FastImage.resizeMode.center;
      case "stretch":
        return FastImage.resizeMode.stretch;
      default:
        return FastImage.resizeMode.contain;
    }
  };

  render() {
    const {
      resizeMode = "contain",
      style,
      source,
      defaultSource,
      sizeSpinner
    } = this.props;
    const { loading } = this.state;
    //Không có Uri:
    if (source && source.uri === null) {
      return (
        <View
          style={[
            {
              width: 86,
              height: 86,
              backgroundColor: grey300
            },
            style
          ]}
        />
      );
    }
    //Loading tải ảnh:
    if (loading) {
      return (
        <View>
          <FastImage
            defaultSource={defaultSource}
            style={[{ width: 86, height: 86 }, style]}
            source={source}
            resizeMode={this.getResizeMode(resizeMode)}
            onLoadEnd={() => {
              this.setState({ loading: false });
            }}
            onError={() => {
              this.setState({ loading: false });
            }}
          />
          {/* <Loading
            typeLoading={LoadingAppType.Default}
            sizeSpinner={sizeSpinner}
          /> */}
        </View>
      );
    }
    //Ảnh cache hoặc đã tải xong:
    return (
      <FastImage
        defaultSource={defaultSource}
        style={[
          {
            width: 50,
            height: 50,
            overflow: "hidden"
          },
          style
        ]}
        source={source}
        resizeMode={this.getResizeMode(resizeMode)}
      />
    );
  }
}
export { AppImage };
