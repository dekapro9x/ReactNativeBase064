import { FontAppType } from '@const/TypeFontFamily';
import { ImagesRenderSize } from '@element/AppImageRenderSize';
import React from 'react';
import { StyleSheet } from 'react-native';


const AppImagesRenderSizeElementReuse = () => {

    return (
        <ImagesRenderSize
            scaleConvert={0.8}
            uriImgRenderSize={"https://media.istockphoto.com/photos/quality-assurance-concept-picture-id466728721?k=20&m=466728721&s=170667a&w=0&h=laomwAzRlC7U7FtTSlptFsGUru7MLyF2Xssvxw2qKg4="}
        >

        </ImagesRenderSize>
    );
}

const styles = StyleSheet.create({
    appText: {
        fontSize: 35,
        fontFamily: FontAppType.Happy,
        textAlign: 'center'
    }
})

export { AppImagesRenderSizeElementReuse };

