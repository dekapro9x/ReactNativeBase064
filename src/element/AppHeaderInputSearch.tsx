import { FontAppType } from '@const/TypeFontFamily';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppTextInput } from './AppTextInput';
import PropTypes from 'prop-types';

const AppHeaderInputSearch = (props) => {
    const {searchFile} = props;
    const [filePdfSearch, setStatefilePdfSearch] = useState("");

    const onChangeText = (keyState, value) => {
        switch (keyState) {
            case "filePdfSearch":
                setStatefilePdfSearch(value);
                break;
        }
    };

    const onEndEditing = () => {
        searchFile(filePdfSearch);
    }

    return (
        <View style={{ minHeight: 60, width: SizeRpScreen.device_width, backgroundColor: 'rgb(234,239,242)', paddingBottom: 5, alignItems: "center" }}>
            <AppTextInput
                value={filePdfSearch}
                useClean={true}
                keyState={"filePdfSearch"}
                titleTextInput={"Search Link PDF"}
                placeholder={"File PDF"}
                styleContainer={styles.textInput}
                styleTitle={styles.textTitleInput}
                onChangeText={onChangeText}
                onEndEditing={onEndEditing}
            />
        </View>
    );
}

AppHeaderInputSearch.propTypes = {
    searchFile: PropTypes.any
  };

const styles = StyleSheet.create({
    textInput: {
        width: SizeRpScreen.width(90),
        marginTop: 12,
        alignSelf: "center",
        marginHorizontal: 8
    },
    textTitleInput: {
        fontFamily: FontAppType.LetterMagic,
        fontSize: 12,
        color: "black"
    },
    btnSearch: {
        height: 45, width: 45, backgroundColor: "green"
    }
})

export default AppHeaderInputSearch;
