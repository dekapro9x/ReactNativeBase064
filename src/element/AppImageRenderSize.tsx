
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useEffect, useState } from 'react';
import FastImage from "react-native-fast-image";
import ImageResizer from 'react-native-image-resizer';

interface Props {
    route: object;
    params: object;
    uriImgRenderSize: string;
    scaleConvert: number;
}

const ImagesRenderSize = (props: Props) => {
    const { uriImgRenderSize, scaleConvert } = props;
    const [uriImgRender, setStateUriImgRender] = useState(uriImgRenderSize);
    const scaleHandle = scaleConvert || 1;
    const [heightImgRenderSize, setStateHeightImgRenderSize] = useState(0);
    const [widthImgRenderSize, setStateWidthImgRenderSize] = useState(0);

    useEffect(() => {
        createResizedImage();
    }, []);

    const createResizedImage = () => {
        const maxWidth = SizeRpScreen.device_width;
        const maxHeight = SizeRpScreen.device_height;
        const compressFormat = "PNG";
        const quality = 1;
        ImageResizer.createResizedImage(uriImgRender, maxWidth, maxHeight, compressFormat, quality)
            .then(response => {
                // response.uri is the URI of the new image that can now be displayed, uploaded...
                // response.path is the path of the new image
                // response.name is the name of the new image with the extension
                // response.size is the size of the new image
                // setStateUriImgRender(response.uri);
                setStateHeightImgRenderSize(response.height * scaleHandle);
                setStateWidthImgRenderSize(response.width * scaleHandle);
            })
            .catch(err => {
                // Oops, something went wrong. Check that the filename is correct and
                // inspect err to get more details.
            });
    }

    return (
        <FastImage
            resizeMode={"contain"}
            style={{ height: heightImgRenderSize, width: widthImgRenderSize }}
            source={{ uri: uriImgRender }}>
        </FastImage>
    )
}

export { ImagesRenderSize };
