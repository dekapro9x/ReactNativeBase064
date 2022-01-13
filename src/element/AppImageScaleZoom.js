import { white } from '../const/Color';
import { AppLogo } from '../const/Setting';
import ImageViewer from "@libJS/image-zoom-viewer";
import React, { PureComponent } from 'react';
import { Animated, Image, Modal, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import { Loading } from './Loading';
import PropTypes from "prop-types";

export class AppImageScaleZoom extends PureComponent {

    static propTypes = {
        url: PropTypes.string.isRequired,
        resizeMode: PropTypes.string.isRequired,
        useZoom: PropTypes.any.isRequired,
        useAutoScale: PropTypes.any.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            loading: true,
            width: 0,
            height: new Animated.Value(0)
        };
        if (this.props.style && this.props.style.height) {
            this.state.height = new Animated.Value(this.props.style.height);
        }
    }

    componentDidMount() {
        if (this.props.useAutoScale) {
            const { url, onLoadEnd } = this.props;
            Image.getSize(url, (width, height) => {
                if (this.props.useAutoScale && this.props.style && this.props.style.width) {
                    const heightImage = (height / width) * this.props.style.width;
                    onLoadEnd && onLoadEnd();
                    Animated.timing(this.state.height, {
                        toValue: heightImage,
                        duration: 300,
                    }).start();
                }
            });
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    getResizeMode = (resizeMode) => {
        switch (resizeMode) {
            case 'cover':
                return FastImage.resizeMode.cover;
            default:
                return FastImage.resizeMode.contain;
        }
    }

    getUseImage = () => {
        const { resizeMode, style, url, onLoadEnd, useAutoScale = true } = this.props;
        if (useAutoScale) {
            return (
                <Animated.Image
                    useNativeDriver={true}
                    onLoadEnd={() => {
                        this.setState({ loading: false });
                    }}
                    style={[style, { height: this.state.height }]}
                    source={{ uri: url || AppLogo }}
                />
            );
        }
        return (
            <FastImage
                style={style}
                onLoadEnd={onLoadEnd}
                onLoadEnd={() => {
                    this.setState({ loading: false });
                }}
                source={{ uri: url || AppLogo }}
                resizeMode={this.getResizeMode(resizeMode)}
                {...this.props}
            />
        );
    }

    render() {
        const { style, url, useZoom = false, onPress, source } = this.props;
        const { modalVisible } = this.state;
        let sourceImage;
        if (source) {
            sourceImage = source;
        } else {
            sourceImage = { uri: url || AppLogo };
        }
        if (useZoom) {
            return (
                <View >
                    {this.state.loading && (!source) ?
                        <View style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center' }} >
                            <Loading />
                        </View> : null}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[style]}
                        onPress={() => {
                            onPress && onPress();
                            this.setModalVisible(!this.state.modalVisible);
                        }}
                    >
                        {this.getUseImage()}
                        {modalVisible && useZoom ?
                            <Modal
                                onRequestClose={() => {
                                    this.setModalVisible(false);
                                }}
                                transparent={false}
                                visible={this.state.modalVisible}
                            >
                                <ImageViewer
                                    disableNumber
                                    loadingRender={() => <Loading style={{ width: SizeRpScreen.width(100), height: SizeRpScreen.width(100) }} color={white} />}
                                    onClick={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}
                                    imageUrls={[{ url: url || AppLogo }]}
                                />
                            </Modal> : null}
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <View >
                {this.state.loading && (!source) ?
                    <View style={[this.props.style, { position: 'absolute', justifyContent: 'center', alignItems: 'center' }]} >
                        <Loading />
                    </View> : null}
                {this.getUseImage()}
            </View>


        );
    }
}
