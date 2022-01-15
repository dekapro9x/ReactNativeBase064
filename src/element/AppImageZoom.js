import ImageViewer from "@libJS/image-zoom-viewer";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Modal, Platform, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { blue800, white } from "../const/Color";

export class AppImageZoom extends Component {

  static propTypes = {
    deviceWidth: PropTypes.number.isRequired,
    getRefZoomImg: PropTypes.func.isRequired,
    imgZoom: PropTypes.array.isRequired,
    indexImgZoomStart: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    const { getRefZoomImg } = this.props;
    getRefZoomImg && getRefZoomImg(this);
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  hideModal = () => {
    this.setState({ visible: false });
  };

  renderTouch = () => {
    const { deviceWidth } = this.props;
    return (
      <TouchableOpacity
        onPress={this.hideModal}
        style={{
          height: 45,
          width: deviceWidth,
          backgroundColor: blue800,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <MaterialCommunityIcons name={"close-circle"} color={white} size={35} />
        <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
          {" "}ĐÓNG
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { visible } = this.state;
    const { imgZoom, indexImgZoomStart } = this.props;
    if (Platform.OS == "android") {
      return (
        <Modal
          swipeDirection={["up"]}
          onSwipeMove={event => {
            if (event > 0.2) {
              this.hideModal();
            }
          }}
          onRequestClose={this.hideModal}
          visible={visible}
        >
          <ImageViewer
            index={indexImgZoomStart}
            renderFooter={this.renderTouch}
            onCancel={this.hideModal}
            enableSwipeDown={true}
            saveToLocalByLongPress={false}
            imageUrls={imgZoom}
            useNativeDriver
          />
        </Modal>
      );
    } else {
      return (
        <Modal visible={visible} transparent={true}>
          <ImageViewer
            index={indexImgZoomStart}
            renderFooter={this.renderTouch}
            onCancel={this.hideModal}
            enableSwipeDown={true}
            saveToLocalByLongPress={false}
            imageUrls={imgZoom}
          />
        </Modal>
      );
    }
  }
}