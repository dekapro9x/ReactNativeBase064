import React, { Component } from "react";
import { Modal } from "react-native";
import ImageViewer from "../libJS/image-zoom-viewer";
const images = [
  {
    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
    props: {}
  },
  {
    url: "",
    props: {
      source: require("../images/Frog.gif")
    }
  }
];
export default class AppImageZoom extends Component {
  render() {
    return (
      <Modal visible={true} transparent={true}>
        <ImageViewer imageUrls={images} />
      </Modal>
    );
  }
}
