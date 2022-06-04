import React, { Component } from "react";
import { View, PanResponder, Image } from "react-native";
import PropTypes from "prop-types";
import { SizeRpScreen } from "@resources/ResponsiveScreen";

function calcDistance(x1, y1, x2, y2) {
    const dx = Math.abs(x1 - x2);
    const dy = Math.abs(y1 - y2);
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

function calcCenter(x1, y1, x2, y2) {
    function middle(p1, p2) {
        return p1 > p2 ? p1 - (p1 - p2) / 2 : p2 - (p2 - p1) / 2;
    }

    return {
        x: middle(x1, x2),
        y: middle(y1, y2)
    };
}

function maxOffset(offset, windowDimension, imageDimension) {
    const max = windowDimension - imageDimension;
    if (max >= 0) {
        return 0;
    }
    return offset < max ? max : offset;
}

function calcOffsetByZoom(width, height, imageWidth, imageHeight, zoom) {
    const xDiff = imageWidth * zoom - width;
    const yDiff = imageHeight * zoom - height;
    return {
        left: -xDiff / 2,
        top: -yDiff / 2
    };
}

class ZoomImgPanResponderComponent extends Component {
    constructor(props) {
        super(props);

        this._onLayout = this._onLayout.bind(this);

        this.state = {
            zoom: null,
            minZoom: null,
            layoutKnown: false,
            isZooming: false,
            isMoving: false,
            initialDistance: null,
            initialX: null,
            initalY: null,
            offsetTop: 0,
            offsetLeft: 0,
            initialTop: 0,
            initialLeft: 0,
            initialTopWithoutZoom: 0,
            initialLeftWithoutZoom: 0,
            initialZoom: 1,
            top: 0,
            left: 0
        };
    }

    processPinch(x1, y1, x2, y2) {
        const distance = calcDistance(x1, y1, x2, y2);
        const center = calcCenter(x1, y1, x2, y2);

        if (!this.state.isZooming) {
            const offsetByZoom = calcOffsetByZoom(
                this.state.width,
                this.state.height,
                this.props.imageWidth,
                this.props.imageHeight,
                this.state.zoom
            );
            this.setState({
                isZooming: true,
                initialDistance: distance,
                initialX: center.x,
                initialY: center.y,
                initialTop: this.state.top,
                initialLeft: this.state.left,
                initialZoom: this.state.zoom,
                initialTopWithoutZoom: this.state.top - offsetByZoom.top,
                initialLeftWithoutZoom: this.state.left - offsetByZoom.left
            });
        } else {
            const touchZoom = distance / this.state.initialDistance;
            const zoom =
                touchZoom * this.state.initialZoom > this.state.minZoom
                    ? touchZoom * this.state.initialZoom
                    : this.state.minZoom;

            const offsetByZoom = calcOffsetByZoom(
                this.state.width,
                this.state.height,
                this.props.imageWidth,
                this.props.imageHeight,
                zoom
            );
            const left =
                this.state.initialLeftWithoutZoom * touchZoom + offsetByZoom.left;
            const top =
                this.state.initialTopWithoutZoom * touchZoom + offsetByZoom.top;

            this.setState({
                zoom,
                left:
                    left > 0
                        ? 0
                        : maxOffset(left, this.state.width, this.props.imageWidth * zoom),
                top:
                    top > 0
                        ? 0
                        : maxOffset(top, this.state.height, this.props.imageHeight * zoom)
            });
        }
    }

    processTouch(x, y) {
        if (!this.state.isMoving) {
            this.setState({
                isMoving: true,
                initialX: x,
                initialY: y,
                initialTop: this.state.top,
                initialLeft: this.state.left
            });
        } else {
            const left = this.state.initialLeft + x - this.state.initialX;
            const top = this.state.initialTop + y - this.state.initialY;

            this.setState({
                left:
                    left > 0
                        ? 0
                        : maxOffset(
                            left,
                            this.state.width,
                            this.props.imageWidth * this.state.zoom
                        ),
                top:
                    top > 0
                        ? 0
                        : maxOffset(
                            top,
                            this.state.height,
                            this.props.imageHeight * this.state.zoom
                        )
            });
        }
    }

    _onLayout(event) {
        const layout = event.nativeEvent.layout;

        if (
            layout.width === this.state.width &&
            layout.height === this.state.height
        ) {
            return;
        }

        const zoom = layout.width / this.props.imageWidth;

        const offsetTop =
            layout.height > this.props.imageHeight * zoom
                ? (layout.height - this.props.imageHeight * zoom) / 2
                : 0;

        this.setState({
            layoutKnown: true,
            width: layout.width,
            height: layout.height,
            zoom,
            offsetTop,
            minZoom: zoom
        });
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: () => { },
            onPanResponderMove: evt => {
                const touches = evt.nativeEvent.touches;
                if (touches.length === 2) {
                    this.processPinch(
                        touches[0].pageX,
                        touches[0].pageY,
                        touches[1].pageX,
                        touches[1].pageY
                    );
                } else if (touches.length === 1 && !this.state.isZooming) {
                    this.processTouch(touches[0].pageX, touches[0].pageY);
                }
            },

            onPanResponderTerminationRequest: () => true,
            onPanResponderRelease: () => {
                this.setState({
                    isZooming: false,
                    isMoving: false
                });
            },
            onPanResponderTerminate: () => { },
            onShouldBlockNativeResponder: () => true
        });
    }

    render() {
        return (
            <View
                style={this.props.style}
                {...this._panResponder.panHandlers}
                onLayout={this._onLayout}
            >
                <Image
                    style={{
                        position: "absolute",
                        top: this.state.offsetTop + this.state.top,
                        left: this.state.offsetLeft + this.state.left,
                        width: this.props.imageWidth * this.state.zoom,
                        height: this.props.imageHeight * this.state.zoom
                    }}
                    source={{ uri: this.props.source }}
                />
            </View>
        );
    }
}

class ZoomImgPanResponder extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, height: SizeRpScreen.device_height, width: SizeRpScreen.device_width , justifyContent: "center"}}>
                <ZoomImgPanResponderComponent imageWidth={SizeRpScreen.device_width} imageHeight={SizeRpScreen.device_height / 5} source={"https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}></ZoomImgPanResponderComponent>
            </View>
        )
    }
}

ZoomImgPanResponder.propTypes = {
    imageWidth: PropTypes.number.isRequired,
    imageHeight: PropTypes.number.isRequired,
    source: PropTypes.object.isRequired
};
export { ZoomImgPanResponder };

//https://stackoverflow.com/questions/36368919/scrollable-image-with-pinch-to-zoom-in-react-native