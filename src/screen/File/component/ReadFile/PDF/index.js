import AppHeaderInputSearch from '@element/AppHeaderInputSearch';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Alert } from 'react-native';
import Pdf from "react-native-pdf";
const ReadPDF = () => {
    const [sourcePDF, setStateSourcePDF] = useState({ uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true })

    const searchFilePDF = (linkFilePDF) => {
        if(linkFilePDF){
            if(linkFilePDF.includes(".pdf")){
                setStateSourcePDF({
                    uri: encodeURI(linkFilePDF),
                    cache: true
                })
            }else{
                Alert.alert("","Link PDF is not available or not invalid!")
            }
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <AppHeaderInputSearch searchFile={searchFilePDF} />
            <Pdf
                trustAllCerts={false}
                source={sourcePDF}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf} />
        </View>
    );
}

const styles = StyleSheet.create({
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})

export default ReadPDF;
